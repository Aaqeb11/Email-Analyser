
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TenantConfigurationScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  policy_id: 'policy_id',
  config: 'config',
  status: 'status',
  last_updated_at: 'last_updated_at',
  created_at: 'created_at'
};

exports.Prisma.ExternalIntegrationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  auth_strategy: 'auth_strategy',
  config: 'config',
  credentials: 'credentials',
  enabled: 'enabled',
  tenant_id: 'tenant_id',
  tenant_config_id: 'tenant_config_id',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at'
};

exports.Prisma.ExtIntUsageTrackingMetricScalarFieldEnum = {
  id: 'id',
  integration_id: 'integration_id',
  metric_type: 'metric_type',
  interval: 'interval',
  request_count: 'request_count',
  error_count: 'error_count',
  latency_ms: 'latency_ms',
  limit_remaining: 'limit_remaining',
  limit_reset_at: 'limit_reset_at',
  timestamp: 'timestamp'
};

exports.Prisma.CustomMetricValueScalarFieldEnum = {
  id: 'id',
  usage_metric_id: 'usage_metric_id',
  name: 'name',
  value: 'value',
  unit: 'unit'
};

exports.Prisma.ExtIntegrationCreditUsageScalarFieldEnum = {
  id: 'id',
  integration_id: 'integration_id',
  credit_amount: 'credit_amount',
  credit_type: 'credit_type',
  description: 'description',
  timestamp: 'timestamp',
  operation_id: 'operation_id',
  operation_type: 'operation_type'
};

exports.Prisma.EmailPreferenceScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  microsoft_graph: 'microsoft_graph',
  send_grid: 'send_grid'
};

exports.Prisma.TableViewScalarFieldEnum = {
  id: 'id',
  table_id: 'table_id',
  table_display_name: 'table_display_name',
  view_config: 'view_config'
};

exports.Prisma.ExtIntegrationNotificationScalarFieldEnum = {
  id: 'id',
  integration_id: 'integration_id',
  type: 'type',
  priority: 'priority',
  channel: 'channel',
  title: 'title',
  message: 'message',
  trigger_value: 'trigger_value',
  threshold: 'threshold',
  sent_at: 'sent_at',
  delivered_at: 'delivered_at',
  error: 'error'
};

exports.Prisma.DomainScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  status: 'status',
  tenant_id: 'tenant_id',
  tenant_config_id: 'tenant_config_id',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at',
  mail_type: 'mail_type'
};

exports.Prisma.DNSRecordScalarFieldEnum = {
  id: 'id',
  domain_id: 'domain_id',
  type: 'type',
  name: 'name',
  value: 'value',
  ttl: 'ttl',
  priority: 'priority',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.SPFRecordScalarFieldEnum = {
  id: 'id',
  domain_id: 'domain_id',
  dns_record_id: 'dns_record_id',
  mechanisms: 'mechanisms',
  all: 'all',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.DKIMRecordScalarFieldEnum = {
  id: 'id',
  domain_id: 'domain_id',
  dns_record_id: 'dns_record_id',
  selector: 'selector',
  public_key: 'public_key',
  key_type: 'key_type',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.DMARCRecordScalarFieldEnum = {
  id: 'id',
  domain_id: 'domain_id',
  dns_record_id: 'dns_record_id',
  policy: 'policy',
  subdomain_policy: 'subdomain_policy',
  percentage: 'percentage',
  report_format: 'report_format',
  report_interval: 'report_interval',
  report_uris: 'report_uris',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.EmailServerScalarFieldEnum = {
  id: 'id',
  host: 'host',
  port: 'port',
  username: 'username',
  password: 'password',
  is_secure: 'is_secure',
  is_system_managed: 'is_system_managed',
  server_type: 'server_type',
  smtp_status: 'smtp_status',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at',
  tenant_id: 'tenant_id',
  tenant_config_id: 'tenant_config_id'
};

exports.Prisma.ApiKeyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  key: 'key',
  scope: 'scope',
  expires_at: 'expires_at',
  last_used_at: 'last_used_at',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  tenant_id: 'tenant_id',
  tenant_config_id: 'tenant_config_id'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  username: 'username',
  email: 'email',
  password: 'password',
  bio: 'bio',
  phone: 'phone',
  job_title: 'job_title',
  email_verified: 'email_verified',
  last_login: 'last_login',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by',
  tenant_id: 'tenant_id',
  interview_attendies_id: 'interview_attendies_id'
};

exports.Prisma.UserAddressScalarFieldEnum = {
  id: 'id',
  country: 'country',
  short_code: 'short_code',
  state: 'state',
  city: 'city',
  zip: 'zip',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at',
  user_id: 'user_id'
};

exports.Prisma.UserDeviceScalarFieldEnum = {
  id: 'id',
  unique_device_signature: 'unique_device_signature',
  user_id: 'user_id',
  last_accessed_at: 'last_accessed_at',
  last_accessed_from_location_id: 'last_accessed_from_location_id',
  device_metadata: 'device_metadata'
};

exports.Prisma.UserDeviceLocationScalarFieldEnum = {
  id: 'id',
  lat: 'lat',
  long: 'long',
  user_id: 'user_id',
  device_id: 'device_id'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  resource_id: 'resource_id',
  user_id: 'user_id',
  action: 'action',
  details: 'details',
  metadata: 'metadata',
  timestamp: 'timestamp'
};

exports.Prisma.PolicyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  template_id: 'template_id',
  parent_id: 'parent_id',
  rules: 'rules',
  priority: 'priority',
  tenant_id: 'tenant_id',
  status: 'status',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at'
};

exports.Prisma.GroupTemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  attributes: 'attributes',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at'
};

exports.Prisma.GroupScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  template_id: 'template_id',
  parent_id: 'parent_id',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at'
};

exports.Prisma.UserGroupScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  group_id: 'group_id',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at'
};

exports.Prisma.UserGroupMemberScalarFieldEnum = {
  id: 'id',
  user_group_id: 'user_group_id',
  user_id: 'user_id',
  created_at: 'created_at'
};

exports.Prisma.GroupPolicyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  configuration: 'configuration',
  priority: 'priority',
  group_id: 'group_id',
  user_group_id: 'user_group_id',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at'
};

exports.Prisma.TenantUsageMetricScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  resource_code: 'resource_code',
  module_code: 'module_code',
  feature_code: 'feature_code',
  value: 'value',
  context: 'context',
  timestamp: 'timestamp'
};

