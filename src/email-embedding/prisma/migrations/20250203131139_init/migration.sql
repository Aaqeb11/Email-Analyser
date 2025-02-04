-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "embeddings";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "embeddings";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector" WITH SCHEMA "embeddings";

-- CreateEnum
CREATE TYPE "AuthStrategy" AS ENUM ('API_KEY', 'OAUTH2', 'EMAIL_PASSWORD', 'CERTIFICATE', 'CUSTOM_TOKEN', 'JWT', 'BASIC_AUTH');

-- CreateEnum
CREATE TYPE "IntegrationCategory" AS ENUM ('ANALYTICS', 'BILLING', 'COMMUNICATION', 'DATA_ENRICHMENT', 'AI_SERVICES', 'CUSTOM');

-- CreateEnum
CREATE TYPE "IntegrationName" AS ENUM ('LAGO', 'OPENMETER', 'FLUENTD', 'LOKI', 'STRIPE', 'APOLLO', 'OPENAI', 'ZOOMINFO', 'MAILCOW', 'MSGRAPH', 'SENDGRID', 'AIRTABLE', 'CUSTOM');

-- CreateEnum
CREATE TYPE "ConfigStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'PENDING');

-- CreateEnum
CREATE TYPE "MetricType" AS ENUM ('API_CALLS', 'DATA_TRANSFER', 'STORAGE', 'PROCESSING_TIME', 'CUSTOM');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('USAGE_THRESHOLD', 'RATE_LIMIT', 'ERROR', 'STATUS_CHANGE', 'CUSTOM');

-- CreateEnum
CREATE TYPE "FrontendFieldTypes" AS ENUM ('DATE', 'DATE_TIME', 'SHORT_TEXT', 'LONG_TEXT', 'URL', 'EMAIL', 'PHONE', 'USER', 'ATTACHMENT', 'CHECKBOX', 'MUTLI_SELECT', 'SINGLE_SELECT', 'NUMBER', 'PERCENT', 'CURRENCY', 'ONE_TO_MANY', 'ONE_TO_ONE', 'GEOLOCATION');

-- CreateEnum
CREATE TYPE "NotificationPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "DeliveryChannel" AS ENUM ('EMAIL', 'WEBHOOK', 'SYSTEM', 'CUSTOM');

-- CreateEnum
CREATE TYPE "ExtUsageTrackingInterval" AS ENUM ('MINUTE', 'HOUR', 'DAY', 'WEEK', 'MONTH', 'QUARTER', 'YEAR');

-- CreateEnum
CREATE TYPE "EmailServerType" AS ENUM ('SMTP', 'IMAP');

