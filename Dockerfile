# Use ARG for dynamic base image selection
ARG NODE_VERSION=hydrogen
ARG NODE_TAG=alpine
ARG BUILD_VERSION="1.2.0-alpha"
ARG APP_NAME

###################################################################
# Stage 1: Install all dependencies                               #
###################################################################

FROM node:${NODE_VERSION}-${NODE_TAG} AS deps

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && pnpm add -g @nestjs/cli

# Disabling some well-known postinstall scripts
ENV HUSKY=0

WORKDIR /app

# Set APP_NAME as an environment variable to use in RUN commands
ARG APP_NAME
ENV APP_NAME=${APP_NAME}

# Copy only package manager files and application-specific files
COPY package.json pnpm-workspace.yaml ./
COPY apps/backend/${APP_NAME}/ ./apps/backend/${APP_NAME}/
COPY shared/ ./shared/
COPY plugins/ ./plugins/

# Install all dependencies (production and dev)
RUN pnpm install

###################################################################
# Stage 2: Build the application                                  #
###################################################################

FROM deps AS build
ARG BUILD_VERSION
ENV NODE_ENV=production

WORKDIR /app

# Set APP_NAME as an environment variable to use in RUN commands
ARG APP_NAME
ENV APP_NAME=${APP_NAME}

# ! Temp fix: Generate Prisma Client for the mailer service only
RUN if [ "$APP_NAME" = "mailer" ]; then pnpm --filter=@pnats/mailer db:generate; fi

# Build the project
RUN pnpm --recursive run build
RUN pnpm --filter=@pnats/${APP_NAME} deploy --prod /pruned

WORKDIR /pruned

RUN pnpm build
RUN pnpm pack

# Extract package.json and clean up
RUN tar -zxvf *.tgz package/package.json && \
    rm package.json && \
    mv package/package.json package.json && \
    rm *.tgz

###################################################################
# Stage 3: Final Image Creation                                   #
###################################################################

FROM node:${NODE_VERSION}-${NODE_TAG} AS final

# Copy environment variables from .env file


WORKDIR /app

# Install dumb-init, tar, and necessary tools using apk
RUN apk add --no-cache \
    dumb-init \
    curl \
    openssl \
    tar

# Conditionally install postgresql-client
ARG INSTALL_PSQL
RUN if [ "$INSTALL_PSQL" = "true" ] ; then \
    apk add --no-cache postgresql-client ; \
    fi

# Add a non-root user and set up permissions
RUN addgroup -S nodejs -g 1001 && \
    adduser -S nodejs -u 1001 -G nodejs && \
    mkdir .assets .temporary && \
    chown -R nodejs:nodejs /app

# Copy the application files from the previous stage
COPY --from=build --chown=nodejs:nodejs /pruned/dist ./dist
COPY --from=build --chown=nodejs:nodejs /pruned/node_modules ./node_modules
COPY --from=build --chown=nodejs:nodejs /pruned/package.json .

# Use non-root user
USER nodejs

EXPOSE ${PORT}

CMD ["dumb-init", "--", "node", "dist/src/main.js"]