exports.Prisma.MessageTypeScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SourceScalarFieldEnum = {
  id: 'id',
  type_id: 'type_id'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  ms_message_id: 'ms_message_id',
  subject: 'subject',
  sender_name: 'sender_name',
  sender_email: 'sender_email',
  received_date_time: 'received_date_time',
  sent_date_time: 'sent_date_time',
  body: 'body',
  body_preview: 'body_preview',
  recipients: 'recipients',
  cc_recipients: 'cc_recipients',
  bcc_recipients: 'bcc_recipients',
  reply_to: 'reply_to',
  has_attachments: 'has_attachments',
  summary: 'summary',
  meta_data: 'meta_data',
  source_id: 'source_id',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  isArchived: 'isArchived',
  isRead: 'isRead',
  isStarred: 'isStarred'
};

exports.Prisma.AttachmentScalarFieldEnum = {
  id: 'id',
  receiver_emails: 'receiver_emails',
  sender_emails: 'sender_emails',
  ms_message_id: 'ms_message_id',
  content: 'content',
  document_url: 'document_url',
  content_hash: 'content_hash',
  normalized_content: 'normalized_content',
  content_full: 'content_full',
  document_id: 'document_id'
};

exports.Prisma.DocumentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  is_attachment: 'is_attachment',
  filename: 'filename',
  file_extension: 'file_extension',
  mime_type: 'mime_type',
  charset: 'charset',
  size: 'size',
  url: 'url',
  content: 'content',
  content_full: 'content_full',
  summary: 'summary',
  keywords: 'keywords',
  normalized_content: 'normalized_content',
  content_hash: 'content_hash',
  thumbnail: 'thumbnail',
  thumbnail_type: 'thumbnail_type',
  preview_text: 'preview_text',
  page_count: 'page_count',
  is_confidential: 'is_confidential',
  classification: 'classification',
  uploaded_by_id: 'uploaded_by_id',
  uploaded_by_email: 'uploaded_by_email',
  uploaded_by_first_name: 'uploaded_by_first_name',
  uploaded_by_last_name: 'uploaded_by_last_name',
  uploaded_date: 'uploaded_date',
  view_count: 'view_count',
  download_count: 'download_count',
  last_viewed: 'last_viewed',
  last_edited: 'last_edited'
};

exports.Prisma.FolderScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  color: 'color',
  icon: 'icon',
  key: 'key',
  meta_data: 'meta_data',
  default: 'default',
  type: 'type',
  user_id: 'user_id',
  color_hex: 'color_hex'
};

exports.Prisma.FolderMessageScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  folder_key: 'folder_key'
};

exports.Prisma.ThreadScalarFieldEnum = {
  id: 'id',
  thread_context_id: 'thread_context_id',
  context_hash: 'context_hash',
  thread_summary_id: 'thread_summary_id',
  conversation_id: 'conversation_id',
  domain: 'domain',
  message_db_ids: 'message_db_ids',
  ms_message_id: 'ms_message_id',
  summary: 'summary',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at'
};

exports.Prisma.ThreadMessageScalarFieldEnum = {
  id: 'id',
  conversation_id: 'conversation_id',
  ms_conversation_id: 'ms_conversation_id',
  domain: 'domain',
  message_db_id: 'message_db_id',
  ms_message_id: 'ms_message_id',
  parent_db_id: 'parent_db_id',
  parent_id: 'parent_id',
  child_db_id: 'child_db_id',
  child_id: 'child_id',
  is_root: 'is_root',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  thread_id: 'thread_id'
};

exports.Prisma.ThreadSummaryScalarFieldEnum = {
  id: 'id',
  conversation_id: 'conversation_id',
  domain: 'domain',
  message_db_ids: 'message_db_ids',
  ms_message_id: 'ms_message_id',
  summary: 'summary',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at'
};

exports.Prisma.ThreadParticipantsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  domain: 'domain',
  email: 'email',
  is_internal_user: 'is_internal_user'
};

exports.Prisma.ThreadContextScalarFieldEnum = {
  id: 'id',
  context_hash: 'context_hash',
  context: 'context',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at'
};

exports.Prisma.ThreadContextHistoryScalarFieldEnum = {
  id: 'id',
  context: 'context',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  thread_context_id: 'thread_context_id'
};

exports.Prisma.ThreadContextItemsScalarFieldEnum = {
  id: 'id',
  context: 'context',
  organization: 'organization',
  contact: 'contact',
  position: 'position',
  submission: 'submission',
  thread_context_history_id: 'thread_context_history_id'
};

exports.Prisma.ConversationScalarFieldEnum = {
  id: 'id',
  domain: 'domain',
  threads: 'threads',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  conversation_topic: 'conversation_topic'
};

exports.Prisma.EmailActionHistoryScalarFieldEnum = {
  id: 'id',
  action_taken_by: 'action_taken_by',
  action: 'action',
  action_description: 'action_description',
  date: 'date',
  time: 'time',
  requires_follow_up: 'requires_follow_up',
  metadata: 'metadata',
  next_action_id: 'next_action_id',
  thread_id: 'thread_id',
  message_id: 'message_id'
};

exports.Prisma.LeadScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  company_name: 'company_name',
  company_website: 'company_website',
  version: 'version',
  person_name: 'person_name',
  linkedin: 'linkedin',
  email: 'email',
  phone: 'phone',
  status: 'status',
  job_title: 'job_title',
  company_size: 'company_size',
  revenue: 'revenue',
  industry: 'industry',
  lead_status: 'lead_status',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by',
  email_sent: 'email_sent',
  email_opened: 'email_opened',
  is_pending: 'is_pending',
  is_processed: 'is_processed',
  has_organization: 'has_organization',
  has_positions: 'has_positions',
  retry_count: 'retry_count',
  is_stuck: 'is_stuck'
};

exports.Prisma.OppurtunityScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.DealScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.AgreementScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  website: 'website',
  domain: 'domain',
  size: 'size',
  revenue: 'revenue',
  industry: 'industry',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  status: 'status',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by',
  organization_id: 'organization_id',
  careers_page: 'careers_page',
  linkedin_url: 'linkedin_url',
  raw_body: 'raw_body',
  research_analyst: 'research_analyst',
  recruiter_assignee_id: 'recruiter_assignee_id'
};