-- CreateEnum
CREATE TYPE "DomainStatus" AS ENUM ('PENDING', 'ACTIVE', 'VERIFIED', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "DNSRecordType" AS ENUM ('A', 'AAAA', 'CNAME', 'MX', 'TXT', 'SPF', 'DKIM', 'DMARC');

-- CreateEnum
CREATE TYPE "SPFAllDirective" AS ENUM ('PASS', 'NEUTRAL', 'SOFTFAIL', 'FAIL');

-- CreateEnum
CREATE TYPE "DMARCPolicy" AS ENUM ('NONE', 'QUARANTINE', 'REJECT');

-- CreateEnum
CREATE TYPE "SMTPStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'PENDING_VERIFICATION');

-- CreateEnum
CREATE TYPE "MailType" AS ENUM ('MAILCOW', 'SENDGRID', 'MICROSOFT_GRAPH_API');

-- CreateEnum
CREATE TYPE "MessageSource" AS ENUM ('MS_GRAPH', 'MAILCOW', 'SG');

-- CreateEnum
CREATE TYPE "PolicyStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "DocumentClassification" AS ENUM ('SERVICE_AGREEMENT', 'JOB_DESCRIPTION', 'RESUME', 'CONTRACT', 'QUOTATION', 'INVOICE', 'RECEIPT', 'TAX_FORMS', 'IDENTITY_DOCUMENTS', 'WORK_PERMIT', 'VISA_DOCUMENTS', 'OFFER_LETTER', 'EMPLOYMENT_CONTRACT', 'MARKETING', 'IT', 'OTHER');

-- CreateEnum
CREATE TYPE "FolderType" AS ENUM ('INCOMING_FOLDER', 'OUTGOING_FOLDER');

-- CreateEnum
CREATE TYPE "ConversationTopic" AS ENUM ('INITIAL_CONTACT', 'POSITION_DESCRIPTION', 'JOB_DESCRIPTION', 'CANDIDATE_SUBMISSION', 'CANDIDATE_REVIEW', 'INTERVIEW', 'CONTRACT', 'EMPLOYMENT');

-- CreateEnum
CREATE TYPE "RecipientType" AS ENUM ('CANDIDATE', 'INTERNAL_USER', 'CLIENT_CONTACT', 'EXTERNAL_USER');

-- CreateEnum
CREATE TYPE "EmailActionType" AS ENUM ('REPLY', 'REQUEST_JD', 'REQUEST_RESUME', 'REQUEST_REVIEW', 'REQUEST_RESUME_REVIEW', 'REQUEST_DETAILS', 'REQUEST_FOLLOWUP', 'REQUEST_BENEFITS_DETAILS', 'REQUEST_EXPERIENCE_CERTIFICATE', 'REREQUEST_NEW_POSITION', 'FOLLOWUP', 'FORWARD', 'CHANGE_POC', 'SEND_CONTRACT', 'SCHEDULE_INTERVIEW', 'SEND_RESUME', 'SEND_OFFER_LETTER', 'SEND_JD', 'SALARY_NEGOTIATIONS', 'CONTRACT_NEGOTIATIONS', 'SUBMIT_CONTRACT_REVIEW', 'SUBMIT_RESUME_REVIEW');

-- CreateEnum
CREATE TYPE "EmailTypes" AS ENUM ('MARKETING', 'TRANSACTIONAL', 'PROMOTIONAL', 'COLD_EMAIL_CAMPAIGN', 'FOLLOW_UP', 'AUTOMATED', 'NOTIFICATION');

-- CreateEnum
CREATE TYPE "EmailStatus" AS ENUM ('DRAFT', 'QUEUED', 'SENT', 'FAILED', 'READ', 'UNREAD');

-- CreateEnum
CREATE TYPE "CreditTypeEnum" AS ENUM ('API', 'EMAIL');

-- CreateEnum
CREATE TYPE "BooleanStringEntityType" AS ENUM ('JobRole', 'Position');

-- CreateEnum
CREATE TYPE "TermCategory" AS ENUM ('INDUSTRY', 'TECHNICAL_SKILL', 'SOFT_SKILL', 'ROLE_TITLE', 'RESPONSIBILITY', 'TOOL', 'CERTIFICATION', 'DOMAIN');

-- CreateEnum
CREATE TYPE "TermType" AS ENUM ('NOUN', 'VERB', 'ADJECTIVE', 'COMPOUND');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "tenant_configurations" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "policy_id" UUID,
    "config" JSONB NOT NULL,
    "status" "ConfigStatus" NOT NULL DEFAULT 'ACTIVE',
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tenant_configurations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "external_integrations" (
    "id" UUID NOT NULL,
    "name" "IntegrationName" NOT NULL,
    "category" "IntegrationCategory" NOT NULL,
    "auth_strategy" "AuthStrategy" NOT NULL,
    "config" JSONB NOT NULL,
    "credentials" JSONB NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "tenant_id" UUID NOT NULL,
    "tenant_config_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "external_integrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integration_usage_metrics" (
    "id" UUID NOT NULL,
    "integration_id" UUID NOT NULL,
    "metric_type" "MetricType" NOT NULL,
    "interval" "ExtUsageTrackingInterval" NOT NULL,
    "request_count" INTEGER NOT NULL DEFAULT 0,
    "error_count" INTEGER NOT NULL DEFAULT 0,
    "latency_ms" INTEGER,
    "limit_remaining" INTEGER,
    "limit_reset_at" TIMESTAMP(3),
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "integration_usage_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "custom_metric_values" (
    "id" UUID NOT NULL,
    "usage_metric_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "unit" TEXT,

    CONSTRAINT "custom_metric_values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integration_credit_usage" (
    "id" UUID NOT NULL,
    "integration_id" UUID NOT NULL,
    "credit_amount" INTEGER NOT NULL,
    "credit_type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "operation_id" TEXT,
    "operation_type" TEXT,

    CONSTRAINT "integration_credit_usage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_preference" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "msg" BOOLEAN NOT NULL,
    "sdg" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3),

    CONSTRAINT "email_preference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_views" (
    "id" UUID NOT NULL,
    "table_id" UUID NOT NULL,
    "table_display_name" TEXT NOT NULL,
    "view_config" JSONB NOT NULL,

    CONSTRAINT "table_views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integration_notifications" (
    "id" UUID NOT NULL,
    "integration_id" UUID NOT NULL,
    "type" "NotificationType" NOT NULL,
    "priority" "NotificationPriority" NOT NULL DEFAULT 'LOW',
    "channel" "DeliveryChannel" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "trigger_value" DOUBLE PRECISION,
    "threshold" DOUBLE PRECISION,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivered_at" TIMESTAMP(3),
    "error" TEXT,

    CONSTRAINT "integration_notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "domains" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "DomainStatus" NOT NULL DEFAULT 'PENDING',
    "tenant_id" UUID,
    "tenant_config_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "domains_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dns_records" (
    "id" UUID NOT NULL,
    "domain_id" UUID NOT NULL,
    "type" "DNSRecordType" NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "ttl" INTEGER NOT NULL DEFAULT 3600,
    "priority" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "dns_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spf_records" (
    "id" UUID NOT NULL,
    "domain_id" UUID NOT NULL,
    "dns_record_id" UUID NOT NULL,
    "mechanisms" TEXT[],
    "all" "SPFAllDirective" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "spf_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dkim_records" (
    "id" UUID NOT NULL,
    "domain_id" UUID NOT NULL,
    "dns_record_id" UUID NOT NULL,
    "selector" TEXT NOT NULL,
    "public_key" TEXT NOT NULL,
    "key_type" TEXT NOT NULL DEFAULT 'rsa',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "dkim_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dmarc_records" (
    "id" UUID NOT NULL,
    "domain_id" UUID NOT NULL,
    "dns_record_id" UUID NOT NULL,
    "policy" "DMARCPolicy" NOT NULL,
    "subdomain_policy" "DMARCPolicy",
    "percentage" INTEGER NOT NULL DEFAULT 100,
    "report_format" TEXT[],
    "report_interval" INTEGER NOT NULL DEFAULT 86400,
    "report_uris" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "dmarc_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_servers" (
    "id" UUID NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_secure" BOOLEAN NOT NULL DEFAULT true,
    "is_system_managed" BOOLEAN NOT NULL DEFAULT false,
    "server_type" "EmailServerType" NOT NULL,
    "smtp_status" "SMTPStatus",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "tenant_id" UUID NOT NULL,
    "tenant_config_id" UUID NOT NULL,

    CONSTRAINT "email_servers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "api_keys" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "scope" TEXT[],
    "expires_at" TIMESTAMP(3),
    "last_used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "tenant_id" UUID,
    "tenant_config_id" UUID,

    CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bio" TEXT,
    "phone" TEXT,
    "job_title" TEXT,
    "email_verified" BOOLEAN DEFAULT true,
    "last_login" TIMESTAMP(3),
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,
    "tenant_id" UUID NOT NULL,
    "interview_attendies_id" UUID,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_addresses" (
    "id" UUID NOT NULL,
    "country" TEXT NOT NULL,
    "short_code" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'system',
    "last_updated_by" TEXT NOT NULL DEFAULT 'system',
    "deleted_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "user_id" UUID NOT NULL,

    CONSTRAINT "user_addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_devices" (
    "id" UUID NOT NULL,
    "unique_device_signature" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "last_accessed_at" TIMESTAMP(3) NOT NULL,
    "last_accessed_from_location_id" UUID NOT NULL,
    "device_metadata" JSONB[],

    CONSTRAINT "user_devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_device_locations" (
    "id" UUID NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,
    "user_id" UUID NOT NULL,
    "device_id" UUID NOT NULL,

    CONSTRAINT "user_device_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" UUID NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "resource_id" TEXT,
    "user_id" TEXT,
    "action" TEXT NOT NULL,
    "details" JSONB NOT NULL,
    "metadata" JSONB,
    "timestamp" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "policies" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "template_id" TEXT NOT NULL,
    "parent_id" UUID,
    "rules" JSONB NOT NULL,
    "priority" INTEGER NOT NULL,
    "tenant_id" TEXT,
    "status" "PolicyStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_templates" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "attributes" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "group_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "template_id" UUID NOT NULL,
    "parent_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_groups" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "group_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_group_members" (
    "id" UUID NOT NULL,
    "user_group_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_group_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_policies" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "configuration" JSONB NOT NULL,
    "priority" INTEGER NOT NULL,
    "group_id" UUID,
    "user_group_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "group_policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenant_usage_metrics" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "resource_code" TEXT NOT NULL,
    "module_code" TEXT,
    "feature_code" TEXT,
    "value" DOUBLE PRECISION NOT NULL,
    "context" JSONB,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tenant_usage_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageType" (
    "id" UUID NOT NULL,
    "name" "MessageSource" NOT NULL,

    CONSTRAINT "MessageType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sources" (
    "id" UUID NOT NULL,
    "type_id" UUID NOT NULL,

    CONSTRAINT "sources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" UUID NOT NULL,
    "ms_message_id" UUID NOT NULL,
    "subject" TEXT,
    "sender_name" TEXT,
    "sender_email" TEXT NOT NULL,
    "received_date_time" TIMESTAMP(3),
    "sent_date_time" TIMESTAMP(3),
    "body" TEXT NOT NULL,
    "body_preview" TEXT,
    "recipients" JSONB,
    "cc_recipients" JSONB,
    "bcc_recipients" JSONB,
    "reply_to" JSONB,
    "has_attachments" BOOLEAN NOT NULL DEFAULT false,
    "summary" JSONB,
    "meta_data" JSONB NOT NULL,
    "source_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "folder_key" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "subject_embedding" vector(1024),
    "body_embedding" vector(1024),
    "sender_embedding" vector(1024),
    "receiver_embedding" vector(1024),

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attachments" (
    "id" UUID NOT NULL,
    "receiver_emails" TEXT[],
    "sender_emails" TEXT[],
    "ms_message_id" TEXT[],
    "content" BYTEA NOT NULL,
    "document_url" TEXT NOT NULL,
    "content_hash" TEXT NOT NULL,
    "normalized_content" TEXT NOT NULL,
    "content_full" TEXT NOT NULL,
    "document_id" UUID NOT NULL,

    CONSTRAINT "attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "is_attachment" BOOLEAN NOT NULL DEFAULT false,
    "filename" TEXT NOT NULL,
    "file_extension" TEXT NOT NULL,
    "mime_type" TEXT NOT NULL,
    "charset" TEXT,
    "size" BIGINT NOT NULL,
    "url" TEXT NOT NULL,
    "content" BYTEA NOT NULL,
    "content_full" TEXT NOT NULL,
    "summary" TEXT,
    "keywords" TEXT[],
    "normalized_content" TEXT NOT NULL,
    "content_hash" CHAR(64) NOT NULL,
    "thumbnail" BYTEA,
    "thumbnail_type" TEXT,
    "preview_text" TEXT,
    "page_count" INTEGER,
    "is_confidential" BOOLEAN DEFAULT false,
    "classification" "DocumentClassification",
    "uploaded_by_id" UUID NOT NULL,
    "uploaded_by_email" TEXT NOT NULL,
    "uploaded_by_first_name" TEXT NOT NULL,
    "uploaded_by_last_name" TEXT NOT NULL,
    "uploaded_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "view_count" INTEGER NOT NULL DEFAULT 0,
    "download_count" INTEGER NOT NULL DEFAULT 0,
    "last_viewed" TIMESTAMP(3),
    "last_edited" TIMESTAMP(3),

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "folders" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "color" VARCHAR(32),
    "color_hex" CHAR(6) NOT NULL,
    "icon" TEXT,
    "key" TEXT NOT NULL,
    "meta_data" JSONB,
    "default" BOOLEAN NOT NULL DEFAULT false,
    "type" "FolderType" NOT NULL DEFAULT 'INCOMING_FOLDER',
    "user_id" UUID NOT NULL,

    CONSTRAINT "folders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "folder_messages" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "folder_key" TEXT NOT NULL,

    CONSTRAINT "folder_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Thread" (
    "id" UUID NOT NULL,
    "thread_context_id" UUID NOT NULL,
    "context_hash" CHAR(64) NOT NULL,
    "thread_summary_id" UUID NOT NULL,
    "conversation_id" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "message_db_ids" TEXT[],
    "ms_message_id" TEXT[],
    "summary" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Thread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thread_messages" (
    "id" UUID NOT NULL,
    "conversation_id" UUID,
    "ms_conversation_id" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "message_db_id" UUID NOT NULL,
    "ms_message_id" TEXT NOT NULL,
    "parent_db_id" UUID,
    "parent_id" TEXT,
    "child_db_id" UUID,
    "child_id" TEXT,
    "is_root" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "thread_id" UUID NOT NULL,

    CONSTRAINT "thread_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thread_summary" (
    "id" UUID NOT NULL,
    "conversation_id" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "message_db_ids" TEXT[],
    "ms_message_id" TEXT[],
    "summary" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "thread_summary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thread_participants" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "is_internal_user" BOOLEAN DEFAULT false,

    CONSTRAINT "thread_participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thread_context" (
    "id" UUID NOT NULL,
    "context_hash" CHAR(64) NOT NULL,
    "context" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "thread_context_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thread_context_history" (
    "id" UUID NOT NULL,
    "context" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "thread_context_id" UUID NOT NULL,

    CONSTRAINT "thread_context_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thread_context_items" (
    "id" UUID NOT NULL,
    "context" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "submission" TEXT NOT NULL,
    "thread_context_history_id" UUID,

    CONSTRAINT "thread_context_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversations" (
    "id" UUID NOT NULL,
    "domain" TEXT NOT NULL,
    "threads" JSONB[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "conversation_topic" "ConversationTopic" NOT NULL,

    CONSTRAINT "conversations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_action_history" (
    "id" UUID NOT NULL,
    "action_taken_by" UUID NOT NULL,
    "action" TEXT NOT NULL,
    "action_description" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME NOT NULL,
    "requires_follow_up" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "next_action_id" UUID,
    "thread_id" UUID,
    "message_id" UUID,

    CONSTRAINT "email_action_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leads_status_single_select" (
    "id" UUID NOT NULL,
    "field_type" "FrontendFieldTypes" NOT NULL DEFAULT 'SINGLE_SELECT',
    "field_display_name" TEXT NOT NULL DEFAULT 'leads_status',
    "color" VARCHAR(32),
    "color_hex" CHAR(6) NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'system',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leads_status_single_select_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leads" (
    "id" UUID NOT NULL,
    "company_id" UUID,
    "company_name" TEXT,
    "company_website" TEXT,
    "version" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "person_name" TEXT,
    "linkedin" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "status" TEXT NOT NULL,
    "job_title" TEXT,
    "company_size" TEXT,
    "revenue" TEXT,
    "industry" TEXT,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,
    "email_sent" BOOLEAN NOT NULL DEFAULT false,
    "email_opened" BOOLEAN NOT NULL DEFAULT false,
    "is_pending" BOOLEAN NOT NULL DEFAULT false,
    "is_processed" BOOLEAN NOT NULL DEFAULT false,
    "has_organization" BOOLEAN NOT NULL DEFAULT false,
    "has_positions" BOOLEAN NOT NULL DEFAULT false,
    "retry_count" INTEGER NOT NULL DEFAULT 0,
    "is_stuck" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oppurtunities" (
    "id" UUID NOT NULL,

    CONSTRAINT "oppurtunities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deals" (
    "id" UUID NOT NULL,

    CONSTRAINT "deals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agreements" (
    "id" UUID NOT NULL,

    CONSTRAINT "agreements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "size" TEXT,
    "revenue" TEXT,
    "industry" TEXT,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,
    "organization_id" TEXT,
    "careers_page" TEXT,
    "linkedin_url" TEXT,
    "raw_body" JSONB,
    "research_analyst" UUID,
    "recruiter_assignee_id" UUID,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_status_single_select" (
    "id" UUID NOT NULL,
    "field_type" "FrontendFieldTypes" NOT NULL DEFAULT 'SINGLE_SELECT',
    "field_display_name" TEXT NOT NULL DEFAULT 'company_status',
    "color" VARCHAR(32),
    "color_hex" CHAR(6) NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'system',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "company_status_single_select_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "job_title" TEXT NOT NULL,
    "linkedin" TEXT,
    "company_id" UUID NOT NULL,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,
    "apollo_id" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "full_name" TEXT,
    "linkedin_url" TEXT,
    "title" TEXT,
    "email_status" TEXT,
    "photo_url" TEXT,
    "organization_id" UUID,
    "location_id" UUID,
    "departments" TEXT[],
    "subdepartments" TEXT[],
    "seniority" TEXT,
    "functions" TEXT[],
    "raw_body" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_status_single_select" (
    "id" UUID NOT NULL,
    "field_display_name" TEXT NOT NULL DEFAULT 'email_status',
    "color" VARCHAR(32),
    "color_hex" CHAR(6) NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'system',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "email_status_single_select_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pocs" (
    "id" UUID NOT NULL,
    "position_id" UUID NOT NULL,
    "contact_id" UUID NOT NULL,
    "contact_role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pocs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "positions" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "company_id" UUID NOT NULL,
    "company_name" TEXT NOT NULL,
    "is_company_deleted" BOOLEAN NOT NULL,
    "company_status" TEXT NOT NULL,
    "location_city" TEXT NOT NULL,
    "location_state" TEXT NOT NULL,
    "location_country" TEXT NOT NULL,
    "location_zip" TEXT NOT NULL,
    "jd_attachment_id" UUID NOT NULL,
    "jd_filename" TEXT NOT NULL,
    "jd_file_type" TEXT NOT NULL,
    "jd_thumbnail" BYTEA NOT NULL,
    "jd_classification" "DocumentClassification" NOT NULL,
    "jd_description" TEXT NOT NULL,
    "jd_link" VARCHAR(255) NOT NULL,
    "job_role_id" UUID NOT NULL,
    "recruiter_bdm_id" TEXT,
    "recruiter_assignee_id" TEXT,
    "apollo_id" TEXT,
    "salary_range" TEXT,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interview_attendees" (
    "id" UUID NOT NULL,
    "other_external_attendees" TEXT[],

    CONSTRAINT "interview_attendees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interviews" (
    "id" UUID NOT NULL,
    "host_user_id" UUID NOT NULL,
    "host_user_email" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "attendees_id" UUID NOT NULL,
    "outlook_calendar_event" JSONB NOT NULL,
    "interview_subject" TEXT NOT NULL,
    "feedback" TEXT,
    "candidate_id" UUID NOT NULL,
    "submission_id" UUID NOT NULL,
    "position_id" UUID NOT NULL,
    "timezone_key" TEXT NOT NULL,
    "interview_mode" TEXT NOT NULL,
    "created_by" TEXT DEFAULT 'system',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "interviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timezones" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "field_type" "FrontendFieldTypes" NOT NULL DEFAULT 'SINGLE_SELECT',
    "field_display_name" TEXT NOT NULL DEFAULT 'timezone',
    "icon" TEXT,
    "color" VARCHAR(32),
    "color_hex" CHAR(6),
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'system',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "timezones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interview_feedbacks" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type" "FrontendFieldTypes" NOT NULL DEFAULT 'SINGLE_SELECT',
    "field_display_name" TEXT NOT NULL DEFAULT 'interview_feedback',
    "icon" TEXT,
    "color" VARCHAR(32),
    "color_hex" CHAR(6),
    "value" TEXT NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'system',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interview_feedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interview_modes" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "field_type" "FrontendFieldTypes" NOT NULL DEFAULT 'SINGLE_SELECT',
    "field_display_name" TEXT NOT NULL DEFAULT 'interview_mode',
    "icon" TEXT,
    "color" VARCHAR(32),
    "color_hex" CHAR(6),
    "value" TEXT NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'system',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interview_modes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attributes" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "tenant_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "version" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_attributes" (
    "id" UUID NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "attribute_id" UUID NOT NULL,
    "version" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "value" TEXT,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "user_attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" TEXT NOT NULL,
    "table_id" TEXT NOT NULL,
    "field_id" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "is_private" BOOLEAN NOT NULL DEFAULT false,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3),

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidate_submissions" (
    "id" UUID NOT NULL,
    "status" TEXT NOT NULL,
    "submitted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submitted_by" UUID NOT NULL,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,
    "candidate_full_name" TEXT NOT NULL,
    "candidate_id" UUID NOT NULL,
    "company_id" UUID NOT NULL,
    "position_id" UUID NOT NULL,
    "is_position_deleted" BOOLEAN NOT NULL,
    "is_company_deleted" BOOLEAN NOT NULL,
    "company_name" TEXT NOT NULL,

    CONSTRAINT "candidate_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidate_submission_status" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "field_type" "FrontendFieldTypes" NOT NULL DEFAULT 'SINGLE_SELECT',
    "field_display_name" TEXT NOT NULL DEFAULT 'company_status',
    "color" VARCHAR(32),
    "color_hex" CHAR(6) NOT NULL,
    "value" TEXT NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'system',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "candidate_submission_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boolean_strings" (
    "id" UUID NOT NULL,
    "string" TEXT NOT NULL,
    "jd" TEXT NOT NULL,
    "upvote" INTEGER NOT NULL DEFAULT 0,
    "downvote" INTEGER NOT NULL DEFAULT 0,
    "entity_id" UUID NOT NULL,
    "entity_type" "BooleanStringEntityType" NOT NULL,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "boolean_strings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" UUID NOT NULL,
    "country" TEXT NOT NULL,
    "short_code" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "user_id" TEXT,
    "version" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal_information" (
    "id" UUID NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "linkedin" TEXT,
    "github" TEXT,
    "user_id" TEXT,
    "phone" TEXT NOT NULL,
    "address_string" TEXT NOT NULL,
    "country_of_residence" TEXT NOT NULL,
    "city_of_residence" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "state_of_residence" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "is_us_citizen" BOOLEAN NOT NULL,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "personal_information_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidates" (
    "id" UUID NOT NULL,
    "is_remote" BOOLEAN,
    "total_work_experience" TEXT NOT NULL,
    "search_location" TEXT NOT NULL,
    "resume_text" TEXT NOT NULL,
    "url" TEXT,
    "status" TEXT NOT NULL,
    "personal_information_id" UUID NOT NULL,
    "sourced_from" TEXT NOT NULL,
    "location_id" UUID NOT NULL,
    "candidate_full_name" TEXT NOT NULL,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,
    "bdm_id" TEXT,
    "assignee_id" TEXT,

    CONSTRAINT "candidates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidate_status_single_select" (
    "id" UUID NOT NULL,
    "field_type" "FrontendFieldTypes" NOT NULL DEFAULT 'SINGLE_SELECT',
    "field_display_name" TEXT NOT NULL DEFAULT 'candidate_status',
    "color" VARCHAR(32),
    "color_hex" CHAR(6) NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'system',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "candidate_status_single_select_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidate_source_options" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "field_display_name" TEXT NOT NULL DEFAULT 'candidate_source',
    "color" VARCHAR(32),
    "color_hex" CHAR(6) NOT NULL,
    "value" TEXT NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'system',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "candidate_source_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education" (
    "id" UUID NOT NULL,
    "primary" TEXT,
    "secondary" TEXT,
    "graduation" TEXT,
    "post_graduation" TEXT,
    "phd" TEXT,
    "candidate_id" UUID NOT NULL,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certifications" (
    "id" UUID NOT NULL,
    "name_of_certification" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "candidate_id" UUID NOT NULL,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "certifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_roles" (
    "id" UUID NOT NULL,
    "title_hash" BYTEA NOT NULL,
    "title_display" VARCHAR(120) NOT NULL,
    "title_normalized" TEXT NOT NULL,
    "role_description" VARCHAR(500) NOT NULL,
    "job_role_description_detailed" TEXT NOT NULL,

    CONSTRAINT "job_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_experiences" (
    "id" UUID NOT NULL,
    "title" VARCHAR(120) NOT NULL,
    "organization_name" TEXT NOT NULL,
    "is_present" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "start_month_year" TEXT NOT NULL,
    "end_month_year" TEXT,
    "candidate_id" UUID NOT NULL,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,
    "job_role_id" UUID,

    CONSTRAINT "work_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "licenses" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "candidate_id" UUID NOT NULL,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "licenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keywords" (
    "id" BYTEA NOT NULL,
    "term" VARCHAR(64) NOT NULL,
    "term_hash" BYTEA NOT NULL,
    "normalized_term" TEXT NOT NULL,
    "category" "TermCategory" NOT NULL,
    "term_type" "TermType" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "updated_by" TEXT,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "keywords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "possible_job_roles" (
    "id" UUID NOT NULL,
    "job_role" TEXT NOT NULL,
    "user_id" TEXT,
    "candidate_id" UUID NOT NULL,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "possible_job_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" UUID NOT NULL,
    "text" TEXT NOT NULL,
    "table_name" TEXT NOT NULL,
    "parent_id" UUID,
    "record_id" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_by" TEXT,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment_mentions" (
    "id" UUID NOT NULL,
    "comment_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comment_mentions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "status" "TaskStatus" NOT NULL DEFAULT 'PENDING',
    "priority" "Priority" NOT NULL DEFAULT 'MEDIUM',
    "due_date" TIMESTAMP(3),
    "completed_at" TIMESTAMP(3),
    "parent_id" UUID,
    "assignee" UUID NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,
    "last_updated_by" TEXT NOT NULL,
    "is_deleted" BOOLEAN DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reminders" (
    "id" UUID NOT NULL,
    "task_id" UUID NOT NULL,
    "remind_at" TIMESTAMP(3) NOT NULL,
    "message" TEXT,
    "is_sent" BOOLEAN NOT NULL DEFAULT false,
    "sent_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reminders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DocumentSharedWithUsers" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_DocumentSharedWithUsers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ThreadToThreadParticipants" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_ThreadToThreadParticipants_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_candidate_to_keywords" (
    "A" UUID NOT NULL,
    "B" BYTEA NOT NULL,

    CONSTRAINT "_candidate_to_keywords_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_certification_to_keywords" (
    "A" UUID NOT NULL,
    "B" BYTEA NOT NULL,

    CONSTRAINT "_certification_to_keywords_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_job_role_to_keywords" (
    "A" UUID NOT NULL,
    "B" BYTEA NOT NULL,

    CONSTRAINT "_job_role_to_keywords_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_position_to_keywords" (
    "A" BYTEA NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_position_to_keywords_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_license_to_keywords" (
    "A" BYTEA NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_license_to_keywords_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "tenant_configurations_tenant_id_key" ON "tenant_configurations"("tenant_id");

-- CreateIndex
CREATE INDEX "tenant_configurations_tenant_id_idx" ON "tenant_configurations"("tenant_id");

-- CreateIndex
CREATE INDEX "tenant_configurations_tenant_id_status_idx" ON "tenant_configurations"("tenant_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_configurations_id_tenant_id_key" ON "tenant_configurations"("id", "tenant_id");

-- CreateIndex
CREATE INDEX "external_integrations_tenant_id_name_category_idx" ON "external_integrations"("tenant_id", "name", "category");

-- CreateIndex
CREATE INDEX "external_integrations_tenant_id_enabled_idx" ON "external_integrations"("tenant_id", "enabled");

-- CreateIndex
CREATE INDEX "external_integrations_name_auth_strategy_idx" ON "external_integrations"("name", "auth_strategy");

-- CreateIndex
CREATE UNIQUE INDEX "external_integrations_id_tenant_id_key" ON "external_integrations"("id", "tenant_id");

-- CreateIndex
CREATE INDEX "integration_usage_metrics_integration_id_timestamp_idx" ON "integration_usage_metrics"("integration_id", "timestamp");

-- CreateIndex
CREATE INDEX "integration_usage_metrics_metric_type_timestamp_idx" ON "integration_usage_metrics"("metric_type", "timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "custom_metric_values_usage_metric_id_name_key" ON "custom_metric_values"("usage_metric_id", "name");

-- CreateIndex
CREATE INDEX "integration_credit_usage_integration_id_timestamp_idx" ON "integration_credit_usage"("integration_id", "timestamp");

-- CreateIndex
CREATE INDEX "integration_credit_usage_credit_type_timestamp_idx" ON "integration_credit_usage"("credit_type", "timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "email_preference_tenant_id_key" ON "email_preference"("tenant_id");

-- CreateIndex
CREATE INDEX "email_preference_tenant_id_msg_idx" ON "email_preference"("tenant_id", "msg");

-- CreateIndex
CREATE INDEX "email_preference_tenant_id_sdg_idx" ON "email_preference"("tenant_id", "sdg");

-- CreateIndex
CREATE UNIQUE INDEX "table_views_table_display_name_key" ON "table_views"("table_display_name");

-- CreateIndex
CREATE INDEX "integration_notifications_integration_id_type_idx" ON "integration_notifications"("integration_id", "type");

-- CreateIndex
CREATE INDEX "integration_notifications_sent_at_idx" ON "integration_notifications"("sent_at");

-- CreateIndex
CREATE INDEX "integration_notifications_priority_sent_at_idx" ON "integration_notifications"("priority", "sent_at");

-- CreateIndex
CREATE UNIQUE INDEX "domains_name_key" ON "domains"("name");

-- CreateIndex
CREATE INDEX "domains_tenant_id_idx" ON "domains"("tenant_id");

-- CreateIndex
CREATE INDEX "domains_deleted_at_idx" ON "domains"("deleted_at");

-- CreateIndex
CREATE INDEX "domains_status_idx" ON "domains"("status");

-- CreateIndex
CREATE INDEX "domains_tenant_id_status_idx" ON "domains"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "dns_records_domain_id_idx" ON "dns_records"("domain_id");

-- CreateIndex
CREATE INDEX "dns_records_type_idx" ON "dns_records"("type");

-- CreateIndex
CREATE UNIQUE INDEX "dns_records_domain_id_type_name_key" ON "dns_records"("domain_id", "type", "name");

-- CreateIndex
CREATE UNIQUE INDEX "dns_records_id_domain_id_key" ON "dns_records"("id", "domain_id");

-- CreateIndex
CREATE UNIQUE INDEX "spf_records_domain_id_key" ON "spf_records"("domain_id");

-- CreateIndex
CREATE UNIQUE INDEX "spf_records_dns_record_id_key" ON "spf_records"("dns_record_id");

-- CreateIndex
CREATE INDEX "spf_records_dns_record_id_idx" ON "spf_records"("dns_record_id");

-- CreateIndex
CREATE UNIQUE INDEX "spf_records_dns_record_id_domain_id_key" ON "spf_records"("dns_record_id", "domain_id");

-- CreateIndex
CREATE UNIQUE INDEX "dkim_records_domain_id_key" ON "dkim_records"("domain_id");

-- CreateIndex
CREATE UNIQUE INDEX "dkim_records_dns_record_id_key" ON "dkim_records"("dns_record_id");

-- CreateIndex
CREATE INDEX "dkim_records_dns_record_id_idx" ON "dkim_records"("dns_record_id");

-- CreateIndex
CREATE UNIQUE INDEX "dkim_records_dns_record_id_domain_id_key" ON "dkim_records"("dns_record_id", "domain_id");

-- CreateIndex
CREATE UNIQUE INDEX "dmarc_records_domain_id_key" ON "dmarc_records"("domain_id");

-- CreateIndex
CREATE UNIQUE INDEX "dmarc_records_dns_record_id_key" ON "dmarc_records"("dns_record_id");

-- CreateIndex
CREATE INDEX "dmarc_records_dns_record_id_idx" ON "dmarc_records"("dns_record_id");

-- CreateIndex
CREATE UNIQUE INDEX "dmarc_records_dns_record_id_domain_id_key" ON "dmarc_records"("dns_record_id", "domain_id");

-- CreateIndex
CREATE INDEX "email_servers_server_type_idx" ON "email_servers"("server_type");

-- CreateIndex
CREATE INDEX "email_servers_tenant_id_server_type_idx" ON "email_servers"("tenant_id", "server_type");

-- CreateIndex
CREATE INDEX "email_servers_tenant_id_username_idx" ON "email_servers"("tenant_id", "username");

-- CreateIndex
CREATE INDEX "email_servers_tenant_id_server_type_username_idx" ON "email_servers"("tenant_id", "server_type", "username");

-- CreateIndex
CREATE INDEX "email_servers_tenant_config_id_idx" ON "email_servers"("tenant_config_id");

-- CreateIndex
CREATE UNIQUE INDEX "email_servers_server_type_host_username_key" ON "email_servers"("server_type", "host", "username");

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_key_key" ON "api_keys"("key");

-- CreateIndex
CREATE INDEX "api_keys_tenant_id_idx" ON "api_keys"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_username_idx" ON "users"("username");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_deleted_at_idx" ON "users"("deleted_at");

-- CreateIndex
CREATE INDEX "users_created_at_idx" ON "users"("created_at");

-- CreateIndex
CREATE INDEX "users_last_updated_at_idx" ON "users"("last_updated_at");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_first_name_last_name_username_email_key" ON "users"("id", "first_name", "last_name", "username", "email");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_email_first_name_last_name_key" ON "users"("id", "email", "first_name", "last_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_first_name_last_name_key" ON "users"("id", "first_name", "last_name");

-- CreateIndex
CREATE UNIQUE INDEX "user_addresses_user_id_key" ON "user_addresses"("user_id");

-- CreateIndex
CREATE INDEX "user_addresses_zip_idx" ON "user_addresses"("zip");

-- CreateIndex
CREATE INDEX "user_addresses_country_idx" ON "user_addresses"("country");

-- CreateIndex
CREATE INDEX "user_addresses_last_updated_at_idx" ON "user_addresses"("last_updated_at");

-- CreateIndex
CREATE INDEX "user_addresses_deleted_at_idx" ON "user_addresses"("deleted_at");

-- CreateIndex
CREATE INDEX "user_addresses_zip_user_id_idx" ON "user_addresses"("zip", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_addresses_country_short_code_state_city_zip_user_id_key" ON "user_addresses"("country", "short_code", "state", "city", "zip", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_devices_unique_device_signature_key" ON "user_devices"("unique_device_signature");

-- CreateIndex
CREATE UNIQUE INDEX "user_devices_user_id_key" ON "user_devices"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_devices_last_accessed_from_location_id_key" ON "user_devices"("last_accessed_from_location_id");

-- CreateIndex
CREATE INDEX "user_devices_unique_device_signature_idx" ON "user_devices"("unique_device_signature");

-- CreateIndex
CREATE INDEX "user_devices_user_id_idx" ON "user_devices"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_devices_id_unique_device_signature_user_id_key" ON "user_devices"("id", "unique_device_signature", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_devices_id_user_id_key" ON "user_devices"("id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_device_locations_user_id_key" ON "user_device_locations"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_device_locations_device_id_key" ON "user_device_locations"("device_id");

-- CreateIndex
CREATE INDEX "user_device_locations_id_device_id_idx" ON "user_device_locations"("id", "device_id");

-- CreateIndex
CREATE INDEX "audit_logs_tenant_id_idx" ON "audit_logs"("tenant_id");

-- CreateIndex
CREATE INDEX "audit_logs_resource_id_tenant_id_idx" ON "audit_logs"("resource_id", "tenant_id");

-- CreateIndex
CREATE INDEX "policies_tenant_id_status_idx" ON "policies"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "policies_template_id_idx" ON "policies"("template_id");

-- CreateIndex
CREATE INDEX "policies_parent_id_idx" ON "policies"("parent_id");

-- CreateIndex
CREATE UNIQUE INDEX "policies_tenant_id_name_key" ON "policies"("tenant_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "group_templates_name_key" ON "group_templates"("name");

-- CreateIndex
CREATE INDEX "groups_template_id_idx" ON "groups"("template_id");

-- CreateIndex
CREATE INDEX "groups_parent_id_idx" ON "groups"("parent_id");

-- CreateIndex
CREATE INDEX "user_groups_group_id_idx" ON "user_groups"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_group_members_user_id_key" ON "user_group_members"("user_id");

-- CreateIndex
CREATE INDEX "user_group_members_user_id_idx" ON "user_group_members"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_group_members_user_group_id_user_id_key" ON "user_group_members"("user_group_id", "user_id");

-- CreateIndex
CREATE INDEX "group_policies_group_id_idx" ON "group_policies"("group_id");

-- CreateIndex
CREATE INDEX "group_policies_user_group_id_idx" ON "group_policies"("user_group_id");

-- CreateIndex
CREATE INDEX "tenant_usage_metrics_user_id_idx" ON "tenant_usage_metrics"("user_id");

-- CreateIndex
CREATE INDEX "tenant_usage_metrics_resource_code_idx" ON "tenant_usage_metrics"("resource_code");

-- CreateIndex
CREATE INDEX "tenant_usage_metrics_timestamp_idx" ON "tenant_usage_metrics"("timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "MessageType_name_key" ON "MessageType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "messages_ms_message_id_key" ON "messages"("ms_message_id");

-- CreateIndex
CREATE INDEX "messages_ms_message_id_idx" ON "messages"("ms_message_id");

-- CreateIndex
CREATE INDEX "messages_folder_key_user_id_received_date_time_idx" ON "messages"("folder_key", "user_id", "received_date_time" DESC);

-- CreateIndex
CREATE INDEX "messages_folder_key_user_id_sent_date_time_idx" ON "messages"("folder_key", "user_id", "sent_date_time" DESC);

-- CreateIndex
CREATE INDEX "messages_sender_email_idx" ON "messages"("sender_email");

-- CreateIndex
CREATE INDEX "messages_source_id_idx" ON "messages"("source_id");

-- CreateIndex
CREATE UNIQUE INDEX "attachments_document_url_key" ON "attachments"("document_url");

-- CreateIndex
CREATE UNIQUE INDEX "attachments_content_hash_key" ON "attachments"("content_hash");

-- CreateIndex
CREATE UNIQUE INDEX "attachments_document_id_key" ON "attachments"("document_id");

-- CreateIndex
CREATE INDEX "attachments_document_id_idx" ON "attachments"("document_id");

-- CreateIndex
CREATE UNIQUE INDEX "attachments_document_id_document_url_content_hash_normalize_key" ON "attachments"("document_id", "document_url", "content_hash", "normalized_content", "content", "content_full");

-- CreateIndex
CREATE UNIQUE INDEX "documents_normalized_content_key" ON "documents"("normalized_content");

-- CreateIndex
CREATE INDEX "documents_uploaded_date_idx" ON "documents"("uploaded_date" DESC);

-- CreateIndex
CREATE INDEX "documents_uploaded_by_email_idx" ON "documents"("uploaded_by_email");

-- CreateIndex
CREATE INDEX "documents_last_viewed_idx" ON "documents"("last_viewed");

-- CreateIndex
CREATE INDEX "documents_classification_idx" ON "documents"("classification");

-- CreateIndex
CREATE INDEX "documents_file_extension_idx" ON "documents"("file_extension");

-- CreateIndex
CREATE INDEX "documents_keywords_idx" ON "documents" USING GIN ("keywords");

-- CreateIndex
CREATE INDEX "documents_normalized_content_idx" ON "documents"("normalized_content");

-- CreateIndex
CREATE INDEX "documents_classification_uploaded_date_idx" ON "documents"("classification", "uploaded_date" DESC);

-- CreateIndex
CREATE INDEX "documents_uploaded_by_email_file_extension_idx" ON "documents"("uploaded_by_email", "file_extension");

-- CreateIndex
CREATE INDEX "documents_is_confidential_classification_idx" ON "documents"("is_confidential", "classification");

-- CreateIndex
CREATE INDEX "documents_last_viewed_classification_idx" ON "documents"("last_viewed" DESC, "classification");

-- CreateIndex
CREATE INDEX "documents_file_extension_size_idx" ON "documents"("file_extension", "size" DESC);

-- CreateIndex
CREATE INDEX "documents_file_extension_view_count_idx" ON "documents"("file_extension", "view_count" DESC);

-- CreateIndex
CREATE INDEX "documents_uploaded_by_email_last_edited_idx" ON "documents"("uploaded_by_email", "last_edited" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "documents_content_hash_key" ON "documents"("content_hash");

-- CreateIndex
CREATE UNIQUE INDEX "documents_id_url_content_hash_normalized_content_content_co_key" ON "documents"("id", "url", "content_hash", "normalized_content", "content", "content_full");

-- CreateIndex
CREATE UNIQUE INDEX "documents_id_filename_mime_type_url_thumbnail_classificatio_key" ON "documents"("id", "filename", "mime_type", "url", "thumbnail", "classification");

-- CreateIndex
CREATE UNIQUE INDEX "folders_key_key" ON "folders"("key");

-- CreateIndex
CREATE INDEX "folders_user_id_key_idx" ON "folders"("user_id", "key");

-- CreateIndex
CREATE INDEX "folders_id_idx" ON "folders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "folders_id_key_key" ON "folders"("id", "key");

-- CreateIndex
CREATE UNIQUE INDEX "folders_user_id_key_key" ON "folders"("user_id", "key");

-- CreateIndex
CREATE UNIQUE INDEX "folder_messages_folder_key_key" ON "folder_messages"("folder_key");

-- CreateIndex
CREATE UNIQUE INDEX "folder_messages_folder_key_user_id_key" ON "folder_messages"("folder_key", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Thread_thread_context_id_key" ON "Thread"("thread_context_id");

-- CreateIndex
CREATE UNIQUE INDEX "Thread_context_hash_key" ON "Thread"("context_hash");

-- CreateIndex
CREATE INDEX "Thread_domain_idx" ON "Thread"("domain");

-- CreateIndex
CREATE INDEX "Thread_conversation_id_idx" ON "Thread"("conversation_id");

-- CreateIndex
CREATE INDEX "Thread_context_hash_idx" ON "Thread"("context_hash");

-- CreateIndex
CREATE INDEX "Thread_thread_context_id_idx" ON "Thread"("thread_context_id");

-- CreateIndex
CREATE INDEX "Thread_domain_conversation_id_idx" ON "Thread"("domain", "conversation_id");

-- CreateIndex
CREATE INDEX "Thread_ms_message_id_idx" ON "Thread" USING GIN ("ms_message_id");

-- CreateIndex
CREATE INDEX "Thread_message_db_ids_idx" ON "Thread" USING GIN ("message_db_ids");

-- CreateIndex
CREATE UNIQUE INDEX "thread_messages_ms_message_id_key" ON "thread_messages"("ms_message_id");

-- CreateIndex
CREATE INDEX "thread_messages_thread_id_idx" ON "thread_messages"("thread_id");

-- CreateIndex
CREATE INDEX "thread_messages_is_root_idx" ON "thread_messages"("is_root");

-- CreateIndex
CREATE INDEX "thread_messages_conversation_id_idx" ON "thread_messages"("conversation_id");

-- CreateIndex
CREATE INDEX "thread_messages_thread_id_is_root_idx" ON "thread_messages"("thread_id", "is_root");

-- CreateIndex
CREATE INDEX "thread_summary_domain_idx" ON "thread_summary"("domain");

-- CreateIndex
CREATE INDEX "thread_summary_conversation_id_idx" ON "thread_summary"("conversation_id");

-- CreateIndex
CREATE INDEX "thread_summary_domain_conversation_id_idx" ON "thread_summary"("domain", "conversation_id");

-- CreateIndex
CREATE INDEX "thread_summary_ms_message_id_idx" ON "thread_summary" USING GIN ("ms_message_id");

-- CreateIndex
CREATE INDEX "thread_summary_message_db_ids_idx" ON "thread_summary" USING GIN ("message_db_ids");

-- CreateIndex
CREATE UNIQUE INDEX "thread_participants_email_key" ON "thread_participants"("email");

-- CreateIndex
CREATE INDEX "thread_participants_email_idx" ON "thread_participants"("email");

-- CreateIndex
CREATE INDEX "thread_participants_domain_idx" ON "thread_participants"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "thread_context_context_hash_key" ON "thread_context"("context_hash");

-- CreateIndex
CREATE UNIQUE INDEX "thread_context_id_context_hash_key" ON "thread_context"("id", "context_hash");

-- CreateIndex
CREATE INDEX "thread_context_history_thread_context_id_idx" ON "thread_context_history"("thread_context_id");

-- CreateIndex
CREATE UNIQUE INDEX "conversations_domain_key" ON "conversations"("domain");

-- CreateIndex
CREATE INDEX "conversations_domain_idx" ON "conversations"("domain");

-- CreateIndex
CREATE INDEX "conversations_domain_conversation_topic_idx" ON "conversations"("domain", "conversation_topic");

-- CreateIndex
CREATE INDEX "conversations_domain_last_updated_at_idx" ON "conversations"("domain", "last_updated_at" DESC);

-- CreateIndex
CREATE INDEX "conversations_domain_conversation_topic_last_updated_at_idx" ON "conversations"("domain", "conversation_topic", "last_updated_at" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "email_action_history_next_action_id_key" ON "email_action_history"("next_action_id");

-- CreateIndex
CREATE INDEX "email_action_history_message_id_idx" ON "email_action_history"("message_id");

-- CreateIndex
CREATE INDEX "email_action_history_thread_id_idx" ON "email_action_history"("thread_id");

-- CreateIndex
CREATE INDEX "email_action_history_next_action_id_idx" ON "email_action_history"("next_action_id");

-- CreateIndex
CREATE INDEX "email_action_history_action_taken_by_idx" ON "email_action_history"("action_taken_by");

-- CreateIndex
CREATE INDEX "email_action_history_message_id_requires_follow_up_time_idx" ON "email_action_history"("message_id", "requires_follow_up", "time" DESC);

-- CreateIndex
CREATE INDEX "email_action_history_thread_id_requires_follow_up_time_idx" ON "email_action_history"("thread_id", "requires_follow_up", "time" DESC);

-- CreateIndex
CREATE INDEX "email_action_history_action_taken_by_requires_follow_up_tim_idx" ON "email_action_history"("action_taken_by", "requires_follow_up", "time" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "leads_status_single_select_key_key" ON "leads_status_single_select"("key");

-- CreateIndex
CREATE UNIQUE INDEX "leads_status_single_select_value_key" ON "leads_status_single_select"("value");

-- CreateIndex
CREATE INDEX "leads_status_single_select_field_display_name_idx" ON "leads_status_single_select"("field_display_name");

-- CreateIndex
CREATE INDEX "leads_status_single_select_value_idx" ON "leads_status_single_select"("value");

-- CreateIndex
CREATE INDEX "leads_status_single_select_color_idx" ON "leads_status_single_select"("color");

-- CreateIndex
CREATE UNIQUE INDEX "leads_email_key" ON "leads"("email");

-- CreateIndex
CREATE UNIQUE INDEX "companies_domain_key" ON "companies"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "companies_id_is_deleted_name_status_key" ON "companies"("id", "is_deleted", "name", "status");

-- CreateIndex
CREATE UNIQUE INDEX "companies_id_name_key" ON "companies"("id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "company_status_single_select_key_key" ON "company_status_single_select"("key");

-- CreateIndex
CREATE UNIQUE INDEX "company_status_single_select_value_key" ON "company_status_single_select"("value");

-- CreateIndex
CREATE INDEX "company_status_single_select_field_display_name_idx" ON "company_status_single_select"("field_display_name");

-- CreateIndex
CREATE INDEX "company_status_single_select_value_idx" ON "company_status_single_select"("value");

-- CreateIndex
CREATE INDEX "company_status_single_select_color_idx" ON "company_status_single_select"("color");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_apollo_id_key" ON "contacts"("apollo_id");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_id_full_name_key" ON "contacts"("id", "full_name");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_id_job_title_key" ON "contacts"("id", "job_title");

-- CreateIndex
CREATE UNIQUE INDEX "email_status_single_select_key_key" ON "email_status_single_select"("key");

-- CreateIndex
CREATE UNIQUE INDEX "email_status_single_select_value_key" ON "email_status_single_select"("value");

-- CreateIndex
CREATE INDEX "email_status_single_select_field_display_name_idx" ON "email_status_single_select"("field_display_name");

-- CreateIndex
CREATE INDEX "email_status_single_select_value_idx" ON "email_status_single_select"("value");

-- CreateIndex
CREATE INDEX "email_status_single_select_color_idx" ON "email_status_single_select"("color");

-- CreateIndex
CREATE UNIQUE INDEX "pocs_position_id_contact_id_key" ON "pocs"("position_id", "contact_id");

-- CreateIndex
CREATE UNIQUE INDEX "positions_apollo_id_key" ON "positions"("apollo_id");

-- CreateIndex
CREATE INDEX "positions_is_deleted_deleted_at_idx" ON "positions"("is_deleted" ASC, "deleted_at" DESC);

-- CreateIndex
CREATE INDEX "positions_is_deleted_is_company_deleted_created_at_idx" ON "positions"("is_deleted" ASC, "is_company_deleted" DESC, "created_at");

-- CreateIndex
CREATE INDEX "positions_deleted_company_deleted_created_at" ON "positions"("is_deleted" DESC, "is_company_deleted" DESC, "created_at");

-- CreateIndex
CREATE UNIQUE INDEX "positions_id_title_key" ON "positions"("id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "positions_id_company_id_is_deleted_is_company_deleted_compa_key" ON "positions"("id", "company_id", "is_deleted", "is_company_deleted", "company_name");

-- CreateIndex
CREATE UNIQUE INDEX "interviews_attendees_id_key" ON "interviews"("attendees_id");

-- CreateIndex
CREATE INDEX "interviews_start_time_idx" ON "interviews"("start_time");

-- CreateIndex
CREATE INDEX "interviews_candidate_id_idx" ON "interviews"("candidate_id");

-- CreateIndex
CREATE INDEX "interviews_position_id_idx" ON "interviews"("position_id");

-- CreateIndex
CREATE INDEX "interviews_end_time_idx" ON "interviews"("end_time");

-- CreateIndex
CREATE UNIQUE INDEX "timezones_key_key" ON "timezones"("key");

-- CreateIndex
CREATE UNIQUE INDEX "timezones_value_key" ON "timezones"("value");

-- CreateIndex
CREATE INDEX "timezones_field_display_name_idx" ON "timezones"("field_display_name");

-- CreateIndex
CREATE INDEX "timezones_field_type_idx" ON "timezones"("field_type");

-- CreateIndex
CREATE INDEX "timezones_value_idx" ON "timezones"("value");

-- CreateIndex
CREATE INDEX "timezones_key_idx" ON "timezones"("key");

-- CreateIndex
CREATE INDEX "timezones_color_idx" ON "timezones"("color");

-- CreateIndex
CREATE UNIQUE INDEX "interview_feedbacks_value_key" ON "interview_feedbacks"("value");

-- CreateIndex
CREATE INDEX "interview_feedbacks_field_display_name_idx" ON "interview_feedbacks"("field_display_name");

-- CreateIndex
CREATE INDEX "interview_feedbacks_type_idx" ON "interview_feedbacks"("type");

-- CreateIndex
CREATE INDEX "interview_feedbacks_value_idx" ON "interview_feedbacks"("value");

-- CreateIndex
CREATE INDEX "interview_feedbacks_color_idx" ON "interview_feedbacks"("color");

-- CreateIndex
CREATE UNIQUE INDEX "interview_modes_value_key" ON "interview_modes"("value");

-- CreateIndex
CREATE INDEX "interview_modes_field_display_name_idx" ON "interview_modes"("field_display_name");

-- CreateIndex
CREATE INDEX "interview_modes_field_type_idx" ON "interview_modes"("field_type");

-- CreateIndex
CREATE INDEX "interview_modes_value_idx" ON "interview_modes"("value");

-- CreateIndex
CREATE INDEX "interview_modes_color_idx" ON "interview_modes"("color");

-- CreateIndex
CREATE INDEX "attributes_name_type_idx" ON "attributes"("name", "type");

-- CreateIndex
CREATE INDEX "attributes_tenant_id_idx" ON "attributes"("tenant_id");

-- CreateIndex
CREATE INDEX "attributes_user_id_idx" ON "attributes"("user_id");

-- CreateIndex
CREATE INDEX "attributes_is_deleted_deleted_at_idx" ON "attributes"("is_deleted", "deleted_at");

-- CreateIndex
CREATE INDEX "attributes_created_at_idx" ON "attributes"("created_at");

-- CreateIndex
CREATE INDEX "attributes_last_updated_at_idx" ON "attributes"("last_updated_at");

-- CreateIndex
CREATE INDEX "user_attributes_user_id_idx" ON "user_attributes"("user_id");

-- CreateIndex
CREATE INDEX "user_attributes_attribute_id_idx" ON "user_attributes"("attribute_id");

-- CreateIndex
CREATE INDEX "user_attributes_is_deleted_deleted_at_idx" ON "user_attributes"("is_deleted", "deleted_at");

-- CreateIndex
CREATE INDEX "user_attributes_created_at_idx" ON "user_attributes"("created_at");

-- CreateIndex
CREATE INDEX "user_attributes_last_updated_at_idx" ON "user_attributes"("last_updated_at");

-- CreateIndex
CREATE UNIQUE INDEX "user_attributes_user_id_attribute_id_key" ON "user_attributes"("user_id", "attribute_id");

-- CreateIndex
CREATE INDEX "notes_table_id_field_id_idx" ON "notes"("table_id", "field_id");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_submissions_candidate_id_position_id_key" ON "candidate_submissions"("candidate_id", "position_id");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_submissions_id_candidate_id_position_id_key" ON "candidate_submissions"("id", "candidate_id", "position_id");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_submissions_id_candidate_id_position_id_candidate_key" ON "candidate_submissions"("id", "candidate_id", "position_id", "candidate_full_name");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_submission_status_value_key" ON "candidate_submission_status"("value");

-- CreateIndex
CREATE INDEX "candidate_submission_status_field_display_name_idx" ON "candidate_submission_status"("field_display_name");

-- CreateIndex
CREATE INDEX "candidate_submission_status_value_idx" ON "candidate_submission_status"("value");

-- CreateIndex
CREATE INDEX "candidate_submission_status_color_idx" ON "candidate_submission_status"("color");

-- CreateIndex
CREATE INDEX "boolean_strings_jd_idx" ON "boolean_strings"("jd");

-- CreateIndex
CREATE INDEX "boolean_strings_entity_id_upvote_idx" ON "boolean_strings"("entity_id", "upvote" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "locations_id_city_state_country_zip_key" ON "locations"("id", "city", "state", "country", "zip");

-- CreateIndex
CREATE UNIQUE INDEX "personal_information_id_full_name_email_key" ON "personal_information"("id", "full_name", "email");

-- CreateIndex
CREATE UNIQUE INDEX "personal_information_id_full_name_key" ON "personal_information"("id", "full_name");

-- CreateIndex
CREATE UNIQUE INDEX "candidates_personal_information_id_candidate_full_name_key" ON "candidates"("personal_information_id", "candidate_full_name");

-- CreateIndex
CREATE UNIQUE INDEX "candidates_id_candidate_full_name_key" ON "candidates"("id", "candidate_full_name");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_status_single_select_key_key" ON "candidate_status_single_select"("key");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_status_single_select_value_key" ON "candidate_status_single_select"("value");

-- CreateIndex
CREATE INDEX "candidate_status_single_select_field_display_name_idx" ON "candidate_status_single_select"("field_display_name");

-- CreateIndex
CREATE INDEX "candidate_status_single_select_value_idx" ON "candidate_status_single_select"("value");

-- CreateIndex
CREATE INDEX "candidate_status_single_select_color_idx" ON "candidate_status_single_select"("color");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_source_options_value_key" ON "candidate_source_options"("value");

-- CreateIndex
CREATE INDEX "candidate_source_options_field_display_name_idx" ON "candidate_source_options"("field_display_name");

-- CreateIndex
CREATE INDEX "candidate_source_options_value_idx" ON "candidate_source_options"("value");

-- CreateIndex
CREATE INDEX "candidate_source_options_color_idx" ON "candidate_source_options"("color");

-- CreateIndex
CREATE UNIQUE INDEX "job_roles_title_hash_key" ON "job_roles"("title_hash");

-- CreateIndex
CREATE UNIQUE INDEX "job_roles_title_normalized_key" ON "job_roles"("title_normalized");

-- CreateIndex
CREATE INDEX "job_roles_title_normalized_idx" ON "job_roles"("title_normalized");

-- CreateIndex
CREATE INDEX "job_roles_title_hash_idx" ON "job_roles" USING HASH ("title_hash");

-- CreateIndex
CREATE INDEX "job_roles_role_description_idx" ON "job_roles"("role_description");

-- CreateIndex
CREATE INDEX "job_roles_job_role_description_detailed_idx" ON "job_roles"("job_role_description_detailed");

-- CreateIndex
CREATE UNIQUE INDEX "job_roles_title_normalized_title_display_job_role_descripti_key" ON "job_roles"("title_normalized", "title_display", "job_role_description_detailed");

-- CreateIndex
CREATE INDEX "work_experiences_title_idx" ON "work_experiences"("title");

-- CreateIndex
CREATE INDEX "work_experiences_organization_name_idx" ON "work_experiences"("organization_name");

-- CreateIndex
CREATE INDEX "work_experiences_is_present_idx" ON "work_experiences"("is_present");

-- CreateIndex
CREATE INDEX "work_experiences_description_idx" ON "work_experiences"("description");

-- CreateIndex
CREATE UNIQUE INDEX "keywords_term_hash_key" ON "keywords"("term_hash");

-- CreateIndex
CREATE UNIQUE INDEX "keywords_normalized_term_key" ON "keywords"("normalized_term");

-- CreateIndex
CREATE INDEX "keywords_category_term_type_idx" ON "keywords"("category", "term_type");

-- CreateIndex
CREATE INDEX "keywords_normalized_term_idx" ON "keywords"("normalized_term");

-- CreateIndex
CREATE INDEX "keywords_term_hash_idx" ON "keywords"("term_hash");

-- CreateIndex
CREATE INDEX "comments_record_id_idx" ON "comments"("record_id");

-- CreateIndex
CREATE INDEX "comments_parent_id_idx" ON "comments"("parent_id");

-- CreateIndex
CREATE INDEX "comments_created_at_idx" ON "comments"("created_at");

-- CreateIndex
CREATE INDEX "comments_last_updated_at_idx" ON "comments"("last_updated_at");

-- CreateIndex
CREATE INDEX "comment_mentions_comment_id_idx" ON "comment_mentions"("comment_id");

-- CreateIndex
CREATE INDEX "comment_mentions_user_id_idx" ON "comment_mentions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "comment_mentions_comment_id_user_id_key" ON "comment_mentions"("comment_id", "user_id");

-- CreateIndex
CREATE INDEX "tasks_status_due_date_idx" ON "tasks"("status", "due_date");

-- CreateIndex
CREATE INDEX "tasks_parent_id_idx" ON "tasks"("parent_id");

-- CreateIndex
CREATE INDEX "reminders_task_id_idx" ON "reminders"("task_id");

-- CreateIndex
CREATE INDEX "reminders_remind_at_is_sent_idx" ON "reminders"("remind_at", "is_sent");

-- CreateIndex
CREATE INDEX "_DocumentSharedWithUsers_B_index" ON "_DocumentSharedWithUsers"("B");

-- CreateIndex
CREATE INDEX "_ThreadToThreadParticipants_B_index" ON "_ThreadToThreadParticipants"("B");

-- CreateIndex
CREATE INDEX "_candidate_to_keywords_B_index" ON "_candidate_to_keywords"("B");

-- CreateIndex
CREATE INDEX "_certification_to_keywords_B_index" ON "_certification_to_keywords"("B");

-- CreateIndex
CREATE INDEX "_job_role_to_keywords_B_index" ON "_job_role_to_keywords"("B");

-- CreateIndex
CREATE INDEX "_position_to_keywords_B_index" ON "_position_to_keywords"("B");

-- CreateIndex
CREATE INDEX "_license_to_keywords_B_index" ON "_license_to_keywords"("B");

-- AddForeignKey
ALTER TABLE "external_integrations" ADD CONSTRAINT "external_integrations_tenant_config_id_tenant_id_fkey" FOREIGN KEY ("tenant_config_id", "tenant_id") REFERENCES "tenant_configurations"("id", "tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration_usage_metrics" ADD CONSTRAINT "integration_usage_metrics_integration_id_fkey" FOREIGN KEY ("integration_id") REFERENCES "external_integrations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_metric_values" ADD CONSTRAINT "custom_metric_values_usage_metric_id_fkey" FOREIGN KEY ("usage_metric_id") REFERENCES "integration_usage_metrics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration_credit_usage" ADD CONSTRAINT "integration_credit_usage_integration_id_fkey" FOREIGN KEY ("integration_id") REFERENCES "external_integrations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email_preference" ADD CONSTRAINT "email_preference_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenant_configurations"("tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integration_notifications" ADD CONSTRAINT "integration_notifications_integration_id_fkey" FOREIGN KEY ("integration_id") REFERENCES "external_integrations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "domains" ADD CONSTRAINT "domains_tenant_config_id_tenant_id_fkey" FOREIGN KEY ("tenant_config_id", "tenant_id") REFERENCES "tenant_configurations"("id", "tenant_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dns_records" ADD CONSTRAINT "dns_records_domain_id_fkey" FOREIGN KEY ("domain_id") REFERENCES "domains"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spf_records" ADD CONSTRAINT "spf_records_dns_record_id_domain_id_fkey" FOREIGN KEY ("dns_record_id", "domain_id") REFERENCES "dns_records"("id", "domain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dkim_records" ADD CONSTRAINT "dkim_records_dns_record_id_domain_id_fkey" FOREIGN KEY ("dns_record_id", "domain_id") REFERENCES "dns_records"("id", "domain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dmarc_records" ADD CONSTRAINT "dmarc_records_dns_record_id_domain_id_fkey" FOREIGN KEY ("dns_record_id", "domain_id") REFERENCES "dns_records"("id", "domain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email_servers" ADD CONSTRAINT "email_servers_tenant_config_id_tenant_id_fkey" FOREIGN KEY ("tenant_config_id", "tenant_id") REFERENCES "tenant_configurations"("id", "tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_tenant_config_id_tenant_id_fkey" FOREIGN KEY ("tenant_config_id", "tenant_id") REFERENCES "tenant_configurations"("id", "tenant_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_interview_attendies_id_fkey" FOREIGN KEY ("interview_attendies_id") REFERENCES "interview_attendees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_addresses" ADD CONSTRAINT "user_addresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_devices" ADD CONSTRAINT "user_devices_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_devices" ADD CONSTRAINT "user_devices_last_accessed_from_location_id_fkey" FOREIGN KEY ("last_accessed_from_location_id") REFERENCES "user_device_locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_device_locations" ADD CONSTRAINT "user_device_locations_device_id_user_id_fkey" FOREIGN KEY ("device_id", "user_id") REFERENCES "user_devices"("id", "user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "policies" ADD CONSTRAINT "policies_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "policies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "group_templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_groups" ADD CONSTRAINT "user_groups_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_group_members" ADD CONSTRAINT "user_group_members_user_group_id_fkey" FOREIGN KEY ("user_group_id") REFERENCES "user_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_group_members" ADD CONSTRAINT "user_group_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_policies" ADD CONSTRAINT "group_policies_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_policies" ADD CONSTRAINT "group_policies_user_group_id_fkey" FOREIGN KEY ("user_group_id") REFERENCES "user_groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sources" ADD CONSTRAINT "sources_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "MessageType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "sources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_folder_key_user_id_fkey" FOREIGN KEY ("folder_key", "user_id") REFERENCES "folder_messages"("folder_key", "user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attachments" ADD CONSTRAINT "attachments_document_id_document_url_content_hash_normaliz_fkey" FOREIGN KEY ("document_id", "document_url", "content_hash", "normalized_content", "content", "content_full") REFERENCES "documents"("id", "url", "content_hash", "normalized_content", "content", "content_full") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_uploaded_by_id_uploaded_by_email_uploaded_by_fir_fkey" FOREIGN KEY ("uploaded_by_id", "uploaded_by_email", "uploaded_by_first_name", "uploaded_by_last_name") REFERENCES "users"("id", "email", "first_name", "last_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "folders" ADD CONSTRAINT "folders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_thread_context_id_context_hash_fkey" FOREIGN KEY ("thread_context_id", "context_hash") REFERENCES "thread_context"("id", "context_hash") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_thread_summary_id_fkey" FOREIGN KEY ("thread_summary_id") REFERENCES "thread_summary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thread_messages" ADD CONSTRAINT "thread_messages_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "Thread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thread_context_history" ADD CONSTRAINT "thread_context_history_thread_context_id_fkey" FOREIGN KEY ("thread_context_id") REFERENCES "thread_context"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thread_context_items" ADD CONSTRAINT "thread_context_items_thread_context_history_id_fkey" FOREIGN KEY ("thread_context_history_id") REFERENCES "thread_context_history"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email_action_history" ADD CONSTRAINT "email_action_history_next_action_id_fkey" FOREIGN KEY ("next_action_id") REFERENCES "email_action_history"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_status_fkey" FOREIGN KEY ("status") REFERENCES "leads_status_single_select"("value") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_status_fkey" FOREIGN KEY ("status") REFERENCES "company_status_single_select"("value") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_email_status_fkey" FOREIGN KEY ("email_status") REFERENCES "email_status_single_select"("value") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pocs" ADD CONSTRAINT "pocs_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "positions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pocs" ADD CONSTRAINT "pocs_contact_id_contact_role_fkey" FOREIGN KEY ("contact_id", "contact_role") REFERENCES "contacts"("id", "job_title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_company_id_is_company_deleted_company_name_compa_fkey" FOREIGN KEY ("company_id", "is_company_deleted", "company_name", "company_status") REFERENCES "companies"("id", "is_deleted", "name", "status") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_jd_attachment_id_jd_filename_jd_file_type_jd_lin_fkey" FOREIGN KEY ("jd_attachment_id", "jd_filename", "jd_file_type", "jd_link", "jd_thumbnail", "jd_classification") REFERENCES "documents"("id", "filename", "mime_type", "url", "thumbnail", "classification") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_job_role_id_fkey" FOREIGN KEY ("job_role_id") REFERENCES "job_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_attendees_id_fkey" FOREIGN KEY ("attendees_id") REFERENCES "interview_attendees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_feedback_fkey" FOREIGN KEY ("feedback") REFERENCES "interview_feedbacks"("value") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_submission_id_candidate_id_position_id_fkey" FOREIGN KEY ("submission_id", "candidate_id", "position_id") REFERENCES "candidate_submissions"("id", "candidate_id", "position_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_timezone_key_fkey" FOREIGN KEY ("timezone_key") REFERENCES "timezones"("key") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_interview_mode_fkey" FOREIGN KEY ("interview_mode") REFERENCES "interview_modes"("value") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_attributes" ADD CONSTRAINT "user_attributes_attribute_id_fkey" FOREIGN KEY ("attribute_id") REFERENCES "attributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate_submissions" ADD CONSTRAINT "candidate_submissions_status_fkey" FOREIGN KEY ("status") REFERENCES "candidate_submission_status"("value") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate_submissions" ADD CONSTRAINT "candidate_submissions_candidate_id_candidate_full_name_fkey" FOREIGN KEY ("candidate_id", "candidate_full_name") REFERENCES "candidates"("id", "candidate_full_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate_submissions" ADD CONSTRAINT "candidate_submissions_position_id_company_id_is_position_d_fkey" FOREIGN KEY ("position_id", "company_id", "is_position_deleted", "is_company_deleted", "company_name") REFERENCES "positions"("id", "company_id", "is_deleted", "is_company_deleted", "company_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidates" ADD CONSTRAINT "candidates_status_fkey" FOREIGN KEY ("status") REFERENCES "candidate_status_single_select"("value") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidates" ADD CONSTRAINT "candidates_sourced_from_fkey" FOREIGN KEY ("sourced_from") REFERENCES "candidate_source_options"("value") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidates" ADD CONSTRAINT "candidates_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidates" ADD CONSTRAINT "candidates_personal_information_id_candidate_full_name_fkey" FOREIGN KEY ("personal_information_id", "candidate_full_name") REFERENCES "personal_information"("id", "full_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "education" ADD CONSTRAINT "education_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certifications" ADD CONSTRAINT "certifications_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_experiences" ADD CONSTRAINT "work_experiences_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_experiences" ADD CONSTRAINT "work_experiences_job_role_id_fkey" FOREIGN KEY ("job_role_id") REFERENCES "job_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "licenses" ADD CONSTRAINT "licenses_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "possible_job_roles" ADD CONSTRAINT "possible_job_roles_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_mentions" ADD CONSTRAINT "comment_mentions_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_mentions" ADD CONSTRAINT "comment_mentions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reminders" ADD CONSTRAINT "reminders_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DocumentSharedWithUsers" ADD CONSTRAINT "_DocumentSharedWithUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DocumentSharedWithUsers" ADD CONSTRAINT "_DocumentSharedWithUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ThreadToThreadParticipants" ADD CONSTRAINT "_ThreadToThreadParticipants_A_fkey" FOREIGN KEY ("A") REFERENCES "Thread"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ThreadToThreadParticipants" ADD CONSTRAINT "_ThreadToThreadParticipants_B_fkey" FOREIGN KEY ("B") REFERENCES "thread_participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_candidate_to_keywords" ADD CONSTRAINT "_candidate_to_keywords_A_fkey" FOREIGN KEY ("A") REFERENCES "candidates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_candidate_to_keywords" ADD CONSTRAINT "_candidate_to_keywords_B_fkey" FOREIGN KEY ("B") REFERENCES "keywords"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_certification_to_keywords" ADD CONSTRAINT "_certification_to_keywords_A_fkey" FOREIGN KEY ("A") REFERENCES "certifications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_certification_to_keywords" ADD CONSTRAINT "_certification_to_keywords_B_fkey" FOREIGN KEY ("B") REFERENCES "keywords"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_job_role_to_keywords" ADD CONSTRAINT "_job_role_to_keywords_A_fkey" FOREIGN KEY ("A") REFERENCES "job_roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_job_role_to_keywords" ADD CONSTRAINT "_job_role_to_keywords_B_fkey" FOREIGN KEY ("B") REFERENCES "keywords"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_position_to_keywords" ADD CONSTRAINT "_position_to_keywords_A_fkey" FOREIGN KEY ("A") REFERENCES "keywords"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_position_to_keywords" ADD CONSTRAINT "_position_to_keywords_B_fkey" FOREIGN KEY ("B") REFERENCES "positions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_license_to_keywords" ADD CONSTRAINT "_license_to_keywords_A_fkey" FOREIGN KEY ("A") REFERENCES "keywords"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_license_to_keywords" ADD CONSTRAINT "_license_to_keywords_B_fkey" FOREIGN KEY ("B") REFERENCES "licenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
