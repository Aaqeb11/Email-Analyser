
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model agreements
 * 
 */
export type agreements = $Result.DefaultSelection<Prisma.$agreementsPayload>
/**
 * Model interviews
 * 
 */
export type interviews = $Result.DefaultSelection<Prisma.$interviewsPayload>
/**
 * Model legacy_positions
 * 
 */
export type legacy_positions = $Result.DefaultSelection<Prisma.$legacy_positionsPayload>
/**
 * Model organizations
 * 
 */
export type organizations = $Result.DefaultSelection<Prisma.$organizationsPayload>
/**
 * Model positions
 * 
 */
export type positions = $Result.DefaultSelection<Prisma.$positionsPayload>
/**
 * Model submissions
 * 
 */
export type submissions = $Result.DefaultSelection<Prisma.$submissionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agreements
 * const agreements = await prisma.agreements.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agreements
   * const agreements = await prisma.agreements.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.agreements`: Exposes CRUD operations for the **agreements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agreements
    * const agreements = await prisma.agreements.findMany()
    * ```
    */
  get agreements(): Prisma.agreementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviews`: Exposes CRUD operations for the **interviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interviews
    * const interviews = await prisma.interviews.findMany()
    * ```
    */
  get interviews(): Prisma.interviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.legacy_positions`: Exposes CRUD operations for the **legacy_positions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Legacy_positions
    * const legacy_positions = await prisma.legacy_positions.findMany()
    * ```
    */
  get legacy_positions(): Prisma.legacy_positionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizations`: Exposes CRUD operations for the **organizations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organizations.findMany()
    * ```
    */
  get organizations(): Prisma.organizationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.positions`: Exposes CRUD operations for the **positions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.positions.findMany()
    * ```
    */
  get positions(): Prisma.positionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submissions`: Exposes CRUD operations for the **submissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submissions.findMany()
    * ```
    */
  get submissions(): Prisma.submissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    agreements: 'agreements',
    interviews: 'interviews',
    legacy_positions: 'legacy_positions',
    organizations: 'organizations',
    positions: 'positions',
    submissions: 'submissions',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db2?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "agreements" | "interviews" | "legacy_positions" | "organizations" | "positions" | "submissions" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      agreements: {
        payload: Prisma.$agreementsPayload<ExtArgs>
        fields: Prisma.agreementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agreementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agreementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreementsPayload>
          }
          findFirst: {
            args: Prisma.agreementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agreementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreementsPayload>
          }
          findMany: {
            args: Prisma.agreementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreementsPayload>[]
          }
          create: {
            args: Prisma.agreementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreementsPayload>
          }
          createMany: {
            args: Prisma.agreementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.agreementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreementsPayload>[]
          }
          delete: {
            args: Prisma.agreementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreementsPayload>
          }
          update: {
            args: Prisma.agreementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreementsPayload>
          }
          deleteMany: {
            args: Prisma.agreementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agreementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.agreementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreementsPayload>[]
          }
          upsert: {
            args: Prisma.agreementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agreementsPayload>
          }
          aggregate: {
            args: Prisma.AgreementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgreements>
          }
          groupBy: {
            args: Prisma.agreementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgreementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.agreementsCountArgs<ExtArgs>
            result: $Utils.Optional<AgreementsCountAggregateOutputType> | number
          }
        }
      }
      interviews: {
        payload: Prisma.$interviewsPayload<ExtArgs>
        fields: Prisma.interviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.interviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.interviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interviewsPayload>
          }
          findFirst: {
            args: Prisma.interviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.interviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interviewsPayload>
          }
          findMany: {
            args: Prisma.interviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interviewsPayload>[]
          }
          create: {
            args: Prisma.interviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interviewsPayload>
          }
          createMany: {
            args: Prisma.interviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.interviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interviewsPayload>[]
          }
          delete: {
            args: Prisma.interviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interviewsPayload>
          }
          update: {
            args: Prisma.interviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interviewsPayload>
          }
          deleteMany: {
            args: Prisma.interviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.interviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.interviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interviewsPayload>[]
          }
          upsert: {
            args: Prisma.interviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interviewsPayload>
          }
          aggregate: {
            args: Prisma.InterviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviews>
          }
          groupBy: {
            args: Prisma.interviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.interviewsCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewsCountAggregateOutputType> | number
          }
        }
      }
      legacy_positions: {
        payload: Prisma.$legacy_positionsPayload<ExtArgs>
        fields: Prisma.legacy_positionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.legacy_positionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_positionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.legacy_positionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_positionsPayload>
          }
          findFirst: {
            args: Prisma.legacy_positionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_positionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.legacy_positionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_positionsPayload>
          }
          findMany: {
            args: Prisma.legacy_positionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_positionsPayload>[]
          }
          create: {
            args: Prisma.legacy_positionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_positionsPayload>
          }
          createMany: {
            args: Prisma.legacy_positionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.legacy_positionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_positionsPayload>[]
          }
          delete: {
            args: Prisma.legacy_positionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_positionsPayload>
          }
          update: {
            args: Prisma.legacy_positionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_positionsPayload>
          }
          deleteMany: {
            args: Prisma.legacy_positionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.legacy_positionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.legacy_positionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_positionsPayload>[]
          }
          upsert: {
            args: Prisma.legacy_positionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_positionsPayload>
          }
          aggregate: {
            args: Prisma.Legacy_positionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegacy_positions>
          }
          groupBy: {
            args: Prisma.legacy_positionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Legacy_positionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.legacy_positionsCountArgs<ExtArgs>
            result: $Utils.Optional<Legacy_positionsCountAggregateOutputType> | number
          }
        }
      }
      organizations: {
        payload: Prisma.$organizationsPayload<ExtArgs>
        fields: Prisma.organizationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          findFirst: {
            args: Prisma.organizationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          findMany: {
            args: Prisma.organizationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>[]
          }
          create: {
            args: Prisma.organizationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          createMany: {
            args: Prisma.organizationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organizationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>[]
          }
          delete: {
            args: Prisma.organizationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          update: {
            args: Prisma.organizationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          deleteMany: {
            args: Prisma.organizationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.organizationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>[]
          }
          upsert: {
            args: Prisma.organizationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationsPayload>
          }
          aggregate: {
            args: Prisma.OrganizationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizations>
          }
          groupBy: {
            args: Prisma.organizationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizationsCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationsCountAggregateOutputType> | number
          }
        }
      }
      positions: {
        payload: Prisma.$positionsPayload<ExtArgs>
        fields: Prisma.positionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.positionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.positionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          findFirst: {
            args: Prisma.positionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.positionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          findMany: {
            args: Prisma.positionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>[]
          }
          create: {
            args: Prisma.positionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          createMany: {
            args: Prisma.positionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.positionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>[]
          }
          delete: {
            args: Prisma.positionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          update: {
            args: Prisma.positionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          deleteMany: {
            args: Prisma.positionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.positionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.positionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>[]
          }
          upsert: {
            args: Prisma.positionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionsPayload>
          }
          aggregate: {
            args: Prisma.PositionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePositions>
          }
          groupBy: {
            args: Prisma.positionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.positionsCountArgs<ExtArgs>
            result: $Utils.Optional<PositionsCountAggregateOutputType> | number
          }
        }
      }
      submissions: {
        payload: Prisma.$submissionsPayload<ExtArgs>
        fields: Prisma.submissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.submissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.submissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          findFirst: {
            args: Prisma.submissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.submissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          findMany: {
            args: Prisma.submissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>[]
          }
          create: {
            args: Prisma.submissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          createMany: {
            args: Prisma.submissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.submissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>[]
          }
          delete: {
            args: Prisma.submissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          update: {
            args: Prisma.submissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          deleteMany: {
            args: Prisma.submissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.submissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.submissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>[]
          }
          upsert: {
            args: Prisma.submissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          aggregate: {
            args: Prisma.SubmissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmissions>
          }
          groupBy: {
            args: Prisma.submissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.submissionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    agreements?: agreementsOmit
    interviews?: interviewsOmit
    legacy_positions?: legacy_positionsOmit
    organizations?: organizationsOmit
    positions?: positionsOmit
    submissions?: submissionsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model agreements
   */

  export type AggregateAgreements = {
    _count: AgreementsCountAggregateOutputType | null
    _avg: AgreementsAvgAggregateOutputType | null
    _sum: AgreementsSumAggregateOutputType | null
    _min: AgreementsMinAggregateOutputType | null
    _max: AgreementsMaxAggregateOutputType | null
  }

  export type AgreementsAvgAggregateOutputType = {
    warranty: Decimal | null
    percentage: Decimal | null
    payment_terms: Decimal | null
    airbyte_generation_id: number | null
  }

  export type AgreementsSumAggregateOutputType = {
    warranty: Decimal | null
    percentage: Decimal | null
    payment_terms: Decimal | null
    airbyte_generation_id: bigint | null
  }

  export type AgreementsMinAggregateOutputType = {
    location: string | null
    warranty: Decimal | null
    percentage: Decimal | null
    date_signed: Date | null
    airtable_id: string | null
    dh_agreement: string | null
    payment_terms: Decimal | null
    title_of_the_poc: string | null
    name_of_the_client: string | null
    airtable_table_name: string | null
    airtable_created_time: string | null
    signed_by__client_poc_: string | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type AgreementsMaxAggregateOutputType = {
    location: string | null
    warranty: Decimal | null
    percentage: Decimal | null
    date_signed: Date | null
    airtable_id: string | null
    dh_agreement: string | null
    payment_terms: Decimal | null
    title_of_the_poc: string | null
    name_of_the_client: string | null
    airtable_table_name: string | null
    airtable_created_time: string | null
    signed_by__client_poc_: string | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type AgreementsCountAggregateOutputType = {
    location: number
    warranty: number
    percentage: number
    date_signed: number
    airtable_id: number
    client_sheet: number
    dh_agreement: number
    payment_terms: number
    title_of_the_poc: number
    name_of_the_client: number
    airtable_table_name: number
    airtable_created_time: number
    signed_by__client_poc_: number
    airbyte_raw_id: number
    airbyte_extracted_at: number
    airbyte_generation_id: number
    airbyte_meta: number
    id: number
    _all: number
  }


  export type AgreementsAvgAggregateInputType = {
    warranty?: true
    percentage?: true
    payment_terms?: true
    airbyte_generation_id?: true
  }

  export type AgreementsSumAggregateInputType = {
    warranty?: true
    percentage?: true
    payment_terms?: true
    airbyte_generation_id?: true
  }

  export type AgreementsMinAggregateInputType = {
    location?: true
    warranty?: true
    percentage?: true
    date_signed?: true
    airtable_id?: true
    dh_agreement?: true
    payment_terms?: true
    title_of_the_poc?: true
    name_of_the_client?: true
    airtable_table_name?: true
    airtable_created_time?: true
    signed_by__client_poc_?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type AgreementsMaxAggregateInputType = {
    location?: true
    warranty?: true
    percentage?: true
    date_signed?: true
    airtable_id?: true
    dh_agreement?: true
    payment_terms?: true
    title_of_the_poc?: true
    name_of_the_client?: true
    airtable_table_name?: true
    airtable_created_time?: true
    signed_by__client_poc_?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type AgreementsCountAggregateInputType = {
    location?: true
    warranty?: true
    percentage?: true
    date_signed?: true
    airtable_id?: true
    client_sheet?: true
    dh_agreement?: true
    payment_terms?: true
    title_of_the_poc?: true
    name_of_the_client?: true
    airtable_table_name?: true
    airtable_created_time?: true
    signed_by__client_poc_?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    airbyte_meta?: true
    id?: true
    _all?: true
  }

  export type AgreementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agreements to aggregate.
     */
    where?: agreementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agreements to fetch.
     */
    orderBy?: agreementsOrderByWithRelationInput | agreementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agreementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agreements
    **/
    _count?: true | AgreementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgreementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgreementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgreementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgreementsMaxAggregateInputType
  }

  export type GetAgreementsAggregateType<T extends AgreementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAgreements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgreements[P]>
      : GetScalarType<T[P], AggregateAgreements[P]>
  }




  export type agreementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agreementsWhereInput
    orderBy?: agreementsOrderByWithAggregationInput | agreementsOrderByWithAggregationInput[]
    by: AgreementsScalarFieldEnum[] | AgreementsScalarFieldEnum
    having?: agreementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgreementsCountAggregateInputType | true
    _avg?: AgreementsAvgAggregateInputType
    _sum?: AgreementsSumAggregateInputType
    _min?: AgreementsMinAggregateInputType
    _max?: AgreementsMaxAggregateInputType
  }

  export type AgreementsGroupByOutputType = {
    location: string | null
    warranty: Decimal | null
    percentage: Decimal | null
    date_signed: Date | null
    airtable_id: string | null
    client_sheet: JsonValue | null
    dh_agreement: string | null
    payment_terms: Decimal | null
    title_of_the_poc: string | null
    name_of_the_client: string | null
    airtable_table_name: string | null
    airtable_created_time: string | null
    signed_by__client_poc_: string | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date
    airbyte_generation_id: bigint | null
    airbyte_meta: JsonValue
    id: string
    _count: AgreementsCountAggregateOutputType | null
    _avg: AgreementsAvgAggregateOutputType | null
    _sum: AgreementsSumAggregateOutputType | null
    _min: AgreementsMinAggregateOutputType | null
    _max: AgreementsMaxAggregateOutputType | null
  }

  type GetAgreementsGroupByPayload<T extends agreementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgreementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgreementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgreementsGroupByOutputType[P]>
            : GetScalarType<T[P], AgreementsGroupByOutputType[P]>
        }
      >
    >


  export type agreementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location?: boolean
    warranty?: boolean
    percentage?: boolean
    date_signed?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    dh_agreement?: boolean
    payment_terms?: boolean
    title_of_the_poc?: boolean
    name_of_the_client?: boolean
    airtable_table_name?: boolean
    airtable_created_time?: boolean
    signed_by__client_poc_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["agreements"]>

  export type agreementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location?: boolean
    warranty?: boolean
    percentage?: boolean
    date_signed?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    dh_agreement?: boolean
    payment_terms?: boolean
    title_of_the_poc?: boolean
    name_of_the_client?: boolean
    airtable_table_name?: boolean
    airtable_created_time?: boolean
    signed_by__client_poc_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["agreements"]>

  export type agreementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location?: boolean
    warranty?: boolean
    percentage?: boolean
    date_signed?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    dh_agreement?: boolean
    payment_terms?: boolean
    title_of_the_poc?: boolean
    name_of_the_client?: boolean
    airtable_table_name?: boolean
    airtable_created_time?: boolean
    signed_by__client_poc_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["agreements"]>

  export type agreementsSelectScalar = {
    location?: boolean
    warranty?: boolean
    percentage?: boolean
    date_signed?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    dh_agreement?: boolean
    payment_terms?: boolean
    title_of_the_poc?: boolean
    name_of_the_client?: boolean
    airtable_table_name?: boolean
    airtable_created_time?: boolean
    signed_by__client_poc_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }

  export type agreementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"location" | "warranty" | "percentage" | "date_signed" | "airtable_id" | "client_sheet" | "dh_agreement" | "payment_terms" | "title_of_the_poc" | "name_of_the_client" | "airtable_table_name" | "airtable_created_time" | "signed_by__client_poc_" | "airbyte_raw_id" | "airbyte_extracted_at" | "airbyte_generation_id" | "airbyte_meta" | "id", ExtArgs["result"]["agreements"]>

  export type $agreementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agreements"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      location: string | null
      warranty: Prisma.Decimal | null
      percentage: Prisma.Decimal | null
      date_signed: Date | null
      airtable_id: string | null
      client_sheet: Prisma.JsonValue | null
      dh_agreement: string | null
      payment_terms: Prisma.Decimal | null
      title_of_the_poc: string | null
      name_of_the_client: string | null
      airtable_table_name: string | null
      airtable_created_time: string | null
      signed_by__client_poc_: string | null
      airbyte_raw_id: string
      airbyte_extracted_at: Date
      airbyte_generation_id: bigint | null
      airbyte_meta: Prisma.JsonValue
      id: string
    }, ExtArgs["result"]["agreements"]>
    composites: {}
  }

  type agreementsGetPayload<S extends boolean | null | undefined | agreementsDefaultArgs> = $Result.GetResult<Prisma.$agreementsPayload, S>

  type agreementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agreementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgreementsCountAggregateInputType | true
    }

  export interface agreementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agreements'], meta: { name: 'agreements' } }
    /**
     * Find zero or one Agreements that matches the filter.
     * @param {agreementsFindUniqueArgs} args - Arguments to find a Agreements
     * @example
     * // Get one Agreements
     * const agreements = await prisma.agreements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agreementsFindUniqueArgs>(args: SelectSubset<T, agreementsFindUniqueArgs<ExtArgs>>): Prisma__agreementsClient<$Result.GetResult<Prisma.$agreementsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Agreements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agreementsFindUniqueOrThrowArgs} args - Arguments to find a Agreements
     * @example
     * // Get one Agreements
     * const agreements = await prisma.agreements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agreementsFindUniqueOrThrowArgs>(args: SelectSubset<T, agreementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agreementsClient<$Result.GetResult<Prisma.$agreementsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Agreements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreementsFindFirstArgs} args - Arguments to find a Agreements
     * @example
     * // Get one Agreements
     * const agreements = await prisma.agreements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agreementsFindFirstArgs>(args?: SelectSubset<T, agreementsFindFirstArgs<ExtArgs>>): Prisma__agreementsClient<$Result.GetResult<Prisma.$agreementsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Agreements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreementsFindFirstOrThrowArgs} args - Arguments to find a Agreements
     * @example
     * // Get one Agreements
     * const agreements = await prisma.agreements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agreementsFindFirstOrThrowArgs>(args?: SelectSubset<T, agreementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__agreementsClient<$Result.GetResult<Prisma.$agreementsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Agreements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agreements
     * const agreements = await prisma.agreements.findMany()
     * 
     * // Get first 10 Agreements
     * const agreements = await prisma.agreements.findMany({ take: 10 })
     * 
     * // Only select the `location`
     * const agreementsWithLocationOnly = await prisma.agreements.findMany({ select: { location: true } })
     * 
     */
    findMany<T extends agreementsFindManyArgs>(args?: SelectSubset<T, agreementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agreementsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Agreements.
     * @param {agreementsCreateArgs} args - Arguments to create a Agreements.
     * @example
     * // Create one Agreements
     * const Agreements = await prisma.agreements.create({
     *   data: {
     *     // ... data to create a Agreements
     *   }
     * })
     * 
     */
    create<T extends agreementsCreateArgs>(args: SelectSubset<T, agreementsCreateArgs<ExtArgs>>): Prisma__agreementsClient<$Result.GetResult<Prisma.$agreementsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Agreements.
     * @param {agreementsCreateManyArgs} args - Arguments to create many Agreements.
     * @example
     * // Create many Agreements
     * const agreements = await prisma.agreements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agreementsCreateManyArgs>(args?: SelectSubset<T, agreementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agreements and returns the data saved in the database.
     * @param {agreementsCreateManyAndReturnArgs} args - Arguments to create many Agreements.
     * @example
     * // Create many Agreements
     * const agreements = await prisma.agreements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agreements and only return the `location`
     * const agreementsWithLocationOnly = await prisma.agreements.createManyAndReturn({
     *   select: { location: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends agreementsCreateManyAndReturnArgs>(args?: SelectSubset<T, agreementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agreementsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Agreements.
     * @param {agreementsDeleteArgs} args - Arguments to delete one Agreements.
     * @example
     * // Delete one Agreements
     * const Agreements = await prisma.agreements.delete({
     *   where: {
     *     // ... filter to delete one Agreements
     *   }
     * })
     * 
     */
    delete<T extends agreementsDeleteArgs>(args: SelectSubset<T, agreementsDeleteArgs<ExtArgs>>): Prisma__agreementsClient<$Result.GetResult<Prisma.$agreementsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Agreements.
     * @param {agreementsUpdateArgs} args - Arguments to update one Agreements.
     * @example
     * // Update one Agreements
     * const agreements = await prisma.agreements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agreementsUpdateArgs>(args: SelectSubset<T, agreementsUpdateArgs<ExtArgs>>): Prisma__agreementsClient<$Result.GetResult<Prisma.$agreementsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Agreements.
     * @param {agreementsDeleteManyArgs} args - Arguments to filter Agreements to delete.
     * @example
     * // Delete a few Agreements
     * const { count } = await prisma.agreements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agreementsDeleteManyArgs>(args?: SelectSubset<T, agreementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agreements
     * const agreements = await prisma.agreements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agreementsUpdateManyArgs>(args: SelectSubset<T, agreementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agreements and returns the data updated in the database.
     * @param {agreementsUpdateManyAndReturnArgs} args - Arguments to update many Agreements.
     * @example
     * // Update many Agreements
     * const agreements = await prisma.agreements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agreements and only return the `location`
     * const agreementsWithLocationOnly = await prisma.agreements.updateManyAndReturn({
     *   select: { location: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends agreementsUpdateManyAndReturnArgs>(args: SelectSubset<T, agreementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agreementsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Agreements.
     * @param {agreementsUpsertArgs} args - Arguments to update or create a Agreements.
     * @example
     * // Update or create a Agreements
     * const agreements = await prisma.agreements.upsert({
     *   create: {
     *     // ... data to create a Agreements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agreements we want to update
     *   }
     * })
     */
    upsert<T extends agreementsUpsertArgs>(args: SelectSubset<T, agreementsUpsertArgs<ExtArgs>>): Prisma__agreementsClient<$Result.GetResult<Prisma.$agreementsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Agreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreementsCountArgs} args - Arguments to filter Agreements to count.
     * @example
     * // Count the number of Agreements
     * const count = await prisma.agreements.count({
     *   where: {
     *     // ... the filter for the Agreements we want to count
     *   }
     * })
    **/
    count<T extends agreementsCountArgs>(
      args?: Subset<T, agreementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgreementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgreementsAggregateArgs>(args: Subset<T, AgreementsAggregateArgs>): Prisma.PrismaPromise<GetAgreementsAggregateType<T>>

    /**
     * Group by Agreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agreementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends agreementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agreementsGroupByArgs['orderBy'] }
        : { orderBy?: agreementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, agreementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgreementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agreements model
   */
  readonly fields: agreementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agreements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agreementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the agreements model
   */ 
  interface agreementsFieldRefs {
    readonly location: FieldRef<"agreements", 'String'>
    readonly warranty: FieldRef<"agreements", 'Decimal'>
    readonly percentage: FieldRef<"agreements", 'Decimal'>
    readonly date_signed: FieldRef<"agreements", 'DateTime'>
    readonly airtable_id: FieldRef<"agreements", 'String'>
    readonly client_sheet: FieldRef<"agreements", 'Json'>
    readonly dh_agreement: FieldRef<"agreements", 'String'>
    readonly payment_terms: FieldRef<"agreements", 'Decimal'>
    readonly title_of_the_poc: FieldRef<"agreements", 'String'>
    readonly name_of_the_client: FieldRef<"agreements", 'String'>
    readonly airtable_table_name: FieldRef<"agreements", 'String'>
    readonly airtable_created_time: FieldRef<"agreements", 'String'>
    readonly signed_by__client_poc_: FieldRef<"agreements", 'String'>
    readonly airbyte_raw_id: FieldRef<"agreements", 'String'>
    readonly airbyte_extracted_at: FieldRef<"agreements", 'DateTime'>
    readonly airbyte_generation_id: FieldRef<"agreements", 'BigInt'>
    readonly airbyte_meta: FieldRef<"agreements", 'Json'>
    readonly id: FieldRef<"agreements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * agreements findUnique
   */
  export type agreementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
    /**
     * Filter, which agreements to fetch.
     */
    where: agreementsWhereUniqueInput
  }

  /**
   * agreements findUniqueOrThrow
   */
  export type agreementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
    /**
     * Filter, which agreements to fetch.
     */
    where: agreementsWhereUniqueInput
  }

  /**
   * agreements findFirst
   */
  export type agreementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
    /**
     * Filter, which agreements to fetch.
     */
    where?: agreementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agreements to fetch.
     */
    orderBy?: agreementsOrderByWithRelationInput | agreementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agreements.
     */
    cursor?: agreementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agreements.
     */
    distinct?: AgreementsScalarFieldEnum | AgreementsScalarFieldEnum[]
  }

  /**
   * agreements findFirstOrThrow
   */
  export type agreementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
    /**
     * Filter, which agreements to fetch.
     */
    where?: agreementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agreements to fetch.
     */
    orderBy?: agreementsOrderByWithRelationInput | agreementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agreements.
     */
    cursor?: agreementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agreements.
     */
    distinct?: AgreementsScalarFieldEnum | AgreementsScalarFieldEnum[]
  }

  /**
   * agreements findMany
   */
  export type agreementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
    /**
     * Filter, which agreements to fetch.
     */
    where?: agreementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agreements to fetch.
     */
    orderBy?: agreementsOrderByWithRelationInput | agreementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agreements.
     */
    cursor?: agreementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agreements.
     */
    skip?: number
    distinct?: AgreementsScalarFieldEnum | AgreementsScalarFieldEnum[]
  }

  /**
   * agreements create
   */
  export type agreementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
    /**
     * The data needed to create a agreements.
     */
    data: XOR<agreementsCreateInput, agreementsUncheckedCreateInput>
  }

  /**
   * agreements createMany
   */
  export type agreementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agreements.
     */
    data: agreementsCreateManyInput | agreementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agreements createManyAndReturn
   */
  export type agreementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
    /**
     * The data used to create many agreements.
     */
    data: agreementsCreateManyInput | agreementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agreements update
   */
  export type agreementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
    /**
     * The data needed to update a agreements.
     */
    data: XOR<agreementsUpdateInput, agreementsUncheckedUpdateInput>
    /**
     * Choose, which agreements to update.
     */
    where: agreementsWhereUniqueInput
  }

  /**
   * agreements updateMany
   */
  export type agreementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agreements.
     */
    data: XOR<agreementsUpdateManyMutationInput, agreementsUncheckedUpdateManyInput>
    /**
     * Filter which agreements to update
     */
    where?: agreementsWhereInput
  }

  /**
   * agreements updateManyAndReturn
   */
  export type agreementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
    /**
     * The data used to update agreements.
     */
    data: XOR<agreementsUpdateManyMutationInput, agreementsUncheckedUpdateManyInput>
    /**
     * Filter which agreements to update
     */
    where?: agreementsWhereInput
  }

  /**
   * agreements upsert
   */
  export type agreementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
    /**
     * The filter to search for the agreements to update in case it exists.
     */
    where: agreementsWhereUniqueInput
    /**
     * In case the agreements found by the `where` argument doesn't exist, create a new agreements with this data.
     */
    create: XOR<agreementsCreateInput, agreementsUncheckedCreateInput>
    /**
     * In case the agreements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agreementsUpdateInput, agreementsUncheckedUpdateInput>
  }

  /**
   * agreements delete
   */
  export type agreementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
    /**
     * Filter which agreements to delete.
     */
    where: agreementsWhereUniqueInput
  }

  /**
   * agreements deleteMany
   */
  export type agreementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agreements to delete
     */
    where?: agreementsWhereInput
  }

  /**
   * agreements without action
   */
  export type agreementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agreements
     */
    select?: agreementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agreements
     */
    omit?: agreementsOmit<ExtArgs> | null
  }


  /**
   * Model interviews
   */

  export type AggregateInterviews = {
    _count: InterviewsCountAggregateOutputType | null
    _avg: InterviewsAvgAggregateOutputType | null
    _sum: InterviewsSumAggregateOutputType | null
    _min: InterviewsMinAggregateOutputType | null
    _max: InterviewsMaxAggregateOutputType | null
  }

  export type InterviewsAvgAggregateOutputType = {
    calculation: Decimal | null
    airbyte_generation_id: number | null
  }

  export type InterviewsSumAggregateOutputType = {
    calculation: Decimal | null
    airbyte_generation_id: bigint | null
  }

  export type InterviewsMinAggregateOutputType = {
    name: string | null
    created: Date | null
    feedback_: string | null
    time_zone: string | null
    created_by: string | null
    calculation: Decimal | null
    airtable_id: string | null
    mode_of_interview: string | null
    airtable_table_name: string | null
    airtable_created_time: string | null
    date___time_of_interview: Date | null
    local_time_of_the_interview: string | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type InterviewsMaxAggregateOutputType = {
    name: string | null
    created: Date | null
    feedback_: string | null
    time_zone: string | null
    created_by: string | null
    calculation: Decimal | null
    airtable_id: string | null
    mode_of_interview: string | null
    airtable_table_name: string | null
    airtable_created_time: string | null
    date___time_of_interview: Date | null
    local_time_of_the_interview: string | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type InterviewsCountAggregateOutputType = {
    name: number
    client: number
    created: number
    feedback_: number
    recruiter: number
    time_zone: number
    client_bdm: number
    created_by: number
    calculation: number
    client_name: number
    airtable_id: number
    position_title: number
    records__nested_: number
    research_analyst: number
    mode_of_interview: number
    airtable_table_name: number
    name_of_the_candidate: number
    airtable_created_time: number
    date___time_of_interview: number
    local_time_of_the_interview: number
    client_name__from_client_name_: number
    name__from_name_of_the_candidate_: number
    status__from_name_of_the_candidate_: number
    sourced_from__from_name_of_the_candidate_: number
    reference_number__from_name_of_the_candidate_: number
    reference_number__from_name_of_the_candidate__3: number
    domain_id_s__from_submitted___from_name_of_the_candidate_: number
    airbyte_raw_id: number
    airbyte_extracted_at: number
    airbyte_generation_id: number
    airbyte_meta: number
    id: number
    _all: number
  }


  export type InterviewsAvgAggregateInputType = {
    calculation?: true
    airbyte_generation_id?: true
  }

  export type InterviewsSumAggregateInputType = {
    calculation?: true
    airbyte_generation_id?: true
  }

  export type InterviewsMinAggregateInputType = {
    name?: true
    created?: true
    feedback_?: true
    time_zone?: true
    created_by?: true
    calculation?: true
    airtable_id?: true
    mode_of_interview?: true
    airtable_table_name?: true
    airtable_created_time?: true
    date___time_of_interview?: true
    local_time_of_the_interview?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type InterviewsMaxAggregateInputType = {
    name?: true
    created?: true
    feedback_?: true
    time_zone?: true
    created_by?: true
    calculation?: true
    airtable_id?: true
    mode_of_interview?: true
    airtable_table_name?: true
    airtable_created_time?: true
    date___time_of_interview?: true
    local_time_of_the_interview?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type InterviewsCountAggregateInputType = {
    name?: true
    client?: true
    created?: true
    feedback_?: true
    recruiter?: true
    time_zone?: true
    client_bdm?: true
    created_by?: true
    calculation?: true
    client_name?: true
    airtable_id?: true
    position_title?: true
    records__nested_?: true
    research_analyst?: true
    mode_of_interview?: true
    airtable_table_name?: true
    name_of_the_candidate?: true
    airtable_created_time?: true
    date___time_of_interview?: true
    local_time_of_the_interview?: true
    client_name__from_client_name_?: true
    name__from_name_of_the_candidate_?: true
    status__from_name_of_the_candidate_?: true
    sourced_from__from_name_of_the_candidate_?: true
    reference_number__from_name_of_the_candidate_?: true
    reference_number__from_name_of_the_candidate__3?: true
    domain_id_s__from_submitted___from_name_of_the_candidate_?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    airbyte_meta?: true
    id?: true
    _all?: true
  }

  export type InterviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interviews to aggregate.
     */
    where?: interviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interviews to fetch.
     */
    orderBy?: interviewsOrderByWithRelationInput | interviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: interviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned interviews
    **/
    _count?: true | InterviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewsMaxAggregateInputType
  }

  export type GetInterviewsAggregateType<T extends InterviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviews[P]>
      : GetScalarType<T[P], AggregateInterviews[P]>
  }




  export type interviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: interviewsWhereInput
    orderBy?: interviewsOrderByWithAggregationInput | interviewsOrderByWithAggregationInput[]
    by: InterviewsScalarFieldEnum[] | InterviewsScalarFieldEnum
    having?: interviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewsCountAggregateInputType | true
    _avg?: InterviewsAvgAggregateInputType
    _sum?: InterviewsSumAggregateInputType
    _min?: InterviewsMinAggregateInputType
    _max?: InterviewsMaxAggregateInputType
  }

  export type InterviewsGroupByOutputType = {
    name: string | null
    client: JsonValue | null
    created: Date | null
    feedback_: string | null
    recruiter: JsonValue | null
    time_zone: string | null
    client_bdm: JsonValue | null
    created_by: string | null
    calculation: Decimal | null
    client_name: JsonValue | null
    airtable_id: string | null
    position_title: JsonValue | null
    records__nested_: JsonValue | null
    research_analyst: JsonValue | null
    mode_of_interview: string | null
    airtable_table_name: string | null
    name_of_the_candidate: JsonValue | null
    airtable_created_time: string | null
    date___time_of_interview: Date | null
    local_time_of_the_interview: string | null
    client_name__from_client_name_: JsonValue | null
    name__from_name_of_the_candidate_: JsonValue | null
    status__from_name_of_the_candidate_: JsonValue | null
    sourced_from__from_name_of_the_candidate_: JsonValue | null
    reference_number__from_name_of_the_candidate_: JsonValue | null
    reference_number__from_name_of_the_candidate__3: JsonValue | null
    domain_id_s__from_submitted___from_name_of_the_candidate_: JsonValue | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date
    airbyte_generation_id: bigint | null
    airbyte_meta: JsonValue
    id: string
    _count: InterviewsCountAggregateOutputType | null
    _avg: InterviewsAvgAggregateOutputType | null
    _sum: InterviewsSumAggregateOutputType | null
    _min: InterviewsMinAggregateOutputType | null
    _max: InterviewsMaxAggregateOutputType | null
  }

  type GetInterviewsGroupByPayload<T extends interviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewsGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewsGroupByOutputType[P]>
        }
      >
    >


  export type interviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    client?: boolean
    created?: boolean
    feedback_?: boolean
    recruiter?: boolean
    time_zone?: boolean
    client_bdm?: boolean
    created_by?: boolean
    calculation?: boolean
    client_name?: boolean
    airtable_id?: boolean
    position_title?: boolean
    records__nested_?: boolean
    research_analyst?: boolean
    mode_of_interview?: boolean
    airtable_table_name?: boolean
    name_of_the_candidate?: boolean
    airtable_created_time?: boolean
    date___time_of_interview?: boolean
    local_time_of_the_interview?: boolean
    client_name__from_client_name_?: boolean
    name__from_name_of_the_candidate_?: boolean
    status__from_name_of_the_candidate_?: boolean
    sourced_from__from_name_of_the_candidate_?: boolean
    reference_number__from_name_of_the_candidate_?: boolean
    reference_number__from_name_of_the_candidate__3?: boolean
    domain_id_s__from_submitted___from_name_of_the_candidate_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["interviews"]>

  export type interviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    client?: boolean
    created?: boolean
    feedback_?: boolean
    recruiter?: boolean
    time_zone?: boolean
    client_bdm?: boolean
    created_by?: boolean
    calculation?: boolean
    client_name?: boolean
    airtable_id?: boolean
    position_title?: boolean
    records__nested_?: boolean
    research_analyst?: boolean
    mode_of_interview?: boolean
    airtable_table_name?: boolean
    name_of_the_candidate?: boolean
    airtable_created_time?: boolean
    date___time_of_interview?: boolean
    local_time_of_the_interview?: boolean
    client_name__from_client_name_?: boolean
    name__from_name_of_the_candidate_?: boolean
    status__from_name_of_the_candidate_?: boolean
    sourced_from__from_name_of_the_candidate_?: boolean
    reference_number__from_name_of_the_candidate_?: boolean
    reference_number__from_name_of_the_candidate__3?: boolean
    domain_id_s__from_submitted___from_name_of_the_candidate_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["interviews"]>

  export type interviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    client?: boolean
    created?: boolean
    feedback_?: boolean
    recruiter?: boolean
    time_zone?: boolean
    client_bdm?: boolean
    created_by?: boolean
    calculation?: boolean
    client_name?: boolean
    airtable_id?: boolean
    position_title?: boolean
    records__nested_?: boolean
    research_analyst?: boolean
    mode_of_interview?: boolean
    airtable_table_name?: boolean
    name_of_the_candidate?: boolean
    airtable_created_time?: boolean
    date___time_of_interview?: boolean
    local_time_of_the_interview?: boolean
    client_name__from_client_name_?: boolean
    name__from_name_of_the_candidate_?: boolean
    status__from_name_of_the_candidate_?: boolean
    sourced_from__from_name_of_the_candidate_?: boolean
    reference_number__from_name_of_the_candidate_?: boolean
    reference_number__from_name_of_the_candidate__3?: boolean
    domain_id_s__from_submitted___from_name_of_the_candidate_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["interviews"]>

  export type interviewsSelectScalar = {
    name?: boolean
    client?: boolean
    created?: boolean
    feedback_?: boolean
    recruiter?: boolean
    time_zone?: boolean
    client_bdm?: boolean
    created_by?: boolean
    calculation?: boolean
    client_name?: boolean
    airtable_id?: boolean
    position_title?: boolean
    records__nested_?: boolean
    research_analyst?: boolean
    mode_of_interview?: boolean
    airtable_table_name?: boolean
    name_of_the_candidate?: boolean
    airtable_created_time?: boolean
    date___time_of_interview?: boolean
    local_time_of_the_interview?: boolean
    client_name__from_client_name_?: boolean
    name__from_name_of_the_candidate_?: boolean
    status__from_name_of_the_candidate_?: boolean
    sourced_from__from_name_of_the_candidate_?: boolean
    reference_number__from_name_of_the_candidate_?: boolean
    reference_number__from_name_of_the_candidate__3?: boolean
    domain_id_s__from_submitted___from_name_of_the_candidate_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }

  export type interviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "client" | "created" | "feedback_" | "recruiter" | "time_zone" | "client_bdm" | "created_by" | "calculation" | "client_name" | "airtable_id" | "position_title" | "records__nested_" | "research_analyst" | "mode_of_interview" | "airtable_table_name" | "name_of_the_candidate" | "airtable_created_time" | "date___time_of_interview" | "local_time_of_the_interview" | "client_name__from_client_name_" | "name__from_name_of_the_candidate_" | "status__from_name_of_the_candidate_" | "sourced_from__from_name_of_the_candidate_" | "reference_number__from_name_of_the_candidate_" | "reference_number__from_name_of_the_candidate__3" | "domain_id_s__from_submitted___from_name_of_the_candidate_" | "airbyte_raw_id" | "airbyte_extracted_at" | "airbyte_generation_id" | "airbyte_meta" | "id", ExtArgs["result"]["interviews"]>

  export type $interviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "interviews"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string | null
      client: Prisma.JsonValue | null
      created: Date | null
      feedback_: string | null
      recruiter: Prisma.JsonValue | null
      time_zone: string | null
      client_bdm: Prisma.JsonValue | null
      created_by: string | null
      calculation: Prisma.Decimal | null
      client_name: Prisma.JsonValue | null
      airtable_id: string | null
      position_title: Prisma.JsonValue | null
      records__nested_: Prisma.JsonValue | null
      research_analyst: Prisma.JsonValue | null
      mode_of_interview: string | null
      airtable_table_name: string | null
      name_of_the_candidate: Prisma.JsonValue | null
      airtable_created_time: string | null
      date___time_of_interview: Date | null
      local_time_of_the_interview: string | null
      client_name__from_client_name_: Prisma.JsonValue | null
      name__from_name_of_the_candidate_: Prisma.JsonValue | null
      status__from_name_of_the_candidate_: Prisma.JsonValue | null
      sourced_from__from_name_of_the_candidate_: Prisma.JsonValue | null
      reference_number__from_name_of_the_candidate_: Prisma.JsonValue | null
      reference_number__from_name_of_the_candidate__3: Prisma.JsonValue | null
      domain_id_s__from_submitted___from_name_of_the_candidate_: Prisma.JsonValue | null
      airbyte_raw_id: string
      airbyte_extracted_at: Date
      airbyte_generation_id: bigint | null
      airbyte_meta: Prisma.JsonValue
      id: string
    }, ExtArgs["result"]["interviews"]>
    composites: {}
  }

  type interviewsGetPayload<S extends boolean | null | undefined | interviewsDefaultArgs> = $Result.GetResult<Prisma.$interviewsPayload, S>

  type interviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<interviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewsCountAggregateInputType | true
    }

  export interface interviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['interviews'], meta: { name: 'interviews' } }
    /**
     * Find zero or one Interviews that matches the filter.
     * @param {interviewsFindUniqueArgs} args - Arguments to find a Interviews
     * @example
     * // Get one Interviews
     * const interviews = await prisma.interviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends interviewsFindUniqueArgs>(args: SelectSubset<T, interviewsFindUniqueArgs<ExtArgs>>): Prisma__interviewsClient<$Result.GetResult<Prisma.$interviewsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Interviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {interviewsFindUniqueOrThrowArgs} args - Arguments to find a Interviews
     * @example
     * // Get one Interviews
     * const interviews = await prisma.interviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends interviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, interviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__interviewsClient<$Result.GetResult<Prisma.$interviewsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Interviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewsFindFirstArgs} args - Arguments to find a Interviews
     * @example
     * // Get one Interviews
     * const interviews = await prisma.interviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends interviewsFindFirstArgs>(args?: SelectSubset<T, interviewsFindFirstArgs<ExtArgs>>): Prisma__interviewsClient<$Result.GetResult<Prisma.$interviewsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Interviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewsFindFirstOrThrowArgs} args - Arguments to find a Interviews
     * @example
     * // Get one Interviews
     * const interviews = await prisma.interviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends interviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, interviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__interviewsClient<$Result.GetResult<Prisma.$interviewsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Interviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interviews
     * const interviews = await prisma.interviews.findMany()
     * 
     * // Get first 10 Interviews
     * const interviews = await prisma.interviews.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const interviewsWithNameOnly = await prisma.interviews.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends interviewsFindManyArgs>(args?: SelectSubset<T, interviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interviewsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Interviews.
     * @param {interviewsCreateArgs} args - Arguments to create a Interviews.
     * @example
     * // Create one Interviews
     * const Interviews = await prisma.interviews.create({
     *   data: {
     *     // ... data to create a Interviews
     *   }
     * })
     * 
     */
    create<T extends interviewsCreateArgs>(args: SelectSubset<T, interviewsCreateArgs<ExtArgs>>): Prisma__interviewsClient<$Result.GetResult<Prisma.$interviewsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Interviews.
     * @param {interviewsCreateManyArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interviews = await prisma.interviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends interviewsCreateManyArgs>(args?: SelectSubset<T, interviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interviews and returns the data saved in the database.
     * @param {interviewsCreateManyAndReturnArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interviews = await prisma.interviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interviews and only return the `name`
     * const interviewsWithNameOnly = await prisma.interviews.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends interviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, interviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interviewsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Interviews.
     * @param {interviewsDeleteArgs} args - Arguments to delete one Interviews.
     * @example
     * // Delete one Interviews
     * const Interviews = await prisma.interviews.delete({
     *   where: {
     *     // ... filter to delete one Interviews
     *   }
     * })
     * 
     */
    delete<T extends interviewsDeleteArgs>(args: SelectSubset<T, interviewsDeleteArgs<ExtArgs>>): Prisma__interviewsClient<$Result.GetResult<Prisma.$interviewsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Interviews.
     * @param {interviewsUpdateArgs} args - Arguments to update one Interviews.
     * @example
     * // Update one Interviews
     * const interviews = await prisma.interviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends interviewsUpdateArgs>(args: SelectSubset<T, interviewsUpdateArgs<ExtArgs>>): Prisma__interviewsClient<$Result.GetResult<Prisma.$interviewsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Interviews.
     * @param {interviewsDeleteManyArgs} args - Arguments to filter Interviews to delete.
     * @example
     * // Delete a few Interviews
     * const { count } = await prisma.interviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends interviewsDeleteManyArgs>(args?: SelectSubset<T, interviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interviews
     * const interviews = await prisma.interviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends interviewsUpdateManyArgs>(args: SelectSubset<T, interviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews and returns the data updated in the database.
     * @param {interviewsUpdateManyAndReturnArgs} args - Arguments to update many Interviews.
     * @example
     * // Update many Interviews
     * const interviews = await prisma.interviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interviews and only return the `name`
     * const interviewsWithNameOnly = await prisma.interviews.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends interviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, interviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interviewsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Interviews.
     * @param {interviewsUpsertArgs} args - Arguments to update or create a Interviews.
     * @example
     * // Update or create a Interviews
     * const interviews = await prisma.interviews.upsert({
     *   create: {
     *     // ... data to create a Interviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interviews we want to update
     *   }
     * })
     */
    upsert<T extends interviewsUpsertArgs>(args: SelectSubset<T, interviewsUpsertArgs<ExtArgs>>): Prisma__interviewsClient<$Result.GetResult<Prisma.$interviewsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewsCountArgs} args - Arguments to filter Interviews to count.
     * @example
     * // Count the number of Interviews
     * const count = await prisma.interviews.count({
     *   where: {
     *     // ... the filter for the Interviews we want to count
     *   }
     * })
    **/
    count<T extends interviewsCountArgs>(
      args?: Subset<T, interviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterviewsAggregateArgs>(args: Subset<T, InterviewsAggregateArgs>): Prisma.PrismaPromise<GetInterviewsAggregateType<T>>

    /**
     * Group by Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends interviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: interviewsGroupByArgs['orderBy'] }
        : { orderBy?: interviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, interviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the interviews model
   */
  readonly fields: interviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for interviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__interviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the interviews model
   */ 
  interface interviewsFieldRefs {
    readonly name: FieldRef<"interviews", 'String'>
    readonly client: FieldRef<"interviews", 'Json'>
    readonly created: FieldRef<"interviews", 'DateTime'>
    readonly feedback_: FieldRef<"interviews", 'String'>
    readonly recruiter: FieldRef<"interviews", 'Json'>
    readonly time_zone: FieldRef<"interviews", 'String'>
    readonly client_bdm: FieldRef<"interviews", 'Json'>
    readonly created_by: FieldRef<"interviews", 'String'>
    readonly calculation: FieldRef<"interviews", 'Decimal'>
    readonly client_name: FieldRef<"interviews", 'Json'>
    readonly airtable_id: FieldRef<"interviews", 'String'>
    readonly position_title: FieldRef<"interviews", 'Json'>
    readonly records__nested_: FieldRef<"interviews", 'Json'>
    readonly research_analyst: FieldRef<"interviews", 'Json'>
    readonly mode_of_interview: FieldRef<"interviews", 'String'>
    readonly airtable_table_name: FieldRef<"interviews", 'String'>
    readonly name_of_the_candidate: FieldRef<"interviews", 'Json'>
    readonly airtable_created_time: FieldRef<"interviews", 'String'>
    readonly date___time_of_interview: FieldRef<"interviews", 'DateTime'>
    readonly local_time_of_the_interview: FieldRef<"interviews", 'String'>
    readonly client_name__from_client_name_: FieldRef<"interviews", 'Json'>
    readonly name__from_name_of_the_candidate_: FieldRef<"interviews", 'Json'>
    readonly status__from_name_of_the_candidate_: FieldRef<"interviews", 'Json'>
    readonly sourced_from__from_name_of_the_candidate_: FieldRef<"interviews", 'Json'>
    readonly reference_number__from_name_of_the_candidate_: FieldRef<"interviews", 'Json'>
    readonly reference_number__from_name_of_the_candidate__3: FieldRef<"interviews", 'Json'>
    readonly domain_id_s__from_submitted___from_name_of_the_candidate_: FieldRef<"interviews", 'Json'>
    readonly airbyte_raw_id: FieldRef<"interviews", 'String'>
    readonly airbyte_extracted_at: FieldRef<"interviews", 'DateTime'>
    readonly airbyte_generation_id: FieldRef<"interviews", 'BigInt'>
    readonly airbyte_meta: FieldRef<"interviews", 'Json'>
    readonly id: FieldRef<"interviews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * interviews findUnique
   */
  export type interviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
    /**
     * Filter, which interviews to fetch.
     */
    where: interviewsWhereUniqueInput
  }

  /**
   * interviews findUniqueOrThrow
   */
  export type interviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
    /**
     * Filter, which interviews to fetch.
     */
    where: interviewsWhereUniqueInput
  }

  /**
   * interviews findFirst
   */
  export type interviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
    /**
     * Filter, which interviews to fetch.
     */
    where?: interviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interviews to fetch.
     */
    orderBy?: interviewsOrderByWithRelationInput | interviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interviews.
     */
    cursor?: interviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interviews.
     */
    distinct?: InterviewsScalarFieldEnum | InterviewsScalarFieldEnum[]
  }

  /**
   * interviews findFirstOrThrow
   */
  export type interviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
    /**
     * Filter, which interviews to fetch.
     */
    where?: interviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interviews to fetch.
     */
    orderBy?: interviewsOrderByWithRelationInput | interviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interviews.
     */
    cursor?: interviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interviews.
     */
    distinct?: InterviewsScalarFieldEnum | InterviewsScalarFieldEnum[]
  }

  /**
   * interviews findMany
   */
  export type interviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
    /**
     * Filter, which interviews to fetch.
     */
    where?: interviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interviews to fetch.
     */
    orderBy?: interviewsOrderByWithRelationInput | interviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing interviews.
     */
    cursor?: interviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interviews.
     */
    skip?: number
    distinct?: InterviewsScalarFieldEnum | InterviewsScalarFieldEnum[]
  }

  /**
   * interviews create
   */
  export type interviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
    /**
     * The data needed to create a interviews.
     */
    data: XOR<interviewsCreateInput, interviewsUncheckedCreateInput>
  }

  /**
   * interviews createMany
   */
  export type interviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many interviews.
     */
    data: interviewsCreateManyInput | interviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * interviews createManyAndReturn
   */
  export type interviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
    /**
     * The data used to create many interviews.
     */
    data: interviewsCreateManyInput | interviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * interviews update
   */
  export type interviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
    /**
     * The data needed to update a interviews.
     */
    data: XOR<interviewsUpdateInput, interviewsUncheckedUpdateInput>
    /**
     * Choose, which interviews to update.
     */
    where: interviewsWhereUniqueInput
  }

  /**
   * interviews updateMany
   */
  export type interviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update interviews.
     */
    data: XOR<interviewsUpdateManyMutationInput, interviewsUncheckedUpdateManyInput>
    /**
     * Filter which interviews to update
     */
    where?: interviewsWhereInput
  }

  /**
   * interviews updateManyAndReturn
   */
  export type interviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
    /**
     * The data used to update interviews.
     */
    data: XOR<interviewsUpdateManyMutationInput, interviewsUncheckedUpdateManyInput>
    /**
     * Filter which interviews to update
     */
    where?: interviewsWhereInput
  }

  /**
   * interviews upsert
   */
  export type interviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
    /**
     * The filter to search for the interviews to update in case it exists.
     */
    where: interviewsWhereUniqueInput
    /**
     * In case the interviews found by the `where` argument doesn't exist, create a new interviews with this data.
     */
    create: XOR<interviewsCreateInput, interviewsUncheckedCreateInput>
    /**
     * In case the interviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<interviewsUpdateInput, interviewsUncheckedUpdateInput>
  }

  /**
   * interviews delete
   */
  export type interviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
    /**
     * Filter which interviews to delete.
     */
    where: interviewsWhereUniqueInput
  }

  /**
   * interviews deleteMany
   */
  export type interviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interviews to delete
     */
    where?: interviewsWhereInput
  }

  /**
   * interviews without action
   */
  export type interviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interviews
     */
    select?: interviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interviews
     */
    omit?: interviewsOmit<ExtArgs> | null
  }


  /**
   * Model legacy_positions
   */

  export type AggregateLegacy_positions = {
    _count: Legacy_positionsCountAggregateOutputType | null
    _min: Legacy_positionsMinAggregateOutputType | null
    _max: Legacy_positionsMaxAggregateOutputType | null
  }

  export type Legacy_positionsMinAggregateOutputType = {
    month: string | null
    string: string | null
    created: Date | null
    location: string | null
    position: string | null
    created_by: string | null
    airtable_id: string | null
    position_title: string | null
    airtable_table_name: string | null
    job_description_link: string | null
    airtable_created_time: string | null
    job_drescription_text_: string | null
    position_active_inactive: string | null
    job_description_attachment: string | null
    candidate_submission_sheet_copy: string | null
    id: string | null
  }

  export type Legacy_positionsMaxAggregateOutputType = {
    month: string | null
    string: string | null
    created: Date | null
    location: string | null
    position: string | null
    created_by: string | null
    airtable_id: string | null
    position_title: string | null
    airtable_table_name: string | null
    job_description_link: string | null
    airtable_created_time: string | null
    job_drescription_text_: string | null
    position_active_inactive: string | null
    job_description_attachment: string | null
    candidate_submission_sheet_copy: string | null
    id: string | null
  }

  export type Legacy_positionsCountAggregateOutputType = {
    month: number
    string: number
    created: number
    location: number
    position: number
    client_bdm: number
    created_by: number
    airtable_id: number
    client_sheet: number
    position_title: number
    interview_sheet: number
    recruiters_assign: number
    airtable_table_name: number
    job_description_link: number
    airtable_created_time: number
    job_drescription_text_: number
    position_active_inactive: number
    candidate_submission_sheet: number
    job_description_attachment: number
    status__from_client_sheet_: number
    candidate_submission_sheet_copy: number
    domain_id_s__from_recruiters_assign_: number
    research_analyst__from_client_sheet_: number
    status__from_candidate_submission_sheet_: number
    domain_id_s__from_opened_by___from_client_sheet_: number
    id: number
    _all: number
  }


  export type Legacy_positionsMinAggregateInputType = {
    month?: true
    string?: true
    created?: true
    location?: true
    position?: true
    created_by?: true
    airtable_id?: true
    position_title?: true
    airtable_table_name?: true
    job_description_link?: true
    airtable_created_time?: true
    job_drescription_text_?: true
    position_active_inactive?: true
    job_description_attachment?: true
    candidate_submission_sheet_copy?: true
    id?: true
  }

  export type Legacy_positionsMaxAggregateInputType = {
    month?: true
    string?: true
    created?: true
    location?: true
    position?: true
    created_by?: true
    airtable_id?: true
    position_title?: true
    airtable_table_name?: true
    job_description_link?: true
    airtable_created_time?: true
    job_drescription_text_?: true
    position_active_inactive?: true
    job_description_attachment?: true
    candidate_submission_sheet_copy?: true
    id?: true
  }

  export type Legacy_positionsCountAggregateInputType = {
    month?: true
    string?: true
    created?: true
    location?: true
    position?: true
    client_bdm?: true
    created_by?: true
    airtable_id?: true
    client_sheet?: true
    position_title?: true
    interview_sheet?: true
    recruiters_assign?: true
    airtable_table_name?: true
    job_description_link?: true
    airtable_created_time?: true
    job_drescription_text_?: true
    position_active_inactive?: true
    candidate_submission_sheet?: true
    job_description_attachment?: true
    status__from_client_sheet_?: true
    candidate_submission_sheet_copy?: true
    domain_id_s__from_recruiters_assign_?: true
    research_analyst__from_client_sheet_?: true
    status__from_candidate_submission_sheet_?: true
    domain_id_s__from_opened_by___from_client_sheet_?: true
    id?: true
    _all?: true
  }

  export type Legacy_positionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which legacy_positions to aggregate.
     */
    where?: legacy_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legacy_positions to fetch.
     */
    orderBy?: legacy_positionsOrderByWithRelationInput | legacy_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: legacy_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legacy_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legacy_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned legacy_positions
    **/
    _count?: true | Legacy_positionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Legacy_positionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Legacy_positionsMaxAggregateInputType
  }

  export type GetLegacy_positionsAggregateType<T extends Legacy_positionsAggregateArgs> = {
        [P in keyof T & keyof AggregateLegacy_positions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegacy_positions[P]>
      : GetScalarType<T[P], AggregateLegacy_positions[P]>
  }




  export type legacy_positionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: legacy_positionsWhereInput
    orderBy?: legacy_positionsOrderByWithAggregationInput | legacy_positionsOrderByWithAggregationInput[]
    by: Legacy_positionsScalarFieldEnum[] | Legacy_positionsScalarFieldEnum
    having?: legacy_positionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Legacy_positionsCountAggregateInputType | true
    _min?: Legacy_positionsMinAggregateInputType
    _max?: Legacy_positionsMaxAggregateInputType
  }

  export type Legacy_positionsGroupByOutputType = {
    month: string | null
    string: string | null
    created: Date | null
    location: string | null
    position: string | null
    client_bdm: JsonValue | null
    created_by: string | null
    airtable_id: string | null
    client_sheet: JsonValue | null
    position_title: string | null
    interview_sheet: JsonValue | null
    recruiters_assign: JsonValue | null
    airtable_table_name: string | null
    job_description_link: string | null
    airtable_created_time: string | null
    job_drescription_text_: string | null
    position_active_inactive: string | null
    candidate_submission_sheet: JsonValue | null
    job_description_attachment: string | null
    status__from_client_sheet_: JsonValue | null
    candidate_submission_sheet_copy: string | null
    domain_id_s__from_recruiters_assign_: JsonValue | null
    research_analyst__from_client_sheet_: JsonValue | null
    status__from_candidate_submission_sheet_: JsonValue | null
    domain_id_s__from_opened_by___from_client_sheet_: JsonValue | null
    id: string
    _count: Legacy_positionsCountAggregateOutputType | null
    _min: Legacy_positionsMinAggregateOutputType | null
    _max: Legacy_positionsMaxAggregateOutputType | null
  }

  type GetLegacy_positionsGroupByPayload<T extends legacy_positionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Legacy_positionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Legacy_positionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Legacy_positionsGroupByOutputType[P]>
            : GetScalarType<T[P], Legacy_positionsGroupByOutputType[P]>
        }
      >
    >


  export type legacy_positionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    month?: boolean
    string?: boolean
    created?: boolean
    location?: boolean
    position?: boolean
    client_bdm?: boolean
    created_by?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    position_title?: boolean
    interview_sheet?: boolean
    recruiters_assign?: boolean
    airtable_table_name?: boolean
    job_description_link?: boolean
    airtable_created_time?: boolean
    job_drescription_text_?: boolean
    position_active_inactive?: boolean
    candidate_submission_sheet?: boolean
    job_description_attachment?: boolean
    status__from_client_sheet_?: boolean
    candidate_submission_sheet_copy?: boolean
    domain_id_s__from_recruiters_assign_?: boolean
    research_analyst__from_client_sheet_?: boolean
    status__from_candidate_submission_sheet_?: boolean
    domain_id_s__from_opened_by___from_client_sheet_?: boolean
    id?: boolean
  }, ExtArgs["result"]["legacy_positions"]>

  export type legacy_positionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    month?: boolean
    string?: boolean
    created?: boolean
    location?: boolean
    position?: boolean
    client_bdm?: boolean
    created_by?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    position_title?: boolean
    interview_sheet?: boolean
    recruiters_assign?: boolean
    airtable_table_name?: boolean
    job_description_link?: boolean
    airtable_created_time?: boolean
    job_drescription_text_?: boolean
    position_active_inactive?: boolean
    candidate_submission_sheet?: boolean
    job_description_attachment?: boolean
    status__from_client_sheet_?: boolean
    candidate_submission_sheet_copy?: boolean
    domain_id_s__from_recruiters_assign_?: boolean
    research_analyst__from_client_sheet_?: boolean
    status__from_candidate_submission_sheet_?: boolean
    domain_id_s__from_opened_by___from_client_sheet_?: boolean
    id?: boolean
  }, ExtArgs["result"]["legacy_positions"]>

  export type legacy_positionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    month?: boolean
    string?: boolean
    created?: boolean
    location?: boolean
    position?: boolean
    client_bdm?: boolean
    created_by?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    position_title?: boolean
    interview_sheet?: boolean
    recruiters_assign?: boolean
    airtable_table_name?: boolean
    job_description_link?: boolean
    airtable_created_time?: boolean
    job_drescription_text_?: boolean
    position_active_inactive?: boolean
    candidate_submission_sheet?: boolean
    job_description_attachment?: boolean
    status__from_client_sheet_?: boolean
    candidate_submission_sheet_copy?: boolean
    domain_id_s__from_recruiters_assign_?: boolean
    research_analyst__from_client_sheet_?: boolean
    status__from_candidate_submission_sheet_?: boolean
    domain_id_s__from_opened_by___from_client_sheet_?: boolean
    id?: boolean
  }, ExtArgs["result"]["legacy_positions"]>

  export type legacy_positionsSelectScalar = {
    month?: boolean
    string?: boolean
    created?: boolean
    location?: boolean
    position?: boolean
    client_bdm?: boolean
    created_by?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    position_title?: boolean
    interview_sheet?: boolean
    recruiters_assign?: boolean
    airtable_table_name?: boolean
    job_description_link?: boolean
    airtable_created_time?: boolean
    job_drescription_text_?: boolean
    position_active_inactive?: boolean
    candidate_submission_sheet?: boolean
    job_description_attachment?: boolean
    status__from_client_sheet_?: boolean
    candidate_submission_sheet_copy?: boolean
    domain_id_s__from_recruiters_assign_?: boolean
    research_analyst__from_client_sheet_?: boolean
    status__from_candidate_submission_sheet_?: boolean
    domain_id_s__from_opened_by___from_client_sheet_?: boolean
    id?: boolean
  }

  export type legacy_positionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"month" | "string" | "created" | "location" | "position" | "client_bdm" | "created_by" | "airtable_id" | "client_sheet" | "position_title" | "interview_sheet" | "recruiters_assign" | "airtable_table_name" | "job_description_link" | "airtable_created_time" | "job_drescription_text_" | "position_active_inactive" | "candidate_submission_sheet" | "job_description_attachment" | "status__from_client_sheet_" | "candidate_submission_sheet_copy" | "domain_id_s__from_recruiters_assign_" | "research_analyst__from_client_sheet_" | "status__from_candidate_submission_sheet_" | "domain_id_s__from_opened_by___from_client_sheet_" | "id", ExtArgs["result"]["legacy_positions"]>

  export type $legacy_positionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "legacy_positions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      month: string | null
      string: string | null
      created: Date | null
      location: string | null
      position: string | null
      client_bdm: Prisma.JsonValue | null
      created_by: string | null
      airtable_id: string | null
      client_sheet: Prisma.JsonValue | null
      position_title: string | null
      interview_sheet: Prisma.JsonValue | null
      recruiters_assign: Prisma.JsonValue | null
      airtable_table_name: string | null
      job_description_link: string | null
      airtable_created_time: string | null
      job_drescription_text_: string | null
      position_active_inactive: string | null
      candidate_submission_sheet: Prisma.JsonValue | null
      job_description_attachment: string | null
      status__from_client_sheet_: Prisma.JsonValue | null
      candidate_submission_sheet_copy: string | null
      domain_id_s__from_recruiters_assign_: Prisma.JsonValue | null
      research_analyst__from_client_sheet_: Prisma.JsonValue | null
      status__from_candidate_submission_sheet_: Prisma.JsonValue | null
      domain_id_s__from_opened_by___from_client_sheet_: Prisma.JsonValue | null
      id: string
    }, ExtArgs["result"]["legacy_positions"]>
    composites: {}
  }

  type legacy_positionsGetPayload<S extends boolean | null | undefined | legacy_positionsDefaultArgs> = $Result.GetResult<Prisma.$legacy_positionsPayload, S>

  type legacy_positionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<legacy_positionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Legacy_positionsCountAggregateInputType | true
    }

  export interface legacy_positionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['legacy_positions'], meta: { name: 'legacy_positions' } }
    /**
     * Find zero or one Legacy_positions that matches the filter.
     * @param {legacy_positionsFindUniqueArgs} args - Arguments to find a Legacy_positions
     * @example
     * // Get one Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends legacy_positionsFindUniqueArgs>(args: SelectSubset<T, legacy_positionsFindUniqueArgs<ExtArgs>>): Prisma__legacy_positionsClient<$Result.GetResult<Prisma.$legacy_positionsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Legacy_positions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {legacy_positionsFindUniqueOrThrowArgs} args - Arguments to find a Legacy_positions
     * @example
     * // Get one Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends legacy_positionsFindUniqueOrThrowArgs>(args: SelectSubset<T, legacy_positionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__legacy_positionsClient<$Result.GetResult<Prisma.$legacy_positionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Legacy_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_positionsFindFirstArgs} args - Arguments to find a Legacy_positions
     * @example
     * // Get one Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends legacy_positionsFindFirstArgs>(args?: SelectSubset<T, legacy_positionsFindFirstArgs<ExtArgs>>): Prisma__legacy_positionsClient<$Result.GetResult<Prisma.$legacy_positionsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Legacy_positions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_positionsFindFirstOrThrowArgs} args - Arguments to find a Legacy_positions
     * @example
     * // Get one Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends legacy_positionsFindFirstOrThrowArgs>(args?: SelectSubset<T, legacy_positionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__legacy_positionsClient<$Result.GetResult<Prisma.$legacy_positionsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Legacy_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_positionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.findMany()
     * 
     * // Get first 10 Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.findMany({ take: 10 })
     * 
     * // Only select the `month`
     * const legacy_positionsWithMonthOnly = await prisma.legacy_positions.findMany({ select: { month: true } })
     * 
     */
    findMany<T extends legacy_positionsFindManyArgs>(args?: SelectSubset<T, legacy_positionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$legacy_positionsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Legacy_positions.
     * @param {legacy_positionsCreateArgs} args - Arguments to create a Legacy_positions.
     * @example
     * // Create one Legacy_positions
     * const Legacy_positions = await prisma.legacy_positions.create({
     *   data: {
     *     // ... data to create a Legacy_positions
     *   }
     * })
     * 
     */
    create<T extends legacy_positionsCreateArgs>(args: SelectSubset<T, legacy_positionsCreateArgs<ExtArgs>>): Prisma__legacy_positionsClient<$Result.GetResult<Prisma.$legacy_positionsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Legacy_positions.
     * @param {legacy_positionsCreateManyArgs} args - Arguments to create many Legacy_positions.
     * @example
     * // Create many Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends legacy_positionsCreateManyArgs>(args?: SelectSubset<T, legacy_positionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Legacy_positions and returns the data saved in the database.
     * @param {legacy_positionsCreateManyAndReturnArgs} args - Arguments to create many Legacy_positions.
     * @example
     * // Create many Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Legacy_positions and only return the `month`
     * const legacy_positionsWithMonthOnly = await prisma.legacy_positions.createManyAndReturn({
     *   select: { month: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends legacy_positionsCreateManyAndReturnArgs>(args?: SelectSubset<T, legacy_positionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$legacy_positionsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Legacy_positions.
     * @param {legacy_positionsDeleteArgs} args - Arguments to delete one Legacy_positions.
     * @example
     * // Delete one Legacy_positions
     * const Legacy_positions = await prisma.legacy_positions.delete({
     *   where: {
     *     // ... filter to delete one Legacy_positions
     *   }
     * })
     * 
     */
    delete<T extends legacy_positionsDeleteArgs>(args: SelectSubset<T, legacy_positionsDeleteArgs<ExtArgs>>): Prisma__legacy_positionsClient<$Result.GetResult<Prisma.$legacy_positionsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Legacy_positions.
     * @param {legacy_positionsUpdateArgs} args - Arguments to update one Legacy_positions.
     * @example
     * // Update one Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends legacy_positionsUpdateArgs>(args: SelectSubset<T, legacy_positionsUpdateArgs<ExtArgs>>): Prisma__legacy_positionsClient<$Result.GetResult<Prisma.$legacy_positionsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Legacy_positions.
     * @param {legacy_positionsDeleteManyArgs} args - Arguments to filter Legacy_positions to delete.
     * @example
     * // Delete a few Legacy_positions
     * const { count } = await prisma.legacy_positions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends legacy_positionsDeleteManyArgs>(args?: SelectSubset<T, legacy_positionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legacy_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_positionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends legacy_positionsUpdateManyArgs>(args: SelectSubset<T, legacy_positionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legacy_positions and returns the data updated in the database.
     * @param {legacy_positionsUpdateManyAndReturnArgs} args - Arguments to update many Legacy_positions.
     * @example
     * // Update many Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Legacy_positions and only return the `month`
     * const legacy_positionsWithMonthOnly = await prisma.legacy_positions.updateManyAndReturn({
     *   select: { month: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends legacy_positionsUpdateManyAndReturnArgs>(args: SelectSubset<T, legacy_positionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$legacy_positionsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Legacy_positions.
     * @param {legacy_positionsUpsertArgs} args - Arguments to update or create a Legacy_positions.
     * @example
     * // Update or create a Legacy_positions
     * const legacy_positions = await prisma.legacy_positions.upsert({
     *   create: {
     *     // ... data to create a Legacy_positions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Legacy_positions we want to update
     *   }
     * })
     */
    upsert<T extends legacy_positionsUpsertArgs>(args: SelectSubset<T, legacy_positionsUpsertArgs<ExtArgs>>): Prisma__legacy_positionsClient<$Result.GetResult<Prisma.$legacy_positionsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Legacy_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_positionsCountArgs} args - Arguments to filter Legacy_positions to count.
     * @example
     * // Count the number of Legacy_positions
     * const count = await prisma.legacy_positions.count({
     *   where: {
     *     // ... the filter for the Legacy_positions we want to count
     *   }
     * })
    **/
    count<T extends legacy_positionsCountArgs>(
      args?: Subset<T, legacy_positionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Legacy_positionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Legacy_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Legacy_positionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Legacy_positionsAggregateArgs>(args: Subset<T, Legacy_positionsAggregateArgs>): Prisma.PrismaPromise<GetLegacy_positionsAggregateType<T>>

    /**
     * Group by Legacy_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_positionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends legacy_positionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: legacy_positionsGroupByArgs['orderBy'] }
        : { orderBy?: legacy_positionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, legacy_positionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegacy_positionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the legacy_positions model
   */
  readonly fields: legacy_positionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for legacy_positions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__legacy_positionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the legacy_positions model
   */ 
  interface legacy_positionsFieldRefs {
    readonly month: FieldRef<"legacy_positions", 'String'>
    readonly string: FieldRef<"legacy_positions", 'String'>
    readonly created: FieldRef<"legacy_positions", 'DateTime'>
    readonly location: FieldRef<"legacy_positions", 'String'>
    readonly position: FieldRef<"legacy_positions", 'String'>
    readonly client_bdm: FieldRef<"legacy_positions", 'Json'>
    readonly created_by: FieldRef<"legacy_positions", 'String'>
    readonly airtable_id: FieldRef<"legacy_positions", 'String'>
    readonly client_sheet: FieldRef<"legacy_positions", 'Json'>
    readonly position_title: FieldRef<"legacy_positions", 'String'>
    readonly interview_sheet: FieldRef<"legacy_positions", 'Json'>
    readonly recruiters_assign: FieldRef<"legacy_positions", 'Json'>
    readonly airtable_table_name: FieldRef<"legacy_positions", 'String'>
    readonly job_description_link: FieldRef<"legacy_positions", 'String'>
    readonly airtable_created_time: FieldRef<"legacy_positions", 'String'>
    readonly job_drescription_text_: FieldRef<"legacy_positions", 'String'>
    readonly position_active_inactive: FieldRef<"legacy_positions", 'String'>
    readonly candidate_submission_sheet: FieldRef<"legacy_positions", 'Json'>
    readonly job_description_attachment: FieldRef<"legacy_positions", 'String'>
    readonly status__from_client_sheet_: FieldRef<"legacy_positions", 'Json'>
    readonly candidate_submission_sheet_copy: FieldRef<"legacy_positions", 'String'>
    readonly domain_id_s__from_recruiters_assign_: FieldRef<"legacy_positions", 'Json'>
    readonly research_analyst__from_client_sheet_: FieldRef<"legacy_positions", 'Json'>
    readonly status__from_candidate_submission_sheet_: FieldRef<"legacy_positions", 'Json'>
    readonly domain_id_s__from_opened_by___from_client_sheet_: FieldRef<"legacy_positions", 'Json'>
    readonly id: FieldRef<"legacy_positions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * legacy_positions findUnique
   */
  export type legacy_positionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
    /**
     * Filter, which legacy_positions to fetch.
     */
    where: legacy_positionsWhereUniqueInput
  }

  /**
   * legacy_positions findUniqueOrThrow
   */
  export type legacy_positionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
    /**
     * Filter, which legacy_positions to fetch.
     */
    where: legacy_positionsWhereUniqueInput
  }

  /**
   * legacy_positions findFirst
   */
  export type legacy_positionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
    /**
     * Filter, which legacy_positions to fetch.
     */
    where?: legacy_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legacy_positions to fetch.
     */
    orderBy?: legacy_positionsOrderByWithRelationInput | legacy_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for legacy_positions.
     */
    cursor?: legacy_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legacy_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legacy_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of legacy_positions.
     */
    distinct?: Legacy_positionsScalarFieldEnum | Legacy_positionsScalarFieldEnum[]
  }

  /**
   * legacy_positions findFirstOrThrow
   */
  export type legacy_positionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
    /**
     * Filter, which legacy_positions to fetch.
     */
    where?: legacy_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legacy_positions to fetch.
     */
    orderBy?: legacy_positionsOrderByWithRelationInput | legacy_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for legacy_positions.
     */
    cursor?: legacy_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legacy_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legacy_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of legacy_positions.
     */
    distinct?: Legacy_positionsScalarFieldEnum | Legacy_positionsScalarFieldEnum[]
  }

  /**
   * legacy_positions findMany
   */
  export type legacy_positionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
    /**
     * Filter, which legacy_positions to fetch.
     */
    where?: legacy_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legacy_positions to fetch.
     */
    orderBy?: legacy_positionsOrderByWithRelationInput | legacy_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing legacy_positions.
     */
    cursor?: legacy_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legacy_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legacy_positions.
     */
    skip?: number
    distinct?: Legacy_positionsScalarFieldEnum | Legacy_positionsScalarFieldEnum[]
  }

  /**
   * legacy_positions create
   */
  export type legacy_positionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
    /**
     * The data needed to create a legacy_positions.
     */
    data?: XOR<legacy_positionsCreateInput, legacy_positionsUncheckedCreateInput>
  }

  /**
   * legacy_positions createMany
   */
  export type legacy_positionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many legacy_positions.
     */
    data: legacy_positionsCreateManyInput | legacy_positionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * legacy_positions createManyAndReturn
   */
  export type legacy_positionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
    /**
     * The data used to create many legacy_positions.
     */
    data: legacy_positionsCreateManyInput | legacy_positionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * legacy_positions update
   */
  export type legacy_positionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
    /**
     * The data needed to update a legacy_positions.
     */
    data: XOR<legacy_positionsUpdateInput, legacy_positionsUncheckedUpdateInput>
    /**
     * Choose, which legacy_positions to update.
     */
    where: legacy_positionsWhereUniqueInput
  }

  /**
   * legacy_positions updateMany
   */
  export type legacy_positionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update legacy_positions.
     */
    data: XOR<legacy_positionsUpdateManyMutationInput, legacy_positionsUncheckedUpdateManyInput>
    /**
     * Filter which legacy_positions to update
     */
    where?: legacy_positionsWhereInput
  }

  /**
   * legacy_positions updateManyAndReturn
   */
  export type legacy_positionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
    /**
     * The data used to update legacy_positions.
     */
    data: XOR<legacy_positionsUpdateManyMutationInput, legacy_positionsUncheckedUpdateManyInput>
    /**
     * Filter which legacy_positions to update
     */
    where?: legacy_positionsWhereInput
  }

  /**
   * legacy_positions upsert
   */
  export type legacy_positionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
    /**
     * The filter to search for the legacy_positions to update in case it exists.
     */
    where: legacy_positionsWhereUniqueInput
    /**
     * In case the legacy_positions found by the `where` argument doesn't exist, create a new legacy_positions with this data.
     */
    create: XOR<legacy_positionsCreateInput, legacy_positionsUncheckedCreateInput>
    /**
     * In case the legacy_positions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<legacy_positionsUpdateInput, legacy_positionsUncheckedUpdateInput>
  }

  /**
   * legacy_positions delete
   */
  export type legacy_positionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
    /**
     * Filter which legacy_positions to delete.
     */
    where: legacy_positionsWhereUniqueInput
  }

  /**
   * legacy_positions deleteMany
   */
  export type legacy_positionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which legacy_positions to delete
     */
    where?: legacy_positionsWhereInput
  }

  /**
   * legacy_positions without action
   */
  export type legacy_positionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_positions
     */
    select?: legacy_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_positions
     */
    omit?: legacy_positionsOmit<ExtArgs> | null
  }


  /**
   * Model organizations
   */

  export type AggregateOrganizations = {
    _count: OrganizationsCountAggregateOutputType | null
    _avg: OrganizationsAvgAggregateOutputType | null
    _sum: OrganizationsSumAggregateOutputType | null
    _min: OrganizationsMinAggregateOutputType | null
    _max: OrganizationsMaxAggregateOutputType | null
  }

  export type OrganizationsAvgAggregateOutputType = {
    flat_fee: Decimal | null
    percentage: Decimal | null
    no_of_positions: Decimal | null
    no_of_submissions: Decimal | null
    airbyte_generation_id: number | null
  }

  export type OrganizationsSumAggregateOutputType = {
    flat_fee: Decimal | null
    percentage: Decimal | null
    no_of_positions: Decimal | null
    no_of_submissions: Decimal | null
    airbyte_generation_id: bigint | null
  }

  export type OrganizationsMinAggregateOutputType = {
    date: Date | null
    client: string | null
    status: string | null
    created: Date | null
    website: string | null
    bdm_user: string | null
    flat_fee: Decimal | null
    poc_name: string | null
    location_: string | null
    poc_email: string | null
    created_by: string | null
    percentage: Decimal | null
    client_name: string | null
    reached_out: boolean | null
    airtable_id: string | null
    dh_agreement: string | null
    email_domain: string | null
    conversations: string | null
    website_domain: string | null
    no_contact_list: boolean | null
    no_of_positions: Decimal | null
    last_reached_out: Date | null
    poc_phone_number: string | null
    reference_number: string | null
    research_analyst: string | null
    research_comment: string | null
    no_of_submissions: Decimal | null
    airtable_table_name: string | null
    research_domain_id_s: string | null
    airtable_created_time: string | null
    is_this_a_flat_fee_or_percentage_: string | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type OrganizationsMaxAggregateOutputType = {
    date: Date | null
    client: string | null
    status: string | null
    created: Date | null
    website: string | null
    bdm_user: string | null
    flat_fee: Decimal | null
    poc_name: string | null
    location_: string | null
    poc_email: string | null
    created_by: string | null
    percentage: Decimal | null
    client_name: string | null
    reached_out: boolean | null
    airtable_id: string | null
    dh_agreement: string | null
    email_domain: string | null
    conversations: string | null
    website_domain: string | null
    no_contact_list: boolean | null
    no_of_positions: Decimal | null
    last_reached_out: Date | null
    poc_phone_number: string | null
    reference_number: string | null
    research_analyst: string | null
    research_comment: string | null
    no_of_submissions: Decimal | null
    airtable_table_name: string | null
    research_domain_id_s: string | null
    airtable_created_time: string | null
    is_this_a_flat_fee_or_percentage_: string | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type OrganizationsCountAggregateOutputType = {
    date: number
    tasks: number
    client: number
    status: number
    created: number
    website: number
    bdm_user: number
    flat_fee: number
    poc_name: number
    location_: number
    opened_by: number
    poc_email: number
    positions: number
    created_by: number
    percentage: number
    client_name: number
    reached_out: number
    sumbissions: number
    airtable_id: number
    dependencies: number
    dh_agreement: number
    email_domain: number
    conversations: number
    new_positions: number
    website_domain: number
    interview_sheet: number
    no_contact_list: number
    no_of_positions: number
    last_reached_out: number
    poc_phone_number: number
    reference_number: number
    research_analyst: number
    research_comment: number
    no_of_submissions: number
    airtable_table_name: number
    research_domain_id_s: number
    airtable_created_time: number
    direct_hire_agreements: number
    status__from_sumbissions_: number
    domain_id_s__from_opened_by_: number
    is_this_a_flat_fee_or_percentage_: number
    airbyte_raw_id: number
    airbyte_extracted_at: number
    airbyte_generation_id: number
    airbyte_meta: number
    id: number
    _all: number
  }


  export type OrganizationsAvgAggregateInputType = {
    flat_fee?: true
    percentage?: true
    no_of_positions?: true
    no_of_submissions?: true
    airbyte_generation_id?: true
  }

  export type OrganizationsSumAggregateInputType = {
    flat_fee?: true
    percentage?: true
    no_of_positions?: true
    no_of_submissions?: true
    airbyte_generation_id?: true
  }

  export type OrganizationsMinAggregateInputType = {
    date?: true
    client?: true
    status?: true
    created?: true
    website?: true
    bdm_user?: true
    flat_fee?: true
    poc_name?: true
    location_?: true
    poc_email?: true
    created_by?: true
    percentage?: true
    client_name?: true
    reached_out?: true
    airtable_id?: true
    dh_agreement?: true
    email_domain?: true
    conversations?: true
    website_domain?: true
    no_contact_list?: true
    no_of_positions?: true
    last_reached_out?: true
    poc_phone_number?: true
    reference_number?: true
    research_analyst?: true
    research_comment?: true
    no_of_submissions?: true
    airtable_table_name?: true
    research_domain_id_s?: true
    airtable_created_time?: true
    is_this_a_flat_fee_or_percentage_?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type OrganizationsMaxAggregateInputType = {
    date?: true
    client?: true
    status?: true
    created?: true
    website?: true
    bdm_user?: true
    flat_fee?: true
    poc_name?: true
    location_?: true
    poc_email?: true
    created_by?: true
    percentage?: true
    client_name?: true
    reached_out?: true
    airtable_id?: true
    dh_agreement?: true
    email_domain?: true
    conversations?: true
    website_domain?: true
    no_contact_list?: true
    no_of_positions?: true
    last_reached_out?: true
    poc_phone_number?: true
    reference_number?: true
    research_analyst?: true
    research_comment?: true
    no_of_submissions?: true
    airtable_table_name?: true
    research_domain_id_s?: true
    airtable_created_time?: true
    is_this_a_flat_fee_or_percentage_?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type OrganizationsCountAggregateInputType = {
    date?: true
    tasks?: true
    client?: true
    status?: true
    created?: true
    website?: true
    bdm_user?: true
    flat_fee?: true
    poc_name?: true
    location_?: true
    opened_by?: true
    poc_email?: true
    positions?: true
    created_by?: true
    percentage?: true
    client_name?: true
    reached_out?: true
    sumbissions?: true
    airtable_id?: true
    dependencies?: true
    dh_agreement?: true
    email_domain?: true
    conversations?: true
    new_positions?: true
    website_domain?: true
    interview_sheet?: true
    no_contact_list?: true
    no_of_positions?: true
    last_reached_out?: true
    poc_phone_number?: true
    reference_number?: true
    research_analyst?: true
    research_comment?: true
    no_of_submissions?: true
    airtable_table_name?: true
    research_domain_id_s?: true
    airtable_created_time?: true
    direct_hire_agreements?: true
    status__from_sumbissions_?: true
    domain_id_s__from_opened_by_?: true
    is_this_a_flat_fee_or_percentage_?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    airbyte_meta?: true
    id?: true
    _all?: true
  }

  export type OrganizationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to aggregate.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizations
    **/
    _count?: true | OrganizationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationsMaxAggregateInputType
  }

  export type GetOrganizationsAggregateType<T extends OrganizationsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizations[P]>
      : GetScalarType<T[P], AggregateOrganizations[P]>
  }




  export type organizationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationsWhereInput
    orderBy?: organizationsOrderByWithAggregationInput | organizationsOrderByWithAggregationInput[]
    by: OrganizationsScalarFieldEnum[] | OrganizationsScalarFieldEnum
    having?: organizationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationsCountAggregateInputType | true
    _avg?: OrganizationsAvgAggregateInputType
    _sum?: OrganizationsSumAggregateInputType
    _min?: OrganizationsMinAggregateInputType
    _max?: OrganizationsMaxAggregateInputType
  }

  export type OrganizationsGroupByOutputType = {
    date: Date | null
    tasks: JsonValue | null
    client: string | null
    status: string | null
    created: Date | null
    website: string | null
    bdm_user: string | null
    flat_fee: Decimal | null
    poc_name: string | null
    location_: string | null
    opened_by: JsonValue | null
    poc_email: string | null
    positions: JsonValue | null
    created_by: string | null
    percentage: Decimal | null
    client_name: string | null
    reached_out: boolean | null
    sumbissions: JsonValue | null
    airtable_id: string | null
    dependencies: JsonValue | null
    dh_agreement: string | null
    email_domain: string | null
    conversations: string | null
    new_positions: JsonValue | null
    website_domain: string | null
    interview_sheet: JsonValue | null
    no_contact_list: boolean | null
    no_of_positions: Decimal | null
    last_reached_out: Date | null
    poc_phone_number: string | null
    reference_number: string | null
    research_analyst: string | null
    research_comment: string | null
    no_of_submissions: Decimal | null
    airtable_table_name: string | null
    research_domain_id_s: string | null
    airtable_created_time: string | null
    direct_hire_agreements: JsonValue | null
    status__from_sumbissions_: JsonValue | null
    domain_id_s__from_opened_by_: JsonValue | null
    is_this_a_flat_fee_or_percentage_: string | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date
    airbyte_generation_id: bigint | null
    airbyte_meta: JsonValue
    id: string
    _count: OrganizationsCountAggregateOutputType | null
    _avg: OrganizationsAvgAggregateOutputType | null
    _sum: OrganizationsSumAggregateOutputType | null
    _min: OrganizationsMinAggregateOutputType | null
    _max: OrganizationsMaxAggregateOutputType | null
  }

  type GetOrganizationsGroupByPayload<T extends organizationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationsGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationsGroupByOutputType[P]>
        }
      >
    >


  export type organizationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    tasks?: boolean
    client?: boolean
    status?: boolean
    created?: boolean
    website?: boolean
    bdm_user?: boolean
    flat_fee?: boolean
    poc_name?: boolean
    location_?: boolean
    opened_by?: boolean
    poc_email?: boolean
    positions?: boolean
    created_by?: boolean
    percentage?: boolean
    client_name?: boolean
    reached_out?: boolean
    sumbissions?: boolean
    airtable_id?: boolean
    dependencies?: boolean
    dh_agreement?: boolean
    email_domain?: boolean
    conversations?: boolean
    new_positions?: boolean
    website_domain?: boolean
    interview_sheet?: boolean
    no_contact_list?: boolean
    no_of_positions?: boolean
    last_reached_out?: boolean
    poc_phone_number?: boolean
    reference_number?: boolean
    research_analyst?: boolean
    research_comment?: boolean
    no_of_submissions?: boolean
    airtable_table_name?: boolean
    research_domain_id_s?: boolean
    airtable_created_time?: boolean
    direct_hire_agreements?: boolean
    status__from_sumbissions_?: boolean
    domain_id_s__from_opened_by_?: boolean
    is_this_a_flat_fee_or_percentage_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["organizations"]>

  export type organizationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    tasks?: boolean
    client?: boolean
    status?: boolean
    created?: boolean
    website?: boolean
    bdm_user?: boolean
    flat_fee?: boolean
    poc_name?: boolean
    location_?: boolean
    opened_by?: boolean
    poc_email?: boolean
    positions?: boolean
    created_by?: boolean
    percentage?: boolean
    client_name?: boolean
    reached_out?: boolean
    sumbissions?: boolean
    airtable_id?: boolean
    dependencies?: boolean
    dh_agreement?: boolean
    email_domain?: boolean
    conversations?: boolean
    new_positions?: boolean
    website_domain?: boolean
    interview_sheet?: boolean
    no_contact_list?: boolean
    no_of_positions?: boolean
    last_reached_out?: boolean
    poc_phone_number?: boolean
    reference_number?: boolean
    research_analyst?: boolean
    research_comment?: boolean
    no_of_submissions?: boolean
    airtable_table_name?: boolean
    research_domain_id_s?: boolean
    airtable_created_time?: boolean
    direct_hire_agreements?: boolean
    status__from_sumbissions_?: boolean
    domain_id_s__from_opened_by_?: boolean
    is_this_a_flat_fee_or_percentage_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["organizations"]>

  export type organizationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    tasks?: boolean
    client?: boolean
    status?: boolean
    created?: boolean
    website?: boolean
    bdm_user?: boolean
    flat_fee?: boolean
    poc_name?: boolean
    location_?: boolean
    opened_by?: boolean
    poc_email?: boolean
    positions?: boolean
    created_by?: boolean
    percentage?: boolean
    client_name?: boolean
    reached_out?: boolean
    sumbissions?: boolean
    airtable_id?: boolean
    dependencies?: boolean
    dh_agreement?: boolean
    email_domain?: boolean
    conversations?: boolean
    new_positions?: boolean
    website_domain?: boolean
    interview_sheet?: boolean
    no_contact_list?: boolean
    no_of_positions?: boolean
    last_reached_out?: boolean
    poc_phone_number?: boolean
    reference_number?: boolean
    research_analyst?: boolean
    research_comment?: boolean
    no_of_submissions?: boolean
    airtable_table_name?: boolean
    research_domain_id_s?: boolean
    airtable_created_time?: boolean
    direct_hire_agreements?: boolean
    status__from_sumbissions_?: boolean
    domain_id_s__from_opened_by_?: boolean
    is_this_a_flat_fee_or_percentage_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["organizations"]>

  export type organizationsSelectScalar = {
    date?: boolean
    tasks?: boolean
    client?: boolean
    status?: boolean
    created?: boolean
    website?: boolean
    bdm_user?: boolean
    flat_fee?: boolean
    poc_name?: boolean
    location_?: boolean
    opened_by?: boolean
    poc_email?: boolean
    positions?: boolean
    created_by?: boolean
    percentage?: boolean
    client_name?: boolean
    reached_out?: boolean
    sumbissions?: boolean
    airtable_id?: boolean
    dependencies?: boolean
    dh_agreement?: boolean
    email_domain?: boolean
    conversations?: boolean
    new_positions?: boolean
    website_domain?: boolean
    interview_sheet?: boolean
    no_contact_list?: boolean
    no_of_positions?: boolean
    last_reached_out?: boolean
    poc_phone_number?: boolean
    reference_number?: boolean
    research_analyst?: boolean
    research_comment?: boolean
    no_of_submissions?: boolean
    airtable_table_name?: boolean
    research_domain_id_s?: boolean
    airtable_created_time?: boolean
    direct_hire_agreements?: boolean
    status__from_sumbissions_?: boolean
    domain_id_s__from_opened_by_?: boolean
    is_this_a_flat_fee_or_percentage_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }

  export type organizationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"date" | "tasks" | "client" | "status" | "created" | "website" | "bdm_user" | "flat_fee" | "poc_name" | "location_" | "opened_by" | "poc_email" | "positions" | "created_by" | "percentage" | "client_name" | "reached_out" | "sumbissions" | "airtable_id" | "dependencies" | "dh_agreement" | "email_domain" | "conversations" | "new_positions" | "website_domain" | "interview_sheet" | "no_contact_list" | "no_of_positions" | "last_reached_out" | "poc_phone_number" | "reference_number" | "research_analyst" | "research_comment" | "no_of_submissions" | "airtable_table_name" | "research_domain_id_s" | "airtable_created_time" | "direct_hire_agreements" | "status__from_sumbissions_" | "domain_id_s__from_opened_by_" | "is_this_a_flat_fee_or_percentage_" | "airbyte_raw_id" | "airbyte_extracted_at" | "airbyte_generation_id" | "airbyte_meta" | "id", ExtArgs["result"]["organizations"]>

  export type $organizationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organizations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      date: Date | null
      tasks: Prisma.JsonValue | null
      client: string | null
      status: string | null
      created: Date | null
      website: string | null
      bdm_user: string | null
      flat_fee: Prisma.Decimal | null
      poc_name: string | null
      location_: string | null
      opened_by: Prisma.JsonValue | null
      poc_email: string | null
      positions: Prisma.JsonValue | null
      created_by: string | null
      percentage: Prisma.Decimal | null
      client_name: string | null
      reached_out: boolean | null
      sumbissions: Prisma.JsonValue | null
      airtable_id: string | null
      dependencies: Prisma.JsonValue | null
      dh_agreement: string | null
      email_domain: string | null
      conversations: string | null
      new_positions: Prisma.JsonValue | null
      website_domain: string | null
      interview_sheet: Prisma.JsonValue | null
      no_contact_list: boolean | null
      no_of_positions: Prisma.Decimal | null
      last_reached_out: Date | null
      poc_phone_number: string | null
      reference_number: string | null
      research_analyst: string | null
      research_comment: string | null
      no_of_submissions: Prisma.Decimal | null
      airtable_table_name: string | null
      research_domain_id_s: string | null
      airtable_created_time: string | null
      direct_hire_agreements: Prisma.JsonValue | null
      status__from_sumbissions_: Prisma.JsonValue | null
      domain_id_s__from_opened_by_: Prisma.JsonValue | null
      is_this_a_flat_fee_or_percentage_: string | null
      airbyte_raw_id: string
      airbyte_extracted_at: Date
      airbyte_generation_id: bigint | null
      airbyte_meta: Prisma.JsonValue
      id: string
    }, ExtArgs["result"]["organizations"]>
    composites: {}
  }

  type organizationsGetPayload<S extends boolean | null | undefined | organizationsDefaultArgs> = $Result.GetResult<Prisma.$organizationsPayload, S>

  type organizationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationsCountAggregateInputType | true
    }

  export interface organizationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organizations'], meta: { name: 'organizations' } }
    /**
     * Find zero or one Organizations that matches the filter.
     * @param {organizationsFindUniqueArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizationsFindUniqueArgs>(args: SelectSubset<T, organizationsFindUniqueArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Organizations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizationsFindUniqueOrThrowArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizationsFindUniqueOrThrowArgs>(args: SelectSubset<T, organizationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindFirstArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizationsFindFirstArgs>(args?: SelectSubset<T, organizationsFindFirstArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Organizations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindFirstOrThrowArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizationsFindFirstOrThrowArgs>(args?: SelectSubset<T, organizationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organizations.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organizations.findMany({ take: 10 })
     * 
     * // Only select the `date`
     * const organizationsWithDateOnly = await prisma.organizations.findMany({ select: { date: true } })
     * 
     */
    findMany<T extends organizationsFindManyArgs>(args?: SelectSubset<T, organizationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Organizations.
     * @param {organizationsCreateArgs} args - Arguments to create a Organizations.
     * @example
     * // Create one Organizations
     * const Organizations = await prisma.organizations.create({
     *   data: {
     *     // ... data to create a Organizations
     *   }
     * })
     * 
     */
    create<T extends organizationsCreateArgs>(args: SelectSubset<T, organizationsCreateArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Organizations.
     * @param {organizationsCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organizations = await prisma.organizations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizationsCreateManyArgs>(args?: SelectSubset<T, organizationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {organizationsCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organizations = await prisma.organizations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `date`
     * const organizationsWithDateOnly = await prisma.organizations.createManyAndReturn({
     *   select: { date: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organizationsCreateManyAndReturnArgs>(args?: SelectSubset<T, organizationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Organizations.
     * @param {organizationsDeleteArgs} args - Arguments to delete one Organizations.
     * @example
     * // Delete one Organizations
     * const Organizations = await prisma.organizations.delete({
     *   where: {
     *     // ... filter to delete one Organizations
     *   }
     * })
     * 
     */
    delete<T extends organizationsDeleteArgs>(args: SelectSubset<T, organizationsDeleteArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Organizations.
     * @param {organizationsUpdateArgs} args - Arguments to update one Organizations.
     * @example
     * // Update one Organizations
     * const organizations = await prisma.organizations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizationsUpdateArgs>(args: SelectSubset<T, organizationsUpdateArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Organizations.
     * @param {organizationsDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organizations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizationsDeleteManyArgs>(args?: SelectSubset<T, organizationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organizations = await prisma.organizations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizationsUpdateManyArgs>(args: SelectSubset<T, organizationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {organizationsUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organizations = await prisma.organizations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `date`
     * const organizationsWithDateOnly = await prisma.organizations.updateManyAndReturn({
     *   select: { date: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends organizationsUpdateManyAndReturnArgs>(args: SelectSubset<T, organizationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Organizations.
     * @param {organizationsUpsertArgs} args - Arguments to update or create a Organizations.
     * @example
     * // Update or create a Organizations
     * const organizations = await prisma.organizations.upsert({
     *   create: {
     *     // ... data to create a Organizations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizations we want to update
     *   }
     * })
     */
    upsert<T extends organizationsUpsertArgs>(args: SelectSubset<T, organizationsUpsertArgs<ExtArgs>>): Prisma__organizationsClient<$Result.GetResult<Prisma.$organizationsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organizations.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends organizationsCountArgs>(
      args?: Subset<T, organizationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationsAggregateArgs>(args: Subset<T, OrganizationsAggregateArgs>): Prisma.PrismaPromise<GetOrganizationsAggregateType<T>>

    /**
     * Group by Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends organizationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationsGroupByArgs['orderBy'] }
        : { orderBy?: organizationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, organizationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organizations model
   */
  readonly fields: organizationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organizations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organizations model
   */ 
  interface organizationsFieldRefs {
    readonly date: FieldRef<"organizations", 'DateTime'>
    readonly tasks: FieldRef<"organizations", 'Json'>
    readonly client: FieldRef<"organizations", 'String'>
    readonly status: FieldRef<"organizations", 'String'>
    readonly created: FieldRef<"organizations", 'DateTime'>
    readonly website: FieldRef<"organizations", 'String'>
    readonly bdm_user: FieldRef<"organizations", 'String'>
    readonly flat_fee: FieldRef<"organizations", 'Decimal'>
    readonly poc_name: FieldRef<"organizations", 'String'>
    readonly location_: FieldRef<"organizations", 'String'>
    readonly opened_by: FieldRef<"organizations", 'Json'>
    readonly poc_email: FieldRef<"organizations", 'String'>
    readonly positions: FieldRef<"organizations", 'Json'>
    readonly created_by: FieldRef<"organizations", 'String'>
    readonly percentage: FieldRef<"organizations", 'Decimal'>
    readonly client_name: FieldRef<"organizations", 'String'>
    readonly reached_out: FieldRef<"organizations", 'Boolean'>
    readonly sumbissions: FieldRef<"organizations", 'Json'>
    readonly airtable_id: FieldRef<"organizations", 'String'>
    readonly dependencies: FieldRef<"organizations", 'Json'>
    readonly dh_agreement: FieldRef<"organizations", 'String'>
    readonly email_domain: FieldRef<"organizations", 'String'>
    readonly conversations: FieldRef<"organizations", 'String'>
    readonly new_positions: FieldRef<"organizations", 'Json'>
    readonly website_domain: FieldRef<"organizations", 'String'>
    readonly interview_sheet: FieldRef<"organizations", 'Json'>
    readonly no_contact_list: FieldRef<"organizations", 'Boolean'>
    readonly no_of_positions: FieldRef<"organizations", 'Decimal'>
    readonly last_reached_out: FieldRef<"organizations", 'DateTime'>
    readonly poc_phone_number: FieldRef<"organizations", 'String'>
    readonly reference_number: FieldRef<"organizations", 'String'>
    readonly research_analyst: FieldRef<"organizations", 'String'>
    readonly research_comment: FieldRef<"organizations", 'String'>
    readonly no_of_submissions: FieldRef<"organizations", 'Decimal'>
    readonly airtable_table_name: FieldRef<"organizations", 'String'>
    readonly research_domain_id_s: FieldRef<"organizations", 'String'>
    readonly airtable_created_time: FieldRef<"organizations", 'String'>
    readonly direct_hire_agreements: FieldRef<"organizations", 'Json'>
    readonly status__from_sumbissions_: FieldRef<"organizations", 'Json'>
    readonly domain_id_s__from_opened_by_: FieldRef<"organizations", 'Json'>
    readonly is_this_a_flat_fee_or_percentage_: FieldRef<"organizations", 'String'>
    readonly airbyte_raw_id: FieldRef<"organizations", 'String'>
    readonly airbyte_extracted_at: FieldRef<"organizations", 'DateTime'>
    readonly airbyte_generation_id: FieldRef<"organizations", 'BigInt'>
    readonly airbyte_meta: FieldRef<"organizations", 'Json'>
    readonly id: FieldRef<"organizations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * organizations findUnique
   */
  export type organizationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations findUniqueOrThrow
   */
  export type organizationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations findFirst
   */
  export type organizationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * organizations findFirstOrThrow
   */
  export type organizationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * organizations findMany
   */
  export type organizationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationsOrderByWithRelationInput | organizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizations.
     */
    cursor?: organizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * organizations create
   */
  export type organizationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * The data needed to create a organizations.
     */
    data: XOR<organizationsCreateInput, organizationsUncheckedCreateInput>
  }

  /**
   * organizations createMany
   */
  export type organizationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationsCreateManyInput | organizationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizations createManyAndReturn
   */
  export type organizationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * The data used to create many organizations.
     */
    data: organizationsCreateManyInput | organizationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizations update
   */
  export type organizationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * The data needed to update a organizations.
     */
    data: XOR<organizationsUpdateInput, organizationsUncheckedUpdateInput>
    /**
     * Choose, which organizations to update.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations updateMany
   */
  export type organizationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationsUpdateManyMutationInput, organizationsUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationsWhereInput
  }

  /**
   * organizations updateManyAndReturn
   */
  export type organizationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationsUpdateManyMutationInput, organizationsUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationsWhereInput
  }

  /**
   * organizations upsert
   */
  export type organizationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * The filter to search for the organizations to update in case it exists.
     */
    where: organizationsWhereUniqueInput
    /**
     * In case the organizations found by the `where` argument doesn't exist, create a new organizations with this data.
     */
    create: XOR<organizationsCreateInput, organizationsUncheckedCreateInput>
    /**
     * In case the organizations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationsUpdateInput, organizationsUncheckedUpdateInput>
  }

  /**
   * organizations delete
   */
  export type organizationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
    /**
     * Filter which organizations to delete.
     */
    where: organizationsWhereUniqueInput
  }

  /**
   * organizations deleteMany
   */
  export type organizationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationsWhereInput
  }

  /**
   * organizations without action
   */
  export type organizationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizations
     */
    select?: organizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizations
     */
    omit?: organizationsOmit<ExtArgs> | null
  }


  /**
   * Model positions
   */

  export type AggregatePositions = {
    _count: PositionsCountAggregateOutputType | null
    _avg: PositionsAvgAggregateOutputType | null
    _sum: PositionsSumAggregateOutputType | null
    _min: PositionsMinAggregateOutputType | null
    _max: PositionsMaxAggregateOutputType | null
  }

  export type PositionsAvgAggregateOutputType = {
    keywords: Decimal | null
    airbyte_generation_id: number | null
  }

  export type PositionsSumAggregateOutputType = {
    keywords: Decimal | null
    airbyte_generation_id: bigint | null
  }

  export type PositionsMinAggregateOutputType = {
    legacy_id: string | null
    link: string | null
    created: Date | null
    industry: string | null
    keywords: Decimal | null
    location: string | null
    companies: string | null
    createdat: Date | null
    deletedat: string | null
    isdeleted: string | null
    updatedat: Date | null
    airtable_id: string | null
    salary_range: string | null
    position_title: string | null
    airtable_table_name: string | null
    airtable_created_time: string | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type PositionsMaxAggregateOutputType = {
    legacy_id: string | null
    link: string | null
    created: Date | null
    industry: string | null
    keywords: Decimal | null
    location: string | null
    companies: string | null
    createdat: Date | null
    deletedat: string | null
    isdeleted: string | null
    updatedat: Date | null
    airtable_id: string | null
    salary_range: string | null
    position_title: string | null
    airtable_table_name: string | null
    airtable_created_time: string | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type PositionsCountAggregateOutputType = {
    legacy_id: number
    link: number
    created: number
    industry: number
    keywords: number
    location: number
    companies: number
    createdat: number
    deletedat: number
    isdeleted: number
    updatedat: number
    airtable_id: number
    client_sheet: number
    salary_range: number
    position_title: number
    airtable_table_name: number
    airtable_created_time: number
    bdm_user__from_client_sheet_: number
    reached_out__from_client_sheet_: number
    last_reached_out__from_client_sheet_: number
    airbyte_raw_id: number
    airbyte_extracted_at: number
    airbyte_generation_id: number
    airbyte_meta: number
    id: number
    _all: number
  }


  export type PositionsAvgAggregateInputType = {
    keywords?: true
    airbyte_generation_id?: true
  }

  export type PositionsSumAggregateInputType = {
    keywords?: true
    airbyte_generation_id?: true
  }

  export type PositionsMinAggregateInputType = {
    legacy_id?: true
    link?: true
    created?: true
    industry?: true
    keywords?: true
    location?: true
    companies?: true
    createdat?: true
    deletedat?: true
    isdeleted?: true
    updatedat?: true
    airtable_id?: true
    salary_range?: true
    position_title?: true
    airtable_table_name?: true
    airtable_created_time?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type PositionsMaxAggregateInputType = {
    legacy_id?: true
    link?: true
    created?: true
    industry?: true
    keywords?: true
    location?: true
    companies?: true
    createdat?: true
    deletedat?: true
    isdeleted?: true
    updatedat?: true
    airtable_id?: true
    salary_range?: true
    position_title?: true
    airtable_table_name?: true
    airtable_created_time?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type PositionsCountAggregateInputType = {
    legacy_id?: true
    link?: true
    created?: true
    industry?: true
    keywords?: true
    location?: true
    companies?: true
    createdat?: true
    deletedat?: true
    isdeleted?: true
    updatedat?: true
    airtable_id?: true
    client_sheet?: true
    salary_range?: true
    position_title?: true
    airtable_table_name?: true
    airtable_created_time?: true
    bdm_user__from_client_sheet_?: true
    reached_out__from_client_sheet_?: true
    last_reached_out__from_client_sheet_?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    airbyte_meta?: true
    id?: true
    _all?: true
  }

  export type PositionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which positions to aggregate.
     */
    where?: positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionsOrderByWithRelationInput | positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned positions
    **/
    _count?: true | PositionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionsMaxAggregateInputType
  }

  export type GetPositionsAggregateType<T extends PositionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePositions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePositions[P]>
      : GetScalarType<T[P], AggregatePositions[P]>
  }




  export type positionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: positionsWhereInput
    orderBy?: positionsOrderByWithAggregationInput | positionsOrderByWithAggregationInput[]
    by: PositionsScalarFieldEnum[] | PositionsScalarFieldEnum
    having?: positionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionsCountAggregateInputType | true
    _avg?: PositionsAvgAggregateInputType
    _sum?: PositionsSumAggregateInputType
    _min?: PositionsMinAggregateInputType
    _max?: PositionsMaxAggregateInputType
  }

  export type PositionsGroupByOutputType = {
    legacy_id: string | null
    link: string | null
    created: Date | null
    industry: string | null
    keywords: Decimal | null
    location: string | null
    companies: string | null
    createdat: Date | null
    deletedat: string | null
    isdeleted: string | null
    updatedat: Date | null
    airtable_id: string | null
    client_sheet: JsonValue | null
    salary_range: string | null
    position_title: string | null
    airtable_table_name: string | null
    airtable_created_time: string | null
    bdm_user__from_client_sheet_: JsonValue | null
    reached_out__from_client_sheet_: JsonValue | null
    last_reached_out__from_client_sheet_: JsonValue | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date
    airbyte_generation_id: bigint | null
    airbyte_meta: JsonValue
    id: string
    _count: PositionsCountAggregateOutputType | null
    _avg: PositionsAvgAggregateOutputType | null
    _sum: PositionsSumAggregateOutputType | null
    _min: PositionsMinAggregateOutputType | null
    _max: PositionsMaxAggregateOutputType | null
  }

  type GetPositionsGroupByPayload<T extends positionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionsGroupByOutputType[P]>
            : GetScalarType<T[P], PositionsGroupByOutputType[P]>
        }
      >
    >


  export type positionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    legacy_id?: boolean
    link?: boolean
    created?: boolean
    industry?: boolean
    keywords?: boolean
    location?: boolean
    companies?: boolean
    createdat?: boolean
    deletedat?: boolean
    isdeleted?: boolean
    updatedat?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    salary_range?: boolean
    position_title?: boolean
    airtable_table_name?: boolean
    airtable_created_time?: boolean
    bdm_user__from_client_sheet_?: boolean
    reached_out__from_client_sheet_?: boolean
    last_reached_out__from_client_sheet_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["positions"]>

  export type positionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    legacy_id?: boolean
    link?: boolean
    created?: boolean
    industry?: boolean
    keywords?: boolean
    location?: boolean
    companies?: boolean
    createdat?: boolean
    deletedat?: boolean
    isdeleted?: boolean
    updatedat?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    salary_range?: boolean
    position_title?: boolean
    airtable_table_name?: boolean
    airtable_created_time?: boolean
    bdm_user__from_client_sheet_?: boolean
    reached_out__from_client_sheet_?: boolean
    last_reached_out__from_client_sheet_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["positions"]>

  export type positionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    legacy_id?: boolean
    link?: boolean
    created?: boolean
    industry?: boolean
    keywords?: boolean
    location?: boolean
    companies?: boolean
    createdat?: boolean
    deletedat?: boolean
    isdeleted?: boolean
    updatedat?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    salary_range?: boolean
    position_title?: boolean
    airtable_table_name?: boolean
    airtable_created_time?: boolean
    bdm_user__from_client_sheet_?: boolean
    reached_out__from_client_sheet_?: boolean
    last_reached_out__from_client_sheet_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["positions"]>

  export type positionsSelectScalar = {
    legacy_id?: boolean
    link?: boolean
    created?: boolean
    industry?: boolean
    keywords?: boolean
    location?: boolean
    companies?: boolean
    createdat?: boolean
    deletedat?: boolean
    isdeleted?: boolean
    updatedat?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    salary_range?: boolean
    position_title?: boolean
    airtable_table_name?: boolean
    airtable_created_time?: boolean
    bdm_user__from_client_sheet_?: boolean
    reached_out__from_client_sheet_?: boolean
    last_reached_out__from_client_sheet_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }

  export type positionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"legacy_id" | "link" | "created" | "industry" | "keywords" | "location" | "companies" | "createdat" | "deletedat" | "isdeleted" | "updatedat" | "airtable_id" | "client_sheet" | "salary_range" | "position_title" | "airtable_table_name" | "airtable_created_time" | "bdm_user__from_client_sheet_" | "reached_out__from_client_sheet_" | "last_reached_out__from_client_sheet_" | "airbyte_raw_id" | "airbyte_extracted_at" | "airbyte_generation_id" | "airbyte_meta" | "id", ExtArgs["result"]["positions"]>

  export type $positionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "positions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      legacy_id: string | null
      link: string | null
      created: Date | null
      industry: string | null
      keywords: Prisma.Decimal | null
      location: string | null
      companies: string | null
      createdat: Date | null
      deletedat: string | null
      isdeleted: string | null
      updatedat: Date | null
      airtable_id: string | null
      client_sheet: Prisma.JsonValue | null
      salary_range: string | null
      position_title: string | null
      airtable_table_name: string | null
      airtable_created_time: string | null
      bdm_user__from_client_sheet_: Prisma.JsonValue | null
      reached_out__from_client_sheet_: Prisma.JsonValue | null
      last_reached_out__from_client_sheet_: Prisma.JsonValue | null
      airbyte_raw_id: string
      airbyte_extracted_at: Date
      airbyte_generation_id: bigint | null
      airbyte_meta: Prisma.JsonValue
      id: string
    }, ExtArgs["result"]["positions"]>
    composites: {}
  }

  type positionsGetPayload<S extends boolean | null | undefined | positionsDefaultArgs> = $Result.GetResult<Prisma.$positionsPayload, S>

  type positionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<positionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionsCountAggregateInputType | true
    }

  export interface positionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['positions'], meta: { name: 'positions' } }
    /**
     * Find zero or one Positions that matches the filter.
     * @param {positionsFindUniqueArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends positionsFindUniqueArgs>(args: SelectSubset<T, positionsFindUniqueArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Positions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {positionsFindUniqueOrThrowArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends positionsFindUniqueOrThrowArgs>(args: SelectSubset<T, positionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsFindFirstArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends positionsFindFirstArgs>(args?: SelectSubset<T, positionsFindFirstArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Positions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsFindFirstOrThrowArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends positionsFindFirstOrThrowArgs>(args?: SelectSubset<T, positionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.positions.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.positions.findMany({ take: 10 })
     * 
     * // Only select the `legacy_id`
     * const positionsWithLegacy_idOnly = await prisma.positions.findMany({ select: { legacy_id: true } })
     * 
     */
    findMany<T extends positionsFindManyArgs>(args?: SelectSubset<T, positionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Positions.
     * @param {positionsCreateArgs} args - Arguments to create a Positions.
     * @example
     * // Create one Positions
     * const Positions = await prisma.positions.create({
     *   data: {
     *     // ... data to create a Positions
     *   }
     * })
     * 
     */
    create<T extends positionsCreateArgs>(args: SelectSubset<T, positionsCreateArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Positions.
     * @param {positionsCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const positions = await prisma.positions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends positionsCreateManyArgs>(args?: SelectSubset<T, positionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {positionsCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const positions = await prisma.positions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `legacy_id`
     * const positionsWithLegacy_idOnly = await prisma.positions.createManyAndReturn({
     *   select: { legacy_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends positionsCreateManyAndReturnArgs>(args?: SelectSubset<T, positionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Positions.
     * @param {positionsDeleteArgs} args - Arguments to delete one Positions.
     * @example
     * // Delete one Positions
     * const Positions = await prisma.positions.delete({
     *   where: {
     *     // ... filter to delete one Positions
     *   }
     * })
     * 
     */
    delete<T extends positionsDeleteArgs>(args: SelectSubset<T, positionsDeleteArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Positions.
     * @param {positionsUpdateArgs} args - Arguments to update one Positions.
     * @example
     * // Update one Positions
     * const positions = await prisma.positions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends positionsUpdateArgs>(args: SelectSubset<T, positionsUpdateArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Positions.
     * @param {positionsDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.positions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends positionsDeleteManyArgs>(args?: SelectSubset<T, positionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const positions = await prisma.positions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends positionsUpdateManyArgs>(args: SelectSubset<T, positionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {positionsUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const positions = await prisma.positions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `legacy_id`
     * const positionsWithLegacy_idOnly = await prisma.positions.updateManyAndReturn({
     *   select: { legacy_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends positionsUpdateManyAndReturnArgs>(args: SelectSubset<T, positionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Positions.
     * @param {positionsUpsertArgs} args - Arguments to update or create a Positions.
     * @example
     * // Update or create a Positions
     * const positions = await prisma.positions.upsert({
     *   create: {
     *     // ... data to create a Positions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Positions we want to update
     *   }
     * })
     */
    upsert<T extends positionsUpsertArgs>(args: SelectSubset<T, positionsUpsertArgs<ExtArgs>>): Prisma__positionsClient<$Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.positions.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends positionsCountArgs>(
      args?: Subset<T, positionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionsAggregateArgs>(args: Subset<T, PositionsAggregateArgs>): Prisma.PrismaPromise<GetPositionsAggregateType<T>>

    /**
     * Group by Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends positionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: positionsGroupByArgs['orderBy'] }
        : { orderBy?: positionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, positionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the positions model
   */
  readonly fields: positionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for positions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__positionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the positions model
   */ 
  interface positionsFieldRefs {
    readonly legacy_id: FieldRef<"positions", 'String'>
    readonly link: FieldRef<"positions", 'String'>
    readonly created: FieldRef<"positions", 'DateTime'>
    readonly industry: FieldRef<"positions", 'String'>
    readonly keywords: FieldRef<"positions", 'Decimal'>
    readonly location: FieldRef<"positions", 'String'>
    readonly companies: FieldRef<"positions", 'String'>
    readonly createdat: FieldRef<"positions", 'DateTime'>
    readonly deletedat: FieldRef<"positions", 'String'>
    readonly isdeleted: FieldRef<"positions", 'String'>
    readonly updatedat: FieldRef<"positions", 'DateTime'>
    readonly airtable_id: FieldRef<"positions", 'String'>
    readonly client_sheet: FieldRef<"positions", 'Json'>
    readonly salary_range: FieldRef<"positions", 'String'>
    readonly position_title: FieldRef<"positions", 'String'>
    readonly airtable_table_name: FieldRef<"positions", 'String'>
    readonly airtable_created_time: FieldRef<"positions", 'String'>
    readonly bdm_user__from_client_sheet_: FieldRef<"positions", 'Json'>
    readonly reached_out__from_client_sheet_: FieldRef<"positions", 'Json'>
    readonly last_reached_out__from_client_sheet_: FieldRef<"positions", 'Json'>
    readonly airbyte_raw_id: FieldRef<"positions", 'String'>
    readonly airbyte_extracted_at: FieldRef<"positions", 'DateTime'>
    readonly airbyte_generation_id: FieldRef<"positions", 'BigInt'>
    readonly airbyte_meta: FieldRef<"positions", 'Json'>
    readonly id: FieldRef<"positions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * positions findUnique
   */
  export type positionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Filter, which positions to fetch.
     */
    where: positionsWhereUniqueInput
  }

  /**
   * positions findUniqueOrThrow
   */
  export type positionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Filter, which positions to fetch.
     */
    where: positionsWhereUniqueInput
  }

  /**
   * positions findFirst
   */
  export type positionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Filter, which positions to fetch.
     */
    where?: positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionsOrderByWithRelationInput | positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for positions.
     */
    cursor?: positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of positions.
     */
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }

  /**
   * positions findFirstOrThrow
   */
  export type positionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Filter, which positions to fetch.
     */
    where?: positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionsOrderByWithRelationInput | positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for positions.
     */
    cursor?: positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of positions.
     */
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }

  /**
   * positions findMany
   */
  export type positionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Filter, which positions to fetch.
     */
    where?: positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionsOrderByWithRelationInput | positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing positions.
     */
    cursor?: positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }

  /**
   * positions create
   */
  export type positionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * The data needed to create a positions.
     */
    data: XOR<positionsCreateInput, positionsUncheckedCreateInput>
  }

  /**
   * positions createMany
   */
  export type positionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many positions.
     */
    data: positionsCreateManyInput | positionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * positions createManyAndReturn
   */
  export type positionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * The data used to create many positions.
     */
    data: positionsCreateManyInput | positionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * positions update
   */
  export type positionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * The data needed to update a positions.
     */
    data: XOR<positionsUpdateInput, positionsUncheckedUpdateInput>
    /**
     * Choose, which positions to update.
     */
    where: positionsWhereUniqueInput
  }

  /**
   * positions updateMany
   */
  export type positionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update positions.
     */
    data: XOR<positionsUpdateManyMutationInput, positionsUncheckedUpdateManyInput>
    /**
     * Filter which positions to update
     */
    where?: positionsWhereInput
  }

  /**
   * positions updateManyAndReturn
   */
  export type positionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * The data used to update positions.
     */
    data: XOR<positionsUpdateManyMutationInput, positionsUncheckedUpdateManyInput>
    /**
     * Filter which positions to update
     */
    where?: positionsWhereInput
  }

  /**
   * positions upsert
   */
  export type positionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * The filter to search for the positions to update in case it exists.
     */
    where: positionsWhereUniqueInput
    /**
     * In case the positions found by the `where` argument doesn't exist, create a new positions with this data.
     */
    create: XOR<positionsCreateInput, positionsUncheckedCreateInput>
    /**
     * In case the positions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<positionsUpdateInput, positionsUncheckedUpdateInput>
  }

  /**
   * positions delete
   */
  export type positionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
    /**
     * Filter which positions to delete.
     */
    where: positionsWhereUniqueInput
  }

  /**
   * positions deleteMany
   */
  export type positionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which positions to delete
     */
    where?: positionsWhereInput
  }

  /**
   * positions without action
   */
  export type positionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the positions
     */
    omit?: positionsOmit<ExtArgs> | null
  }


  /**
   * Model submissions
   */

  export type AggregateSubmissions = {
    _count: SubmissionsCountAggregateOutputType | null
    _avg: SubmissionsAvgAggregateOutputType | null
    _sum: SubmissionsSumAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  export type SubmissionsAvgAggregateOutputType = {
    airbyte_generation_id: number | null
  }

  export type SubmissionsSumAggregateOutputType = {
    airbyte_generation_id: bigint | null
  }

  export type SubmissionsMinAggregateOutputType = {
    name: string | null
    month: string | null
    status: string | null
    created: Date | null
    position_: string | null
    created_by: string | null
    source_link: string | null
    airtable_id: string | null
    sourced_from: string | null
    submitted_by: string | null
    date_submitted: Date | null
    candidate_email: string | null
    candidate_ph_no: string | null
    interviews_copy: string | null
    reference_number: string | null
    airtable_table_name: string | null
    status_last_modified: Date | null
    airtable_created_time: string | null
    candidate_s_resume_attachment: string | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type SubmissionsMaxAggregateOutputType = {
    name: string | null
    month: string | null
    status: string | null
    created: Date | null
    position_: string | null
    created_by: string | null
    source_link: string | null
    airtable_id: string | null
    sourced_from: string | null
    submitted_by: string | null
    date_submitted: Date | null
    candidate_email: string | null
    candidate_ph_no: string | null
    interviews_copy: string | null
    reference_number: string | null
    airtable_table_name: string | null
    status_last_modified: Date | null
    airtable_created_time: string | null
    candidate_s_resume_attachment: string | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type SubmissionsCountAggregateOutputType = {
    name: number
    month: number
    tasks: number
    status: number
    created: number
    position_: number
    submitted: number
    created_by: number
    client_name: number
    source_link: number
    airtable_id: number
    sourced_from: number
    submitted_by: number
    date_submitted: number
    position_title: number
    candidate_email: number
    candidate_ph_no: number
    interview_sheet: number
    interviews_copy: number
    reference_number: number
    airtable_table_name: number
    status_last_modified: number
    airtable_created_time: number
    date__from_client_name_: number
    status__from_client_name_: number
    bdm_user__from_client_name_: number
    domain_id_s__from_submitted_: number
    candidate_s_resume_attachment: number
    feedback___from_interview_sheet_: number
    research_analyst__from_client_name_: number
    airbyte_raw_id: number
    airbyte_extracted_at: number
    airbyte_generation_id: number
    airbyte_meta: number
    id: number
    _all: number
  }


  export type SubmissionsAvgAggregateInputType = {
    airbyte_generation_id?: true
  }

  export type SubmissionsSumAggregateInputType = {
    airbyte_generation_id?: true
  }

  export type SubmissionsMinAggregateInputType = {
    name?: true
    month?: true
    status?: true
    created?: true
    position_?: true
    created_by?: true
    source_link?: true
    airtable_id?: true
    sourced_from?: true
    submitted_by?: true
    date_submitted?: true
    candidate_email?: true
    candidate_ph_no?: true
    interviews_copy?: true
    reference_number?: true
    airtable_table_name?: true
    status_last_modified?: true
    airtable_created_time?: true
    candidate_s_resume_attachment?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type SubmissionsMaxAggregateInputType = {
    name?: true
    month?: true
    status?: true
    created?: true
    position_?: true
    created_by?: true
    source_link?: true
    airtable_id?: true
    sourced_from?: true
    submitted_by?: true
    date_submitted?: true
    candidate_email?: true
    candidate_ph_no?: true
    interviews_copy?: true
    reference_number?: true
    airtable_table_name?: true
    status_last_modified?: true
    airtable_created_time?: true
    candidate_s_resume_attachment?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type SubmissionsCountAggregateInputType = {
    name?: true
    month?: true
    tasks?: true
    status?: true
    created?: true
    position_?: true
    submitted?: true
    created_by?: true
    client_name?: true
    source_link?: true
    airtable_id?: true
    sourced_from?: true
    submitted_by?: true
    date_submitted?: true
    position_title?: true
    candidate_email?: true
    candidate_ph_no?: true
    interview_sheet?: true
    interviews_copy?: true
    reference_number?: true
    airtable_table_name?: true
    status_last_modified?: true
    airtable_created_time?: true
    date__from_client_name_?: true
    status__from_client_name_?: true
    bdm_user__from_client_name_?: true
    domain_id_s__from_submitted_?: true
    candidate_s_resume_attachment?: true
    feedback___from_interview_sheet_?: true
    research_analyst__from_client_name_?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    airbyte_meta?: true
    id?: true
    _all?: true
  }

  export type SubmissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to aggregate.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned submissions
    **/
    _count?: true | SubmissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionsMaxAggregateInputType
  }

  export type GetSubmissionsAggregateType<T extends SubmissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmissions[P]>
      : GetScalarType<T[P], AggregateSubmissions[P]>
  }




  export type submissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionsWhereInput
    orderBy?: submissionsOrderByWithAggregationInput | submissionsOrderByWithAggregationInput[]
    by: SubmissionsScalarFieldEnum[] | SubmissionsScalarFieldEnum
    having?: submissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionsCountAggregateInputType | true
    _avg?: SubmissionsAvgAggregateInputType
    _sum?: SubmissionsSumAggregateInputType
    _min?: SubmissionsMinAggregateInputType
    _max?: SubmissionsMaxAggregateInputType
  }

  export type SubmissionsGroupByOutputType = {
    name: string | null
    month: string | null
    tasks: JsonValue | null
    status: string | null
    created: Date | null
    position_: string | null
    submitted: JsonValue | null
    created_by: string | null
    client_name: JsonValue | null
    source_link: string | null
    airtable_id: string | null
    sourced_from: string | null
    submitted_by: string | null
    date_submitted: Date | null
    position_title: JsonValue | null
    candidate_email: string | null
    candidate_ph_no: string | null
    interview_sheet: JsonValue | null
    interviews_copy: string | null
    reference_number: string | null
    airtable_table_name: string | null
    status_last_modified: Date | null
    airtable_created_time: string | null
    date__from_client_name_: JsonValue | null
    status__from_client_name_: JsonValue | null
    bdm_user__from_client_name_: JsonValue | null
    domain_id_s__from_submitted_: JsonValue | null
    candidate_s_resume_attachment: string | null
    feedback___from_interview_sheet_: JsonValue | null
    research_analyst__from_client_name_: JsonValue | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date
    airbyte_generation_id: bigint | null
    airbyte_meta: JsonValue
    id: string
    _count: SubmissionsCountAggregateOutputType | null
    _avg: SubmissionsAvgAggregateOutputType | null
    _sum: SubmissionsSumAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  type GetSubmissionsGroupByPayload<T extends submissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
        }
      >
    >


  export type submissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    month?: boolean
    tasks?: boolean
    status?: boolean
    created?: boolean
    position_?: boolean
    submitted?: boolean
    created_by?: boolean
    client_name?: boolean
    source_link?: boolean
    airtable_id?: boolean
    sourced_from?: boolean
    submitted_by?: boolean
    date_submitted?: boolean
    position_title?: boolean
    candidate_email?: boolean
    candidate_ph_no?: boolean
    interview_sheet?: boolean
    interviews_copy?: boolean
    reference_number?: boolean
    airtable_table_name?: boolean
    status_last_modified?: boolean
    airtable_created_time?: boolean
    date__from_client_name_?: boolean
    status__from_client_name_?: boolean
    bdm_user__from_client_name_?: boolean
    domain_id_s__from_submitted_?: boolean
    candidate_s_resume_attachment?: boolean
    feedback___from_interview_sheet_?: boolean
    research_analyst__from_client_name_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["submissions"]>

  export type submissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    month?: boolean
    tasks?: boolean
    status?: boolean
    created?: boolean
    position_?: boolean
    submitted?: boolean
    created_by?: boolean
    client_name?: boolean
    source_link?: boolean
    airtable_id?: boolean
    sourced_from?: boolean
    submitted_by?: boolean
    date_submitted?: boolean
    position_title?: boolean
    candidate_email?: boolean
    candidate_ph_no?: boolean
    interview_sheet?: boolean
    interviews_copy?: boolean
    reference_number?: boolean
    airtable_table_name?: boolean
    status_last_modified?: boolean
    airtable_created_time?: boolean
    date__from_client_name_?: boolean
    status__from_client_name_?: boolean
    bdm_user__from_client_name_?: boolean
    domain_id_s__from_submitted_?: boolean
    candidate_s_resume_attachment?: boolean
    feedback___from_interview_sheet_?: boolean
    research_analyst__from_client_name_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["submissions"]>

  export type submissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    month?: boolean
    tasks?: boolean
    status?: boolean
    created?: boolean
    position_?: boolean
    submitted?: boolean
    created_by?: boolean
    client_name?: boolean
    source_link?: boolean
    airtable_id?: boolean
    sourced_from?: boolean
    submitted_by?: boolean
    date_submitted?: boolean
    position_title?: boolean
    candidate_email?: boolean
    candidate_ph_no?: boolean
    interview_sheet?: boolean
    interviews_copy?: boolean
    reference_number?: boolean
    airtable_table_name?: boolean
    status_last_modified?: boolean
    airtable_created_time?: boolean
    date__from_client_name_?: boolean
    status__from_client_name_?: boolean
    bdm_user__from_client_name_?: boolean
    domain_id_s__from_submitted_?: boolean
    candidate_s_resume_attachment?: boolean
    feedback___from_interview_sheet_?: boolean
    research_analyst__from_client_name_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["submissions"]>

  export type submissionsSelectScalar = {
    name?: boolean
    month?: boolean
    tasks?: boolean
    status?: boolean
    created?: boolean
    position_?: boolean
    submitted?: boolean
    created_by?: boolean
    client_name?: boolean
    source_link?: boolean
    airtable_id?: boolean
    sourced_from?: boolean
    submitted_by?: boolean
    date_submitted?: boolean
    position_title?: boolean
    candidate_email?: boolean
    candidate_ph_no?: boolean
    interview_sheet?: boolean
    interviews_copy?: boolean
    reference_number?: boolean
    airtable_table_name?: boolean
    status_last_modified?: boolean
    airtable_created_time?: boolean
    date__from_client_name_?: boolean
    status__from_client_name_?: boolean
    bdm_user__from_client_name_?: boolean
    domain_id_s__from_submitted_?: boolean
    candidate_s_resume_attachment?: boolean
    feedback___from_interview_sheet_?: boolean
    research_analyst__from_client_name_?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }

  export type submissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "month" | "tasks" | "status" | "created" | "position_" | "submitted" | "created_by" | "client_name" | "source_link" | "airtable_id" | "sourced_from" | "submitted_by" | "date_submitted" | "position_title" | "candidate_email" | "candidate_ph_no" | "interview_sheet" | "interviews_copy" | "reference_number" | "airtable_table_name" | "status_last_modified" | "airtable_created_time" | "date__from_client_name_" | "status__from_client_name_" | "bdm_user__from_client_name_" | "domain_id_s__from_submitted_" | "candidate_s_resume_attachment" | "feedback___from_interview_sheet_" | "research_analyst__from_client_name_" | "airbyte_raw_id" | "airbyte_extracted_at" | "airbyte_generation_id" | "airbyte_meta" | "id", ExtArgs["result"]["submissions"]>

  export type $submissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "submissions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string | null
      month: string | null
      tasks: Prisma.JsonValue | null
      status: string | null
      created: Date | null
      position_: string | null
      submitted: Prisma.JsonValue | null
      created_by: string | null
      client_name: Prisma.JsonValue | null
      source_link: string | null
      airtable_id: string | null
      sourced_from: string | null
      submitted_by: string | null
      date_submitted: Date | null
      position_title: Prisma.JsonValue | null
      candidate_email: string | null
      candidate_ph_no: string | null
      interview_sheet: Prisma.JsonValue | null
      interviews_copy: string | null
      reference_number: string | null
      airtable_table_name: string | null
      status_last_modified: Date | null
      airtable_created_time: string | null
      date__from_client_name_: Prisma.JsonValue | null
      status__from_client_name_: Prisma.JsonValue | null
      bdm_user__from_client_name_: Prisma.JsonValue | null
      domain_id_s__from_submitted_: Prisma.JsonValue | null
      candidate_s_resume_attachment: string | null
      feedback___from_interview_sheet_: Prisma.JsonValue | null
      research_analyst__from_client_name_: Prisma.JsonValue | null
      airbyte_raw_id: string
      airbyte_extracted_at: Date
      airbyte_generation_id: bigint | null
      airbyte_meta: Prisma.JsonValue
      id: string
    }, ExtArgs["result"]["submissions"]>
    composites: {}
  }

  type submissionsGetPayload<S extends boolean | null | undefined | submissionsDefaultArgs> = $Result.GetResult<Prisma.$submissionsPayload, S>

  type submissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<submissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionsCountAggregateInputType | true
    }

  export interface submissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['submissions'], meta: { name: 'submissions' } }
    /**
     * Find zero or one Submissions that matches the filter.
     * @param {submissionsFindUniqueArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends submissionsFindUniqueArgs>(args: SelectSubset<T, submissionsFindUniqueArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Submissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {submissionsFindUniqueOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends submissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, submissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindFirstArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends submissionsFindFirstArgs>(args?: SelectSubset<T, submissionsFindFirstArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Submissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindFirstOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends submissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, submissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submissions.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submissions.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const submissionsWithNameOnly = await prisma.submissions.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends submissionsFindManyArgs>(args?: SelectSubset<T, submissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Submissions.
     * @param {submissionsCreateArgs} args - Arguments to create a Submissions.
     * @example
     * // Create one Submissions
     * const Submissions = await prisma.submissions.create({
     *   data: {
     *     // ... data to create a Submissions
     *   }
     * })
     * 
     */
    create<T extends submissionsCreateArgs>(args: SelectSubset<T, submissionsCreateArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Submissions.
     * @param {submissionsCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submissions = await prisma.submissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends submissionsCreateManyArgs>(args?: SelectSubset<T, submissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {submissionsCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submissions = await prisma.submissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `name`
     * const submissionsWithNameOnly = await prisma.submissions.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends submissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, submissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Submissions.
     * @param {submissionsDeleteArgs} args - Arguments to delete one Submissions.
     * @example
     * // Delete one Submissions
     * const Submissions = await prisma.submissions.delete({
     *   where: {
     *     // ... filter to delete one Submissions
     *   }
     * })
     * 
     */
    delete<T extends submissionsDeleteArgs>(args: SelectSubset<T, submissionsDeleteArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Submissions.
     * @param {submissionsUpdateArgs} args - Arguments to update one Submissions.
     * @example
     * // Update one Submissions
     * const submissions = await prisma.submissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends submissionsUpdateArgs>(args: SelectSubset<T, submissionsUpdateArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Submissions.
     * @param {submissionsDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends submissionsDeleteManyArgs>(args?: SelectSubset<T, submissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submissions = await prisma.submissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends submissionsUpdateManyArgs>(args: SelectSubset<T, submissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {submissionsUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submissions = await prisma.submissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `name`
     * const submissionsWithNameOnly = await prisma.submissions.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends submissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, submissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Submissions.
     * @param {submissionsUpsertArgs} args - Arguments to update or create a Submissions.
     * @example
     * // Update or create a Submissions
     * const submissions = await prisma.submissions.upsert({
     *   create: {
     *     // ... data to create a Submissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submissions we want to update
     *   }
     * })
     */
    upsert<T extends submissionsUpsertArgs>(args: SelectSubset<T, submissionsUpsertArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submissions.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends submissionsCountArgs>(
      args?: Subset<T, submissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionsAggregateArgs>(args: Subset<T, SubmissionsAggregateArgs>): Prisma.PrismaPromise<GetSubmissionsAggregateType<T>>

    /**
     * Group by Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends submissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: submissionsGroupByArgs['orderBy'] }
        : { orderBy?: submissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, submissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the submissions model
   */
  readonly fields: submissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for submissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__submissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the submissions model
   */ 
  interface submissionsFieldRefs {
    readonly name: FieldRef<"submissions", 'String'>
    readonly month: FieldRef<"submissions", 'String'>
    readonly tasks: FieldRef<"submissions", 'Json'>
    readonly status: FieldRef<"submissions", 'String'>
    readonly created: FieldRef<"submissions", 'DateTime'>
    readonly position_: FieldRef<"submissions", 'String'>
    readonly submitted: FieldRef<"submissions", 'Json'>
    readonly created_by: FieldRef<"submissions", 'String'>
    readonly client_name: FieldRef<"submissions", 'Json'>
    readonly source_link: FieldRef<"submissions", 'String'>
    readonly airtable_id: FieldRef<"submissions", 'String'>
    readonly sourced_from: FieldRef<"submissions", 'String'>
    readonly submitted_by: FieldRef<"submissions", 'String'>
    readonly date_submitted: FieldRef<"submissions", 'DateTime'>
    readonly position_title: FieldRef<"submissions", 'Json'>
    readonly candidate_email: FieldRef<"submissions", 'String'>
    readonly candidate_ph_no: FieldRef<"submissions", 'String'>
    readonly interview_sheet: FieldRef<"submissions", 'Json'>
    readonly interviews_copy: FieldRef<"submissions", 'String'>
    readonly reference_number: FieldRef<"submissions", 'String'>
    readonly airtable_table_name: FieldRef<"submissions", 'String'>
    readonly status_last_modified: FieldRef<"submissions", 'DateTime'>
    readonly airtable_created_time: FieldRef<"submissions", 'String'>
    readonly date__from_client_name_: FieldRef<"submissions", 'Json'>
    readonly status__from_client_name_: FieldRef<"submissions", 'Json'>
    readonly bdm_user__from_client_name_: FieldRef<"submissions", 'Json'>
    readonly domain_id_s__from_submitted_: FieldRef<"submissions", 'Json'>
    readonly candidate_s_resume_attachment: FieldRef<"submissions", 'String'>
    readonly feedback___from_interview_sheet_: FieldRef<"submissions", 'Json'>
    readonly research_analyst__from_client_name_: FieldRef<"submissions", 'Json'>
    readonly airbyte_raw_id: FieldRef<"submissions", 'String'>
    readonly airbyte_extracted_at: FieldRef<"submissions", 'DateTime'>
    readonly airbyte_generation_id: FieldRef<"submissions", 'BigInt'>
    readonly airbyte_meta: FieldRef<"submissions", 'Json'>
    readonly id: FieldRef<"submissions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * submissions findUnique
   */
  export type submissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions findUniqueOrThrow
   */
  export type submissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions findFirst
   */
  export type submissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions findFirstOrThrow
   */
  export type submissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions findMany
   */
  export type submissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions create
   */
  export type submissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * The data needed to create a submissions.
     */
    data: XOR<submissionsCreateInput, submissionsUncheckedCreateInput>
  }

  /**
   * submissions createMany
   */
  export type submissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many submissions.
     */
    data: submissionsCreateManyInput | submissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * submissions createManyAndReturn
   */
  export type submissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * The data used to create many submissions.
     */
    data: submissionsCreateManyInput | submissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * submissions update
   */
  export type submissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * The data needed to update a submissions.
     */
    data: XOR<submissionsUpdateInput, submissionsUncheckedUpdateInput>
    /**
     * Choose, which submissions to update.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions updateMany
   */
  export type submissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionsWhereInput
  }

  /**
   * submissions updateManyAndReturn
   */
  export type submissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionsWhereInput
  }

  /**
   * submissions upsert
   */
  export type submissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * The filter to search for the submissions to update in case it exists.
     */
    where: submissionsWhereUniqueInput
    /**
     * In case the submissions found by the `where` argument doesn't exist, create a new submissions with this data.
     */
    create: XOR<submissionsCreateInput, submissionsUncheckedCreateInput>
    /**
     * In case the submissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<submissionsUpdateInput, submissionsUncheckedUpdateInput>
  }

  /**
   * submissions delete
   */
  export type submissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Filter which submissions to delete.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions deleteMany
   */
  export type submissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to delete
     */
    where?: submissionsWhereInput
  }

  /**
   * submissions without action
   */
  export type submissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    offers: Decimal | null
    today_s_clients: Decimal | null
    active_positions: Decimal | null
    last_month_clients: Decimal | null
    last_week_s_clients: Decimal | null
    today_s_submissions: Decimal | null
    number_of_interviews: Decimal | null
    last_month_submissions: Decimal | null
    last_weeks_submissions: Decimal | null
    positions_with_no_submissions: Decimal | null
    number_of_interviews_in_last_90_days: Decimal | null
    airbyte_generation_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    offers: Decimal | null
    today_s_clients: Decimal | null
    active_positions: Decimal | null
    last_month_clients: Decimal | null
    last_week_s_clients: Decimal | null
    today_s_submissions: Decimal | null
    number_of_interviews: Decimal | null
    last_month_submissions: Decimal | null
    last_weeks_submissions: Decimal | null
    positions_with_no_submissions: Decimal | null
    number_of_interviews_in_last_90_days: Decimal | null
    airbyte_generation_id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    bdm: string | null
    name: string | null
    offers: Decimal | null
    status: string | null
    domain_id: string | null
    team_lead: string | null
    attachments: string | null
    psuedo_name: string | null
    airtable_id: string | null
    today_s_clients: Decimal | null
    active_positions: Decimal | null
    last_month_clients: Decimal | null
    last_week_s_clients: Decimal | null
    today_s_submissions: Decimal | null
    airtable_table_name: string | null
    domain_id__from_bdm_: string | null
    number_of_interviews: Decimal | null
    employee_designantion: string | null
    airtable_created_time: string | null
    last_month_submissions: Decimal | null
    last_weeks_submissions: Decimal | null
    positions_with_no_submissions: Decimal | null
    number_of_interviews_in_last_90_days: Decimal | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    bdm: string | null
    name: string | null
    offers: Decimal | null
    status: string | null
    domain_id: string | null
    team_lead: string | null
    attachments: string | null
    psuedo_name: string | null
    airtable_id: string | null
    today_s_clients: Decimal | null
    active_positions: Decimal | null
    last_month_clients: Decimal | null
    last_week_s_clients: Decimal | null
    today_s_submissions: Decimal | null
    airtable_table_name: string | null
    domain_id__from_bdm_: string | null
    number_of_interviews: Decimal | null
    employee_designantion: string | null
    airtable_created_time: string | null
    last_month_submissions: Decimal | null
    last_weeks_submissions: Decimal | null
    positions_with_no_submissions: Decimal | null
    number_of_interviews_in_last_90_days: Decimal | null
    airbyte_raw_id: string | null
    airbyte_extracted_at: Date | null
    airbyte_generation_id: bigint | null
    id: string | null
  }

  export type UsersCountAggregateOutputType = {
    bdm: number
    name: number
    offers: number
    status: number
    domain_id: number
    positions: number
    team_lead: number
    attachments: number
    psuedo_name: number
    airtable_id: number
    client_sheet: number
    today_s_clients: number
    active_positions: number
    last_month_clients: number
    last_week_s_clients: number
    today_s_submissions: number
    airtable_table_name: number
    domain_id__from_bdm_: number
    number_of_interviews: number
    employee_designantion: number
    airtable_created_time: number
    last_month_submissions: number
    last_weeks_submissions: number
    candidate_submission_sheet: number
    positions_with_no_submissions: number
    number_of_interviews_in_last_90_days: number
    airbyte_raw_id: number
    airbyte_extracted_at: number
    airbyte_generation_id: number
    airbyte_meta: number
    id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    offers?: true
    today_s_clients?: true
    active_positions?: true
    last_month_clients?: true
    last_week_s_clients?: true
    today_s_submissions?: true
    number_of_interviews?: true
    last_month_submissions?: true
    last_weeks_submissions?: true
    positions_with_no_submissions?: true
    number_of_interviews_in_last_90_days?: true
    airbyte_generation_id?: true
  }

  export type UsersSumAggregateInputType = {
    offers?: true
    today_s_clients?: true
    active_positions?: true
    last_month_clients?: true
    last_week_s_clients?: true
    today_s_submissions?: true
    number_of_interviews?: true
    last_month_submissions?: true
    last_weeks_submissions?: true
    positions_with_no_submissions?: true
    number_of_interviews_in_last_90_days?: true
    airbyte_generation_id?: true
  }

  export type UsersMinAggregateInputType = {
    bdm?: true
    name?: true
    offers?: true
    status?: true
    domain_id?: true
    team_lead?: true
    attachments?: true
    psuedo_name?: true
    airtable_id?: true
    today_s_clients?: true
    active_positions?: true
    last_month_clients?: true
    last_week_s_clients?: true
    today_s_submissions?: true
    airtable_table_name?: true
    domain_id__from_bdm_?: true
    number_of_interviews?: true
    employee_designantion?: true
    airtable_created_time?: true
    last_month_submissions?: true
    last_weeks_submissions?: true
    positions_with_no_submissions?: true
    number_of_interviews_in_last_90_days?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type UsersMaxAggregateInputType = {
    bdm?: true
    name?: true
    offers?: true
    status?: true
    domain_id?: true
    team_lead?: true
    attachments?: true
    psuedo_name?: true
    airtable_id?: true
    today_s_clients?: true
    active_positions?: true
    last_month_clients?: true
    last_week_s_clients?: true
    today_s_submissions?: true
    airtable_table_name?: true
    domain_id__from_bdm_?: true
    number_of_interviews?: true
    employee_designantion?: true
    airtable_created_time?: true
    last_month_submissions?: true
    last_weeks_submissions?: true
    positions_with_no_submissions?: true
    number_of_interviews_in_last_90_days?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    id?: true
  }

  export type UsersCountAggregateInputType = {
    bdm?: true
    name?: true
    offers?: true
    status?: true
    domain_id?: true
    positions?: true
    team_lead?: true
    attachments?: true
    psuedo_name?: true
    airtable_id?: true
    client_sheet?: true
    today_s_clients?: true
    active_positions?: true
    last_month_clients?: true
    last_week_s_clients?: true
    today_s_submissions?: true
    airtable_table_name?: true
    domain_id__from_bdm_?: true
    number_of_interviews?: true
    employee_designantion?: true
    airtable_created_time?: true
    last_month_submissions?: true
    last_weeks_submissions?: true
    candidate_submission_sheet?: true
    positions_with_no_submissions?: true
    number_of_interviews_in_last_90_days?: true
    airbyte_raw_id?: true
    airbyte_extracted_at?: true
    airbyte_generation_id?: true
    airbyte_meta?: true
    id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    bdm: string | null
    name: string | null
    offers: Decimal | null
    status: string | null
    domain_id: string | null
    positions: JsonValue | null
    team_lead: string | null
    attachments: string | null
    psuedo_name: string | null
    airtable_id: string | null
    client_sheet: JsonValue | null
    today_s_clients: Decimal | null
    active_positions: Decimal | null
    last_month_clients: Decimal | null
    last_week_s_clients: Decimal | null
    today_s_submissions: Decimal | null
    airtable_table_name: string | null
    domain_id__from_bdm_: string | null
    number_of_interviews: Decimal | null
    employee_designantion: string | null
    airtable_created_time: string | null
    last_month_submissions: Decimal | null
    last_weeks_submissions: Decimal | null
    candidate_submission_sheet: JsonValue | null
    positions_with_no_submissions: Decimal | null
    number_of_interviews_in_last_90_days: Decimal | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date
    airbyte_generation_id: bigint | null
    airbyte_meta: JsonValue
    id: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bdm?: boolean
    name?: boolean
    offers?: boolean
    status?: boolean
    domain_id?: boolean
    positions?: boolean
    team_lead?: boolean
    attachments?: boolean
    psuedo_name?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    today_s_clients?: boolean
    active_positions?: boolean
    last_month_clients?: boolean
    last_week_s_clients?: boolean
    today_s_submissions?: boolean
    airtable_table_name?: boolean
    domain_id__from_bdm_?: boolean
    number_of_interviews?: boolean
    employee_designantion?: boolean
    airtable_created_time?: boolean
    last_month_submissions?: boolean
    last_weeks_submissions?: boolean
    candidate_submission_sheet?: boolean
    positions_with_no_submissions?: boolean
    number_of_interviews_in_last_90_days?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bdm?: boolean
    name?: boolean
    offers?: boolean
    status?: boolean
    domain_id?: boolean
    positions?: boolean
    team_lead?: boolean
    attachments?: boolean
    psuedo_name?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    today_s_clients?: boolean
    active_positions?: boolean
    last_month_clients?: boolean
    last_week_s_clients?: boolean
    today_s_submissions?: boolean
    airtable_table_name?: boolean
    domain_id__from_bdm_?: boolean
    number_of_interviews?: boolean
    employee_designantion?: boolean
    airtable_created_time?: boolean
    last_month_submissions?: boolean
    last_weeks_submissions?: boolean
    candidate_submission_sheet?: boolean
    positions_with_no_submissions?: boolean
    number_of_interviews_in_last_90_days?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bdm?: boolean
    name?: boolean
    offers?: boolean
    status?: boolean
    domain_id?: boolean
    positions?: boolean
    team_lead?: boolean
    attachments?: boolean
    psuedo_name?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    today_s_clients?: boolean
    active_positions?: boolean
    last_month_clients?: boolean
    last_week_s_clients?: boolean
    today_s_submissions?: boolean
    airtable_table_name?: boolean
    domain_id__from_bdm_?: boolean
    number_of_interviews?: boolean
    employee_designantion?: boolean
    airtable_created_time?: boolean
    last_month_submissions?: boolean
    last_weeks_submissions?: boolean
    candidate_submission_sheet?: boolean
    positions_with_no_submissions?: boolean
    number_of_interviews_in_last_90_days?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    bdm?: boolean
    name?: boolean
    offers?: boolean
    status?: boolean
    domain_id?: boolean
    positions?: boolean
    team_lead?: boolean
    attachments?: boolean
    psuedo_name?: boolean
    airtable_id?: boolean
    client_sheet?: boolean
    today_s_clients?: boolean
    active_positions?: boolean
    last_month_clients?: boolean
    last_week_s_clients?: boolean
    today_s_submissions?: boolean
    airtable_table_name?: boolean
    domain_id__from_bdm_?: boolean
    number_of_interviews?: boolean
    employee_designantion?: boolean
    airtable_created_time?: boolean
    last_month_submissions?: boolean
    last_weeks_submissions?: boolean
    candidate_submission_sheet?: boolean
    positions_with_no_submissions?: boolean
    number_of_interviews_in_last_90_days?: boolean
    airbyte_raw_id?: boolean
    airbyte_extracted_at?: boolean
    airbyte_generation_id?: boolean
    airbyte_meta?: boolean
    id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bdm" | "name" | "offers" | "status" | "domain_id" | "positions" | "team_lead" | "attachments" | "psuedo_name" | "airtable_id" | "client_sheet" | "today_s_clients" | "active_positions" | "last_month_clients" | "last_week_s_clients" | "today_s_submissions" | "airtable_table_name" | "domain_id__from_bdm_" | "number_of_interviews" | "employee_designantion" | "airtable_created_time" | "last_month_submissions" | "last_weeks_submissions" | "candidate_submission_sheet" | "positions_with_no_submissions" | "number_of_interviews_in_last_90_days" | "airbyte_raw_id" | "airbyte_extracted_at" | "airbyte_generation_id" | "airbyte_meta" | "id", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      bdm: string | null
      /**
       * This field was commented out because of an invalid name. Please provide a valid one that matches [a-zA-Z][a-zA-Z0-9_]*
       */
      name: string | null
      offers: Prisma.Decimal | null
      status: string | null
      domain_id: string | null
      positions: Prisma.JsonValue | null
      team_lead: string | null
      attachments: string | null
      psuedo_name: string | null
      airtable_id: string | null
      client_sheet: Prisma.JsonValue | null
      today_s_clients: Prisma.Decimal | null
      active_positions: Prisma.Decimal | null
      last_month_clients: Prisma.Decimal | null
      last_week_s_clients: Prisma.Decimal | null
      today_s_submissions: Prisma.Decimal | null
      airtable_table_name: string | null
      domain_id__from_bdm_: string | null
      number_of_interviews: Prisma.Decimal | null
      employee_designantion: string | null
      airtable_created_time: string | null
      last_month_submissions: Prisma.Decimal | null
      last_weeks_submissions: Prisma.Decimal | null
      candidate_submission_sheet: Prisma.JsonValue | null
      positions_with_no_submissions: Prisma.Decimal | null
      number_of_interviews_in_last_90_days: Prisma.Decimal | null
      airbyte_raw_id: string
      airbyte_extracted_at: Date
      airbyte_generation_id: bigint | null
      airbyte_meta: Prisma.JsonValue
      id: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `bdm`
     * const usersWithBdmOnly = await prisma.users.findMany({ select: { bdm: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `bdm`
     * const usersWithBdmOnly = await prisma.users.createManyAndReturn({
     *   select: { bdm: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `bdm`
     * const usersWithBdmOnly = await prisma.users.updateManyAndReturn({
     *   select: { bdm: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly bdm: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly offers: FieldRef<"users", 'Decimal'>
    readonly status: FieldRef<"users", 'String'>
    readonly domain_id: FieldRef<"users", 'String'>
    readonly positions: FieldRef<"users", 'Json'>
    readonly team_lead: FieldRef<"users", 'String'>
    readonly attachments: FieldRef<"users", 'String'>
    readonly psuedo_name: FieldRef<"users", 'String'>
    readonly airtable_id: FieldRef<"users", 'String'>
    readonly client_sheet: FieldRef<"users", 'Json'>
    readonly today_s_clients: FieldRef<"users", 'Decimal'>
    readonly active_positions: FieldRef<"users", 'Decimal'>
    readonly last_month_clients: FieldRef<"users", 'Decimal'>
    readonly last_week_s_clients: FieldRef<"users", 'Decimal'>
    readonly today_s_submissions: FieldRef<"users", 'Decimal'>
    readonly airtable_table_name: FieldRef<"users", 'String'>
    readonly domain_id__from_bdm_: FieldRef<"users", 'String'>
    readonly number_of_interviews: FieldRef<"users", 'Decimal'>
    readonly employee_designantion: FieldRef<"users", 'String'>
    readonly airtable_created_time: FieldRef<"users", 'String'>
    readonly last_month_submissions: FieldRef<"users", 'Decimal'>
    readonly last_weeks_submissions: FieldRef<"users", 'Decimal'>
    readonly candidate_submission_sheet: FieldRef<"users", 'Json'>
    readonly positions_with_no_submissions: FieldRef<"users", 'Decimal'>
    readonly number_of_interviews_in_last_90_days: FieldRef<"users", 'Decimal'>
    readonly airbyte_raw_id: FieldRef<"users", 'String'>
    readonly airbyte_extracted_at: FieldRef<"users", 'DateTime'>
    readonly airbyte_generation_id: FieldRef<"users", 'BigInt'>
    readonly airbyte_meta: FieldRef<"users", 'Json'>
    readonly id: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AgreementsScalarFieldEnum: {
    location: 'location',
    warranty: 'warranty',
    percentage: 'percentage',
    date_signed: 'date_signed',
    airtable_id: 'airtable_id',
    client_sheet: 'client_sheet',
    dh_agreement: 'dh_agreement',
    payment_terms: 'payment_terms',
    title_of_the_poc: 'title_of_the_poc',
    name_of_the_client: 'name_of_the_client',
    airtable_table_name: 'airtable_table_name',
    airtable_created_time: 'airtable_created_time',
    signed_by__client_poc_: 'signed_by__client_poc_',
    airbyte_raw_id: 'airbyte_raw_id',
    airbyte_extracted_at: 'airbyte_extracted_at',
    airbyte_generation_id: 'airbyte_generation_id',
    airbyte_meta: 'airbyte_meta',
    id: 'id'
  };

  export type AgreementsScalarFieldEnum = (typeof AgreementsScalarFieldEnum)[keyof typeof AgreementsScalarFieldEnum]


  export const InterviewsScalarFieldEnum: {
    name: 'name',
    client: 'client',
    created: 'created',
    feedback_: 'feedback_',
    recruiter: 'recruiter',
    time_zone: 'time_zone',
    client_bdm: 'client_bdm',
    created_by: 'created_by',
    calculation: 'calculation',
    client_name: 'client_name',
    airtable_id: 'airtable_id',
    position_title: 'position_title',
    records__nested_: 'records__nested_',
    research_analyst: 'research_analyst',
    mode_of_interview: 'mode_of_interview',
    airtable_table_name: 'airtable_table_name',
    name_of_the_candidate: 'name_of_the_candidate',
    airtable_created_time: 'airtable_created_time',
    date___time_of_interview: 'date___time_of_interview',
    local_time_of_the_interview: 'local_time_of_the_interview',
    client_name__from_client_name_: 'client_name__from_client_name_',
    name__from_name_of_the_candidate_: 'name__from_name_of_the_candidate_',
    status__from_name_of_the_candidate_: 'status__from_name_of_the_candidate_',
    sourced_from__from_name_of_the_candidate_: 'sourced_from__from_name_of_the_candidate_',
    reference_number__from_name_of_the_candidate_: 'reference_number__from_name_of_the_candidate_',
    reference_number__from_name_of_the_candidate__3: 'reference_number__from_name_of_the_candidate__3',
    domain_id_s__from_submitted___from_name_of_the_candidate_: 'domain_id_s__from_submitted___from_name_of_the_candidate_',
    airbyte_raw_id: 'airbyte_raw_id',
    airbyte_extracted_at: 'airbyte_extracted_at',
    airbyte_generation_id: 'airbyte_generation_id',
    airbyte_meta: 'airbyte_meta',
    id: 'id'
  };

  export type InterviewsScalarFieldEnum = (typeof InterviewsScalarFieldEnum)[keyof typeof InterviewsScalarFieldEnum]


  export const Legacy_positionsScalarFieldEnum: {
    month: 'month',
    string: 'string',
    created: 'created',
    location: 'location',
    position: 'position',
    client_bdm: 'client_bdm',
    created_by: 'created_by',
    airtable_id: 'airtable_id',
    client_sheet: 'client_sheet',
    position_title: 'position_title',
    interview_sheet: 'interview_sheet',
    recruiters_assign: 'recruiters_assign',
    airtable_table_name: 'airtable_table_name',
    job_description_link: 'job_description_link',
    airtable_created_time: 'airtable_created_time',
    job_drescription_text_: 'job_drescription_text_',
    position_active_inactive: 'position_active_inactive',
    candidate_submission_sheet: 'candidate_submission_sheet',
    job_description_attachment: 'job_description_attachment',
    status__from_client_sheet_: 'status__from_client_sheet_',
    candidate_submission_sheet_copy: 'candidate_submission_sheet_copy',
    domain_id_s__from_recruiters_assign_: 'domain_id_s__from_recruiters_assign_',
    research_analyst__from_client_sheet_: 'research_analyst__from_client_sheet_',
    status__from_candidate_submission_sheet_: 'status__from_candidate_submission_sheet_',
    domain_id_s__from_opened_by___from_client_sheet_: 'domain_id_s__from_opened_by___from_client_sheet_',
    id: 'id'
  };

  export type Legacy_positionsScalarFieldEnum = (typeof Legacy_positionsScalarFieldEnum)[keyof typeof Legacy_positionsScalarFieldEnum]


  export const OrganizationsScalarFieldEnum: {
    date: 'date',
    tasks: 'tasks',
    client: 'client',
    status: 'status',
    created: 'created',
    website: 'website',
    bdm_user: 'bdm_user',
    flat_fee: 'flat_fee',
    poc_name: 'poc_name',
    location_: 'location_',
    opened_by: 'opened_by',
    poc_email: 'poc_email',
    positions: 'positions',
    created_by: 'created_by',
    percentage: 'percentage',
    client_name: 'client_name',
    reached_out: 'reached_out',
    sumbissions: 'sumbissions',
    airtable_id: 'airtable_id',
    dependencies: 'dependencies',
    dh_agreement: 'dh_agreement',
    email_domain: 'email_domain',
    conversations: 'conversations',
    new_positions: 'new_positions',
    website_domain: 'website_domain',
    interview_sheet: 'interview_sheet',
    no_contact_list: 'no_contact_list',
    no_of_positions: 'no_of_positions',
    last_reached_out: 'last_reached_out',
    poc_phone_number: 'poc_phone_number',
    reference_number: 'reference_number',
    research_analyst: 'research_analyst',
    research_comment: 'research_comment',
    no_of_submissions: 'no_of_submissions',
    airtable_table_name: 'airtable_table_name',
    research_domain_id_s: 'research_domain_id_s',
    airtable_created_time: 'airtable_created_time',
    direct_hire_agreements: 'direct_hire_agreements',
    status__from_sumbissions_: 'status__from_sumbissions_',
    domain_id_s__from_opened_by_: 'domain_id_s__from_opened_by_',
    is_this_a_flat_fee_or_percentage_: 'is_this_a_flat_fee_or_percentage_',
    airbyte_raw_id: 'airbyte_raw_id',
    airbyte_extracted_at: 'airbyte_extracted_at',
    airbyte_generation_id: 'airbyte_generation_id',
    airbyte_meta: 'airbyte_meta',
    id: 'id'
  };

  export type OrganizationsScalarFieldEnum = (typeof OrganizationsScalarFieldEnum)[keyof typeof OrganizationsScalarFieldEnum]


  export const PositionsScalarFieldEnum: {
    legacy_id: 'legacy_id',
    link: 'link',
    created: 'created',
    industry: 'industry',
    keywords: 'keywords',
    location: 'location',
    companies: 'companies',
    createdat: 'createdat',
    deletedat: 'deletedat',
    isdeleted: 'isdeleted',
    updatedat: 'updatedat',
    airtable_id: 'airtable_id',
    client_sheet: 'client_sheet',
    salary_range: 'salary_range',
    position_title: 'position_title',
    airtable_table_name: 'airtable_table_name',
    airtable_created_time: 'airtable_created_time',
    bdm_user__from_client_sheet_: 'bdm_user__from_client_sheet_',
    reached_out__from_client_sheet_: 'reached_out__from_client_sheet_',
    last_reached_out__from_client_sheet_: 'last_reached_out__from_client_sheet_',
    airbyte_raw_id: 'airbyte_raw_id',
    airbyte_extracted_at: 'airbyte_extracted_at',
    airbyte_generation_id: 'airbyte_generation_id',
    airbyte_meta: 'airbyte_meta',
    id: 'id'
  };

  export type PositionsScalarFieldEnum = (typeof PositionsScalarFieldEnum)[keyof typeof PositionsScalarFieldEnum]


  export const SubmissionsScalarFieldEnum: {
    name: 'name',
    month: 'month',
    tasks: 'tasks',
    status: 'status',
    created: 'created',
    position_: 'position_',
    submitted: 'submitted',
    created_by: 'created_by',
    client_name: 'client_name',
    source_link: 'source_link',
    airtable_id: 'airtable_id',
    sourced_from: 'sourced_from',
    submitted_by: 'submitted_by',
    date_submitted: 'date_submitted',
    position_title: 'position_title',
    candidate_email: 'candidate_email',
    candidate_ph_no: 'candidate_ph_no',
    interview_sheet: 'interview_sheet',
    interviews_copy: 'interviews_copy',
    reference_number: 'reference_number',
    airtable_table_name: 'airtable_table_name',
    status_last_modified: 'status_last_modified',
    airtable_created_time: 'airtable_created_time',
    date__from_client_name_: 'date__from_client_name_',
    status__from_client_name_: 'status__from_client_name_',
    bdm_user__from_client_name_: 'bdm_user__from_client_name_',
    domain_id_s__from_submitted_: 'domain_id_s__from_submitted_',
    candidate_s_resume_attachment: 'candidate_s_resume_attachment',
    feedback___from_interview_sheet_: 'feedback___from_interview_sheet_',
    research_analyst__from_client_name_: 'research_analyst__from_client_name_',
    airbyte_raw_id: 'airbyte_raw_id',
    airbyte_extracted_at: 'airbyte_extracted_at',
    airbyte_generation_id: 'airbyte_generation_id',
    airbyte_meta: 'airbyte_meta',
    id: 'id'
  };

  export type SubmissionsScalarFieldEnum = (typeof SubmissionsScalarFieldEnum)[keyof typeof SubmissionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    bdm: 'bdm',
    name: 'name',
    offers: 'offers',
    status: 'status',
    domain_id: 'domain_id',
    positions: 'positions',
    team_lead: 'team_lead',
    attachments: 'attachments',
    psuedo_name: 'psuedo_name',
    airtable_id: 'airtable_id',
    client_sheet: 'client_sheet',
    today_s_clients: 'today_s_clients',
    active_positions: 'active_positions',
    last_month_clients: 'last_month_clients',
    last_week_s_clients: 'last_week_s_clients',
    today_s_submissions: 'today_s_submissions',
    airtable_table_name: 'airtable_table_name',
    domain_id__from_bdm_: 'domain_id__from_bdm_',
    number_of_interviews: 'number_of_interviews',
    employee_designantion: 'employee_designantion',
    airtable_created_time: 'airtable_created_time',
    last_month_submissions: 'last_month_submissions',
    last_weeks_submissions: 'last_weeks_submissions',
    candidate_submission_sheet: 'candidate_submission_sheet',
    positions_with_no_submissions: 'positions_with_no_submissions',
    number_of_interviews_in_last_90_days: 'number_of_interviews_in_last_90_days',
    airbyte_raw_id: 'airbyte_raw_id',
    airbyte_extracted_at: 'airbyte_extracted_at',
    airbyte_generation_id: 'airbyte_generation_id',
    airbyte_meta: 'airbyte_meta',
    id: 'id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type agreementsWhereInput = {
    AND?: agreementsWhereInput | agreementsWhereInput[]
    OR?: agreementsWhereInput[]
    NOT?: agreementsWhereInput | agreementsWhereInput[]
    location?: StringNullableFilter<"agreements"> | string | null
    warranty?: DecimalNullableFilter<"agreements"> | Decimal | DecimalJsLike | number | string | null
    percentage?: DecimalNullableFilter<"agreements"> | Decimal | DecimalJsLike | number | string | null
    date_signed?: DateTimeNullableFilter<"agreements"> | Date | string | null
    airtable_id?: StringNullableFilter<"agreements"> | string | null
    client_sheet?: JsonNullableFilter<"agreements">
    dh_agreement?: StringNullableFilter<"agreements"> | string | null
    payment_terms?: DecimalNullableFilter<"agreements"> | Decimal | DecimalJsLike | number | string | null
    title_of_the_poc?: StringNullableFilter<"agreements"> | string | null
    name_of_the_client?: StringNullableFilter<"agreements"> | string | null
    airtable_table_name?: StringNullableFilter<"agreements"> | string | null
    airtable_created_time?: StringNullableFilter<"agreements"> | string | null
    signed_by__client_poc_?: StringNullableFilter<"agreements"> | string | null
    airbyte_raw_id?: StringFilter<"agreements"> | string
    airbyte_extracted_at?: DateTimeFilter<"agreements"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"agreements"> | bigint | number | null
    airbyte_meta?: JsonFilter<"agreements">
    id?: UuidFilter<"agreements"> | string
  }

  export type agreementsOrderByWithRelationInput = {
    location?: SortOrderInput | SortOrder
    warranty?: SortOrderInput | SortOrder
    percentage?: SortOrderInput | SortOrder
    date_signed?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    client_sheet?: SortOrderInput | SortOrder
    dh_agreement?: SortOrderInput | SortOrder
    payment_terms?: SortOrderInput | SortOrder
    title_of_the_poc?: SortOrderInput | SortOrder
    name_of_the_client?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    signed_by__client_poc_?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type agreementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: agreementsWhereInput | agreementsWhereInput[]
    OR?: agreementsWhereInput[]
    NOT?: agreementsWhereInput | agreementsWhereInput[]
    location?: StringNullableFilter<"agreements"> | string | null
    warranty?: DecimalNullableFilter<"agreements"> | Decimal | DecimalJsLike | number | string | null
    percentage?: DecimalNullableFilter<"agreements"> | Decimal | DecimalJsLike | number | string | null
    date_signed?: DateTimeNullableFilter<"agreements"> | Date | string | null
    airtable_id?: StringNullableFilter<"agreements"> | string | null
    client_sheet?: JsonNullableFilter<"agreements">
    dh_agreement?: StringNullableFilter<"agreements"> | string | null
    payment_terms?: DecimalNullableFilter<"agreements"> | Decimal | DecimalJsLike | number | string | null
    title_of_the_poc?: StringNullableFilter<"agreements"> | string | null
    name_of_the_client?: StringNullableFilter<"agreements"> | string | null
    airtable_table_name?: StringNullableFilter<"agreements"> | string | null
    airtable_created_time?: StringNullableFilter<"agreements"> | string | null
    signed_by__client_poc_?: StringNullableFilter<"agreements"> | string | null
    airbyte_raw_id?: StringFilter<"agreements"> | string
    airbyte_extracted_at?: DateTimeFilter<"agreements"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"agreements"> | bigint | number | null
    airbyte_meta?: JsonFilter<"agreements">
  }, "id" | "id">

  export type agreementsOrderByWithAggregationInput = {
    location?: SortOrderInput | SortOrder
    warranty?: SortOrderInput | SortOrder
    percentage?: SortOrderInput | SortOrder
    date_signed?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    client_sheet?: SortOrderInput | SortOrder
    dh_agreement?: SortOrderInput | SortOrder
    payment_terms?: SortOrderInput | SortOrder
    title_of_the_poc?: SortOrderInput | SortOrder
    name_of_the_client?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    signed_by__client_poc_?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
    _count?: agreementsCountOrderByAggregateInput
    _avg?: agreementsAvgOrderByAggregateInput
    _max?: agreementsMaxOrderByAggregateInput
    _min?: agreementsMinOrderByAggregateInput
    _sum?: agreementsSumOrderByAggregateInput
  }

  export type agreementsScalarWhereWithAggregatesInput = {
    AND?: agreementsScalarWhereWithAggregatesInput | agreementsScalarWhereWithAggregatesInput[]
    OR?: agreementsScalarWhereWithAggregatesInput[]
    NOT?: agreementsScalarWhereWithAggregatesInput | agreementsScalarWhereWithAggregatesInput[]
    location?: StringNullableWithAggregatesFilter<"agreements"> | string | null
    warranty?: DecimalNullableWithAggregatesFilter<"agreements"> | Decimal | DecimalJsLike | number | string | null
    percentage?: DecimalNullableWithAggregatesFilter<"agreements"> | Decimal | DecimalJsLike | number | string | null
    date_signed?: DateTimeNullableWithAggregatesFilter<"agreements"> | Date | string | null
    airtable_id?: StringNullableWithAggregatesFilter<"agreements"> | string | null
    client_sheet?: JsonNullableWithAggregatesFilter<"agreements">
    dh_agreement?: StringNullableWithAggregatesFilter<"agreements"> | string | null
    payment_terms?: DecimalNullableWithAggregatesFilter<"agreements"> | Decimal | DecimalJsLike | number | string | null
    title_of_the_poc?: StringNullableWithAggregatesFilter<"agreements"> | string | null
    name_of_the_client?: StringNullableWithAggregatesFilter<"agreements"> | string | null
    airtable_table_name?: StringNullableWithAggregatesFilter<"agreements"> | string | null
    airtable_created_time?: StringNullableWithAggregatesFilter<"agreements"> | string | null
    signed_by__client_poc_?: StringNullableWithAggregatesFilter<"agreements"> | string | null
    airbyte_raw_id?: StringWithAggregatesFilter<"agreements"> | string
    airbyte_extracted_at?: DateTimeWithAggregatesFilter<"agreements"> | Date | string
    airbyte_generation_id?: BigIntNullableWithAggregatesFilter<"agreements"> | bigint | number | null
    airbyte_meta?: JsonWithAggregatesFilter<"agreements">
    id?: UuidWithAggregatesFilter<"agreements"> | string
  }

  export type interviewsWhereInput = {
    AND?: interviewsWhereInput | interviewsWhereInput[]
    OR?: interviewsWhereInput[]
    NOT?: interviewsWhereInput | interviewsWhereInput[]
    name?: StringNullableFilter<"interviews"> | string | null
    client?: JsonNullableFilter<"interviews">
    created?: DateTimeNullableFilter<"interviews"> | Date | string | null
    feedback_?: StringNullableFilter<"interviews"> | string | null
    recruiter?: JsonNullableFilter<"interviews">
    time_zone?: StringNullableFilter<"interviews"> | string | null
    client_bdm?: JsonNullableFilter<"interviews">
    created_by?: StringNullableFilter<"interviews"> | string | null
    calculation?: DecimalNullableFilter<"interviews"> | Decimal | DecimalJsLike | number | string | null
    client_name?: JsonNullableFilter<"interviews">
    airtable_id?: StringNullableFilter<"interviews"> | string | null
    position_title?: JsonNullableFilter<"interviews">
    records__nested_?: JsonNullableFilter<"interviews">
    research_analyst?: JsonNullableFilter<"interviews">
    mode_of_interview?: StringNullableFilter<"interviews"> | string | null
    airtable_table_name?: StringNullableFilter<"interviews"> | string | null
    name_of_the_candidate?: JsonNullableFilter<"interviews">
    airtable_created_time?: StringNullableFilter<"interviews"> | string | null
    date___time_of_interview?: DateTimeNullableFilter<"interviews"> | Date | string | null
    local_time_of_the_interview?: StringNullableFilter<"interviews"> | string | null
    client_name__from_client_name_?: JsonNullableFilter<"interviews">
    name__from_name_of_the_candidate_?: JsonNullableFilter<"interviews">
    status__from_name_of_the_candidate_?: JsonNullableFilter<"interviews">
    sourced_from__from_name_of_the_candidate_?: JsonNullableFilter<"interviews">
    reference_number__from_name_of_the_candidate_?: JsonNullableFilter<"interviews">
    reference_number__from_name_of_the_candidate__3?: JsonNullableFilter<"interviews">
    domain_id_s__from_submitted___from_name_of_the_candidate_?: JsonNullableFilter<"interviews">
    airbyte_raw_id?: StringFilter<"interviews"> | string
    airbyte_extracted_at?: DateTimeFilter<"interviews"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"interviews"> | bigint | number | null
    airbyte_meta?: JsonFilter<"interviews">
    id?: UuidFilter<"interviews"> | string
  }

  export type interviewsOrderByWithRelationInput = {
    name?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    feedback_?: SortOrderInput | SortOrder
    recruiter?: SortOrderInput | SortOrder
    time_zone?: SortOrderInput | SortOrder
    client_bdm?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    calculation?: SortOrderInput | SortOrder
    client_name?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    position_title?: SortOrderInput | SortOrder
    records__nested_?: SortOrderInput | SortOrder
    research_analyst?: SortOrderInput | SortOrder
    mode_of_interview?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    name_of_the_candidate?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    date___time_of_interview?: SortOrderInput | SortOrder
    local_time_of_the_interview?: SortOrderInput | SortOrder
    client_name__from_client_name_?: SortOrderInput | SortOrder
    name__from_name_of_the_candidate_?: SortOrderInput | SortOrder
    status__from_name_of_the_candidate_?: SortOrderInput | SortOrder
    sourced_from__from_name_of_the_candidate_?: SortOrderInput | SortOrder
    reference_number__from_name_of_the_candidate_?: SortOrderInput | SortOrder
    reference_number__from_name_of_the_candidate__3?: SortOrderInput | SortOrder
    domain_id_s__from_submitted___from_name_of_the_candidate_?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type interviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: interviewsWhereInput | interviewsWhereInput[]
    OR?: interviewsWhereInput[]
    NOT?: interviewsWhereInput | interviewsWhereInput[]
    name?: StringNullableFilter<"interviews"> | string | null
    client?: JsonNullableFilter<"interviews">
    created?: DateTimeNullableFilter<"interviews"> | Date | string | null
    feedback_?: StringNullableFilter<"interviews"> | string | null
    recruiter?: JsonNullableFilter<"interviews">
    time_zone?: StringNullableFilter<"interviews"> | string | null
    client_bdm?: JsonNullableFilter<"interviews">
    created_by?: StringNullableFilter<"interviews"> | string | null
    calculation?: DecimalNullableFilter<"interviews"> | Decimal | DecimalJsLike | number | string | null
    client_name?: JsonNullableFilter<"interviews">
    airtable_id?: StringNullableFilter<"interviews"> | string | null
    position_title?: JsonNullableFilter<"interviews">
    records__nested_?: JsonNullableFilter<"interviews">
    research_analyst?: JsonNullableFilter<"interviews">
    mode_of_interview?: StringNullableFilter<"interviews"> | string | null
    airtable_table_name?: StringNullableFilter<"interviews"> | string | null
    name_of_the_candidate?: JsonNullableFilter<"interviews">
    airtable_created_time?: StringNullableFilter<"interviews"> | string | null
    date___time_of_interview?: DateTimeNullableFilter<"interviews"> | Date | string | null
    local_time_of_the_interview?: StringNullableFilter<"interviews"> | string | null
    client_name__from_client_name_?: JsonNullableFilter<"interviews">
    name__from_name_of_the_candidate_?: JsonNullableFilter<"interviews">
    status__from_name_of_the_candidate_?: JsonNullableFilter<"interviews">
    sourced_from__from_name_of_the_candidate_?: JsonNullableFilter<"interviews">
    reference_number__from_name_of_the_candidate_?: JsonNullableFilter<"interviews">
    reference_number__from_name_of_the_candidate__3?: JsonNullableFilter<"interviews">
    domain_id_s__from_submitted___from_name_of_the_candidate_?: JsonNullableFilter<"interviews">
    airbyte_raw_id?: StringFilter<"interviews"> | string
    airbyte_extracted_at?: DateTimeFilter<"interviews"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"interviews"> | bigint | number | null
    airbyte_meta?: JsonFilter<"interviews">
  }, "id" | "id">

  export type interviewsOrderByWithAggregationInput = {
    name?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    feedback_?: SortOrderInput | SortOrder
    recruiter?: SortOrderInput | SortOrder
    time_zone?: SortOrderInput | SortOrder
    client_bdm?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    calculation?: SortOrderInput | SortOrder
    client_name?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    position_title?: SortOrderInput | SortOrder
    records__nested_?: SortOrderInput | SortOrder
    research_analyst?: SortOrderInput | SortOrder
    mode_of_interview?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    name_of_the_candidate?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    date___time_of_interview?: SortOrderInput | SortOrder
    local_time_of_the_interview?: SortOrderInput | SortOrder
    client_name__from_client_name_?: SortOrderInput | SortOrder
    name__from_name_of_the_candidate_?: SortOrderInput | SortOrder
    status__from_name_of_the_candidate_?: SortOrderInput | SortOrder
    sourced_from__from_name_of_the_candidate_?: SortOrderInput | SortOrder
    reference_number__from_name_of_the_candidate_?: SortOrderInput | SortOrder
    reference_number__from_name_of_the_candidate__3?: SortOrderInput | SortOrder
    domain_id_s__from_submitted___from_name_of_the_candidate_?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
    _count?: interviewsCountOrderByAggregateInput
    _avg?: interviewsAvgOrderByAggregateInput
    _max?: interviewsMaxOrderByAggregateInput
    _min?: interviewsMinOrderByAggregateInput
    _sum?: interviewsSumOrderByAggregateInput
  }

  export type interviewsScalarWhereWithAggregatesInput = {
    AND?: interviewsScalarWhereWithAggregatesInput | interviewsScalarWhereWithAggregatesInput[]
    OR?: interviewsScalarWhereWithAggregatesInput[]
    NOT?: interviewsScalarWhereWithAggregatesInput | interviewsScalarWhereWithAggregatesInput[]
    name?: StringNullableWithAggregatesFilter<"interviews"> | string | null
    client?: JsonNullableWithAggregatesFilter<"interviews">
    created?: DateTimeNullableWithAggregatesFilter<"interviews"> | Date | string | null
    feedback_?: StringNullableWithAggregatesFilter<"interviews"> | string | null
    recruiter?: JsonNullableWithAggregatesFilter<"interviews">
    time_zone?: StringNullableWithAggregatesFilter<"interviews"> | string | null
    client_bdm?: JsonNullableWithAggregatesFilter<"interviews">
    created_by?: StringNullableWithAggregatesFilter<"interviews"> | string | null
    calculation?: DecimalNullableWithAggregatesFilter<"interviews"> | Decimal | DecimalJsLike | number | string | null
    client_name?: JsonNullableWithAggregatesFilter<"interviews">
    airtable_id?: StringNullableWithAggregatesFilter<"interviews"> | string | null
    position_title?: JsonNullableWithAggregatesFilter<"interviews">
    records__nested_?: JsonNullableWithAggregatesFilter<"interviews">
    research_analyst?: JsonNullableWithAggregatesFilter<"interviews">
    mode_of_interview?: StringNullableWithAggregatesFilter<"interviews"> | string | null
    airtable_table_name?: StringNullableWithAggregatesFilter<"interviews"> | string | null
    name_of_the_candidate?: JsonNullableWithAggregatesFilter<"interviews">
    airtable_created_time?: StringNullableWithAggregatesFilter<"interviews"> | string | null
    date___time_of_interview?: DateTimeNullableWithAggregatesFilter<"interviews"> | Date | string | null
    local_time_of_the_interview?: StringNullableWithAggregatesFilter<"interviews"> | string | null
    client_name__from_client_name_?: JsonNullableWithAggregatesFilter<"interviews">
    name__from_name_of_the_candidate_?: JsonNullableWithAggregatesFilter<"interviews">
    status__from_name_of_the_candidate_?: JsonNullableWithAggregatesFilter<"interviews">
    sourced_from__from_name_of_the_candidate_?: JsonNullableWithAggregatesFilter<"interviews">
    reference_number__from_name_of_the_candidate_?: JsonNullableWithAggregatesFilter<"interviews">
    reference_number__from_name_of_the_candidate__3?: JsonNullableWithAggregatesFilter<"interviews">
    domain_id_s__from_submitted___from_name_of_the_candidate_?: JsonNullableWithAggregatesFilter<"interviews">
    airbyte_raw_id?: StringWithAggregatesFilter<"interviews"> | string
    airbyte_extracted_at?: DateTimeWithAggregatesFilter<"interviews"> | Date | string
    airbyte_generation_id?: BigIntNullableWithAggregatesFilter<"interviews"> | bigint | number | null
    airbyte_meta?: JsonWithAggregatesFilter<"interviews">
    id?: UuidWithAggregatesFilter<"interviews"> | string
  }

  export type legacy_positionsWhereInput = {
    AND?: legacy_positionsWhereInput | legacy_positionsWhereInput[]
    OR?: legacy_positionsWhereInput[]
    NOT?: legacy_positionsWhereInput | legacy_positionsWhereInput[]
    month?: StringNullableFilter<"legacy_positions"> | string | null
    string?: StringNullableFilter<"legacy_positions"> | string | null
    created?: DateTimeNullableFilter<"legacy_positions"> | Date | string | null
    location?: StringNullableFilter<"legacy_positions"> | string | null
    position?: StringNullableFilter<"legacy_positions"> | string | null
    client_bdm?: JsonNullableFilter<"legacy_positions">
    created_by?: StringNullableFilter<"legacy_positions"> | string | null
    airtable_id?: StringNullableFilter<"legacy_positions"> | string | null
    client_sheet?: JsonNullableFilter<"legacy_positions">
    position_title?: StringNullableFilter<"legacy_positions"> | string | null
    interview_sheet?: JsonNullableFilter<"legacy_positions">
    recruiters_assign?: JsonNullableFilter<"legacy_positions">
    airtable_table_name?: StringNullableFilter<"legacy_positions"> | string | null
    job_description_link?: StringNullableFilter<"legacy_positions"> | string | null
    airtable_created_time?: StringNullableFilter<"legacy_positions"> | string | null
    job_drescription_text_?: StringNullableFilter<"legacy_positions"> | string | null
    position_active_inactive?: StringNullableFilter<"legacy_positions"> | string | null
    candidate_submission_sheet?: JsonNullableFilter<"legacy_positions">
    job_description_attachment?: StringNullableFilter<"legacy_positions"> | string | null
    status__from_client_sheet_?: JsonNullableFilter<"legacy_positions">
    candidate_submission_sheet_copy?: StringNullableFilter<"legacy_positions"> | string | null
    domain_id_s__from_recruiters_assign_?: JsonNullableFilter<"legacy_positions">
    research_analyst__from_client_sheet_?: JsonNullableFilter<"legacy_positions">
    status__from_candidate_submission_sheet_?: JsonNullableFilter<"legacy_positions">
    domain_id_s__from_opened_by___from_client_sheet_?: JsonNullableFilter<"legacy_positions">
    id?: UuidFilter<"legacy_positions"> | string
  }

  export type legacy_positionsOrderByWithRelationInput = {
    month?: SortOrderInput | SortOrder
    string?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    client_bdm?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    client_sheet?: SortOrderInput | SortOrder
    position_title?: SortOrderInput | SortOrder
    interview_sheet?: SortOrderInput | SortOrder
    recruiters_assign?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    job_description_link?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    job_drescription_text_?: SortOrderInput | SortOrder
    position_active_inactive?: SortOrderInput | SortOrder
    candidate_submission_sheet?: SortOrderInput | SortOrder
    job_description_attachment?: SortOrderInput | SortOrder
    status__from_client_sheet_?: SortOrderInput | SortOrder
    candidate_submission_sheet_copy?: SortOrderInput | SortOrder
    domain_id_s__from_recruiters_assign_?: SortOrderInput | SortOrder
    research_analyst__from_client_sheet_?: SortOrderInput | SortOrder
    status__from_candidate_submission_sheet_?: SortOrderInput | SortOrder
    domain_id_s__from_opened_by___from_client_sheet_?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type legacy_positionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: legacy_positionsWhereInput | legacy_positionsWhereInput[]
    OR?: legacy_positionsWhereInput[]
    NOT?: legacy_positionsWhereInput | legacy_positionsWhereInput[]
    month?: StringNullableFilter<"legacy_positions"> | string | null
    string?: StringNullableFilter<"legacy_positions"> | string | null
    created?: DateTimeNullableFilter<"legacy_positions"> | Date | string | null
    location?: StringNullableFilter<"legacy_positions"> | string | null
    position?: StringNullableFilter<"legacy_positions"> | string | null
    client_bdm?: JsonNullableFilter<"legacy_positions">
    created_by?: StringNullableFilter<"legacy_positions"> | string | null
    airtable_id?: StringNullableFilter<"legacy_positions"> | string | null
    client_sheet?: JsonNullableFilter<"legacy_positions">
    position_title?: StringNullableFilter<"legacy_positions"> | string | null
    interview_sheet?: JsonNullableFilter<"legacy_positions">
    recruiters_assign?: JsonNullableFilter<"legacy_positions">
    airtable_table_name?: StringNullableFilter<"legacy_positions"> | string | null
    job_description_link?: StringNullableFilter<"legacy_positions"> | string | null
    airtable_created_time?: StringNullableFilter<"legacy_positions"> | string | null
    job_drescription_text_?: StringNullableFilter<"legacy_positions"> | string | null
    position_active_inactive?: StringNullableFilter<"legacy_positions"> | string | null
    candidate_submission_sheet?: JsonNullableFilter<"legacy_positions">
    job_description_attachment?: StringNullableFilter<"legacy_positions"> | string | null
    status__from_client_sheet_?: JsonNullableFilter<"legacy_positions">
    candidate_submission_sheet_copy?: StringNullableFilter<"legacy_positions"> | string | null
    domain_id_s__from_recruiters_assign_?: JsonNullableFilter<"legacy_positions">
    research_analyst__from_client_sheet_?: JsonNullableFilter<"legacy_positions">
    status__from_candidate_submission_sheet_?: JsonNullableFilter<"legacy_positions">
    domain_id_s__from_opened_by___from_client_sheet_?: JsonNullableFilter<"legacy_positions">
  }, "id" | "id">

  export type legacy_positionsOrderByWithAggregationInput = {
    month?: SortOrderInput | SortOrder
    string?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    client_bdm?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    client_sheet?: SortOrderInput | SortOrder
    position_title?: SortOrderInput | SortOrder
    interview_sheet?: SortOrderInput | SortOrder
    recruiters_assign?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    job_description_link?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    job_drescription_text_?: SortOrderInput | SortOrder
    position_active_inactive?: SortOrderInput | SortOrder
    candidate_submission_sheet?: SortOrderInput | SortOrder
    job_description_attachment?: SortOrderInput | SortOrder
    status__from_client_sheet_?: SortOrderInput | SortOrder
    candidate_submission_sheet_copy?: SortOrderInput | SortOrder
    domain_id_s__from_recruiters_assign_?: SortOrderInput | SortOrder
    research_analyst__from_client_sheet_?: SortOrderInput | SortOrder
    status__from_candidate_submission_sheet_?: SortOrderInput | SortOrder
    domain_id_s__from_opened_by___from_client_sheet_?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: legacy_positionsCountOrderByAggregateInput
    _max?: legacy_positionsMaxOrderByAggregateInput
    _min?: legacy_positionsMinOrderByAggregateInput
  }

  export type legacy_positionsScalarWhereWithAggregatesInput = {
    AND?: legacy_positionsScalarWhereWithAggregatesInput | legacy_positionsScalarWhereWithAggregatesInput[]
    OR?: legacy_positionsScalarWhereWithAggregatesInput[]
    NOT?: legacy_positionsScalarWhereWithAggregatesInput | legacy_positionsScalarWhereWithAggregatesInput[]
    month?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    string?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    created?: DateTimeNullableWithAggregatesFilter<"legacy_positions"> | Date | string | null
    location?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    position?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    client_bdm?: JsonNullableWithAggregatesFilter<"legacy_positions">
    created_by?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    airtable_id?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    client_sheet?: JsonNullableWithAggregatesFilter<"legacy_positions">
    position_title?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    interview_sheet?: JsonNullableWithAggregatesFilter<"legacy_positions">
    recruiters_assign?: JsonNullableWithAggregatesFilter<"legacy_positions">
    airtable_table_name?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    job_description_link?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    airtable_created_time?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    job_drescription_text_?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    position_active_inactive?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    candidate_submission_sheet?: JsonNullableWithAggregatesFilter<"legacy_positions">
    job_description_attachment?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    status__from_client_sheet_?: JsonNullableWithAggregatesFilter<"legacy_positions">
    candidate_submission_sheet_copy?: StringNullableWithAggregatesFilter<"legacy_positions"> | string | null
    domain_id_s__from_recruiters_assign_?: JsonNullableWithAggregatesFilter<"legacy_positions">
    research_analyst__from_client_sheet_?: JsonNullableWithAggregatesFilter<"legacy_positions">
    status__from_candidate_submission_sheet_?: JsonNullableWithAggregatesFilter<"legacy_positions">
    domain_id_s__from_opened_by___from_client_sheet_?: JsonNullableWithAggregatesFilter<"legacy_positions">
    id?: UuidWithAggregatesFilter<"legacy_positions"> | string
  }

  export type organizationsWhereInput = {
    AND?: organizationsWhereInput | organizationsWhereInput[]
    OR?: organizationsWhereInput[]
    NOT?: organizationsWhereInput | organizationsWhereInput[]
    date?: DateTimeNullableFilter<"organizations"> | Date | string | null
    tasks?: JsonNullableFilter<"organizations">
    client?: StringNullableFilter<"organizations"> | string | null
    status?: StringNullableFilter<"organizations"> | string | null
    created?: DateTimeNullableFilter<"organizations"> | Date | string | null
    website?: StringNullableFilter<"organizations"> | string | null
    bdm_user?: StringNullableFilter<"organizations"> | string | null
    flat_fee?: DecimalNullableFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    poc_name?: StringNullableFilter<"organizations"> | string | null
    location_?: StringNullableFilter<"organizations"> | string | null
    opened_by?: JsonNullableFilter<"organizations">
    poc_email?: StringNullableFilter<"organizations"> | string | null
    positions?: JsonNullableFilter<"organizations">
    created_by?: StringNullableFilter<"organizations"> | string | null
    percentage?: DecimalNullableFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    client_name?: StringNullableFilter<"organizations"> | string | null
    reached_out?: BoolNullableFilter<"organizations"> | boolean | null
    sumbissions?: JsonNullableFilter<"organizations">
    airtable_id?: StringNullableFilter<"organizations"> | string | null
    dependencies?: JsonNullableFilter<"organizations">
    dh_agreement?: StringNullableFilter<"organizations"> | string | null
    email_domain?: StringNullableFilter<"organizations"> | string | null
    conversations?: StringNullableFilter<"organizations"> | string | null
    new_positions?: JsonNullableFilter<"organizations">
    website_domain?: StringNullableFilter<"organizations"> | string | null
    interview_sheet?: JsonNullableFilter<"organizations">
    no_contact_list?: BoolNullableFilter<"organizations"> | boolean | null
    no_of_positions?: DecimalNullableFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    last_reached_out?: DateTimeNullableFilter<"organizations"> | Date | string | null
    poc_phone_number?: StringNullableFilter<"organizations"> | string | null
    reference_number?: StringNullableFilter<"organizations"> | string | null
    research_analyst?: StringNullableFilter<"organizations"> | string | null
    research_comment?: StringNullableFilter<"organizations"> | string | null
    no_of_submissions?: DecimalNullableFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: StringNullableFilter<"organizations"> | string | null
    research_domain_id_s?: StringNullableFilter<"organizations"> | string | null
    airtable_created_time?: StringNullableFilter<"organizations"> | string | null
    direct_hire_agreements?: JsonNullableFilter<"organizations">
    status__from_sumbissions_?: JsonNullableFilter<"organizations">
    domain_id_s__from_opened_by_?: JsonNullableFilter<"organizations">
    is_this_a_flat_fee_or_percentage_?: StringNullableFilter<"organizations"> | string | null
    airbyte_raw_id?: StringFilter<"organizations"> | string
    airbyte_extracted_at?: DateTimeFilter<"organizations"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"organizations"> | bigint | number | null
    airbyte_meta?: JsonFilter<"organizations">
    id?: UuidFilter<"organizations"> | string
  }

  export type organizationsOrderByWithRelationInput = {
    date?: SortOrderInput | SortOrder
    tasks?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    bdm_user?: SortOrderInput | SortOrder
    flat_fee?: SortOrderInput | SortOrder
    poc_name?: SortOrderInput | SortOrder
    location_?: SortOrderInput | SortOrder
    opened_by?: SortOrderInput | SortOrder
    poc_email?: SortOrderInput | SortOrder
    positions?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    percentage?: SortOrderInput | SortOrder
    client_name?: SortOrderInput | SortOrder
    reached_out?: SortOrderInput | SortOrder
    sumbissions?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    dependencies?: SortOrderInput | SortOrder
    dh_agreement?: SortOrderInput | SortOrder
    email_domain?: SortOrderInput | SortOrder
    conversations?: SortOrderInput | SortOrder
    new_positions?: SortOrderInput | SortOrder
    website_domain?: SortOrderInput | SortOrder
    interview_sheet?: SortOrderInput | SortOrder
    no_contact_list?: SortOrderInput | SortOrder
    no_of_positions?: SortOrderInput | SortOrder
    last_reached_out?: SortOrderInput | SortOrder
    poc_phone_number?: SortOrderInput | SortOrder
    reference_number?: SortOrderInput | SortOrder
    research_analyst?: SortOrderInput | SortOrder
    research_comment?: SortOrderInput | SortOrder
    no_of_submissions?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    research_domain_id_s?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    direct_hire_agreements?: SortOrderInput | SortOrder
    status__from_sumbissions_?: SortOrderInput | SortOrder
    domain_id_s__from_opened_by_?: SortOrderInput | SortOrder
    is_this_a_flat_fee_or_percentage_?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type organizationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: organizationsWhereInput | organizationsWhereInput[]
    OR?: organizationsWhereInput[]
    NOT?: organizationsWhereInput | organizationsWhereInput[]
    date?: DateTimeNullableFilter<"organizations"> | Date | string | null
    tasks?: JsonNullableFilter<"organizations">
    client?: StringNullableFilter<"organizations"> | string | null
    status?: StringNullableFilter<"organizations"> | string | null
    created?: DateTimeNullableFilter<"organizations"> | Date | string | null
    website?: StringNullableFilter<"organizations"> | string | null
    bdm_user?: StringNullableFilter<"organizations"> | string | null
    flat_fee?: DecimalNullableFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    poc_name?: StringNullableFilter<"organizations"> | string | null
    location_?: StringNullableFilter<"organizations"> | string | null
    opened_by?: JsonNullableFilter<"organizations">
    poc_email?: StringNullableFilter<"organizations"> | string | null
    positions?: JsonNullableFilter<"organizations">
    created_by?: StringNullableFilter<"organizations"> | string | null
    percentage?: DecimalNullableFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    client_name?: StringNullableFilter<"organizations"> | string | null
    reached_out?: BoolNullableFilter<"organizations"> | boolean | null
    sumbissions?: JsonNullableFilter<"organizations">
    airtable_id?: StringNullableFilter<"organizations"> | string | null
    dependencies?: JsonNullableFilter<"organizations">
    dh_agreement?: StringNullableFilter<"organizations"> | string | null
    email_domain?: StringNullableFilter<"organizations"> | string | null
    conversations?: StringNullableFilter<"organizations"> | string | null
    new_positions?: JsonNullableFilter<"organizations">
    website_domain?: StringNullableFilter<"organizations"> | string | null
    interview_sheet?: JsonNullableFilter<"organizations">
    no_contact_list?: BoolNullableFilter<"organizations"> | boolean | null
    no_of_positions?: DecimalNullableFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    last_reached_out?: DateTimeNullableFilter<"organizations"> | Date | string | null
    poc_phone_number?: StringNullableFilter<"organizations"> | string | null
    reference_number?: StringNullableFilter<"organizations"> | string | null
    research_analyst?: StringNullableFilter<"organizations"> | string | null
    research_comment?: StringNullableFilter<"organizations"> | string | null
    no_of_submissions?: DecimalNullableFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: StringNullableFilter<"organizations"> | string | null
    research_domain_id_s?: StringNullableFilter<"organizations"> | string | null
    airtable_created_time?: StringNullableFilter<"organizations"> | string | null
    direct_hire_agreements?: JsonNullableFilter<"organizations">
    status__from_sumbissions_?: JsonNullableFilter<"organizations">
    domain_id_s__from_opened_by_?: JsonNullableFilter<"organizations">
    is_this_a_flat_fee_or_percentage_?: StringNullableFilter<"organizations"> | string | null
    airbyte_raw_id?: StringFilter<"organizations"> | string
    airbyte_extracted_at?: DateTimeFilter<"organizations"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"organizations"> | bigint | number | null
    airbyte_meta?: JsonFilter<"organizations">
  }, "id" | "id">

  export type organizationsOrderByWithAggregationInput = {
    date?: SortOrderInput | SortOrder
    tasks?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    bdm_user?: SortOrderInput | SortOrder
    flat_fee?: SortOrderInput | SortOrder
    poc_name?: SortOrderInput | SortOrder
    location_?: SortOrderInput | SortOrder
    opened_by?: SortOrderInput | SortOrder
    poc_email?: SortOrderInput | SortOrder
    positions?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    percentage?: SortOrderInput | SortOrder
    client_name?: SortOrderInput | SortOrder
    reached_out?: SortOrderInput | SortOrder
    sumbissions?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    dependencies?: SortOrderInput | SortOrder
    dh_agreement?: SortOrderInput | SortOrder
    email_domain?: SortOrderInput | SortOrder
    conversations?: SortOrderInput | SortOrder
    new_positions?: SortOrderInput | SortOrder
    website_domain?: SortOrderInput | SortOrder
    interview_sheet?: SortOrderInput | SortOrder
    no_contact_list?: SortOrderInput | SortOrder
    no_of_positions?: SortOrderInput | SortOrder
    last_reached_out?: SortOrderInput | SortOrder
    poc_phone_number?: SortOrderInput | SortOrder
    reference_number?: SortOrderInput | SortOrder
    research_analyst?: SortOrderInput | SortOrder
    research_comment?: SortOrderInput | SortOrder
    no_of_submissions?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    research_domain_id_s?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    direct_hire_agreements?: SortOrderInput | SortOrder
    status__from_sumbissions_?: SortOrderInput | SortOrder
    domain_id_s__from_opened_by_?: SortOrderInput | SortOrder
    is_this_a_flat_fee_or_percentage_?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
    _count?: organizationsCountOrderByAggregateInput
    _avg?: organizationsAvgOrderByAggregateInput
    _max?: organizationsMaxOrderByAggregateInput
    _min?: organizationsMinOrderByAggregateInput
    _sum?: organizationsSumOrderByAggregateInput
  }

  export type organizationsScalarWhereWithAggregatesInput = {
    AND?: organizationsScalarWhereWithAggregatesInput | organizationsScalarWhereWithAggregatesInput[]
    OR?: organizationsScalarWhereWithAggregatesInput[]
    NOT?: organizationsScalarWhereWithAggregatesInput | organizationsScalarWhereWithAggregatesInput[]
    date?: DateTimeNullableWithAggregatesFilter<"organizations"> | Date | string | null
    tasks?: JsonNullableWithAggregatesFilter<"organizations">
    client?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    status?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    created?: DateTimeNullableWithAggregatesFilter<"organizations"> | Date | string | null
    website?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    bdm_user?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    flat_fee?: DecimalNullableWithAggregatesFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    poc_name?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    location_?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    opened_by?: JsonNullableWithAggregatesFilter<"organizations">
    poc_email?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    positions?: JsonNullableWithAggregatesFilter<"organizations">
    created_by?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    percentage?: DecimalNullableWithAggregatesFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    client_name?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    reached_out?: BoolNullableWithAggregatesFilter<"organizations"> | boolean | null
    sumbissions?: JsonNullableWithAggregatesFilter<"organizations">
    airtable_id?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    dependencies?: JsonNullableWithAggregatesFilter<"organizations">
    dh_agreement?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    email_domain?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    conversations?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    new_positions?: JsonNullableWithAggregatesFilter<"organizations">
    website_domain?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    interview_sheet?: JsonNullableWithAggregatesFilter<"organizations">
    no_contact_list?: BoolNullableWithAggregatesFilter<"organizations"> | boolean | null
    no_of_positions?: DecimalNullableWithAggregatesFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    last_reached_out?: DateTimeNullableWithAggregatesFilter<"organizations"> | Date | string | null
    poc_phone_number?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    reference_number?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    research_analyst?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    research_comment?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    no_of_submissions?: DecimalNullableWithAggregatesFilter<"organizations"> | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    research_domain_id_s?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    airtable_created_time?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    direct_hire_agreements?: JsonNullableWithAggregatesFilter<"organizations">
    status__from_sumbissions_?: JsonNullableWithAggregatesFilter<"organizations">
    domain_id_s__from_opened_by_?: JsonNullableWithAggregatesFilter<"organizations">
    is_this_a_flat_fee_or_percentage_?: StringNullableWithAggregatesFilter<"organizations"> | string | null
    airbyte_raw_id?: StringWithAggregatesFilter<"organizations"> | string
    airbyte_extracted_at?: DateTimeWithAggregatesFilter<"organizations"> | Date | string
    airbyte_generation_id?: BigIntNullableWithAggregatesFilter<"organizations"> | bigint | number | null
    airbyte_meta?: JsonWithAggregatesFilter<"organizations">
    id?: UuidWithAggregatesFilter<"organizations"> | string
  }

  export type positionsWhereInput = {
    AND?: positionsWhereInput | positionsWhereInput[]
    OR?: positionsWhereInput[]
    NOT?: positionsWhereInput | positionsWhereInput[]
    legacy_id?: StringNullableFilter<"positions"> | string | null
    link?: StringNullableFilter<"positions"> | string | null
    created?: DateTimeNullableFilter<"positions"> | Date | string | null
    industry?: StringNullableFilter<"positions"> | string | null
    keywords?: DecimalNullableFilter<"positions"> | Decimal | DecimalJsLike | number | string | null
    location?: StringNullableFilter<"positions"> | string | null
    companies?: StringNullableFilter<"positions"> | string | null
    createdat?: DateTimeNullableFilter<"positions"> | Date | string | null
    deletedat?: StringNullableFilter<"positions"> | string | null
    isdeleted?: StringNullableFilter<"positions"> | string | null
    updatedat?: DateTimeNullableFilter<"positions"> | Date | string | null
    airtable_id?: StringNullableFilter<"positions"> | string | null
    client_sheet?: JsonNullableFilter<"positions">
    salary_range?: StringNullableFilter<"positions"> | string | null
    position_title?: StringNullableFilter<"positions"> | string | null
    airtable_table_name?: StringNullableFilter<"positions"> | string | null
    airtable_created_time?: StringNullableFilter<"positions"> | string | null
    bdm_user__from_client_sheet_?: JsonNullableFilter<"positions">
    reached_out__from_client_sheet_?: JsonNullableFilter<"positions">
    last_reached_out__from_client_sheet_?: JsonNullableFilter<"positions">
    airbyte_raw_id?: StringFilter<"positions"> | string
    airbyte_extracted_at?: DateTimeFilter<"positions"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"positions"> | bigint | number | null
    airbyte_meta?: JsonFilter<"positions">
    id?: UuidFilter<"positions"> | string
  }

  export type positionsOrderByWithRelationInput = {
    legacy_id?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    companies?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    deletedat?: SortOrderInput | SortOrder
    isdeleted?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    client_sheet?: SortOrderInput | SortOrder
    salary_range?: SortOrderInput | SortOrder
    position_title?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    bdm_user__from_client_sheet_?: SortOrderInput | SortOrder
    reached_out__from_client_sheet_?: SortOrderInput | SortOrder
    last_reached_out__from_client_sheet_?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type positionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: positionsWhereInput | positionsWhereInput[]
    OR?: positionsWhereInput[]
    NOT?: positionsWhereInput | positionsWhereInput[]
    legacy_id?: StringNullableFilter<"positions"> | string | null
    link?: StringNullableFilter<"positions"> | string | null
    created?: DateTimeNullableFilter<"positions"> | Date | string | null
    industry?: StringNullableFilter<"positions"> | string | null
    keywords?: DecimalNullableFilter<"positions"> | Decimal | DecimalJsLike | number | string | null
    location?: StringNullableFilter<"positions"> | string | null
    companies?: StringNullableFilter<"positions"> | string | null
    createdat?: DateTimeNullableFilter<"positions"> | Date | string | null
    deletedat?: StringNullableFilter<"positions"> | string | null
    isdeleted?: StringNullableFilter<"positions"> | string | null
    updatedat?: DateTimeNullableFilter<"positions"> | Date | string | null
    airtable_id?: StringNullableFilter<"positions"> | string | null
    client_sheet?: JsonNullableFilter<"positions">
    salary_range?: StringNullableFilter<"positions"> | string | null
    position_title?: StringNullableFilter<"positions"> | string | null
    airtable_table_name?: StringNullableFilter<"positions"> | string | null
    airtable_created_time?: StringNullableFilter<"positions"> | string | null
    bdm_user__from_client_sheet_?: JsonNullableFilter<"positions">
    reached_out__from_client_sheet_?: JsonNullableFilter<"positions">
    last_reached_out__from_client_sheet_?: JsonNullableFilter<"positions">
    airbyte_raw_id?: StringFilter<"positions"> | string
    airbyte_extracted_at?: DateTimeFilter<"positions"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"positions"> | bigint | number | null
    airbyte_meta?: JsonFilter<"positions">
  }, "id" | "id">

  export type positionsOrderByWithAggregationInput = {
    legacy_id?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    companies?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    deletedat?: SortOrderInput | SortOrder
    isdeleted?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    client_sheet?: SortOrderInput | SortOrder
    salary_range?: SortOrderInput | SortOrder
    position_title?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    bdm_user__from_client_sheet_?: SortOrderInput | SortOrder
    reached_out__from_client_sheet_?: SortOrderInput | SortOrder
    last_reached_out__from_client_sheet_?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
    _count?: positionsCountOrderByAggregateInput
    _avg?: positionsAvgOrderByAggregateInput
    _max?: positionsMaxOrderByAggregateInput
    _min?: positionsMinOrderByAggregateInput
    _sum?: positionsSumOrderByAggregateInput
  }

  export type positionsScalarWhereWithAggregatesInput = {
    AND?: positionsScalarWhereWithAggregatesInput | positionsScalarWhereWithAggregatesInput[]
    OR?: positionsScalarWhereWithAggregatesInput[]
    NOT?: positionsScalarWhereWithAggregatesInput | positionsScalarWhereWithAggregatesInput[]
    legacy_id?: StringNullableWithAggregatesFilter<"positions"> | string | null
    link?: StringNullableWithAggregatesFilter<"positions"> | string | null
    created?: DateTimeNullableWithAggregatesFilter<"positions"> | Date | string | null
    industry?: StringNullableWithAggregatesFilter<"positions"> | string | null
    keywords?: DecimalNullableWithAggregatesFilter<"positions"> | Decimal | DecimalJsLike | number | string | null
    location?: StringNullableWithAggregatesFilter<"positions"> | string | null
    companies?: StringNullableWithAggregatesFilter<"positions"> | string | null
    createdat?: DateTimeNullableWithAggregatesFilter<"positions"> | Date | string | null
    deletedat?: StringNullableWithAggregatesFilter<"positions"> | string | null
    isdeleted?: StringNullableWithAggregatesFilter<"positions"> | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"positions"> | Date | string | null
    airtable_id?: StringNullableWithAggregatesFilter<"positions"> | string | null
    client_sheet?: JsonNullableWithAggregatesFilter<"positions">
    salary_range?: StringNullableWithAggregatesFilter<"positions"> | string | null
    position_title?: StringNullableWithAggregatesFilter<"positions"> | string | null
    airtable_table_name?: StringNullableWithAggregatesFilter<"positions"> | string | null
    airtable_created_time?: StringNullableWithAggregatesFilter<"positions"> | string | null
    bdm_user__from_client_sheet_?: JsonNullableWithAggregatesFilter<"positions">
    reached_out__from_client_sheet_?: JsonNullableWithAggregatesFilter<"positions">
    last_reached_out__from_client_sheet_?: JsonNullableWithAggregatesFilter<"positions">
    airbyte_raw_id?: StringWithAggregatesFilter<"positions"> | string
    airbyte_extracted_at?: DateTimeWithAggregatesFilter<"positions"> | Date | string
    airbyte_generation_id?: BigIntNullableWithAggregatesFilter<"positions"> | bigint | number | null
    airbyte_meta?: JsonWithAggregatesFilter<"positions">
    id?: UuidWithAggregatesFilter<"positions"> | string
  }

  export type submissionsWhereInput = {
    AND?: submissionsWhereInput | submissionsWhereInput[]
    OR?: submissionsWhereInput[]
    NOT?: submissionsWhereInput | submissionsWhereInput[]
    name?: StringNullableFilter<"submissions"> | string | null
    month?: StringNullableFilter<"submissions"> | string | null
    tasks?: JsonNullableFilter<"submissions">
    status?: StringNullableFilter<"submissions"> | string | null
    created?: DateTimeNullableFilter<"submissions"> | Date | string | null
    position_?: StringNullableFilter<"submissions"> | string | null
    submitted?: JsonNullableFilter<"submissions">
    created_by?: StringNullableFilter<"submissions"> | string | null
    client_name?: JsonNullableFilter<"submissions">
    source_link?: StringNullableFilter<"submissions"> | string | null
    airtable_id?: StringNullableFilter<"submissions"> | string | null
    sourced_from?: StringNullableFilter<"submissions"> | string | null
    submitted_by?: StringNullableFilter<"submissions"> | string | null
    date_submitted?: DateTimeNullableFilter<"submissions"> | Date | string | null
    position_title?: JsonNullableFilter<"submissions">
    candidate_email?: StringNullableFilter<"submissions"> | string | null
    candidate_ph_no?: StringNullableFilter<"submissions"> | string | null
    interview_sheet?: JsonNullableFilter<"submissions">
    interviews_copy?: StringNullableFilter<"submissions"> | string | null
    reference_number?: StringNullableFilter<"submissions"> | string | null
    airtable_table_name?: StringNullableFilter<"submissions"> | string | null
    status_last_modified?: DateTimeNullableFilter<"submissions"> | Date | string | null
    airtable_created_time?: StringNullableFilter<"submissions"> | string | null
    date__from_client_name_?: JsonNullableFilter<"submissions">
    status__from_client_name_?: JsonNullableFilter<"submissions">
    bdm_user__from_client_name_?: JsonNullableFilter<"submissions">
    domain_id_s__from_submitted_?: JsonNullableFilter<"submissions">
    candidate_s_resume_attachment?: StringNullableFilter<"submissions"> | string | null
    feedback___from_interview_sheet_?: JsonNullableFilter<"submissions">
    research_analyst__from_client_name_?: JsonNullableFilter<"submissions">
    airbyte_raw_id?: StringFilter<"submissions"> | string
    airbyte_extracted_at?: DateTimeFilter<"submissions"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"submissions"> | bigint | number | null
    airbyte_meta?: JsonFilter<"submissions">
    id?: UuidFilter<"submissions"> | string
  }

  export type submissionsOrderByWithRelationInput = {
    name?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    tasks?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    position_?: SortOrderInput | SortOrder
    submitted?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    client_name?: SortOrderInput | SortOrder
    source_link?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    sourced_from?: SortOrderInput | SortOrder
    submitted_by?: SortOrderInput | SortOrder
    date_submitted?: SortOrderInput | SortOrder
    position_title?: SortOrderInput | SortOrder
    candidate_email?: SortOrderInput | SortOrder
    candidate_ph_no?: SortOrderInput | SortOrder
    interview_sheet?: SortOrderInput | SortOrder
    interviews_copy?: SortOrderInput | SortOrder
    reference_number?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    status_last_modified?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    date__from_client_name_?: SortOrderInput | SortOrder
    status__from_client_name_?: SortOrderInput | SortOrder
    bdm_user__from_client_name_?: SortOrderInput | SortOrder
    domain_id_s__from_submitted_?: SortOrderInput | SortOrder
    candidate_s_resume_attachment?: SortOrderInput | SortOrder
    feedback___from_interview_sheet_?: SortOrderInput | SortOrder
    research_analyst__from_client_name_?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type submissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: submissionsWhereInput | submissionsWhereInput[]
    OR?: submissionsWhereInput[]
    NOT?: submissionsWhereInput | submissionsWhereInput[]
    name?: StringNullableFilter<"submissions"> | string | null
    month?: StringNullableFilter<"submissions"> | string | null
    tasks?: JsonNullableFilter<"submissions">
    status?: StringNullableFilter<"submissions"> | string | null
    created?: DateTimeNullableFilter<"submissions"> | Date | string | null
    position_?: StringNullableFilter<"submissions"> | string | null
    submitted?: JsonNullableFilter<"submissions">
    created_by?: StringNullableFilter<"submissions"> | string | null
    client_name?: JsonNullableFilter<"submissions">
    source_link?: StringNullableFilter<"submissions"> | string | null
    airtable_id?: StringNullableFilter<"submissions"> | string | null
    sourced_from?: StringNullableFilter<"submissions"> | string | null
    submitted_by?: StringNullableFilter<"submissions"> | string | null
    date_submitted?: DateTimeNullableFilter<"submissions"> | Date | string | null
    position_title?: JsonNullableFilter<"submissions">
    candidate_email?: StringNullableFilter<"submissions"> | string | null
    candidate_ph_no?: StringNullableFilter<"submissions"> | string | null
    interview_sheet?: JsonNullableFilter<"submissions">
    interviews_copy?: StringNullableFilter<"submissions"> | string | null
    reference_number?: StringNullableFilter<"submissions"> | string | null
    airtable_table_name?: StringNullableFilter<"submissions"> | string | null
    status_last_modified?: DateTimeNullableFilter<"submissions"> | Date | string | null
    airtable_created_time?: StringNullableFilter<"submissions"> | string | null
    date__from_client_name_?: JsonNullableFilter<"submissions">
    status__from_client_name_?: JsonNullableFilter<"submissions">
    bdm_user__from_client_name_?: JsonNullableFilter<"submissions">
    domain_id_s__from_submitted_?: JsonNullableFilter<"submissions">
    candidate_s_resume_attachment?: StringNullableFilter<"submissions"> | string | null
    feedback___from_interview_sheet_?: JsonNullableFilter<"submissions">
    research_analyst__from_client_name_?: JsonNullableFilter<"submissions">
    airbyte_raw_id?: StringFilter<"submissions"> | string
    airbyte_extracted_at?: DateTimeFilter<"submissions"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"submissions"> | bigint | number | null
    airbyte_meta?: JsonFilter<"submissions">
  }, "id" | "id">

  export type submissionsOrderByWithAggregationInput = {
    name?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    tasks?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    position_?: SortOrderInput | SortOrder
    submitted?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    client_name?: SortOrderInput | SortOrder
    source_link?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    sourced_from?: SortOrderInput | SortOrder
    submitted_by?: SortOrderInput | SortOrder
    date_submitted?: SortOrderInput | SortOrder
    position_title?: SortOrderInput | SortOrder
    candidate_email?: SortOrderInput | SortOrder
    candidate_ph_no?: SortOrderInput | SortOrder
    interview_sheet?: SortOrderInput | SortOrder
    interviews_copy?: SortOrderInput | SortOrder
    reference_number?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    status_last_modified?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    date__from_client_name_?: SortOrderInput | SortOrder
    status__from_client_name_?: SortOrderInput | SortOrder
    bdm_user__from_client_name_?: SortOrderInput | SortOrder
    domain_id_s__from_submitted_?: SortOrderInput | SortOrder
    candidate_s_resume_attachment?: SortOrderInput | SortOrder
    feedback___from_interview_sheet_?: SortOrderInput | SortOrder
    research_analyst__from_client_name_?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
    _count?: submissionsCountOrderByAggregateInput
    _avg?: submissionsAvgOrderByAggregateInput
    _max?: submissionsMaxOrderByAggregateInput
    _min?: submissionsMinOrderByAggregateInput
    _sum?: submissionsSumOrderByAggregateInput
  }

  export type submissionsScalarWhereWithAggregatesInput = {
    AND?: submissionsScalarWhereWithAggregatesInput | submissionsScalarWhereWithAggregatesInput[]
    OR?: submissionsScalarWhereWithAggregatesInput[]
    NOT?: submissionsScalarWhereWithAggregatesInput | submissionsScalarWhereWithAggregatesInput[]
    name?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    month?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    tasks?: JsonNullableWithAggregatesFilter<"submissions">
    status?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    created?: DateTimeNullableWithAggregatesFilter<"submissions"> | Date | string | null
    position_?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    submitted?: JsonNullableWithAggregatesFilter<"submissions">
    created_by?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    client_name?: JsonNullableWithAggregatesFilter<"submissions">
    source_link?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    airtable_id?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    sourced_from?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    submitted_by?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    date_submitted?: DateTimeNullableWithAggregatesFilter<"submissions"> | Date | string | null
    position_title?: JsonNullableWithAggregatesFilter<"submissions">
    candidate_email?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    candidate_ph_no?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    interview_sheet?: JsonNullableWithAggregatesFilter<"submissions">
    interviews_copy?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    reference_number?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    airtable_table_name?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    status_last_modified?: DateTimeNullableWithAggregatesFilter<"submissions"> | Date | string | null
    airtable_created_time?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    date__from_client_name_?: JsonNullableWithAggregatesFilter<"submissions">
    status__from_client_name_?: JsonNullableWithAggregatesFilter<"submissions">
    bdm_user__from_client_name_?: JsonNullableWithAggregatesFilter<"submissions">
    domain_id_s__from_submitted_?: JsonNullableWithAggregatesFilter<"submissions">
    candidate_s_resume_attachment?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    feedback___from_interview_sheet_?: JsonNullableWithAggregatesFilter<"submissions">
    research_analyst__from_client_name_?: JsonNullableWithAggregatesFilter<"submissions">
    airbyte_raw_id?: StringWithAggregatesFilter<"submissions"> | string
    airbyte_extracted_at?: DateTimeWithAggregatesFilter<"submissions"> | Date | string
    airbyte_generation_id?: BigIntNullableWithAggregatesFilter<"submissions"> | bigint | number | null
    airbyte_meta?: JsonWithAggregatesFilter<"submissions">
    id?: UuidWithAggregatesFilter<"submissions"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    bdm?: StringNullableFilter<"users"> | string | null
    name?: StringNullableFilter<"users"> | string | null
    offers?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"users"> | string | null
    domain_id?: StringNullableFilter<"users"> | string | null
    positions?: JsonNullableFilter<"users">
    team_lead?: StringNullableFilter<"users"> | string | null
    attachments?: StringNullableFilter<"users"> | string | null
    psuedo_name?: StringNullableFilter<"users"> | string | null
    airtable_id?: StringNullableFilter<"users"> | string | null
    client_sheet?: JsonNullableFilter<"users">
    today_s_clients?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    active_positions?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    last_month_clients?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    last_week_s_clients?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    today_s_submissions?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: StringNullableFilter<"users"> | string | null
    domain_id__from_bdm_?: StringNullableFilter<"users"> | string | null
    number_of_interviews?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    employee_designantion?: StringNullableFilter<"users"> | string | null
    airtable_created_time?: StringNullableFilter<"users"> | string | null
    last_month_submissions?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    last_weeks_submissions?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    candidate_submission_sheet?: JsonNullableFilter<"users">
    positions_with_no_submissions?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    number_of_interviews_in_last_90_days?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    airbyte_raw_id?: StringFilter<"users"> | string
    airbyte_extracted_at?: DateTimeFilter<"users"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"users"> | bigint | number | null
    airbyte_meta?: JsonFilter<"users">
    id?: UuidFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    bdm?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    offers?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    domain_id?: SortOrderInput | SortOrder
    positions?: SortOrderInput | SortOrder
    team_lead?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    psuedo_name?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    client_sheet?: SortOrderInput | SortOrder
    today_s_clients?: SortOrderInput | SortOrder
    active_positions?: SortOrderInput | SortOrder
    last_month_clients?: SortOrderInput | SortOrder
    last_week_s_clients?: SortOrderInput | SortOrder
    today_s_submissions?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    domain_id__from_bdm_?: SortOrderInput | SortOrder
    number_of_interviews?: SortOrderInput | SortOrder
    employee_designantion?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    last_month_submissions?: SortOrderInput | SortOrder
    last_weeks_submissions?: SortOrderInput | SortOrder
    candidate_submission_sheet?: SortOrderInput | SortOrder
    positions_with_no_submissions?: SortOrderInput | SortOrder
    number_of_interviews_in_last_90_days?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    bdm?: StringNullableFilter<"users"> | string | null
    name?: StringNullableFilter<"users"> | string | null
    offers?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"users"> | string | null
    domain_id?: StringNullableFilter<"users"> | string | null
    positions?: JsonNullableFilter<"users">
    team_lead?: StringNullableFilter<"users"> | string | null
    attachments?: StringNullableFilter<"users"> | string | null
    psuedo_name?: StringNullableFilter<"users"> | string | null
    airtable_id?: StringNullableFilter<"users"> | string | null
    client_sheet?: JsonNullableFilter<"users">
    today_s_clients?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    active_positions?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    last_month_clients?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    last_week_s_clients?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    today_s_submissions?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: StringNullableFilter<"users"> | string | null
    domain_id__from_bdm_?: StringNullableFilter<"users"> | string | null
    number_of_interviews?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    employee_designantion?: StringNullableFilter<"users"> | string | null
    airtable_created_time?: StringNullableFilter<"users"> | string | null
    last_month_submissions?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    last_weeks_submissions?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    candidate_submission_sheet?: JsonNullableFilter<"users">
    positions_with_no_submissions?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    number_of_interviews_in_last_90_days?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    airbyte_raw_id?: StringFilter<"users"> | string
    airbyte_extracted_at?: DateTimeFilter<"users"> | Date | string
    airbyte_generation_id?: BigIntNullableFilter<"users"> | bigint | number | null
    airbyte_meta?: JsonFilter<"users">
  }, "id" | "id">

  export type usersOrderByWithAggregationInput = {
    bdm?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    offers?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    domain_id?: SortOrderInput | SortOrder
    positions?: SortOrderInput | SortOrder
    team_lead?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    psuedo_name?: SortOrderInput | SortOrder
    airtable_id?: SortOrderInput | SortOrder
    client_sheet?: SortOrderInput | SortOrder
    today_s_clients?: SortOrderInput | SortOrder
    active_positions?: SortOrderInput | SortOrder
    last_month_clients?: SortOrderInput | SortOrder
    last_week_s_clients?: SortOrderInput | SortOrder
    today_s_submissions?: SortOrderInput | SortOrder
    airtable_table_name?: SortOrderInput | SortOrder
    domain_id__from_bdm_?: SortOrderInput | SortOrder
    number_of_interviews?: SortOrderInput | SortOrder
    employee_designantion?: SortOrderInput | SortOrder
    airtable_created_time?: SortOrderInput | SortOrder
    last_month_submissions?: SortOrderInput | SortOrder
    last_weeks_submissions?: SortOrderInput | SortOrder
    candidate_submission_sheet?: SortOrderInput | SortOrder
    positions_with_no_submissions?: SortOrderInput | SortOrder
    number_of_interviews_in_last_90_days?: SortOrderInput | SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrderInput | SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    bdm?: StringNullableWithAggregatesFilter<"users"> | string | null
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    offers?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableWithAggregatesFilter<"users"> | string | null
    domain_id?: StringNullableWithAggregatesFilter<"users"> | string | null
    positions?: JsonNullableWithAggregatesFilter<"users">
    team_lead?: StringNullableWithAggregatesFilter<"users"> | string | null
    attachments?: StringNullableWithAggregatesFilter<"users"> | string | null
    psuedo_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    airtable_id?: StringNullableWithAggregatesFilter<"users"> | string | null
    client_sheet?: JsonNullableWithAggregatesFilter<"users">
    today_s_clients?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    active_positions?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    last_month_clients?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    last_week_s_clients?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    today_s_submissions?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    domain_id__from_bdm_?: StringNullableWithAggregatesFilter<"users"> | string | null
    number_of_interviews?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    employee_designantion?: StringNullableWithAggregatesFilter<"users"> | string | null
    airtable_created_time?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_month_submissions?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    last_weeks_submissions?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    candidate_submission_sheet?: JsonNullableWithAggregatesFilter<"users">
    positions_with_no_submissions?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    number_of_interviews_in_last_90_days?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    airbyte_raw_id?: StringWithAggregatesFilter<"users"> | string
    airbyte_extracted_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    airbyte_generation_id?: BigIntNullableWithAggregatesFilter<"users"> | bigint | number | null
    airbyte_meta?: JsonWithAggregatesFilter<"users">
    id?: UuidWithAggregatesFilter<"users"> | string
  }

  export type agreementsCreateInput = {
    location?: string | null
    warranty?: Decimal | DecimalJsLike | number | string | null
    percentage?: Decimal | DecimalJsLike | number | string | null
    date_signed?: Date | string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: string | null
    payment_terms?: Decimal | DecimalJsLike | number | string | null
    title_of_the_poc?: string | null
    name_of_the_client?: string | null
    airtable_table_name?: string | null
    airtable_created_time?: string | null
    signed_by__client_poc_?: string | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type agreementsUncheckedCreateInput = {
    location?: string | null
    warranty?: Decimal | DecimalJsLike | number | string | null
    percentage?: Decimal | DecimalJsLike | number | string | null
    date_signed?: Date | string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: string | null
    payment_terms?: Decimal | DecimalJsLike | number | string | null
    title_of_the_poc?: string | null
    name_of_the_client?: string | null
    airtable_table_name?: string | null
    airtable_created_time?: string | null
    signed_by__client_poc_?: string | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type agreementsUpdateInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    warranty?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_signed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    payment_terms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    title_of_the_poc?: NullableStringFieldUpdateOperationsInput | string | null
    name_of_the_client?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    signed_by__client_poc_?: NullableStringFieldUpdateOperationsInput | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type agreementsUncheckedUpdateInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    warranty?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_signed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    payment_terms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    title_of_the_poc?: NullableStringFieldUpdateOperationsInput | string | null
    name_of_the_client?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    signed_by__client_poc_?: NullableStringFieldUpdateOperationsInput | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type agreementsCreateManyInput = {
    location?: string | null
    warranty?: Decimal | DecimalJsLike | number | string | null
    percentage?: Decimal | DecimalJsLike | number | string | null
    date_signed?: Date | string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: string | null
    payment_terms?: Decimal | DecimalJsLike | number | string | null
    title_of_the_poc?: string | null
    name_of_the_client?: string | null
    airtable_table_name?: string | null
    airtable_created_time?: string | null
    signed_by__client_poc_?: string | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type agreementsUpdateManyMutationInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    warranty?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_signed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    payment_terms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    title_of_the_poc?: NullableStringFieldUpdateOperationsInput | string | null
    name_of_the_client?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    signed_by__client_poc_?: NullableStringFieldUpdateOperationsInput | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type agreementsUncheckedUpdateManyInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    warranty?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_signed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    payment_terms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    title_of_the_poc?: NullableStringFieldUpdateOperationsInput | string | null
    name_of_the_client?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    signed_by__client_poc_?: NullableStringFieldUpdateOperationsInput | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type interviewsCreateInput = {
    name?: string | null
    client?: NullableJsonNullValueInput | InputJsonValue
    created?: Date | string | null
    feedback_?: string | null
    recruiter?: NullableJsonNullValueInput | InputJsonValue
    time_zone?: string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    calculation?: Decimal | DecimalJsLike | number | string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    records__nested_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst?: NullableJsonNullValueInput | InputJsonValue
    mode_of_interview?: string | null
    airtable_table_name?: string | null
    name_of_the_candidate?: NullableJsonNullValueInput | InputJsonValue
    airtable_created_time?: string | null
    date___time_of_interview?: Date | string | null
    local_time_of_the_interview?: string | null
    client_name__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    name__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    status__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    sourced_from__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate__3?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted___from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type interviewsUncheckedCreateInput = {
    name?: string | null
    client?: NullableJsonNullValueInput | InputJsonValue
    created?: Date | string | null
    feedback_?: string | null
    recruiter?: NullableJsonNullValueInput | InputJsonValue
    time_zone?: string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    calculation?: Decimal | DecimalJsLike | number | string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    records__nested_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst?: NullableJsonNullValueInput | InputJsonValue
    mode_of_interview?: string | null
    airtable_table_name?: string | null
    name_of_the_candidate?: NullableJsonNullValueInput | InputJsonValue
    airtable_created_time?: string | null
    date___time_of_interview?: Date | string | null
    local_time_of_the_interview?: string | null
    client_name__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    name__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    status__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    sourced_from__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate__3?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted___from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type interviewsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableJsonNullValueInput | InputJsonValue
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedback_?: NullableStringFieldUpdateOperationsInput | string | null
    recruiter?: NullableJsonNullValueInput | InputJsonValue
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    calculation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    records__nested_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst?: NullableJsonNullValueInput | InputJsonValue
    mode_of_interview?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    name_of_the_candidate?: NullableJsonNullValueInput | InputJsonValue
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    date___time_of_interview?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local_time_of_the_interview?: NullableStringFieldUpdateOperationsInput | string | null
    client_name__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    name__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    status__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    sourced_from__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate__3?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted___from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type interviewsUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableJsonNullValueInput | InputJsonValue
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedback_?: NullableStringFieldUpdateOperationsInput | string | null
    recruiter?: NullableJsonNullValueInput | InputJsonValue
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    calculation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    records__nested_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst?: NullableJsonNullValueInput | InputJsonValue
    mode_of_interview?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    name_of_the_candidate?: NullableJsonNullValueInput | InputJsonValue
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    date___time_of_interview?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local_time_of_the_interview?: NullableStringFieldUpdateOperationsInput | string | null
    client_name__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    name__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    status__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    sourced_from__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate__3?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted___from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type interviewsCreateManyInput = {
    name?: string | null
    client?: NullableJsonNullValueInput | InputJsonValue
    created?: Date | string | null
    feedback_?: string | null
    recruiter?: NullableJsonNullValueInput | InputJsonValue
    time_zone?: string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    calculation?: Decimal | DecimalJsLike | number | string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    records__nested_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst?: NullableJsonNullValueInput | InputJsonValue
    mode_of_interview?: string | null
    airtable_table_name?: string | null
    name_of_the_candidate?: NullableJsonNullValueInput | InputJsonValue
    airtable_created_time?: string | null
    date___time_of_interview?: Date | string | null
    local_time_of_the_interview?: string | null
    client_name__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    name__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    status__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    sourced_from__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate__3?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted___from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type interviewsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableJsonNullValueInput | InputJsonValue
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedback_?: NullableStringFieldUpdateOperationsInput | string | null
    recruiter?: NullableJsonNullValueInput | InputJsonValue
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    calculation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    records__nested_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst?: NullableJsonNullValueInput | InputJsonValue
    mode_of_interview?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    name_of_the_candidate?: NullableJsonNullValueInput | InputJsonValue
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    date___time_of_interview?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local_time_of_the_interview?: NullableStringFieldUpdateOperationsInput | string | null
    client_name__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    name__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    status__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    sourced_from__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate__3?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted___from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type interviewsUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableJsonNullValueInput | InputJsonValue
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedback_?: NullableStringFieldUpdateOperationsInput | string | null
    recruiter?: NullableJsonNullValueInput | InputJsonValue
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    calculation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    records__nested_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst?: NullableJsonNullValueInput | InputJsonValue
    mode_of_interview?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    name_of_the_candidate?: NullableJsonNullValueInput | InputJsonValue
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    date___time_of_interview?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local_time_of_the_interview?: NullableStringFieldUpdateOperationsInput | string | null
    client_name__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    name__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    status__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    sourced_from__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    reference_number__from_name_of_the_candidate__3?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted___from_name_of_the_candidate_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type legacy_positionsCreateInput = {
    month?: string | null
    string?: string | null
    created?: Date | string | null
    location?: string | null
    position?: string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    position_title?: string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    recruiters_assign?: NullableJsonNullValueInput | InputJsonValue
    airtable_table_name?: string | null
    job_description_link?: string | null
    airtable_created_time?: string | null
    job_drescription_text_?: string | null
    position_active_inactive?: string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    job_description_attachment?: string | null
    status__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    candidate_submission_sheet_copy?: string | null
    domain_id_s__from_recruiters_assign_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    status__from_candidate_submission_sheet_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by___from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    id?: string
  }

  export type legacy_positionsUncheckedCreateInput = {
    month?: string | null
    string?: string | null
    created?: Date | string | null
    location?: string | null
    position?: string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    position_title?: string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    recruiters_assign?: NullableJsonNullValueInput | InputJsonValue
    airtable_table_name?: string | null
    job_description_link?: string | null
    airtable_created_time?: string | null
    job_drescription_text_?: string | null
    position_active_inactive?: string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    job_description_attachment?: string | null
    status__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    candidate_submission_sheet_copy?: string | null
    domain_id_s__from_recruiters_assign_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    status__from_candidate_submission_sheet_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by___from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    id?: string
  }

  export type legacy_positionsUpdateInput = {
    month?: NullableStringFieldUpdateOperationsInput | string | null
    string?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    position_title?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    recruiters_assign?: NullableJsonNullValueInput | InputJsonValue
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    job_description_link?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    job_drescription_text_?: NullableStringFieldUpdateOperationsInput | string | null
    position_active_inactive?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    job_description_attachment?: NullableStringFieldUpdateOperationsInput | string | null
    status__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    candidate_submission_sheet_copy?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id_s__from_recruiters_assign_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    status__from_candidate_submission_sheet_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by___from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type legacy_positionsUncheckedUpdateInput = {
    month?: NullableStringFieldUpdateOperationsInput | string | null
    string?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    position_title?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    recruiters_assign?: NullableJsonNullValueInput | InputJsonValue
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    job_description_link?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    job_drescription_text_?: NullableStringFieldUpdateOperationsInput | string | null
    position_active_inactive?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    job_description_attachment?: NullableStringFieldUpdateOperationsInput | string | null
    status__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    candidate_submission_sheet_copy?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id_s__from_recruiters_assign_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    status__from_candidate_submission_sheet_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by___from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type legacy_positionsCreateManyInput = {
    month?: string | null
    string?: string | null
    created?: Date | string | null
    location?: string | null
    position?: string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    position_title?: string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    recruiters_assign?: NullableJsonNullValueInput | InputJsonValue
    airtable_table_name?: string | null
    job_description_link?: string | null
    airtable_created_time?: string | null
    job_drescription_text_?: string | null
    position_active_inactive?: string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    job_description_attachment?: string | null
    status__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    candidate_submission_sheet_copy?: string | null
    domain_id_s__from_recruiters_assign_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    status__from_candidate_submission_sheet_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by___from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    id?: string
  }

  export type legacy_positionsUpdateManyMutationInput = {
    month?: NullableStringFieldUpdateOperationsInput | string | null
    string?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    position_title?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    recruiters_assign?: NullableJsonNullValueInput | InputJsonValue
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    job_description_link?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    job_drescription_text_?: NullableStringFieldUpdateOperationsInput | string | null
    position_active_inactive?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    job_description_attachment?: NullableStringFieldUpdateOperationsInput | string | null
    status__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    candidate_submission_sheet_copy?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id_s__from_recruiters_assign_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    status__from_candidate_submission_sheet_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by___from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type legacy_positionsUncheckedUpdateManyInput = {
    month?: NullableStringFieldUpdateOperationsInput | string | null
    string?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    client_bdm?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    position_title?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    recruiters_assign?: NullableJsonNullValueInput | InputJsonValue
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    job_description_link?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    job_drescription_text_?: NullableStringFieldUpdateOperationsInput | string | null
    position_active_inactive?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    job_description_attachment?: NullableStringFieldUpdateOperationsInput | string | null
    status__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    candidate_submission_sheet_copy?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id_s__from_recruiters_assign_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    status__from_candidate_submission_sheet_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by___from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type organizationsCreateInput = {
    date?: Date | string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    client?: string | null
    status?: string | null
    created?: Date | string | null
    website?: string | null
    bdm_user?: string | null
    flat_fee?: Decimal | DecimalJsLike | number | string | null
    poc_name?: string | null
    location_?: string | null
    opened_by?: NullableJsonNullValueInput | InputJsonValue
    poc_email?: string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    percentage?: Decimal | DecimalJsLike | number | string | null
    client_name?: string | null
    reached_out?: boolean | null
    sumbissions?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: string | null
    dependencies?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: string | null
    email_domain?: string | null
    conversations?: string | null
    new_positions?: NullableJsonNullValueInput | InputJsonValue
    website_domain?: string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    no_contact_list?: boolean | null
    no_of_positions?: Decimal | DecimalJsLike | number | string | null
    last_reached_out?: Date | string | null
    poc_phone_number?: string | null
    reference_number?: string | null
    research_analyst?: string | null
    research_comment?: string | null
    no_of_submissions?: Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: string | null
    research_domain_id_s?: string | null
    airtable_created_time?: string | null
    direct_hire_agreements?: NullableJsonNullValueInput | InputJsonValue
    status__from_sumbissions_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by_?: NullableJsonNullValueInput | InputJsonValue
    is_this_a_flat_fee_or_percentage_?: string | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type organizationsUncheckedCreateInput = {
    date?: Date | string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    client?: string | null
    status?: string | null
    created?: Date | string | null
    website?: string | null
    bdm_user?: string | null
    flat_fee?: Decimal | DecimalJsLike | number | string | null
    poc_name?: string | null
    location_?: string | null
    opened_by?: NullableJsonNullValueInput | InputJsonValue
    poc_email?: string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    percentage?: Decimal | DecimalJsLike | number | string | null
    client_name?: string | null
    reached_out?: boolean | null
    sumbissions?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: string | null
    dependencies?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: string | null
    email_domain?: string | null
    conversations?: string | null
    new_positions?: NullableJsonNullValueInput | InputJsonValue
    website_domain?: string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    no_contact_list?: boolean | null
    no_of_positions?: Decimal | DecimalJsLike | number | string | null
    last_reached_out?: Date | string | null
    poc_phone_number?: string | null
    reference_number?: string | null
    research_analyst?: string | null
    research_comment?: string | null
    no_of_submissions?: Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: string | null
    research_domain_id_s?: string | null
    airtable_created_time?: string | null
    direct_hire_agreements?: NullableJsonNullValueInput | InputJsonValue
    status__from_sumbissions_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by_?: NullableJsonNullValueInput | InputJsonValue
    is_this_a_flat_fee_or_percentage_?: string | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type organizationsUpdateInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bdm_user?: NullableStringFieldUpdateOperationsInput | string | null
    flat_fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poc_name?: NullableStringFieldUpdateOperationsInput | string | null
    location_?: NullableStringFieldUpdateOperationsInput | string | null
    opened_by?: NullableJsonNullValueInput | InputJsonValue
    poc_email?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    reached_out?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sumbissions?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    dependencies?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    email_domain?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: NullableStringFieldUpdateOperationsInput | string | null
    new_positions?: NullableJsonNullValueInput | InputJsonValue
    website_domain?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    no_contact_list?: NullableBoolFieldUpdateOperationsInput | boolean | null
    no_of_positions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_reached_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    poc_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    reference_number?: NullableStringFieldUpdateOperationsInput | string | null
    research_analyst?: NullableStringFieldUpdateOperationsInput | string | null
    research_comment?: NullableStringFieldUpdateOperationsInput | string | null
    no_of_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    research_domain_id_s?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    direct_hire_agreements?: NullableJsonNullValueInput | InputJsonValue
    status__from_sumbissions_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by_?: NullableJsonNullValueInput | InputJsonValue
    is_this_a_flat_fee_or_percentage_?: NullableStringFieldUpdateOperationsInput | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type organizationsUncheckedUpdateInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bdm_user?: NullableStringFieldUpdateOperationsInput | string | null
    flat_fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poc_name?: NullableStringFieldUpdateOperationsInput | string | null
    location_?: NullableStringFieldUpdateOperationsInput | string | null
    opened_by?: NullableJsonNullValueInput | InputJsonValue
    poc_email?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    reached_out?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sumbissions?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    dependencies?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    email_domain?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: NullableStringFieldUpdateOperationsInput | string | null
    new_positions?: NullableJsonNullValueInput | InputJsonValue
    website_domain?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    no_contact_list?: NullableBoolFieldUpdateOperationsInput | boolean | null
    no_of_positions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_reached_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    poc_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    reference_number?: NullableStringFieldUpdateOperationsInput | string | null
    research_analyst?: NullableStringFieldUpdateOperationsInput | string | null
    research_comment?: NullableStringFieldUpdateOperationsInput | string | null
    no_of_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    research_domain_id_s?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    direct_hire_agreements?: NullableJsonNullValueInput | InputJsonValue
    status__from_sumbissions_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by_?: NullableJsonNullValueInput | InputJsonValue
    is_this_a_flat_fee_or_percentage_?: NullableStringFieldUpdateOperationsInput | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type organizationsCreateManyInput = {
    date?: Date | string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    client?: string | null
    status?: string | null
    created?: Date | string | null
    website?: string | null
    bdm_user?: string | null
    flat_fee?: Decimal | DecimalJsLike | number | string | null
    poc_name?: string | null
    location_?: string | null
    opened_by?: NullableJsonNullValueInput | InputJsonValue
    poc_email?: string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    percentage?: Decimal | DecimalJsLike | number | string | null
    client_name?: string | null
    reached_out?: boolean | null
    sumbissions?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: string | null
    dependencies?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: string | null
    email_domain?: string | null
    conversations?: string | null
    new_positions?: NullableJsonNullValueInput | InputJsonValue
    website_domain?: string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    no_contact_list?: boolean | null
    no_of_positions?: Decimal | DecimalJsLike | number | string | null
    last_reached_out?: Date | string | null
    poc_phone_number?: string | null
    reference_number?: string | null
    research_analyst?: string | null
    research_comment?: string | null
    no_of_submissions?: Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: string | null
    research_domain_id_s?: string | null
    airtable_created_time?: string | null
    direct_hire_agreements?: NullableJsonNullValueInput | InputJsonValue
    status__from_sumbissions_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by_?: NullableJsonNullValueInput | InputJsonValue
    is_this_a_flat_fee_or_percentage_?: string | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type organizationsUpdateManyMutationInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bdm_user?: NullableStringFieldUpdateOperationsInput | string | null
    flat_fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poc_name?: NullableStringFieldUpdateOperationsInput | string | null
    location_?: NullableStringFieldUpdateOperationsInput | string | null
    opened_by?: NullableJsonNullValueInput | InputJsonValue
    poc_email?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    reached_out?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sumbissions?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    dependencies?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    email_domain?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: NullableStringFieldUpdateOperationsInput | string | null
    new_positions?: NullableJsonNullValueInput | InputJsonValue
    website_domain?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    no_contact_list?: NullableBoolFieldUpdateOperationsInput | boolean | null
    no_of_positions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_reached_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    poc_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    reference_number?: NullableStringFieldUpdateOperationsInput | string | null
    research_analyst?: NullableStringFieldUpdateOperationsInput | string | null
    research_comment?: NullableStringFieldUpdateOperationsInput | string | null
    no_of_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    research_domain_id_s?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    direct_hire_agreements?: NullableJsonNullValueInput | InputJsonValue
    status__from_sumbissions_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by_?: NullableJsonNullValueInput | InputJsonValue
    is_this_a_flat_fee_or_percentage_?: NullableStringFieldUpdateOperationsInput | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type organizationsUncheckedUpdateManyInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    client?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    bdm_user?: NullableStringFieldUpdateOperationsInput | string | null
    flat_fee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    poc_name?: NullableStringFieldUpdateOperationsInput | string | null
    location_?: NullableStringFieldUpdateOperationsInput | string | null
    opened_by?: NullableJsonNullValueInput | InputJsonValue
    poc_email?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    client_name?: NullableStringFieldUpdateOperationsInput | string | null
    reached_out?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sumbissions?: NullableJsonNullValueInput | InputJsonValue
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    dependencies?: NullableJsonNullValueInput | InputJsonValue
    dh_agreement?: NullableStringFieldUpdateOperationsInput | string | null
    email_domain?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: NullableStringFieldUpdateOperationsInput | string | null
    new_positions?: NullableJsonNullValueInput | InputJsonValue
    website_domain?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    no_contact_list?: NullableBoolFieldUpdateOperationsInput | boolean | null
    no_of_positions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_reached_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    poc_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    reference_number?: NullableStringFieldUpdateOperationsInput | string | null
    research_analyst?: NullableStringFieldUpdateOperationsInput | string | null
    research_comment?: NullableStringFieldUpdateOperationsInput | string | null
    no_of_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    research_domain_id_s?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    direct_hire_agreements?: NullableJsonNullValueInput | InputJsonValue
    status__from_sumbissions_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_opened_by_?: NullableJsonNullValueInput | InputJsonValue
    is_this_a_flat_fee_or_percentage_?: NullableStringFieldUpdateOperationsInput | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type positionsCreateInput = {
    legacy_id?: string | null
    link?: string | null
    created?: Date | string | null
    industry?: string | null
    keywords?: Decimal | DecimalJsLike | number | string | null
    location?: string | null
    companies?: string | null
    createdat?: Date | string | null
    deletedat?: string | null
    isdeleted?: string | null
    updatedat?: Date | string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    salary_range?: string | null
    position_title?: string | null
    airtable_table_name?: string | null
    airtable_created_time?: string | null
    bdm_user__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    last_reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type positionsUncheckedCreateInput = {
    legacy_id?: string | null
    link?: string | null
    created?: Date | string | null
    industry?: string | null
    keywords?: Decimal | DecimalJsLike | number | string | null
    location?: string | null
    companies?: string | null
    createdat?: Date | string | null
    deletedat?: string | null
    isdeleted?: string | null
    updatedat?: Date | string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    salary_range?: string | null
    position_title?: string | null
    airtable_table_name?: string | null
    airtable_created_time?: string | null
    bdm_user__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    last_reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type positionsUpdateInput = {
    legacy_id?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    companies?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedat?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableStringFieldUpdateOperationsInput | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null
    position_title?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    bdm_user__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    last_reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type positionsUncheckedUpdateInput = {
    legacy_id?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    companies?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedat?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableStringFieldUpdateOperationsInput | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null
    position_title?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    bdm_user__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    last_reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type positionsCreateManyInput = {
    legacy_id?: string | null
    link?: string | null
    created?: Date | string | null
    industry?: string | null
    keywords?: Decimal | DecimalJsLike | number | string | null
    location?: string | null
    companies?: string | null
    createdat?: Date | string | null
    deletedat?: string | null
    isdeleted?: string | null
    updatedat?: Date | string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    salary_range?: string | null
    position_title?: string | null
    airtable_table_name?: string | null
    airtable_created_time?: string | null
    bdm_user__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    last_reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type positionsUpdateManyMutationInput = {
    legacy_id?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    companies?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedat?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableStringFieldUpdateOperationsInput | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null
    position_title?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    bdm_user__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    last_reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type positionsUncheckedUpdateManyInput = {
    legacy_id?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    companies?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedat?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableStringFieldUpdateOperationsInput | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null
    position_title?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    bdm_user__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    last_reached_out__from_client_sheet_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type submissionsCreateInput = {
    name?: string | null
    month?: string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    created?: Date | string | null
    position_?: string | null
    submitted?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    source_link?: string | null
    airtable_id?: string | null
    sourced_from?: string | null
    submitted_by?: string | null
    date_submitted?: Date | string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    candidate_email?: string | null
    candidate_ph_no?: string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    interviews_copy?: string | null
    reference_number?: string | null
    airtable_table_name?: string | null
    status_last_modified?: Date | string | null
    airtable_created_time?: string | null
    date__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    status__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    bdm_user__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted_?: NullableJsonNullValueInput | InputJsonValue
    candidate_s_resume_attachment?: string | null
    feedback___from_interview_sheet_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type submissionsUncheckedCreateInput = {
    name?: string | null
    month?: string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    created?: Date | string | null
    position_?: string | null
    submitted?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    source_link?: string | null
    airtable_id?: string | null
    sourced_from?: string | null
    submitted_by?: string | null
    date_submitted?: Date | string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    candidate_email?: string | null
    candidate_ph_no?: string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    interviews_copy?: string | null
    reference_number?: string | null
    airtable_table_name?: string | null
    status_last_modified?: Date | string | null
    airtable_created_time?: string | null
    date__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    status__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    bdm_user__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted_?: NullableJsonNullValueInput | InputJsonValue
    candidate_s_resume_attachment?: string | null
    feedback___from_interview_sheet_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type submissionsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position_?: NullableStringFieldUpdateOperationsInput | string | null
    submitted?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    source_link?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    sourced_from?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_by?: NullableStringFieldUpdateOperationsInput | string | null
    date_submitted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    candidate_email?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_ph_no?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    interviews_copy?: NullableStringFieldUpdateOperationsInput | string | null
    reference_number?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    date__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    status__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    bdm_user__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted_?: NullableJsonNullValueInput | InputJsonValue
    candidate_s_resume_attachment?: NullableStringFieldUpdateOperationsInput | string | null
    feedback___from_interview_sheet_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type submissionsUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position_?: NullableStringFieldUpdateOperationsInput | string | null
    submitted?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    source_link?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    sourced_from?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_by?: NullableStringFieldUpdateOperationsInput | string | null
    date_submitted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    candidate_email?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_ph_no?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    interviews_copy?: NullableStringFieldUpdateOperationsInput | string | null
    reference_number?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    date__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    status__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    bdm_user__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted_?: NullableJsonNullValueInput | InputJsonValue
    candidate_s_resume_attachment?: NullableStringFieldUpdateOperationsInput | string | null
    feedback___from_interview_sheet_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type submissionsCreateManyInput = {
    name?: string | null
    month?: string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    created?: Date | string | null
    position_?: string | null
    submitted?: NullableJsonNullValueInput | InputJsonValue
    created_by?: string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    source_link?: string | null
    airtable_id?: string | null
    sourced_from?: string | null
    submitted_by?: string | null
    date_submitted?: Date | string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    candidate_email?: string | null
    candidate_ph_no?: string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    interviews_copy?: string | null
    reference_number?: string | null
    airtable_table_name?: string | null
    status_last_modified?: Date | string | null
    airtable_created_time?: string | null
    date__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    status__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    bdm_user__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted_?: NullableJsonNullValueInput | InputJsonValue
    candidate_s_resume_attachment?: string | null
    feedback___from_interview_sheet_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type submissionsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position_?: NullableStringFieldUpdateOperationsInput | string | null
    submitted?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    source_link?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    sourced_from?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_by?: NullableStringFieldUpdateOperationsInput | string | null
    date_submitted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    candidate_email?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_ph_no?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    interviews_copy?: NullableStringFieldUpdateOperationsInput | string | null
    reference_number?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    date__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    status__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    bdm_user__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted_?: NullableJsonNullValueInput | InputJsonValue
    candidate_s_resume_attachment?: NullableStringFieldUpdateOperationsInput | string | null
    feedback___from_interview_sheet_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type submissionsUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position_?: NullableStringFieldUpdateOperationsInput | string | null
    submitted?: NullableJsonNullValueInput | InputJsonValue
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    client_name?: NullableJsonNullValueInput | InputJsonValue
    source_link?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    sourced_from?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_by?: NullableStringFieldUpdateOperationsInput | string | null
    date_submitted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position_title?: NullableJsonNullValueInput | InputJsonValue
    candidate_email?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_ph_no?: NullableStringFieldUpdateOperationsInput | string | null
    interview_sheet?: NullableJsonNullValueInput | InputJsonValue
    interviews_copy?: NullableStringFieldUpdateOperationsInput | string | null
    reference_number?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_last_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    date__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    status__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    bdm_user__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    domain_id_s__from_submitted_?: NullableJsonNullValueInput | InputJsonValue
    candidate_s_resume_attachment?: NullableStringFieldUpdateOperationsInput | string | null
    feedback___from_interview_sheet_?: NullableJsonNullValueInput | InputJsonValue
    research_analyst__from_client_name_?: NullableJsonNullValueInput | InputJsonValue
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    bdm?: string | null
    name?: string | null
    offers?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    domain_id?: string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    team_lead?: string | null
    attachments?: string | null
    psuedo_name?: string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    today_s_clients?: Decimal | DecimalJsLike | number | string | null
    active_positions?: Decimal | DecimalJsLike | number | string | null
    last_month_clients?: Decimal | DecimalJsLike | number | string | null
    last_week_s_clients?: Decimal | DecimalJsLike | number | string | null
    today_s_submissions?: Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: string | null
    domain_id__from_bdm_?: string | null
    number_of_interviews?: Decimal | DecimalJsLike | number | string | null
    employee_designantion?: string | null
    airtable_created_time?: string | null
    last_month_submissions?: Decimal | DecimalJsLike | number | string | null
    last_weeks_submissions?: Decimal | DecimalJsLike | number | string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    positions_with_no_submissions?: Decimal | DecimalJsLike | number | string | null
    number_of_interviews_in_last_90_days?: Decimal | DecimalJsLike | number | string | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type usersUncheckedCreateInput = {
    bdm?: string | null
    name?: string | null
    offers?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    domain_id?: string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    team_lead?: string | null
    attachments?: string | null
    psuedo_name?: string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    today_s_clients?: Decimal | DecimalJsLike | number | string | null
    active_positions?: Decimal | DecimalJsLike | number | string | null
    last_month_clients?: Decimal | DecimalJsLike | number | string | null
    last_week_s_clients?: Decimal | DecimalJsLike | number | string | null
    today_s_submissions?: Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: string | null
    domain_id__from_bdm_?: string | null
    number_of_interviews?: Decimal | DecimalJsLike | number | string | null
    employee_designantion?: string | null
    airtable_created_time?: string | null
    last_month_submissions?: Decimal | DecimalJsLike | number | string | null
    last_weeks_submissions?: Decimal | DecimalJsLike | number | string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    positions_with_no_submissions?: Decimal | DecimalJsLike | number | string | null
    number_of_interviews_in_last_90_days?: Decimal | DecimalJsLike | number | string | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type usersUpdateInput = {
    bdm?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    team_lead?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    psuedo_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    today_s_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    active_positions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_month_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_week_s_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    today_s_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id__from_bdm_?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_interviews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_designantion?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    last_month_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_weeks_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    positions_with_no_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    number_of_interviews_in_last_90_days?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    bdm?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    team_lead?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    psuedo_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    today_s_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    active_positions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_month_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_week_s_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    today_s_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id__from_bdm_?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_interviews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_designantion?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    last_month_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_weeks_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    positions_with_no_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    number_of_interviews_in_last_90_days?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    bdm?: string | null
    name?: string | null
    offers?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    domain_id?: string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    team_lead?: string | null
    attachments?: string | null
    psuedo_name?: string | null
    airtable_id?: string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    today_s_clients?: Decimal | DecimalJsLike | number | string | null
    active_positions?: Decimal | DecimalJsLike | number | string | null
    last_month_clients?: Decimal | DecimalJsLike | number | string | null
    last_week_s_clients?: Decimal | DecimalJsLike | number | string | null
    today_s_submissions?: Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: string | null
    domain_id__from_bdm_?: string | null
    number_of_interviews?: Decimal | DecimalJsLike | number | string | null
    employee_designantion?: string | null
    airtable_created_time?: string | null
    last_month_submissions?: Decimal | DecimalJsLike | number | string | null
    last_weeks_submissions?: Decimal | DecimalJsLike | number | string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    positions_with_no_submissions?: Decimal | DecimalJsLike | number | string | null
    number_of_interviews_in_last_90_days?: Decimal | DecimalJsLike | number | string | null
    airbyte_raw_id: string
    airbyte_extracted_at: Date | string
    airbyte_generation_id?: bigint | number | null
    airbyte_meta: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type usersUpdateManyMutationInput = {
    bdm?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    team_lead?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    psuedo_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    today_s_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    active_positions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_month_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_week_s_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    today_s_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id__from_bdm_?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_interviews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_designantion?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    last_month_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_weeks_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    positions_with_no_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    number_of_interviews_in_last_90_days?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    bdm?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: NullableJsonNullValueInput | InputJsonValue
    team_lead?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    psuedo_name?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_sheet?: NullableJsonNullValueInput | InputJsonValue
    today_s_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    active_positions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_month_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_week_s_clients?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    today_s_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airtable_table_name?: NullableStringFieldUpdateOperationsInput | string | null
    domain_id__from_bdm_?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_interviews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_designantion?: NullableStringFieldUpdateOperationsInput | string | null
    airtable_created_time?: NullableStringFieldUpdateOperationsInput | string | null
    last_month_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_weeks_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    candidate_submission_sheet?: NullableJsonNullValueInput | InputJsonValue
    positions_with_no_submissions?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    number_of_interviews_in_last_90_days?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    airbyte_raw_id?: StringFieldUpdateOperationsInput | string
    airbyte_extracted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    airbyte_generation_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    airbyte_meta?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type agreementsCountOrderByAggregateInput = {
    location?: SortOrder
    warranty?: SortOrder
    percentage?: SortOrder
    date_signed?: SortOrder
    airtable_id?: SortOrder
    client_sheet?: SortOrder
    dh_agreement?: SortOrder
    payment_terms?: SortOrder
    title_of_the_poc?: SortOrder
    name_of_the_client?: SortOrder
    airtable_table_name?: SortOrder
    airtable_created_time?: SortOrder
    signed_by__client_poc_?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type agreementsAvgOrderByAggregateInput = {
    warranty?: SortOrder
    percentage?: SortOrder
    payment_terms?: SortOrder
    airbyte_generation_id?: SortOrder
  }

  export type agreementsMaxOrderByAggregateInput = {
    location?: SortOrder
    warranty?: SortOrder
    percentage?: SortOrder
    date_signed?: SortOrder
    airtable_id?: SortOrder
    dh_agreement?: SortOrder
    payment_terms?: SortOrder
    title_of_the_poc?: SortOrder
    name_of_the_client?: SortOrder
    airtable_table_name?: SortOrder
    airtable_created_time?: SortOrder
    signed_by__client_poc_?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type agreementsMinOrderByAggregateInput = {
    location?: SortOrder
    warranty?: SortOrder
    percentage?: SortOrder
    date_signed?: SortOrder
    airtable_id?: SortOrder
    dh_agreement?: SortOrder
    payment_terms?: SortOrder
    title_of_the_poc?: SortOrder
    name_of_the_client?: SortOrder
    airtable_table_name?: SortOrder
    airtable_created_time?: SortOrder
    signed_by__client_poc_?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type agreementsSumOrderByAggregateInput = {
    warranty?: SortOrder
    percentage?: SortOrder
    payment_terms?: SortOrder
    airbyte_generation_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type interviewsCountOrderByAggregateInput = {
    name?: SortOrder
    client?: SortOrder
    created?: SortOrder
    feedback_?: SortOrder
    recruiter?: SortOrder
    time_zone?: SortOrder
    client_bdm?: SortOrder
    created_by?: SortOrder
    calculation?: SortOrder
    client_name?: SortOrder
    airtable_id?: SortOrder
    position_title?: SortOrder
    records__nested_?: SortOrder
    research_analyst?: SortOrder
    mode_of_interview?: SortOrder
    airtable_table_name?: SortOrder
    name_of_the_candidate?: SortOrder
    airtable_created_time?: SortOrder
    date___time_of_interview?: SortOrder
    local_time_of_the_interview?: SortOrder
    client_name__from_client_name_?: SortOrder
    name__from_name_of_the_candidate_?: SortOrder
    status__from_name_of_the_candidate_?: SortOrder
    sourced_from__from_name_of_the_candidate_?: SortOrder
    reference_number__from_name_of_the_candidate_?: SortOrder
    reference_number__from_name_of_the_candidate__3?: SortOrder
    domain_id_s__from_submitted___from_name_of_the_candidate_?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type interviewsAvgOrderByAggregateInput = {
    calculation?: SortOrder
    airbyte_generation_id?: SortOrder
  }

  export type interviewsMaxOrderByAggregateInput = {
    name?: SortOrder
    created?: SortOrder
    feedback_?: SortOrder
    time_zone?: SortOrder
    created_by?: SortOrder
    calculation?: SortOrder
    airtable_id?: SortOrder
    mode_of_interview?: SortOrder
    airtable_table_name?: SortOrder
    airtable_created_time?: SortOrder
    date___time_of_interview?: SortOrder
    local_time_of_the_interview?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type interviewsMinOrderByAggregateInput = {
    name?: SortOrder
    created?: SortOrder
    feedback_?: SortOrder
    time_zone?: SortOrder
    created_by?: SortOrder
    calculation?: SortOrder
    airtable_id?: SortOrder
    mode_of_interview?: SortOrder
    airtable_table_name?: SortOrder
    airtable_created_time?: SortOrder
    date___time_of_interview?: SortOrder
    local_time_of_the_interview?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type interviewsSumOrderByAggregateInput = {
    calculation?: SortOrder
    airbyte_generation_id?: SortOrder
  }

  export type legacy_positionsCountOrderByAggregateInput = {
    month?: SortOrder
    string?: SortOrder
    created?: SortOrder
    location?: SortOrder
    position?: SortOrder
    client_bdm?: SortOrder
    created_by?: SortOrder
    airtable_id?: SortOrder
    client_sheet?: SortOrder
    position_title?: SortOrder
    interview_sheet?: SortOrder
    recruiters_assign?: SortOrder
    airtable_table_name?: SortOrder
    job_description_link?: SortOrder
    airtable_created_time?: SortOrder
    job_drescription_text_?: SortOrder
    position_active_inactive?: SortOrder
    candidate_submission_sheet?: SortOrder
    job_description_attachment?: SortOrder
    status__from_client_sheet_?: SortOrder
    candidate_submission_sheet_copy?: SortOrder
    domain_id_s__from_recruiters_assign_?: SortOrder
    research_analyst__from_client_sheet_?: SortOrder
    status__from_candidate_submission_sheet_?: SortOrder
    domain_id_s__from_opened_by___from_client_sheet_?: SortOrder
    id?: SortOrder
  }

  export type legacy_positionsMaxOrderByAggregateInput = {
    month?: SortOrder
    string?: SortOrder
    created?: SortOrder
    location?: SortOrder
    position?: SortOrder
    created_by?: SortOrder
    airtable_id?: SortOrder
    position_title?: SortOrder
    airtable_table_name?: SortOrder
    job_description_link?: SortOrder
    airtable_created_time?: SortOrder
    job_drescription_text_?: SortOrder
    position_active_inactive?: SortOrder
    job_description_attachment?: SortOrder
    candidate_submission_sheet_copy?: SortOrder
    id?: SortOrder
  }

  export type legacy_positionsMinOrderByAggregateInput = {
    month?: SortOrder
    string?: SortOrder
    created?: SortOrder
    location?: SortOrder
    position?: SortOrder
    created_by?: SortOrder
    airtable_id?: SortOrder
    position_title?: SortOrder
    airtable_table_name?: SortOrder
    job_description_link?: SortOrder
    airtable_created_time?: SortOrder
    job_drescription_text_?: SortOrder
    position_active_inactive?: SortOrder
    job_description_attachment?: SortOrder
    candidate_submission_sheet_copy?: SortOrder
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type organizationsCountOrderByAggregateInput = {
    date?: SortOrder
    tasks?: SortOrder
    client?: SortOrder
    status?: SortOrder
    created?: SortOrder
    website?: SortOrder
    bdm_user?: SortOrder
    flat_fee?: SortOrder
    poc_name?: SortOrder
    location_?: SortOrder
    opened_by?: SortOrder
    poc_email?: SortOrder
    positions?: SortOrder
    created_by?: SortOrder
    percentage?: SortOrder
    client_name?: SortOrder
    reached_out?: SortOrder
    sumbissions?: SortOrder
    airtable_id?: SortOrder
    dependencies?: SortOrder
    dh_agreement?: SortOrder
    email_domain?: SortOrder
    conversations?: SortOrder
    new_positions?: SortOrder
    website_domain?: SortOrder
    interview_sheet?: SortOrder
    no_contact_list?: SortOrder
    no_of_positions?: SortOrder
    last_reached_out?: SortOrder
    poc_phone_number?: SortOrder
    reference_number?: SortOrder
    research_analyst?: SortOrder
    research_comment?: SortOrder
    no_of_submissions?: SortOrder
    airtable_table_name?: SortOrder
    research_domain_id_s?: SortOrder
    airtable_created_time?: SortOrder
    direct_hire_agreements?: SortOrder
    status__from_sumbissions_?: SortOrder
    domain_id_s__from_opened_by_?: SortOrder
    is_this_a_flat_fee_or_percentage_?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type organizationsAvgOrderByAggregateInput = {
    flat_fee?: SortOrder
    percentage?: SortOrder
    no_of_positions?: SortOrder
    no_of_submissions?: SortOrder
    airbyte_generation_id?: SortOrder
  }

  export type organizationsMaxOrderByAggregateInput = {
    date?: SortOrder
    client?: SortOrder
    status?: SortOrder
    created?: SortOrder
    website?: SortOrder
    bdm_user?: SortOrder
    flat_fee?: SortOrder
    poc_name?: SortOrder
    location_?: SortOrder
    poc_email?: SortOrder
    created_by?: SortOrder
    percentage?: SortOrder
    client_name?: SortOrder
    reached_out?: SortOrder
    airtable_id?: SortOrder
    dh_agreement?: SortOrder
    email_domain?: SortOrder
    conversations?: SortOrder
    website_domain?: SortOrder
    no_contact_list?: SortOrder
    no_of_positions?: SortOrder
    last_reached_out?: SortOrder
    poc_phone_number?: SortOrder
    reference_number?: SortOrder
    research_analyst?: SortOrder
    research_comment?: SortOrder
    no_of_submissions?: SortOrder
    airtable_table_name?: SortOrder
    research_domain_id_s?: SortOrder
    airtable_created_time?: SortOrder
    is_this_a_flat_fee_or_percentage_?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type organizationsMinOrderByAggregateInput = {
    date?: SortOrder
    client?: SortOrder
    status?: SortOrder
    created?: SortOrder
    website?: SortOrder
    bdm_user?: SortOrder
    flat_fee?: SortOrder
    poc_name?: SortOrder
    location_?: SortOrder
    poc_email?: SortOrder
    created_by?: SortOrder
    percentage?: SortOrder
    client_name?: SortOrder
    reached_out?: SortOrder
    airtable_id?: SortOrder
    dh_agreement?: SortOrder
    email_domain?: SortOrder
    conversations?: SortOrder
    website_domain?: SortOrder
    no_contact_list?: SortOrder
    no_of_positions?: SortOrder
    last_reached_out?: SortOrder
    poc_phone_number?: SortOrder
    reference_number?: SortOrder
    research_analyst?: SortOrder
    research_comment?: SortOrder
    no_of_submissions?: SortOrder
    airtable_table_name?: SortOrder
    research_domain_id_s?: SortOrder
    airtable_created_time?: SortOrder
    is_this_a_flat_fee_or_percentage_?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type organizationsSumOrderByAggregateInput = {
    flat_fee?: SortOrder
    percentage?: SortOrder
    no_of_positions?: SortOrder
    no_of_submissions?: SortOrder
    airbyte_generation_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type positionsCountOrderByAggregateInput = {
    legacy_id?: SortOrder
    link?: SortOrder
    created?: SortOrder
    industry?: SortOrder
    keywords?: SortOrder
    location?: SortOrder
    companies?: SortOrder
    createdat?: SortOrder
    deletedat?: SortOrder
    isdeleted?: SortOrder
    updatedat?: SortOrder
    airtable_id?: SortOrder
    client_sheet?: SortOrder
    salary_range?: SortOrder
    position_title?: SortOrder
    airtable_table_name?: SortOrder
    airtable_created_time?: SortOrder
    bdm_user__from_client_sheet_?: SortOrder
    reached_out__from_client_sheet_?: SortOrder
    last_reached_out__from_client_sheet_?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type positionsAvgOrderByAggregateInput = {
    keywords?: SortOrder
    airbyte_generation_id?: SortOrder
  }

  export type positionsMaxOrderByAggregateInput = {
    legacy_id?: SortOrder
    link?: SortOrder
    created?: SortOrder
    industry?: SortOrder
    keywords?: SortOrder
    location?: SortOrder
    companies?: SortOrder
    createdat?: SortOrder
    deletedat?: SortOrder
    isdeleted?: SortOrder
    updatedat?: SortOrder
    airtable_id?: SortOrder
    salary_range?: SortOrder
    position_title?: SortOrder
    airtable_table_name?: SortOrder
    airtable_created_time?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type positionsMinOrderByAggregateInput = {
    legacy_id?: SortOrder
    link?: SortOrder
    created?: SortOrder
    industry?: SortOrder
    keywords?: SortOrder
    location?: SortOrder
    companies?: SortOrder
    createdat?: SortOrder
    deletedat?: SortOrder
    isdeleted?: SortOrder
    updatedat?: SortOrder
    airtable_id?: SortOrder
    salary_range?: SortOrder
    position_title?: SortOrder
    airtable_table_name?: SortOrder
    airtable_created_time?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type positionsSumOrderByAggregateInput = {
    keywords?: SortOrder
    airbyte_generation_id?: SortOrder
  }

  export type submissionsCountOrderByAggregateInput = {
    name?: SortOrder
    month?: SortOrder
    tasks?: SortOrder
    status?: SortOrder
    created?: SortOrder
    position_?: SortOrder
    submitted?: SortOrder
    created_by?: SortOrder
    client_name?: SortOrder
    source_link?: SortOrder
    airtable_id?: SortOrder
    sourced_from?: SortOrder
    submitted_by?: SortOrder
    date_submitted?: SortOrder
    position_title?: SortOrder
    candidate_email?: SortOrder
    candidate_ph_no?: SortOrder
    interview_sheet?: SortOrder
    interviews_copy?: SortOrder
    reference_number?: SortOrder
    airtable_table_name?: SortOrder
    status_last_modified?: SortOrder
    airtable_created_time?: SortOrder
    date__from_client_name_?: SortOrder
    status__from_client_name_?: SortOrder
    bdm_user__from_client_name_?: SortOrder
    domain_id_s__from_submitted_?: SortOrder
    candidate_s_resume_attachment?: SortOrder
    feedback___from_interview_sheet_?: SortOrder
    research_analyst__from_client_name_?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type submissionsAvgOrderByAggregateInput = {
    airbyte_generation_id?: SortOrder
  }

  export type submissionsMaxOrderByAggregateInput = {
    name?: SortOrder
    month?: SortOrder
    status?: SortOrder
    created?: SortOrder
    position_?: SortOrder
    created_by?: SortOrder
    source_link?: SortOrder
    airtable_id?: SortOrder
    sourced_from?: SortOrder
    submitted_by?: SortOrder
    date_submitted?: SortOrder
    candidate_email?: SortOrder
    candidate_ph_no?: SortOrder
    interviews_copy?: SortOrder
    reference_number?: SortOrder
    airtable_table_name?: SortOrder
    status_last_modified?: SortOrder
    airtable_created_time?: SortOrder
    candidate_s_resume_attachment?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type submissionsMinOrderByAggregateInput = {
    name?: SortOrder
    month?: SortOrder
    status?: SortOrder
    created?: SortOrder
    position_?: SortOrder
    created_by?: SortOrder
    source_link?: SortOrder
    airtable_id?: SortOrder
    sourced_from?: SortOrder
    submitted_by?: SortOrder
    date_submitted?: SortOrder
    candidate_email?: SortOrder
    candidate_ph_no?: SortOrder
    interviews_copy?: SortOrder
    reference_number?: SortOrder
    airtable_table_name?: SortOrder
    status_last_modified?: SortOrder
    airtable_created_time?: SortOrder
    candidate_s_resume_attachment?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type submissionsSumOrderByAggregateInput = {
    airbyte_generation_id?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    bdm?: SortOrder
    name?: SortOrder
    offers?: SortOrder
    status?: SortOrder
    domain_id?: SortOrder
    positions?: SortOrder
    team_lead?: SortOrder
    attachments?: SortOrder
    psuedo_name?: SortOrder
    airtable_id?: SortOrder
    client_sheet?: SortOrder
    today_s_clients?: SortOrder
    active_positions?: SortOrder
    last_month_clients?: SortOrder
    last_week_s_clients?: SortOrder
    today_s_submissions?: SortOrder
    airtable_table_name?: SortOrder
    domain_id__from_bdm_?: SortOrder
    number_of_interviews?: SortOrder
    employee_designantion?: SortOrder
    airtable_created_time?: SortOrder
    last_month_submissions?: SortOrder
    last_weeks_submissions?: SortOrder
    candidate_submission_sheet?: SortOrder
    positions_with_no_submissions?: SortOrder
    number_of_interviews_in_last_90_days?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    airbyte_meta?: SortOrder
    id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    offers?: SortOrder
    today_s_clients?: SortOrder
    active_positions?: SortOrder
    last_month_clients?: SortOrder
    last_week_s_clients?: SortOrder
    today_s_submissions?: SortOrder
    number_of_interviews?: SortOrder
    last_month_submissions?: SortOrder
    last_weeks_submissions?: SortOrder
    positions_with_no_submissions?: SortOrder
    number_of_interviews_in_last_90_days?: SortOrder
    airbyte_generation_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    bdm?: SortOrder
    name?: SortOrder
    offers?: SortOrder
    status?: SortOrder
    domain_id?: SortOrder
    team_lead?: SortOrder
    attachments?: SortOrder
    psuedo_name?: SortOrder
    airtable_id?: SortOrder
    today_s_clients?: SortOrder
    active_positions?: SortOrder
    last_month_clients?: SortOrder
    last_week_s_clients?: SortOrder
    today_s_submissions?: SortOrder
    airtable_table_name?: SortOrder
    domain_id__from_bdm_?: SortOrder
    number_of_interviews?: SortOrder
    employee_designantion?: SortOrder
    airtable_created_time?: SortOrder
    last_month_submissions?: SortOrder
    last_weeks_submissions?: SortOrder
    positions_with_no_submissions?: SortOrder
    number_of_interviews_in_last_90_days?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    bdm?: SortOrder
    name?: SortOrder
    offers?: SortOrder
    status?: SortOrder
    domain_id?: SortOrder
    team_lead?: SortOrder
    attachments?: SortOrder
    psuedo_name?: SortOrder
    airtable_id?: SortOrder
    today_s_clients?: SortOrder
    active_positions?: SortOrder
    last_month_clients?: SortOrder
    last_week_s_clients?: SortOrder
    today_s_submissions?: SortOrder
    airtable_table_name?: SortOrder
    domain_id__from_bdm_?: SortOrder
    number_of_interviews?: SortOrder
    employee_designantion?: SortOrder
    airtable_created_time?: SortOrder
    last_month_submissions?: SortOrder
    last_weeks_submissions?: SortOrder
    positions_with_no_submissions?: SortOrder
    number_of_interviews_in_last_90_days?: SortOrder
    airbyte_raw_id?: SortOrder
    airbyte_extracted_at?: SortOrder
    airbyte_generation_id?: SortOrder
    id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    offers?: SortOrder
    today_s_clients?: SortOrder
    active_positions?: SortOrder
    last_month_clients?: SortOrder
    last_week_s_clients?: SortOrder
    today_s_submissions?: SortOrder
    number_of_interviews?: SortOrder
    last_month_submissions?: SortOrder
    last_weeks_submissions?: SortOrder
    positions_with_no_submissions?: SortOrder
    number_of_interviews_in_last_90_days?: SortOrder
    airbyte_generation_id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}