exports.Prisma.ContactScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  job_title: 'job_title',
  linkedin: 'linkedin',
  company_id: 'company_id',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by',
  apollo_id: 'apollo_id',
  first_name: 'first_name',
  last_name: 'last_name',
  full_name: 'full_name',
  linkedin_url: 'linkedin_url',
  title: 'title',
  email_status: 'email_status',
  photo_url: 'photo_url',
  organization_id: 'organization_id',
  location_id: 'location_id',
  departments: 'departments',
  subdepartments: 'subdepartments',
  seniority: 'seniority',
  functions: 'functions',
  raw_body: 'raw_body'
};

exports.Prisma.POCScalarFieldEnum = {
  id: 'id',
  position_id: 'position_id',
  contact_id: 'contact_id',
  contact_role: 'contact_role',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PositionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  is_active: 'is_active',
  company_id: 'company_id',
  company_name: 'company_name',
  is_company_deleted: 'is_company_deleted',
  company_status: 'company_status',
  location_city: 'location_city',
  location_state: 'location_state',
  location_country: 'location_country',
  location_zip: 'location_zip',
  jd_attachment_id: 'jd_attachment_id',
  jd_filename: 'jd_filename',
  jd_file_type: 'jd_file_type',
  jd_thumbnail: 'jd_thumbnail',
  jd_classification: 'jd_classification',
  jd_description: 'jd_description',
  jd_link: 'jd_link',
  recruiter_bdm_id: 'recruiter_bdm_id',
  recruiter_assignee_id: 'recruiter_assignee_id',
  apollo_id: 'apollo_id',
  salary_range: 'salary_range',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by',
  job_role_id: 'job_role_id'
};

exports.Prisma.IntInterviewAttendeesScalarFieldEnum = {
  id: 'id',
  other_external_attendees: 'other_external_attendees'
};

exports.Prisma.InterviewScalarFieldEnum = {
  id: 'id',
  host_user_id: 'host_user_id',
  host_user_email: 'host_user_email',
  start_time: 'start_time',
  end_time: 'end_time',
  attendees_id: 'attendees_id',
  outlook_calendar_event: 'outlook_calendar_event',
  interview_subject: 'interview_subject',
  feedback: 'feedback',
  candidate_id: 'candidate_id',
  submission_id: 'submission_id',
  position_id: 'position_id',
  timezone_key: 'timezone_key',
  interview_mode: 'interview_mode',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.TimezoneScalarFieldEnum = {
  id: 'id',
  field_type: 'field_type',
  field_display_name: 'field_display_name',
  icon: 'icon',
  color: 'color',
  color_hex: 'color_hex',
  key: 'key',
  value: 'value',
  created_by: 'created_by',
  created_at: 'created_at'
};

exports.Prisma.InterviewFeedbackScalarFieldEnum = {
  id: 'id',
  type: 'type',
  field_display_name: 'field_display_name',
  icon: 'icon',
  color: 'color',
  color_hex: 'color_hex',
  value: 'value',
  created_by: 'created_by',
  created_at: 'created_at'
};

exports.Prisma.InterviewModeScalarFieldEnum = {
  id: 'id',
  field_type: 'field_type',
  field_display_name: 'field_display_name',
  icon: 'icon',
  color: 'color',
  color_hex: 'color_hex',
  value: 'value',
  created_by: 'created_by',
  created_at: 'created_at'
};

exports.Prisma.AttributeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  description: 'description',
  tenant_id: 'tenant_id',
  user_id: 'user_id',
  version: 'version',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.UserAttributeScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  user_id: 'user_id',
  attribute_id: 'attribute_id',
  version: 'version',
  value: 'value',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.NoteScalarFieldEnum = {
  id: 'id',
  table_id: 'table_id',
  field_id: 'field_id',
  note: 'note',
  is_private: 'is_private',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at'
};

exports.Prisma.CandidateSubmissionScalarFieldEnum = {
  id: 'id',
  status: 'status',
  submitted_at: 'submitted_at',
  submitted_by: 'submitted_by',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by',
  candidate_full_name: 'candidate_full_name',
  candidate_id: 'candidate_id',
  company_id: 'company_id',
  position_id: 'position_id',
  is_position_deleted: 'is_position_deleted',
  is_company_deleted: 'is_company_deleted',
  company_name: 'company_name'
};

exports.Prisma.CandidateSubmissionStatusScalarFieldEnum = {
  id: 'id',
  field_display_name: 'field_display_name',
  color: 'color',
  color_hex: 'color_hex',
  value: 'value',
  created_by: 'created_by',
  created_at: 'created_at'
};

exports.Prisma.BooleanStringScalarFieldEnum = {
  id: 'id',
  string: 'string',
  jd: 'jd',
  upvote: 'upvote',
  downvote: 'downvote',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by',
  entity_id: 'entity_id',
  entity_type: 'entity_type'
};

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  country: 'country',
  short_code: 'short_code',
  state: 'state',
  city: 'city',
  zip: 'zip',
  user_id: 'user_id',
  version: 'version',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.PersonalInformationScalarFieldEnum = {
  id: 'id',
  full_name: 'full_name',
  email: 'email',
  linkedin: 'linkedin',
  github: 'github',
  user_id: 'user_id',
  phone: 'phone',
  address_string: 'address_string',
  country_of_residence: 'country_of_residence',
  city_of_residence: 'city_of_residence',
  zip: 'zip',
  state_of_residence: 'state_of_residence',
  age: 'age',
  is_us_citizen: 'is_us_citizen',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.CandidateScalarFieldEnum = {
  id: 'id',
  is_remote: 'is_remote',
  total_work_experience: 'total_work_experience',
  search_location: 'search_location',
  resume_text: 'resume_text',
  url: 'url',
  status: 'status',
  personal_information_id: 'personal_information_id',
  sourced_from: 'sourced_from',
  location_id: 'location_id',
  candidate_full_name: 'candidate_full_name',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by',
  bdm_id: 'bdm_id',
  assignee_id: 'assignee_id'
};

exports.Prisma.CandidateSourceOptionsScalarFieldEnum = {
  id: 'id',
  field_display_name: 'field_display_name',
  color: 'color',
  color_hex: 'color_hex',
  value: 'value',
  created_by: 'created_by',
  created_at: 'created_at'
};

exports.Prisma.EducationScalarFieldEnum = {
  id: 'id',
  primary: 'primary',
  secondary: 'secondary',
  graduation: 'graduation',
  post_graduation: 'post_graduation',
  phd: 'phd',
  candidate_id: 'candidate_id',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.CertificationScalarFieldEnum = {
  id: 'id',
  name_of_certification: 'name_of_certification',
  institution: 'institution',
  candidate_id: 'candidate_id',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.JobRoleScalarFieldEnum = {
  id: 'id',
  title_hash: 'title_hash',
  title_display: 'title_display',
  title_normalized: 'title_normalized',
  role_description: 'role_description',
  job_role_description_detailed: 'job_role_description_detailed'
};

exports.Prisma.WorkExperienceScalarFieldEnum = {
  id: 'id',
  title: 'title',
  organization_name: 'organization_name',
  is_present: 'is_present',
  description: 'description',
  start_month_year: 'start_month_year',
  end_month_year: 'end_month_year',
  candidate_id: 'candidate_id',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by',
  job_role_id: 'job_role_id'
};

exports.Prisma.LicenseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  candidate_id: 'candidate_id',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.KeywordScalarFieldEnum = {
  id: 'id',
  term: 'term',
  term_hash: 'term_hash',
  normalized_term: 'normalized_term',
  category: 'category',
  term_type: 'term_type',
  is_active: 'is_active',
  created_at: 'created_at',
  created_by: 'created_by',
  updated_at: 'updated_at',
  updated_by: 'updated_by',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.PossibleJobRoleScalarFieldEnum = {
  id: 'id',
  job_role: 'job_role',
  user_id: 'user_id',
  candidate_id: 'candidate_id',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  text: 'text',
  table_name: 'table_name',
  parent_id: 'parent_id',
  record_id: 'record_id',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_by: 'last_updated_by',
  last_updated_at: 'last_updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.CommentMentionScalarFieldEnum = {
  id: 'id',
  comment_id: 'comment_id',
  tagged_user_id: 'tagged_user_id',
  created_at: 'created_at'
};

exports.Prisma.TaskScalarFieldEnum = {
  id: 'id',
  title: 'title',
  details: 'details',
  status: 'status',
  priority: 'priority',
  due_date: 'due_date',
  completed_at: 'completed_at',
  parent_id: 'parent_id',
  assignee: 'assignee',
  created_by: 'created_by',
  created_at: 'created_at',
  last_updated_at: 'last_updated_at',
  last_updated_by: 'last_updated_by',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  deleted_by: 'deleted_by'
};

exports.Prisma.ReminderScalarFieldEnum = {
  id: 'id',
  task_id: 'task_id',
  remind_at: 'remind_at',
  message: 'message',
  is_sent: 'is_sent',
  sent_at: 'sent_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MessageCompanyRelationScalarFieldEnum = {
  id: 'id',
  message_id: 'message_id',
  company_id: 'company_id',
  relevance_score: 'relevance_score',
  match_reasons: 'match_reasons',
  created_at: 'created_at'
};

exports.Prisma.Company_status_multi_selectScalarFieldEnum = {
  id: 'id',
  field_display_name: 'field_display_name',
  color: 'color',
  color_hex: 'color_hex',
  key: 'key',
  value: 'value',
  created_by: 'created_by',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.TenantConfigurationOrderByRelevanceFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  policy_id: 'policy_id',
  config: 'config'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.ExternalIntegrationOrderByRelevanceFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  tenant_config_id: 'tenant_config_id'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.ExtIntUsageTrackingMetricOrderByRelevanceFieldEnum = {
  id: 'id',
  integration_id: 'integration_id'
};

exports.Prisma.CustomMetricValueOrderByRelevanceFieldEnum = {
  id: 'id',
  usage_metric_id: 'usage_metric_id',
  name: 'name',
  unit: 'unit'
};

exports.Prisma.ExtIntegrationCreditUsageOrderByRelevanceFieldEnum = {
  id: 'id',
  integration_id: 'integration_id',
  credit_type: 'credit_type',
  description: 'description',
  operation_id: 'operation_id',
  operation_type: 'operation_type'
};

exports.Prisma.EmailPreferenceOrderByRelevanceFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id'
};

exports.Prisma.TableViewOrderByRelevanceFieldEnum = {
  id: 'id',
  table_id: 'table_id',
  table_display_name: 'table_display_name'
};

exports.Prisma.ExtIntegrationNotificationOrderByRelevanceFieldEnum = {
  id: 'id',
  integration_id: 'integration_id',
  title: 'title',
  message: 'message',
  error: 'error'
};

exports.Prisma.DomainOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  tenant_id: 'tenant_id',
  tenant_config_id: 'tenant_config_id'
};

exports.Prisma.DNSRecordOrderByRelevanceFieldEnum = {
  id: 'id',
  domain_id: 'domain_id',
  name: 'name',
  value: 'value'
};

exports.Prisma.SPFRecordOrderByRelevanceFieldEnum = {
  id: 'id',
  domain_id: 'domain_id',
  dns_record_id: 'dns_record_id',
  mechanisms: 'mechanisms'
};

exports.Prisma.DKIMRecordOrderByRelevanceFieldEnum = {
  id: 'id',
  domain_id: 'domain_id',
  dns_record_id: 'dns_record_id',
  selector: 'selector',
  public_key: 'public_key',
  key_type: 'key_type'
};

exports.Prisma.DMARCRecordOrderByRelevanceFieldEnum = {
  id: 'id',
  domain_id: 'domain_id',
  dns_record_id: 'dns_record_id',
  report_format: 'report_format',
  report_uris: 'report_uris'
};

exports.Prisma.EmailServerOrderByRelevanceFieldEnum = {
  id: 'id',
  host: 'host',
  username: 'username',
  password: 'password',
  tenant_id: 'tenant_id',
  tenant_config_id: 'tenant_config_id'
};

exports.Prisma.ApiKeyOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  key: 'key',
  scope: 'scope',
  tenant_id: 'tenant_id',
  tenant_config_id: 'tenant_config_id'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  username: 'username',
  email: 'email',
  password: 'password',
  bio: 'bio',
  phone: 'phone',
  job_title: 'job_title',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by',
  tenant_id: 'tenant_id',
  interview_attendies_id: 'interview_attendies_id'
};

exports.Prisma.UserAddressOrderByRelevanceFieldEnum = {
  id: 'id',
  country: 'country',
  short_code: 'short_code',
  state: 'state',
  city: 'city',
  zip: 'zip',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by',
  user_id: 'user_id'
};

exports.Prisma.UserDeviceOrderByRelevanceFieldEnum = {
  id: 'id',
  unique_device_signature: 'unique_device_signature',
  user_id: 'user_id',
  last_accessed_from_location_id: 'last_accessed_from_location_id'
};

exports.Prisma.UserDeviceLocationOrderByRelevanceFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  device_id: 'device_id'
};

exports.Prisma.AuditLogOrderByRelevanceFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  resource_id: 'resource_id',
  user_id: 'user_id',
  action: 'action'
};

exports.Prisma.PolicyOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  template_id: 'template_id',
  parent_id: 'parent_id',
  tenant_id: 'tenant_id'
};

exports.Prisma.GroupTemplateOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.GroupOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  template_id: 'template_id',
  parent_id: 'parent_id'
};

exports.Prisma.UserGroupOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  group_id: 'group_id'
};

exports.Prisma.UserGroupMemberOrderByRelevanceFieldEnum = {
  id: 'id',
  user_group_id: 'user_group_id',
  user_id: 'user_id'
};

exports.Prisma.GroupPolicyOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  group_id: 'group_id',
  user_group_id: 'user_group_id'
};

exports.Prisma.TenantUsageMetricOrderByRelevanceFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  resource_code: 'resource_code',
  module_code: 'module_code',
  feature_code: 'feature_code'
};

exports.Prisma.MessageTypeOrderByRelevanceFieldEnum = {
  id: 'id'
};

exports.Prisma.SourceOrderByRelevanceFieldEnum = {
  id: 'id',
  type_id: 'type_id'
};

exports.Prisma.MessageOrderByRelevanceFieldEnum = {
  id: 'id',
  ms_message_id: 'ms_message_id',
  subject: 'subject',
  sender_name: 'sender_name',
  sender_email: 'sender_email',
  body: 'body',
  body_preview: 'body_preview',
  source_id: 'source_id'
};

exports.Prisma.AttachmentOrderByRelevanceFieldEnum = {
  id: 'id',
  receiver_emails: 'receiver_emails',
  sender_emails: 'sender_emails',
  ms_message_id: 'ms_message_id',
  document_url: 'document_url',
  content_hash: 'content_hash',
  normalized_content: 'normalized_content',
  content_full: 'content_full',
  document_id: 'document_id'
};

exports.Prisma.DocumentOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  filename: 'filename',
  file_extension: 'file_extension',
  mime_type: 'mime_type',
  charset: 'charset',
  url: 'url',
  content_full: 'content_full',
  summary: 'summary',
  keywords: 'keywords',
  normalized_content: 'normalized_content',
  content_hash: 'content_hash',
  thumbnail_type: 'thumbnail_type',
  preview_text: 'preview_text',
  uploaded_by_id: 'uploaded_by_id',
  uploaded_by_email: 'uploaded_by_email',
  uploaded_by_first_name: 'uploaded_by_first_name',
  uploaded_by_last_name: 'uploaded_by_last_name'
};

exports.Prisma.FolderOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  color: 'color',
  icon: 'icon',
  key: 'key',
  user_id: 'user_id',
  color_hex: 'color_hex'
};

exports.Prisma.FolderMessageOrderByRelevanceFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  folder_key: 'folder_key'
};

exports.Prisma.ThreadOrderByRelevanceFieldEnum = {
  id: 'id',
  thread_context_id: 'thread_context_id',
  context_hash: 'context_hash',
  thread_summary_id: 'thread_summary_id',
  conversation_id: 'conversation_id',
  domain: 'domain',
  message_db_ids: 'message_db_ids',
  ms_message_id: 'ms_message_id'
};

exports.Prisma.ThreadMessageOrderByRelevanceFieldEnum = {
  id: 'id',
  conversation_id: 'conversation_id',
  ms_conversation_id: 'ms_conversation_id',
  domain: 'domain',
  message_db_id: 'message_db_id',
  ms_message_id: 'ms_message_id',
  parent_db_id: 'parent_db_id',
  parent_id: 'parent_id',
  child_db_id: 'child_db_id',
  child_id: 'child_id',
  thread_id: 'thread_id'
};

exports.Prisma.ThreadSummaryOrderByRelevanceFieldEnum = {
  id: 'id',
  conversation_id: 'conversation_id',
  domain: 'domain',
  message_db_ids: 'message_db_ids',
  ms_message_id: 'ms_message_id'
};

exports.Prisma.ThreadParticipantsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  domain: 'domain',
  email: 'email'
};

exports.Prisma.ThreadContextOrderByRelevanceFieldEnum = {
  id: 'id',
  context_hash: 'context_hash',
  context: 'context'
};

exports.Prisma.ThreadContextHistoryOrderByRelevanceFieldEnum = {
  id: 'id',
  context: 'context',
  thread_context_id: 'thread_context_id'
};

exports.Prisma.ThreadContextItemsOrderByRelevanceFieldEnum = {
  id: 'id',
  context: 'context',
  organization: 'organization',
  contact: 'contact',
  position: 'position',
  submission: 'submission',
  thread_context_history_id: 'thread_context_history_id'
};

exports.Prisma.ConversationOrderByRelevanceFieldEnum = {
  id: 'id',
  domain: 'domain',
  conversation_topic: 'conversation_topic'
};

exports.Prisma.EmailActionHistoryOrderByRelevanceFieldEnum = {
  id: 'id',
  action_taken_by: 'action_taken_by',
  action: 'action',
  action_description: 'action_description',
  next_action_id: 'next_action_id',
  thread_id: 'thread_id',
  message_id: 'message_id'
};

exports.Prisma.LeadOrderByRelevanceFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  company_name: 'company_name',
  company_website: 'company_website',
  person_name: 'person_name',
  linkedin: 'linkedin',
  email: 'email',
  phone: 'phone',
  status: 'status',
  job_title: 'job_title',
  company_size: 'company_size',
  revenue: 'revenue',
  industry: 'industry',
  lead_status: 'lead_status',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.OppurtunityOrderByRelevanceFieldEnum = {
  id: 'id'
};

exports.Prisma.DealOrderByRelevanceFieldEnum = {
  id: 'id'
};

exports.Prisma.AgreementOrderByRelevanceFieldEnum = {
  id: 'id'
};

exports.Prisma.CompanyOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  website: 'website',
  domain: 'domain',
  size: 'size',
  revenue: 'revenue',
  industry: 'industry',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  status: 'status',
  deleted_by: 'deleted_by',
  organization_id: 'organization_id',
  careers_page: 'careers_page',
  linkedin_url: 'linkedin_url',
  research_analyst: 'research_analyst',
  recruiter_assignee_id: 'recruiter_assignee_id'
};

exports.Prisma.ContactOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  job_title: 'job_title',
  linkedin: 'linkedin',
  company_id: 'company_id',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by',
  apollo_id: 'apollo_id',
  first_name: 'first_name',
  last_name: 'last_name',
  full_name: 'full_name',
  linkedin_url: 'linkedin_url',
  title: 'title',
  email_status: 'email_status',
  photo_url: 'photo_url',
  organization_id: 'organization_id',
  location_id: 'location_id',
  departments: 'departments',
  subdepartments: 'subdepartments',
  seniority: 'seniority',
  functions: 'functions',
  raw_body: 'raw_body'
};

exports.Prisma.POCOrderByRelevanceFieldEnum = {
  id: 'id',
  position_id: 'position_id',
  contact_id: 'contact_id',
  contact_role: 'contact_role'
};

exports.Prisma.PositionOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  company_id: 'company_id',
  company_name: 'company_name',
  company_status: 'company_status',
  location_city: 'location_city',
  location_state: 'location_state',
  location_country: 'location_country',
  location_zip: 'location_zip',
  jd_attachment_id: 'jd_attachment_id',
  jd_filename: 'jd_filename',
  jd_file_type: 'jd_file_type',
  jd_description: 'jd_description',
  jd_link: 'jd_link',
  recruiter_bdm_id: 'recruiter_bdm_id',
  recruiter_assignee_id: 'recruiter_assignee_id',
  apollo_id: 'apollo_id',
  salary_range: 'salary_range',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by',
  job_role_id: 'job_role_id'
};

exports.Prisma.IntInterviewAttendeesOrderByRelevanceFieldEnum = {
  id: 'id',
  other_external_attendees: 'other_external_attendees'
};

exports.Prisma.InterviewOrderByRelevanceFieldEnum = {
  id: 'id',
  host_user_id: 'host_user_id',
  host_user_email: 'host_user_email',
  attendees_id: 'attendees_id',
  interview_subject: 'interview_subject',
  feedback: 'feedback',
  candidate_id: 'candidate_id',
  submission_id: 'submission_id',
  position_id: 'position_id',
  timezone_key: 'timezone_key',
  interview_mode: 'interview_mode',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.TimezoneOrderByRelevanceFieldEnum = {
  id: 'id',
  field_display_name: 'field_display_name',
  icon: 'icon',
  color: 'color',
  color_hex: 'color_hex',
  key: 'key',
  value: 'value',
  created_by: 'created_by'
};

exports.Prisma.InterviewFeedbackOrderByRelevanceFieldEnum = {
  id: 'id',
  field_display_name: 'field_display_name',
  icon: 'icon',
  color: 'color',
  color_hex: 'color_hex',
  value: 'value',
  created_by: 'created_by'
};

exports.Prisma.InterviewModeOrderByRelevanceFieldEnum = {
  id: 'id',
  field_display_name: 'field_display_name',
  icon: 'icon',
  color: 'color',
  color_hex: 'color_hex',
  value: 'value',
  created_by: 'created_by'
};

exports.Prisma.AttributeOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  description: 'description',
  tenant_id: 'tenant_id',
  user_id: 'user_id',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.UserAttributeOrderByRelevanceFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  user_id: 'user_id',
  attribute_id: 'attribute_id',
  value: 'value',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.NoteOrderByRelevanceFieldEnum = {
  id: 'id',
  table_id: 'table_id',
  field_id: 'field_id',
  note: 'note',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by'
};

exports.Prisma.CandidateSubmissionOrderByRelevanceFieldEnum = {
  id: 'id',
  status: 'status',
  submitted_by: 'submitted_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by',
  candidate_full_name: 'candidate_full_name',
  candidate_id: 'candidate_id',
  company_id: 'company_id',
  position_id: 'position_id',
  company_name: 'company_name'
};

exports.Prisma.CandidateSubmissionStatusOrderByRelevanceFieldEnum = {
  id: 'id',
  field_display_name: 'field_display_name',
  color: 'color',
  color_hex: 'color_hex',
  value: 'value',
  created_by: 'created_by'
};

exports.Prisma.BooleanStringOrderByRelevanceFieldEnum = {
  id: 'id',
  string: 'string',
  jd: 'jd',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by',
  entity_id: 'entity_id'
};

exports.Prisma.LocationOrderByRelevanceFieldEnum = {
  id: 'id',
  country: 'country',
  short_code: 'short_code',
  state: 'state',
  city: 'city',
  zip: 'zip',
  user_id: 'user_id',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.PersonalInformationOrderByRelevanceFieldEnum = {
  id: 'id',
  full_name: 'full_name',
  email: 'email',
  linkedin: 'linkedin',
  github: 'github',
  user_id: 'user_id',
  phone: 'phone',
  address_string: 'address_string',
  country_of_residence: 'country_of_residence',
  city_of_residence: 'city_of_residence',
  zip: 'zip',
  state_of_residence: 'state_of_residence',
  age: 'age',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.CandidateOrderByRelevanceFieldEnum = {
  id: 'id',
  total_work_experience: 'total_work_experience',
  search_location: 'search_location',
  resume_text: 'resume_text',
  url: 'url',
  status: 'status',
  personal_information_id: 'personal_information_id',
  sourced_from: 'sourced_from',
  location_id: 'location_id',
  candidate_full_name: 'candidate_full_name',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by',
  bdm_id: 'bdm_id',
  assignee_id: 'assignee_id'
};

exports.Prisma.CandidateSourceOptionsOrderByRelevanceFieldEnum = {
  id: 'id',
  field_display_name: 'field_display_name',
  color: 'color',
  color_hex: 'color_hex',
  value: 'value',
  created_by: 'created_by'
};

exports.Prisma.EducationOrderByRelevanceFieldEnum = {
  id: 'id',
  primary: 'primary',
  secondary: 'secondary',
  graduation: 'graduation',
  post_graduation: 'post_graduation',
  phd: 'phd',
  candidate_id: 'candidate_id',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.CertificationOrderByRelevanceFieldEnum = {
  id: 'id',
  name_of_certification: 'name_of_certification',
  institution: 'institution',
  candidate_id: 'candidate_id',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.JobRoleOrderByRelevanceFieldEnum = {
  id: 'id',
  title_display: 'title_display',
  title_normalized: 'title_normalized',
  role_description: 'role_description',
  job_role_description_detailed: 'job_role_description_detailed'
};

exports.Prisma.WorkExperienceOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  organization_name: 'organization_name',
  description: 'description',
  start_month_year: 'start_month_year',
  end_month_year: 'end_month_year',
  candidate_id: 'candidate_id',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by',
  job_role_id: 'job_role_id'
};

exports.Prisma.LicenseOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  candidate_id: 'candidate_id',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.KeywordOrderByRelevanceFieldEnum = {
  term: 'term',
  normalized_term: 'normalized_term',
  created_by: 'created_by',
  updated_by: 'updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.PossibleJobRoleOrderByRelevanceFieldEnum = {
  id: 'id',
  job_role: 'job_role',
  user_id: 'user_id',
  candidate_id: 'candidate_id',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.CommentOrderByRelevanceFieldEnum = {
  id: 'id',
  text: 'text',
  table_name: 'table_name',
  parent_id: 'parent_id',
  record_id: 'record_id',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.CommentMentionOrderByRelevanceFieldEnum = {
  id: 'id',
  comment_id: 'comment_id',
  tagged_user_id: 'tagged_user_id'
};

exports.Prisma.TaskOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  details: 'details',
  parent_id: 'parent_id',
  assignee: 'assignee',
  created_by: 'created_by',
  last_updated_by: 'last_updated_by',
  deleted_by: 'deleted_by'
};

exports.Prisma.ReminderOrderByRelevanceFieldEnum = {
  id: 'id',
  task_id: 'task_id',
  message: 'message'
};

exports.Prisma.MessageCompanyRelationOrderByRelevanceFieldEnum = {
  id: 'id',
  message_id: 'message_id',
  company_id: 'company_id'
};

exports.Prisma.company_status_multi_selectOrderByRelevanceFieldEnum = {
  id: 'id',
  field_display_name: 'field_display_name',
  color: 'color',
  color_hex: 'color_hex',
  key: 'key',
  value: 'value',
  created_by: 'created_by'
};
exports.ConfigStatus = exports.$Enums.ConfigStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING'
};

exports.IntegrationName = exports.$Enums.IntegrationName = {
  LAGO: 'LAGO',
  OPENMETER: 'OPENMETER',
  FLUENTD: 'FLUENTD',
  LOKI: 'LOKI',
  STRIPE: 'STRIPE',
  APOLLO: 'APOLLO',
  OPENAI: 'OPENAI',
  ZOOMINFO: 'ZOOMINFO',
  MAILCOW: 'MAILCOW',
  MSGRAPH: 'MSGRAPH',
  SENDGRID: 'SENDGRID',
  AIRTABLE: 'AIRTABLE',
  CUSTOM: 'CUSTOM'
};

exports.IntegrationCategory = exports.$Enums.IntegrationCategory = {
  ANALYTICS: 'ANALYTICS',
  BILLING: 'BILLING',
  COMMUNICATION: 'COMMUNICATION',
  DATA_ENRICHMENT: 'DATA_ENRICHMENT',
  AI_SERVICES: 'AI_SERVICES',
  CUSTOM: 'CUSTOM'
};

exports.AuthStrategy = exports.$Enums.AuthStrategy = {
  API_KEY: 'API_KEY',
  OAUTH2: 'OAUTH2',
  EMAIL_PASSWORD: 'EMAIL_PASSWORD',
  CERTIFICATE: 'CERTIFICATE',
  CUSTOM_TOKEN: 'CUSTOM_TOKEN',
  JWT: 'JWT',
  BASIC_AUTH: 'BASIC_AUTH'
};

exports.MetricType = exports.$Enums.MetricType = {
  API_CALLS: 'API_CALLS',
  DATA_TRANSFER: 'DATA_TRANSFER',
  STORAGE: 'STORAGE',
  PROCESSING_TIME: 'PROCESSING_TIME',
  CUSTOM: 'CUSTOM'
};

exports.ExtUsageTrackingInterval = exports.$Enums.ExtUsageTrackingInterval = {
  MINUTE: 'MINUTE',
  HOUR: 'HOUR',
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  QUARTER: 'QUARTER',
  YEAR: 'YEAR'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  USAGE_THRESHOLD: 'USAGE_THRESHOLD',
  RATE_LIMIT: 'RATE_LIMIT',
  ERROR: 'ERROR',
  STATUS_CHANGE: 'STATUS_CHANGE',
  CUSTOM: 'CUSTOM'
};

exports.NotificationPriority = exports.$Enums.NotificationPriority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

exports.DeliveryChannel = exports.$Enums.DeliveryChannel = {
  EMAIL: 'EMAIL',
  WEBHOOK: 'WEBHOOK',
  SYSTEM: 'SYSTEM',
  CUSTOM: 'CUSTOM'
};

exports.DomainStatus = exports.$Enums.DomainStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  VERIFIED: 'VERIFIED',
  SUSPENDED: 'SUSPENDED'
};

exports.MailType = exports.$Enums.MailType = {
  MAILCOW: 'MAILCOW',
  SENDGRID: 'SENDGRID',
  MICROSOFT_GRAPH_API: 'MICROSOFT_GRAPH_API'
};

exports.DNSRecordType = exports.$Enums.DNSRecordType = {
  A: 'A',
  AAAA: 'AAAA',
  CNAME: 'CNAME',
  MX: 'MX',
  TXT: 'TXT',
  SPF: 'SPF',
  DKIM: 'DKIM',
  DMARC: 'DMARC'
};

exports.SPFAllDirective = exports.$Enums.SPFAllDirective = {
  PASS: 'PASS',
  NEUTRAL: 'NEUTRAL',
  SOFTFAIL: 'SOFTFAIL',
  FAIL: 'FAIL'
};

exports.DMARCPolicy = exports.$Enums.DMARCPolicy = {
  NONE: 'NONE',
  QUARANTINE: 'QUARANTINE',
  REJECT: 'REJECT'
};

exports.EmailServerType = exports.$Enums.EmailServerType = {
  SMTP: 'SMTP',
  IMAP: 'IMAP'
};

exports.SMTPStatus = exports.$Enums.SMTPStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING_VERIFICATION: 'PENDING_VERIFICATION'
};

exports.PolicyStatus = exports.$Enums.PolicyStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  ARCHIVED: 'ARCHIVED'
};

exports.MessageSource = exports.$Enums.MessageSource = {
  MS_GRAPH: 'MS_GRAPH',
  MAILCOW: 'MAILCOW',
  SG: 'SG'
};

exports.DocumentClassification = exports.$Enums.DocumentClassification = {
  SERVICE_AGREEMENT: 'SERVICE_AGREEMENT',
  JOB_DESCRIPTION: 'JOB_DESCRIPTION',
  RESUME: 'RESUME',
  CONTRACT: 'CONTRACT',
  QUOTATION: 'QUOTATION',
  INVOICE: 'INVOICE',
  RECEIPT: 'RECEIPT',
  TAX_FORMS: 'TAX_FORMS',
  IDENTITY_DOCUMENTS: 'IDENTITY_DOCUMENTS',
  WORK_PERMIT: 'WORK_PERMIT',
  VISA_DOCUMENTS: 'VISA_DOCUMENTS',
  OFFER_LETTER: 'OFFER_LETTER',
  EMPLOYMENT_CONTRACT: 'EMPLOYMENT_CONTRACT',
  MARKETING: 'MARKETING',
  IT: 'IT',
  OTHER: 'OTHER'
};

exports.FolderType = exports.$Enums.FolderType = {
  INCOMING_FOLDER: 'INCOMING_FOLDER',
  OUTGOING_FOLDER: 'OUTGOING_FOLDER'
};

exports.FrontendFieldTypes = exports.$Enums.FrontendFieldTypes = {
  DATE: 'DATE',
  DATE_TIME: 'DATE_TIME',
  SHORT_TEXT: 'SHORT_TEXT',
  LONG_TEXT: 'LONG_TEXT',
  URL: 'URL',
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  USER: 'USER',
  ATTACHMENT: 'ATTACHMENT',
  CHECKBOX: 'CHECKBOX',
  MUTLI_SELECT: 'MUTLI_SELECT',
  SINGLE_SELECT: 'SINGLE_SELECT',
  NUMBER: 'NUMBER',
  PERCENT: 'PERCENT',
  CURRENCY: 'CURRENCY',
  ONE_TO_MANY: 'ONE_TO_MANY',
  ONE_TO_ONE: 'ONE_TO_ONE',
  GEOLOCATION: 'GEOLOCATION'
};

exports.BooleanStringEntityType = exports.$Enums.BooleanStringEntityType = {
  JobRole: 'JobRole',
  Position: 'Position'
};

exports.TermCategory = exports.$Enums.TermCategory = {
  INDUSTRY: 'INDUSTRY',
  TECHNICAL_SKILL: 'TECHNICAL_SKILL',
  SOFT_SKILL: 'SOFT_SKILL',
  ROLE_TITLE: 'ROLE_TITLE',
  RESPONSIBILITY: 'RESPONSIBILITY',
  TOOL: 'TOOL',
  CERTIFICATION: 'CERTIFICATION',
  DOMAIN: 'DOMAIN'
};

exports.TermType = exports.$Enums.TermType = {
  NOUN: 'NOUN',
  VERB: 'VERB',
  ADJECTIVE: 'ADJECTIVE',
  COMPOUND: 'COMPOUND'
};

exports.TaskStatus = exports.$Enums.TaskStatus = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

exports.Priority = exports.$Enums.Priority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

exports.Prisma.ModelName = {
  TenantConfiguration: 'TenantConfiguration',
  ExternalIntegration: 'ExternalIntegration',
  ExtIntUsageTrackingMetric: 'ExtIntUsageTrackingMetric',
  CustomMetricValue: 'CustomMetricValue',
  ExtIntegrationCreditUsage: 'ExtIntegrationCreditUsage',
  EmailPreference: 'EmailPreference',
  TableView: 'TableView',
  ExtIntegrationNotification: 'ExtIntegrationNotification',
  Domain: 'Domain',
  DNSRecord: 'DNSRecord',
  SPFRecord: 'SPFRecord',
  DKIMRecord: 'DKIMRecord',
  DMARCRecord: 'DMARCRecord',
  EmailServer: 'EmailServer',
  ApiKey: 'ApiKey',
  User: 'User',
  UserAddress: 'UserAddress',
  UserDevice: 'UserDevice',
  UserDeviceLocation: 'UserDeviceLocation',
  AuditLog: 'AuditLog',
  Policy: 'Policy',
  GroupTemplate: 'GroupTemplate',
  Group: 'Group',
  UserGroup: 'UserGroup',
  UserGroupMember: 'UserGroupMember',
  GroupPolicy: 'GroupPolicy',
  TenantUsageMetric: 'TenantUsageMetric',
  MessageType: 'MessageType',
  Source: 'Source',
  Message: 'Message',
  Attachment: 'Attachment',
  Document: 'Document',
  Folder: 'Folder',
  FolderMessage: 'FolderMessage',
  Thread: 'Thread',
  ThreadMessage: 'ThreadMessage',
  ThreadSummary: 'ThreadSummary',
  ThreadParticipants: 'ThreadParticipants',
  ThreadContext: 'ThreadContext',
  ThreadContextHistory: 'ThreadContextHistory',
  ThreadContextItems: 'ThreadContextItems',
  Conversation: 'Conversation',
  EmailActionHistory: 'EmailActionHistory',
  Lead: 'Lead',
  Oppurtunity: 'Oppurtunity',
  Deal: 'Deal',
  Agreement: 'Agreement',
  Company: 'Company',
  Contact: 'Contact',
  POC: 'POC',
  Position: 'Position',
  IntInterviewAttendees: 'IntInterviewAttendees',
  Interview: 'Interview',
  Timezone: 'Timezone',
  InterviewFeedback: 'InterviewFeedback',
  InterviewMode: 'InterviewMode',
  Attribute: 'Attribute',
  UserAttribute: 'UserAttribute',
  Note: 'Note',
  CandidateSubmission: 'CandidateSubmission',
  CandidateSubmissionStatus: 'CandidateSubmissionStatus',
  BooleanString: 'BooleanString',
  Location: 'Location',
  PersonalInformation: 'PersonalInformation',
  Candidate: 'Candidate',
  CandidateSourceOptions: 'CandidateSourceOptions',
  Education: 'Education',
  Certification: 'Certification',
  JobRole: 'JobRole',
  WorkExperience: 'WorkExperience',
  License: 'License',
  Keyword: 'Keyword',
  PossibleJobRole: 'PossibleJobRole',
  Comment: 'Comment',
  CommentMention: 'CommentMention',
  Task: 'Task',
  Reminder: 'Reminder',
  MessageCompanyRelation: 'MessageCompanyRelation',
  company_status_multi_select: 'company_status_multi_select'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
