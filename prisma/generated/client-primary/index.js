
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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

exports.Prisma.MessageCompanyRelationScalarFieldEnum = {
  id: 'id',
  message_id: 'message_id',
  company_id: 'company_id',
  relevance_score: 'relevance_score',
  match_reasons: 'match_reasons',
  created_at: 'created_at'
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

exports.Prisma.CompanyStatusScalarFieldEnum = {
  id: 'id',
  field_display_name: 'field_display_name',
  color: 'color',
  color_hex: 'color_hex',
  key: 'key',
  value: 'value',
  created_by: 'created_by',
  created_at: 'created_at'
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

exports.Prisma.MessageCompanyRelationOrderByRelevanceFieldEnum = {
  id: 'id',
  message_id: 'message_id',
  company_id: 'company_id'
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
  domain: 'domain'
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

exports.Prisma.CompanyStatusOrderByRelevanceFieldEnum = {
  id: 'id',
  field_display_name: 'field_display_name',
  color: 'color',
  color_hex: 'color_hex',
  key: 'key',
  value: 'value',
  created_by: 'created_by'
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
exports.AuthStrategy = exports.$Enums.AuthStrategy = {
  API_KEY: 'API_KEY',
  OAUTH2: 'OAUTH2',
  EMAIL_PASSWORD: 'EMAIL_PASSWORD',
  CERTIFICATE: 'CERTIFICATE',
  CUSTOM_TOKEN: 'CUSTOM_TOKEN',
  JWT: 'JWT',
  BASIC_AUTH: 'BASIC_AUTH'
};

exports.IntegrationCategory = exports.$Enums.IntegrationCategory = {
  ANALYTICS: 'ANALYTICS',
  BILLING: 'BILLING',
  COMMUNICATION: 'COMMUNICATION',
  DATA_ENRICHMENT: 'DATA_ENRICHMENT',
  AI_SERVICES: 'AI_SERVICES',
  CUSTOM: 'CUSTOM'
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

exports.ConfigStatus = exports.$Enums.ConfigStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING'
};

exports.MetricType = exports.$Enums.MetricType = {
  API_CALLS: 'API_CALLS',
  DATA_TRANSFER: 'DATA_TRANSFER',
  STORAGE: 'STORAGE',
  PROCESSING_TIME: 'PROCESSING_TIME',
  CUSTOM: 'CUSTOM'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  USAGE_THRESHOLD: 'USAGE_THRESHOLD',
  RATE_LIMIT: 'RATE_LIMIT',
  ERROR: 'ERROR',
  STATUS_CHANGE: 'STATUS_CHANGE',
  CUSTOM: 'CUSTOM'
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

exports.ExtUsageTrackingInterval = exports.$Enums.ExtUsageTrackingInterval = {
  MINUTE: 'MINUTE',
  HOUR: 'HOUR',
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  QUARTER: 'QUARTER',
  YEAR: 'YEAR'
};

exports.EmailServerType = exports.$Enums.EmailServerType = {
  SMTP: 'SMTP',
  IMAP: 'IMAP'
};

exports.DomainStatus = exports.$Enums.DomainStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  VERIFIED: 'VERIFIED',
  SUSPENDED: 'SUSPENDED'
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

exports.SMTPStatus = exports.$Enums.SMTPStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING_VERIFICATION: 'PENDING_VERIFICATION'
};

exports.MailType = exports.$Enums.MailType = {
  MAILCOW: 'MAILCOW',
  SENDGRID: 'SENDGRID',
  MICROSOFT_GRAPH_API: 'MICROSOFT_GRAPH_API'
};

exports.MessageSource = exports.$Enums.MessageSource = {
  MS_GRAPH: 'MS_GRAPH',
  MAILCOW: 'MAILCOW',
  SG: 'SG'
};

exports.PolicyStatus = exports.$Enums.PolicyStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  ARCHIVED: 'ARCHIVED'
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

exports.ConversationTopic = exports.$Enums.ConversationTopic = {
  INITIAL_CONTACT: 'INITIAL_CONTACT',
  POSITION_DESCRIPTION: 'POSITION_DESCRIPTION',
  JOB_DESCRIPTION: 'JOB_DESCRIPTION',
  CANDIDATE_SUBMISSION: 'CANDIDATE_SUBMISSION',
  CANDIDATE_REVIEW: 'CANDIDATE_REVIEW',
  INTERVIEW: 'INTERVIEW',
  CONTRACT: 'CONTRACT',
  EMPLOYMENT: 'EMPLOYMENT'
};

exports.RecipientType = exports.$Enums.RecipientType = {
  CANDIDATE: 'CANDIDATE',
  INTERNAL_USER: 'INTERNAL_USER',
  CLIENT_CONTACT: 'CLIENT_CONTACT',
  EXTERNAL_USER: 'EXTERNAL_USER'
};

exports.EmailActionType = exports.$Enums.EmailActionType = {
  REPLY: 'REPLY',
  REQUEST_JD: 'REQUEST_JD',
  REQUEST_RESUME: 'REQUEST_RESUME',
  REQUEST_REVIEW: 'REQUEST_REVIEW',
  REQUEST_RESUME_REVIEW: 'REQUEST_RESUME_REVIEW',
  REQUEST_DETAILS: 'REQUEST_DETAILS',
  REQUEST_FOLLOWUP: 'REQUEST_FOLLOWUP',
  REQUEST_BENEFITS_DETAILS: 'REQUEST_BENEFITS_DETAILS',
  REQUEST_EXPERIENCE_CERTIFICATE: 'REQUEST_EXPERIENCE_CERTIFICATE',
  REREQUEST_NEW_POSITION: 'REREQUEST_NEW_POSITION',
  FOLLOWUP: 'FOLLOWUP',
  FORWARD: 'FORWARD',
  CHANGE_POC: 'CHANGE_POC',
  SEND_CONTRACT: 'SEND_CONTRACT',
  SCHEDULE_INTERVIEW: 'SCHEDULE_INTERVIEW',
  SEND_RESUME: 'SEND_RESUME',
  SEND_OFFER_LETTER: 'SEND_OFFER_LETTER',
  SEND_JD: 'SEND_JD',
  SALARY_NEGOTIATIONS: 'SALARY_NEGOTIATIONS',
  CONTRACT_NEGOTIATIONS: 'CONTRACT_NEGOTIATIONS',
  SUBMIT_CONTRACT_REVIEW: 'SUBMIT_CONTRACT_REVIEW',
  SUBMIT_RESUME_REVIEW: 'SUBMIT_RESUME_REVIEW'
};

exports.EmailTypes = exports.$Enums.EmailTypes = {
  MARKETING: 'MARKETING',
  TRANSACTIONAL: 'TRANSACTIONAL',
  PROMOTIONAL: 'PROMOTIONAL',
  COLD_EMAIL_CAMPAIGN: 'COLD_EMAIL_CAMPAIGN',
  FOLLOW_UP: 'FOLLOW_UP',
  AUTOMATED: 'AUTOMATED',
  NOTIFICATION: 'NOTIFICATION'
};

exports.EmailStatus = exports.$Enums.EmailStatus = {
  DRAFT: 'DRAFT',
  QUEUED: 'QUEUED',
  SENT: 'SENT',
  FAILED: 'FAILED',
  READ: 'READ',
  UNREAD: 'UNREAD'
};

exports.CreditTypeEnum = exports.$Enums.CreditTypeEnum = {
  API: 'API',
  EMAIL: 'EMAIL'
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
  MessageCompanyRelation: 'MessageCompanyRelation',
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
  CompanyStatus: 'CompanyStatus',
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
  Reminder: 'Reminder'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "pclient",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/aaqeb_ahmed/Desktop/Email-Analyser/prisma/generated/client-primary",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "fullTextSearchPostgres",
      "metrics",
      "postgresqlExtensions",
      "prismaSchemaFolder"
    ],
    "sourceFilePath": "/home/aaqeb_ahmed/Desktop/Email-Analyser/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.2.1",
  "engineVersion": "4123509d24aa4dede1e864b46351bf2790323b69",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "PRIMARY_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator pclient {\n  provider        = \"prisma-client-js\"\n  output          = \"./generated/client-primary\"\n  previewFeatures = [\"fullTextSearchPostgres\", \"metrics\", \"postgresqlExtensions\", \"prismaSchemaFolder\"]\n}\n\ngenerator dbml {\n  provider = \"prisma-dbml-generator\"\n}\n\ndatasource db {\n  provider   = \"postgresql\"\n  url        = env(\"PRIMARY_DATABASE_URL\")\n  // directUrl  = env(\"DIRECT_URL\")\n  extensions = [uuid_ossp(map: \"uuid-ossp\", schema: \"019403ee-2961-7f8e-9682-c2c5dede384b\"), vector(map: \"vector\", schema: \"019403ee-2961-7f8e-9682-c2c5dede384b\")]\n}\n\nmodel TenantConfiguration {\n  id                    String                @id @default(uuid()) @db.Uuid\n  tenant_id             String                @unique @db.Uuid\n  policy_id             String                @db.Uuid\n  config                String\n  status                ConfigStatus          @default(ACTIVE)\n  last_updated_at       DateTime              @updatedAt @map(\"last_updated_at\")\n  created_at            DateTime              @default(now()) @map(\"created_at\")\n  ApiKey                ApiKey[]\n  domains               Domain[]\n  email_preference      EmailPreference?\n  email_servers         EmailServer[]\n  external_integrations ExternalIntegration[]\n\n  @@unique([id, tenant_id])\n  @@index([tenant_id])\n  @@index([tenant_id, status])\n  @@map(\"tenant_configurations\")\n}\n\nmodel ExternalIntegration {\n  id                      String                       @id @default(uuid()) @db.Uuid\n  name                    IntegrationName\n  category                IntegrationCategory\n  auth_strategy           AuthStrategy\n  config                  Json\n  credentials             Json\n  enabled                 Boolean                      @default(true)\n  tenant_id               String                       @db.Uuid\n  tenant_config_id        String                       @db.Uuid\n  created_at              DateTime                     @default(now()) @map(\"created_at\")\n  last_updated_at         DateTime                     @updatedAt @map(\"last_updated_at\")\n  tenant_config           TenantConfiguration          @relation(fields: [tenant_config_id, tenant_id], references: [id, tenant_id])\n  credit_usage            ExtIntegrationCreditUsage[]\n  integrationNotification ExtIntegrationNotification[]\n  usage_metrics           ExtIntUsageTrackingMetric[]\n\n  @@unique([id, tenant_id])\n  @@index([tenant_id, name, category])\n  @@index([tenant_id, enabled])\n  @@index([name, auth_strategy])\n  @@map(\"external_integrations\")\n}\n\nmodel ExtIntUsageTrackingMetric {\n  id              String                   @id @default(uuid()) @db.Uuid\n  integration_id  String                   @db.Uuid\n  metric_type     MetricType\n  interval        ExtUsageTrackingInterval\n  request_count   Int                      @default(0)\n  error_count     Int                      @default(0)\n  latency_ms      Int?\n  limit_remaining Int?\n  limit_reset_at  DateTime?\n  timestamp       DateTime                 @default(now())\n  custom_metrics  CustomMetricValue[]\n  integration     ExternalIntegration      @relation(fields: [integration_id], references: [id])\n\n  @@index([integration_id, timestamp])\n  @@index([metric_type, timestamp])\n  @@map(\"integration_usage_metrics\")\n}\n\nmodel CustomMetricValue {\n  id              String                    @id @default(uuid()) @db.Uuid\n  usage_metric_id String                    @db.Uuid\n  name            String\n  value           Float                     @default(0.0)\n  unit            String?\n  usage_metric    ExtIntUsageTrackingMetric @relation(fields: [usage_metric_id], references: [id])\n\n  @@unique([usage_metric_id, name])\n  @@map(\"custom_metric_values\")\n}\n\nmodel ExtIntegrationCreditUsage {\n  id             String              @id @default(uuid()) @db.Uuid\n  integration_id String              @db.Uuid\n  credit_amount  Int\n  credit_type    String\n  description    String\n  timestamp      DateTime            @default(now())\n  operation_id   String?\n  operation_type String?\n  integration    ExternalIntegration @relation(fields: [integration_id], references: [id])\n\n  @@index([integration_id, timestamp])\n  @@index([credit_type, timestamp])\n  @@map(\"integration_credit_usage\")\n}\n\nmodel EmailPreference {\n  id              String              @id @default(uuid()) @db.Uuid\n  tenant_id       String              @unique @db.Uuid\n  created_at      DateTime            @default(now()) @map(\"created_at\")\n  last_updated_at DateTime?           @map(\"last_updated_at\")\n  microsoft_graph Boolean\n  send_grid       Boolean\n  tenant_config   TenantConfiguration @relation(fields: [tenant_id], references: [tenant_id])\n\n  @@index([tenant_id, microsoft_graph])\n  @@index([tenant_id, send_grid])\n  @@map(\"email_preference\")\n}\n\nmodel TableView {\n  id                 String @id @default(uuid()) @db.Uuid\n  table_id           String @db.Uuid\n  table_display_name String @unique\n  view_config        Json\n\n  @@map(\"table_views\")\n}\n\nmodel ExtIntegrationNotification {\n  id             String               @id @default(uuid()) @db.Uuid\n  integration_id String               @db.Uuid\n  type           NotificationType\n  priority       NotificationPriority @default(LOW)\n  channel        DeliveryChannel\n  title          String\n  message        String\n  trigger_value  Float?\n  threshold      Float?\n  sent_at        DateTime             @default(now())\n  delivered_at   DateTime?\n  error          String?\n  integration    ExternalIntegration  @relation(fields: [integration_id], references: [id])\n\n  @@index([integration_id, type])\n  @@index([sent_at])\n  @@index([priority, sent_at])\n  @@map(\"integration_notifications\")\n}\n\nmodel Domain {\n  id               String               @id @default(uuid()) @db.Uuid\n  name             String               @unique\n  description      String?\n  status           DomainStatus         @default(PENDING)\n  tenant_id        String?              @db.Uuid\n  tenant_config_id String?              @db.Uuid\n  created_at       DateTime             @default(now()) @map(\"created_at\")\n  last_updated_at  DateTime             @updatedAt @map(\"last_updated_at\")\n  deleted_at       DateTime?            @map(\"deleted_at\")\n  mail_type        MailType\n  dns_records      DNSRecord[]\n  tenant_config    TenantConfiguration? @relation(fields: [tenant_config_id, tenant_id], references: [id, tenant_id])\n\n  @@index([tenant_id])\n  @@index([deleted_at])\n  @@index([status])\n  @@index([tenant_id, status])\n  @@map(\"domains\")\n}\n\nmodel DNSRecord {\n  id              String        @id @default(uuid()) @db.Uuid\n  domain_id       String        @db.Uuid\n  type            DNSRecordType\n  name            String\n  value           String\n  ttl             Int           @default(3600)\n  priority        Int?\n  created_at      DateTime      @default(now()) @map(\"created_at\")\n  last_updated_at DateTime      @updatedAt @map(\"last_updated_at\")\n  deleted_at      DateTime?     @map(\"deleted_at\")\n  dkim_record     DKIMRecord?\n  dmarc_record    DMARCRecord?\n  domain          Domain        @relation(fields: [domain_id], references: [id])\n  spf_record      SPFRecord?\n\n  @@unique([domain_id, type, name])\n  @@unique([id, domain_id])\n  @@index([domain_id])\n  @@index([type])\n  @@map(\"dns_records\")\n}\n\nmodel SPFRecord {\n  id              String          @id @default(uuid()) @db.Uuid\n  domain_id       String          @unique @db.Uuid\n  dns_record_id   String          @unique @db.Uuid\n  mechanisms      String[]\n  all             SPFAllDirective\n  created_at      DateTime        @default(now()) @map(\"created_at\")\n  last_updated_at DateTime        @updatedAt @map(\"last_updated_at\")\n  deleted_at      DateTime?       @map(\"deleted_at\")\n  dns_record      DNSRecord       @relation(fields: [dns_record_id, domain_id], references: [id, domain_id])\n\n  @@unique([dns_record_id, domain_id])\n  @@index([dns_record_id])\n  @@map(\"spf_records\")\n}\n\nmodel DKIMRecord {\n  id              String    @id @default(uuid()) @db.Uuid\n  domain_id       String    @unique @db.Uuid\n  dns_record_id   String    @unique @db.Uuid\n  selector        String\n  public_key      String\n  key_type        String    @default(\"rsa\")\n  created_at      DateTime  @default(now()) @map(\"created_at\")\n  last_updated_at DateTime  @updatedAt @map(\"last_updated_at\")\n  deleted_at      DateTime? @map(\"deleted_at\")\n  dns_record      DNSRecord @relation(fields: [dns_record_id, domain_id], references: [id, domain_id])\n\n  @@unique([dns_record_id, domain_id])\n  @@index([dns_record_id])\n  @@map(\"dkim_records\")\n}\n\nmodel DMARCRecord {\n  id               String       @id @default(uuid()) @db.Uuid\n  domain_id        String       @unique @db.Uuid\n  dns_record_id    String       @unique @db.Uuid\n  policy           DMARCPolicy\n  subdomain_policy DMARCPolicy?\n  percentage       Int          @default(100)\n  report_format    String[]\n  report_interval  Int          @default(86400)\n  report_uris      String[]\n  created_at       DateTime     @default(now()) @map(\"created_at\")\n  last_updated_at  DateTime     @updatedAt @map(\"last_updated_at\")\n  deleted_at       DateTime?    @map(\"deleted_at\")\n  dns_record       DNSRecord    @relation(fields: [dns_record_id, domain_id], references: [id, domain_id])\n\n  @@unique([dns_record_id, domain_id])\n  @@index([dns_record_id])\n  @@map(\"dmarc_records\")\n}\n\nmodel EmailServer {\n  id                String              @id @default(uuid()) @db.Uuid\n  host              String\n  port              Int\n  username          String\n  password          String\n  is_secure         Boolean             @default(true)\n  is_system_managed Boolean             @default(false)\n  server_type       EmailServerType\n  smtp_status       SMTPStatus?\n  created_at        DateTime            @default(now())\n  last_updated_at   DateTime            @updatedAt\n  deleted_at        DateTime?\n  tenant_id         String              @db.Uuid\n  tenant_config_id  String              @db.Uuid\n  tenant_config     TenantConfiguration @relation(fields: [tenant_config_id, tenant_id], references: [id, tenant_id])\n\n  @@unique([server_type, host, username])\n  @@index([server_type])\n  @@index([tenant_id, server_type])\n  @@index([tenant_id, username])\n  @@index([tenant_id, server_type, username])\n  @@index([tenant_config_id])\n  @@map(\"email_servers\")\n}\n\nmodel ApiKey {\n  id               String               @id @default(cuid())\n  name             String\n  key              String               @unique\n  scope            String[]\n  expires_at       DateTime?\n  last_used_at     DateTime?\n  created_at       DateTime             @default(now()) @map(\"created_at\")\n  last_updated_at  DateTime             @updatedAt @map(\"last_updated_at\")\n  tenant_id        String?              @db.Uuid\n  tenant_config_id String?              @db.Uuid\n  tenant_config    TenantConfiguration? @relation(fields: [tenant_config_id, tenant_id], references: [id, tenant_id])\n\n  @@index([tenant_id])\n  @@map(\"api_keys\")\n}\n\nmodel User {\n  id                     String                 @id @default(uuid()) @db.Uuid\n  first_name             String\n  last_name              String\n  username               String                 @unique\n  email                  String                 @unique\n  password               String\n  bio                    String?\n  phone                  String?\n  job_title              String?\n  email_verified         Boolean?               @default(true)\n  last_login             DateTime?              @map(\"last_login\")\n  created_by             String?                @map(\"created_by\")\n  created_at             DateTime               @default(now())\n  last_updated_by        String?                @map(\"last_updated_by\")\n  last_updated_at        DateTime?              @updatedAt @map(\"last_updated_at\")\n  deleted_at             DateTime?              @map(\"deleted_at\")\n  deleted_by             String?                @map(\"deleted_by\")\n  tenant_id              String                 @db.Uuid\n  interview_attendies_id String?                @db.Uuid\n  mentions               CommentMention[]\n  documents              Document[]\n  folders                Folder[]\n  address                UserAddress?\n  devices                UserDevice?\n  user_group_member      UserGroupMember?\n  interview_attendees    IntInterviewAttendees? @relation(\"internal_attendees\", fields: [interview_attendies_id], references: [id])\n  shared_documents       Document[]             @relation(\"DocumentSharedWithUsers\")\n\n  @@unique([id, first_name, last_name, username, email])\n  @@unique([id, email, first_name, last_name])\n  @@unique([id, first_name, last_name])\n  @@index([username])\n  @@index([email])\n  @@index([deleted_at])\n  @@index([created_at])\n  @@index([last_updated_at])\n  @@map(\"users\")\n}\n\nmodel UserAddress {\n  id              String    @id @default(uuid()) @db.Uuid\n  country         String\n  short_code      String\n  state           String\n  city            String\n  zip             String\n  created_by      String    @default(\"system\") @map(\"created_by\")\n  last_updated_by String    @default(\"system\") @map(\"last_updated_by\")\n  deleted_by      String?   @map(\"deleted_by\")\n  created_at      DateTime  @default(now())\n  last_updated_at DateTime  @updatedAt @map(\"last_updated_at\")\n  deleted_at      DateTime? @map(\"deleted_at\")\n  user_id         String    @unique @db.Uuid\n  user            User      @relation(fields: [user_id], references: [id])\n\n  @@unique([country, short_code, state, city, zip, user_id])\n  @@index([zip])\n  @@index([country])\n  @@index([last_updated_at])\n  @@index([deleted_at])\n  @@index([zip, user_id])\n  @@map(\"user_addresses\")\n}\n\nmodel UserDevice {\n  id                                                                                       String              @id @default(uuid()) @db.Uuid\n  unique_device_signature                                                                  String              @unique\n  user_id                                                                                  String              @unique @db.Uuid\n  last_accessed_at                                                                         DateTime\n  last_accessed_from_location_id                                                           String              @unique @db.Uuid\n  device_metadata                                                                          Json[]\n  user_device_locations_user_device_locations_device_id_user_idTouser_devices              UserDeviceLocation? @relation(\"user_device_locations_device_id_user_idTouser_devices\")\n  user_device_locations_user_devices_last_accessed_from_location_idTouser_device_locations UserDeviceLocation  @relation(\"user_devices_last_accessed_from_location_idTouser_device_locations\", fields: [last_accessed_from_location_id], references: [id])\n  user                                                                                     User                @relation(fields: [user_id], references: [id])\n\n  @@unique([id, unique_device_signature, user_id])\n  @@unique([id, user_id])\n  @@index([unique_device_signature])\n  @@index([user_id])\n  @@map(\"user_devices\")\n}\n\nmodel UserDeviceLocation {\n  id                                                                              String      @id @default(uuid()) @db.Uuid\n  lat                                                                             Float\n  long                                                                            Float\n  user_id                                                                         String      @unique @db.Uuid\n  device_id                                                                       String      @unique @db.Uuid\n  user_devices_user_device_locations_device_id_user_idTouser_devices              UserDevice  @relation(\"user_device_locations_device_id_user_idTouser_devices\", fields: [device_id, user_id], references: [id, user_id])\n  user_devices_user_devices_last_accessed_from_location_idTouser_device_locations UserDevice? @relation(\"user_devices_last_accessed_from_location_idTouser_device_locations\")\n\n  @@unique([device_id, user_id])\n  @@index([id, device_id])\n  @@map(\"user_device_locations\")\n}\n\nmodel AuditLog {\n  id          String   @id @default(uuid()) @db.Uuid\n  tenant_id   String\n  resource_id String?\n  user_id     String?\n  action      String\n  details     Json\n  metadata    Json?\n  timestamp   DateTime @default(now()) @db.Timestamp(6)\n\n  @@index([tenant_id])\n  @@index([resource_id, tenant_id])\n  @@map(\"audit_logs\")\n}\n\nmodel Policy {\n  id              String       @id @default(uuid()) @db.Uuid\n  name            String\n  description     String?\n  template_id     String\n  parent_id       String?      @db.Uuid\n  rules           Json\n  priority        Int\n  tenant_id       String?\n  status          PolicyStatus @default(ACTIVE)\n  created_at      DateTime     @default(now())\n  last_updated_at DateTime     @updatedAt\n  parent_policy   Policy?      @relation(\"PolicyHierarchy\", fields: [parent_id], references: [id])\n  child_policies  Policy[]     @relation(\"PolicyHierarchy\")\n\n  @@unique([tenant_id, name])\n  @@index([tenant_id, status])\n  @@index([template_id])\n  @@index([parent_id])\n  @@map(\"policies\")\n}\n\nmodel GroupTemplate {\n  id              String   @id @default(uuid()) @db.Uuid\n  name            String   @unique\n  description     String?\n  attributes      Json\n  created_at      DateTime @default(now())\n  last_updated_at DateTime @updatedAt\n  groups          Group[]\n\n  @@map(\"group_templates\")\n}\n\nmodel Group {\n  id              String        @id @default(uuid()) @db.Uuid\n  name            String\n  description     String?\n  template_id     String        @db.Uuid\n  parent_id       String?       @db.Uuid\n  created_at      DateTime      @default(now())\n  last_updated_at DateTime      @updatedAt\n  policies        GroupPolicy[]\n  parent          Group?        @relation(\"GroupHierarchy\", fields: [parent_id], references: [id])\n  children        Group[]       @relation(\"GroupHierarchy\")\n  template        GroupTemplate @relation(fields: [template_id], references: [id])\n  user_groups     UserGroup[]\n\n  @@index([template_id])\n  @@index([parent_id])\n  @@map(\"groups\")\n}\n\nmodel UserGroup {\n  id              String            @id @default(uuid()) @db.Uuid\n  name            String\n  description     String?\n  group_id        String            @db.Uuid\n  created_at      DateTime          @default(now())\n  last_updated_at DateTime          @updatedAt\n  policies        GroupPolicy[]\n  users           UserGroupMember[]\n  group           Group             @relation(fields: [group_id], references: [id])\n\n  @@index([group_id])\n  @@map(\"user_groups\")\n}\n\nmodel UserGroupMember {\n  id            String    @id @default(uuid()) @db.Uuid\n  user_group_id String    @db.Uuid\n  user_id       String    @unique @db.Uuid\n  created_at    DateTime  @default(now())\n  user_group    UserGroup @relation(fields: [user_group_id], references: [id])\n  user          User      @relation(fields: [user_id], references: [id])\n\n  @@unique([user_group_id, user_id])\n  @@index([user_id])\n  @@map(\"user_group_members\")\n}\n\nmodel GroupPolicy {\n  id              String     @id @default(uuid()) @db.Uuid\n  name            String\n  description     String?\n  configuration   Json\n  priority        Int\n  group_id        String?    @db.Uuid\n  user_group_id   String?    @db.Uuid\n  created_at      DateTime   @default(now())\n  last_updated_at DateTime   @updatedAt\n  group           Group?     @relation(fields: [group_id], references: [id])\n  user_group      UserGroup? @relation(fields: [user_group_id], references: [id])\n\n  @@index([group_id])\n  @@index([user_group_id])\n  @@map(\"group_policies\")\n}\n\nmodel TenantUsageMetric {\n  id            String   @id @default(uuid()) @db.Uuid\n  user_id       String   @db.Uuid\n  resource_code String\n  module_code   String?\n  feature_code  String?\n  value         Float\n  context       Json?\n  timestamp     DateTime @default(now())\n\n  @@index([user_id])\n  @@index([resource_code])\n  @@index([timestamp])\n  @@map(\"tenant_usage_metrics\")\n}\n\nmodel MessageType {\n  id      String        @id @default(uuid()) @db.Uuid\n  name    MessageSource @unique\n  sources Source[]\n}\n\nmodel Source {\n  id       String      @id @default(uuid()) @db.Uuid\n  type_id  String      @db.Uuid\n  messages Message[]\n  type     MessageType @relation(fields: [type_id], references: [id])\n\n  @@map(\"sources\")\n}\n\nmodel Message {\n  id                     String                       @id @default(uuid()) @db.Uuid\n  ms_message_id          String                       @unique\n  subject                String?\n  sender_name            String?\n  sender_email           String\n  received_date_time     DateTime?\n  sent_date_time         DateTime?\n  body                   String\n  body_preview           String?\n  recipients             Json?\n  cc_recipients          Json?\n  bcc_recipients         Json?\n  reply_to               Json?\n  has_attachments        Boolean                      @default(false)\n  summary                Json?\n  meta_data              Json\n  source_id              String                       @db.Uuid\n  created_at             DateTime                     @default(now()) @map(\"created_at\")\n  last_updated_at        DateTime                     @updatedAt @map(\"last_updated_at\")\n  isArchived             Boolean\n  isRead                 Boolean\n  isStarred              Boolean\n  subject_embedding      Unsupported(\"vector(1536)\")?\n  body_embedding         Unsupported(\"vector(1536)\")?\n  sender_embedding       Unsupported(\"vector(1536)\")?\n  receiver_embedding     Unsupported(\"vector(1536)\")?\n  source                 Source                       @relation(fields: [source_id], references: [id])\n  folders                FolderMessage[]              @relation(\"FolderMessageToMessage\")\n  MessageCompanyRelation MessageCompanyRelation[]\n\n  @@index([ms_message_id])\n  @@index([received_date_time(sort: Desc)])\n  @@index([sent_date_time(sort: Desc)])\n  @@index([sender_email])\n  @@index([source_id])\n  @@map(\"messages\")\n}\n\nmodel MessageCompanyRelation {\n  id              String   @id @default(uuid()) @db.Uuid\n  message_id      String   @unique @db.Uuid\n  company_id      String   @db.Uuid\n  relevance_score Float?\n  match_reasons   Json?\n  created_at      DateTime @default(now())\n\n  // Relations\n  message Message? @relation(fields: [message_id], references: [id])\n  company Company? @relation(fields: [company_id], references: [id])\n\n  @@index([message_id])\n  @@index([company_id])\n}\n\nmodel Attachment {\n  id                 String   @id @default(uuid()) @db.Uuid\n  receiver_emails    String[]\n  sender_emails      String[]\n  ms_message_id      String[]\n  content            Bytes\n  document_url       String   @unique\n  content_hash       String   @unique\n  normalized_content String\n  content_full       String\n  document_id        String   @unique @db.Uuid\n  document           Document @relation(fields: [document_id, document_url, content_hash, normalized_content, content, content_full], references: [id, url, content_hash, normalized_content, content, content_full])\n\n  @@unique([document_id, document_url, content_hash, normalized_content, content, content_full])\n  @@index([document_id])\n  @@map(\"attachments\")\n}\n\nmodel Document {\n  id                     String                  @id @default(uuid()) @db.Uuid\n  name                   String\n  is_attachment          Boolean                 @default(false)\n  filename               String\n  file_extension         String\n  mime_type              String\n  charset                String?\n  size                   BigInt\n  url                    String\n  content                Bytes\n  content_full           String\n  summary                String?\n  keywords               String[]\n  normalized_content     String                  @unique\n  content_hash           String                  @unique @db.Char(64)\n  thumbnail              Bytes?\n  thumbnail_type         String?\n  preview_text           String?\n  page_count             Int?\n  is_confidential        Boolean?                @default(false)\n  classification         DocumentClassification?\n  uploaded_by_id         String                  @db.Uuid\n  uploaded_by_email      String\n  uploaded_by_first_name String\n  uploaded_by_last_name  String\n  uploaded_date          DateTime                @default(now())\n  view_count             Int                     @default(0)\n  download_count         Int                     @default(0)\n  last_viewed            DateTime?\n  last_edited            DateTime?               @updatedAt\n  attachment             Attachment?\n  uploaded_by            User                    @relation(fields: [uploaded_by_id, uploaded_by_email, uploaded_by_first_name, uploaded_by_last_name], references: [id, email, first_name, last_name])\n  Position               Position[]              @relation(\"position_to_jd_document\")\n  shared_with            User[]                  @relation(\"DocumentSharedWithUsers\")\n\n  @@unique([id, url, content_hash, normalized_content, content, content_full])\n  @@unique([id, filename, mime_type, url, thumbnail, classification])\n  @@index([uploaded_date(sort: Desc)])\n  @@index([uploaded_by_email])\n  @@index([last_viewed])\n  @@index([classification])\n  @@index([file_extension])\n  @@index([keywords], type: Gin)\n  @@index([normalized_content])\n  @@index([classification, uploaded_date(sort: Desc)])\n  @@index([uploaded_by_email, file_extension])\n  @@index([is_confidential, classification])\n  @@index([last_viewed(sort: Desc), classification])\n  @@index([file_extension, size(sort: Desc)])\n  @@index([file_extension, view_count(sort: Desc)])\n  @@index([uploaded_by_email, last_edited(sort: Desc)])\n  @@map(\"documents\")\n}\n\nmodel Folder {\n  id          String     @id @default(uuid()) @db.Uuid\n  name        String\n  description String?\n  color       String?    @db.VarChar(32)\n  icon        String?\n  key         String     @unique\n  meta_data   Json?\n  default     Boolean    @default(false)\n  type        FolderType @default(INCOMING_FOLDER)\n  user_id     String     @db.Uuid\n  color_hex   String?    @db.Char(6)\n  user        User       @relation(fields: [user_id], references: [id])\n\n  @@unique([id, key])\n  @@unique([user_id, key])\n  @@index([user_id, key])\n  @@index([id])\n  @@map(\"folders\")\n}\n\nmodel FolderMessage {\n  id         String    @id @default(uuid()) @db.Uuid\n  user_id    String    @db.Uuid\n  folder_key String    @unique\n  messages   Message[] @relation(\"FolderMessageToMessage\")\n\n  @@unique([folder_key, user_id])\n  @@map(\"folder_messages\")\n}\n\nmodel Thread {\n  id                String               @id @default(uuid()) @db.Uuid\n  thread_context_id String               @unique @db.Uuid\n  context_hash      String               @unique @db.Char(64)\n  thread_summary_id String               @db.Uuid\n  conversation_id   String\n  domain            String\n  message_db_ids    String[]\n  ms_message_id     String[]\n  summary           Json?\n  created_at        DateTime             @default(now()) @map(\"created_at\")\n  last_updated_at   DateTime             @updatedAt @map(\"last_updated_at\")\n  thread_context    ThreadContext        @relation(fields: [thread_context_id, context_hash], references: [id, context_hash])\n  thread_summary    ThreadSummary        @relation(fields: [thread_summary_id], references: [id])\n  thread_messages   ThreadMessage[]\n  participants      ThreadParticipants[] @relation(\"ThreadToThreadParticipants\")\n\n  @@unique([thread_context_id, context_hash])\n  @@index([domain])\n  @@index([conversation_id])\n  @@index([context_hash])\n  @@index([thread_context_id])\n  @@index([domain, conversation_id])\n  @@index([ms_message_id], type: Gin)\n  @@index([message_db_ids], type: Gin)\n}\n\nmodel ThreadMessage {\n  id                 String   @id @default(uuid()) @db.Uuid\n  conversation_id    String?  @db.Uuid\n  ms_conversation_id String\n  domain             String\n  message_db_id      String   @db.Uuid\n  ms_message_id      String   @unique\n  parent_db_id       String?  @db.Uuid\n  parent_id          String?\n  child_db_id        String?  @db.Uuid\n  child_id           String?\n  is_root            Boolean  @default(false)\n  created_at         DateTime @default(now()) @map(\"created_at\")\n  last_updated_at    DateTime @updatedAt @map(\"last_updated_at\")\n  thread_id          String   @db.Uuid\n  thread             Thread   @relation(fields: [thread_id], references: [id])\n\n  @@index([thread_id])\n  @@index([is_root])\n  @@index([conversation_id])\n  @@index([thread_id, is_root])\n  @@map(\"thread_messages\")\n}\n\nmodel ThreadSummary {\n  id              String   @id @default(uuid()) @db.Uuid\n  conversation_id String\n  domain          String\n  message_db_ids  String[]\n  ms_message_id   String[]\n  summary         Json?\n  created_at      DateTime @default(now()) @map(\"created_at\")\n  last_updated_at DateTime @updatedAt @map(\"last_updated_at\")\n  threads         Thread[]\n\n  @@index([domain])\n  @@index([conversation_id])\n  @@index([domain, conversation_id])\n  @@index([ms_message_id], type: Gin)\n  @@index([message_db_ids], type: Gin)\n  @@map(\"thread_summary\")\n}\n\nmodel ThreadParticipants {\n  id               String   @id @default(uuid()) @db.Uuid\n  name             String\n  domain           String\n  email            String   @unique\n  is_internal_user Boolean? @default(false)\n  threads          Thread[] @relation(\"ThreadToThreadParticipants\")\n\n  @@index([email])\n  @@index([domain])\n  @@map(\"thread_participants\")\n}\n\nmodel ThreadContext {\n  id              String                 @id @default(uuid()) @db.Uuid\n  context_hash    String                 @unique @db.Char(64)\n  context         String\n  created_at      DateTime               @default(now())\n  last_updated_at DateTime               @updatedAt\n  Thread          Thread?\n  context_history ThreadContextHistory[]\n\n  @@unique([id, context_hash])\n  @@map(\"thread_context\")\n}\n\nmodel ThreadContextHistory {\n  id                String               @id @default(uuid()) @db.Uuid\n  context           String\n  created_at        DateTime             @default(now())\n  last_updated_at   DateTime             @updatedAt\n  thread_context_id String               @db.Uuid\n  thread_context    ThreadContext        @relation(fields: [thread_context_id], references: [id])\n  context_items     ThreadContextItems[]\n\n  @@index([thread_context_id])\n  @@map(\"thread_context_history\")\n}\n\nmodel ThreadContextItems {\n  id                        String                @id @default(uuid()) @db.Uuid\n  context                   String\n  organization              String\n  contact                   String\n  position                  String\n  submission                String\n  thread_context_history_id String?               @db.Uuid\n  thread_context_history    ThreadContextHistory? @relation(fields: [thread_context_history_id], references: [id])\n\n  @@map(\"thread_context_items\")\n}\n\nmodel Conversation {\n  id                 String            @id @default(uuid()) @db.Uuid\n  domain             String            @unique\n  threads            Json[]\n  created_at         DateTime          @default(now()) @map(\"created_at\")\n  last_updated_at    DateTime          @updatedAt @map(\"last_updated_at\")\n  conversation_topic ConversationTopic\n\n  @@index([domain])\n  @@index([domain, conversation_topic])\n  @@index([domain, last_updated_at(sort: Desc)])\n  @@index([domain, conversation_topic, last_updated_at(sort: Desc)])\n  @@map(\"conversations\")\n}\n\nmodel EmailActionHistory {\n  id                 String              @id @default(uuid()) @db.Uuid\n  action_taken_by    String              @db.Uuid\n  action             String\n  action_description String\n  date               DateTime            @db.Date\n  time               DateTime            @db.Time(6)\n  requires_follow_up Boolean             @default(false)\n  metadata           Json?\n  next_action_id     String?             @unique @db.Uuid\n  thread_id          String?             @db.Uuid\n  message_id         String?             @db.Uuid\n  next_action        EmailActionHistory? @relation(\"NextAction\", fields: [next_action_id], references: [id])\n  previous_action    EmailActionHistory? @relation(\"NextAction\")\n\n  @@index([message_id])\n  @@index([thread_id])\n  @@index([next_action_id])\n  @@index([action_taken_by])\n  @@index([message_id, requires_follow_up, time(sort: Desc)])\n  @@index([thread_id, requires_follow_up, time(sort: Desc)])\n  @@index([action_taken_by, requires_follow_up, time(sort: Desc)])\n  @@map(\"email_action_history\")\n}\n\nmodel Lead {\n  id               String    @id @default(uuid()) @db.Uuid\n  company_id       String?   @db.Uuid\n  company_name     String?\n  company_website  String?\n  version          Float     @default(1.0)\n  person_name      String?\n  linkedin         String?\n  email            String    @unique\n  phone            String?\n  status           String?\n  job_title        String?\n  company_size     String?\n  revenue          String?\n  industry         String?\n  lead_status      String?\n  created_by       String?   @map(\"created_by\")\n  created_at       DateTime  @default(now())\n  last_updated_by  String?   @map(\"last_updated_by\")\n  last_updated_at  DateTime  @updatedAt @map(\"last_updated_at\")\n  is_deleted       Boolean   @default(false)\n  deleted_at       DateTime? @map(\"deleted_at\")\n  deleted_by       String?   @map(\"deleted_by\")\n  email_sent       Boolean   @default(false)\n  email_opened     Boolean   @default(false)\n  is_pending       Boolean   @default(false)\n  is_processed     Boolean   @default(false)\n  has_organization Boolean   @default(false)\n  has_positions    Boolean   @default(false)\n  retry_count      Int       @default(0)\n  is_stuck         Boolean   @default(false)\n  company          Company?  @relation(fields: [company_id], references: [id])\n\n  @@map(\"leads\")\n}\n\nmodel Oppurtunity {\n  id String @id @default(uuid()) @db.Uuid\n\n  @@map(\"oppurtunities\")\n}\n\nmodel Deal {\n  id String @id @default(uuid()) @db.Uuid\n\n  @@map(\"deals\")\n}\n\nmodel Agreement {\n  id String @id @default(uuid()) @db.Uuid\n\n  @@map(\"agreements\")\n}\n\nmodel Company {\n  id                     String                   @id @default(uuid()) @db.Uuid\n  name                   String\n  website                String\n  domain                 String                   @unique\n  size                   String?\n  revenue                String?\n  industry               String?\n  created_by             String?                  @map(\"created_by\")\n  created_at             DateTime                 @default(now())\n  last_updated_by        String?                  @map(\"last_updated_by\")\n  last_updated_at        DateTime                 @updatedAt @map(\"last_updated_at\")\n  status                 String\n  is_deleted             Boolean                  @default(false)\n  deleted_at             DateTime?                @map(\"deleted_at\")\n  deleted_by             String?                  @map(\"deleted_by\")\n  organization_id        String?\n  careers_page           String?\n  linkedin_url           String?\n  raw_body               Json?\n  research_analyst       String?                  @db.Uuid\n  recruiter_assignee_id  String?                  @db.Uuid\n  status_rel             CompanyStatus            @relation(fields: [status], references: [value])\n  contacts               Contact[]\n  Lead                   Lead[]\n  positions              Position[]\n  MessageCompanyRelation MessageCompanyRelation[]\n\n  @@unique([id, is_deleted, name, status])\n  @@unique([id, name])\n  @@map(\"companies\")\n}\n\nmodel CompanyStatus {\n  id                 String    @id @default(uuid()) @map(\"id\") @db.Uuid\n  field_display_name String    @default(\"company_status\")\n  color              String?   @db.VarChar(32)\n  color_hex          String    @db.Char(6)\n  key                String    @unique\n  value              String    @unique\n  created_by         String    @default(\"system\") @map(\"created_by\")\n  created_at         DateTime  @default(now())\n  Company            Company[]\n\n  @@index([field_display_name])\n  @@index([value])\n  @@index([color])\n  @@map(\"company_status_multi_select\")\n}\n\nmodel Contact {\n  id              String    @id @default(uuid()) @db.Uuid\n  name            String\n  email           String?\n  phone           String?\n  job_title       String\n  linkedin        String?\n  company_id      String    @db.Uuid\n  created_by      String?   @map(\"created_by\")\n  created_at      DateTime  @default(now())\n  last_updated_by String?   @map(\"last_updated_by\")\n  last_updated_at DateTime  @updatedAt @map(\"last_updated_at\")\n  is_deleted      Boolean   @default(false)\n  deleted_at      DateTime? @map(\"deleted_at\")\n  deleted_by      String?   @map(\"deleted_by\")\n  apollo_id       String?   @unique\n  first_name      String?\n  last_name       String?\n  full_name       String?\n  linkedin_url    String?\n  title           String?\n  email_status    String?\n  photo_url       String?\n  organization_id String?   @db.Uuid\n  location_id     String?   @db.Uuid\n  departments     String[]\n  subdepartments  String[]\n  seniority       String?\n  functions       String[]\n  raw_body        String\n  company         Company   @relation(fields: [company_id], references: [id])\n  pocs            POC[]\n\n  @@unique([id, full_name])\n  @@unique([id, job_title])\n  @@map(\"contacts\")\n}\n\nmodel POC {\n  id           String   @id @default(uuid()) @db.Uuid\n  position_id  String   @db.Uuid\n  contact_id   String   @db.Uuid\n  contact_role String\n  created_at   DateTime @default(now())\n  updated_at   DateTime @updatedAt\n  contact      Contact  @relation(fields: [contact_id, contact_role], references: [id, job_title])\n  position     Position @relation(fields: [position_id], references: [id])\n\n  @@unique([position_id, contact_id])\n  @@map(\"pocs\")\n}\n\nmodel Position {\n  id                    String                 @id @default(uuid()) @db.Uuid\n  title                 String\n  description           String\n  is_active             Boolean                @default(true)\n  company_id            String                 @db.Uuid\n  company_name          String\n  is_company_deleted    Boolean\n  company_status        String\n  location_city         String\n  location_state        String\n  location_country      String\n  location_zip          String\n  jd_attachment_id      String                 @db.Uuid\n  jd_filename           String\n  jd_file_type          String\n  jd_thumbnail          Bytes\n  jd_classification     DocumentClassification\n  jd_description        String\n  jd_link               String                 @db.VarChar(255)\n  recruiter_bdm_id      String?\n  recruiter_assignee_id String?\n  apollo_id             String?                @unique\n  salary_range          String?\n  created_by            String?                @map(\"created_by\")\n  created_at            DateTime               @default(now())\n  last_updated_by       String?                @map(\"last_updated_by\")\n  last_updated_at       DateTime               @updatedAt @map(\"last_updated_at\")\n  is_deleted            Boolean                @default(false)\n  deleted_at            DateTime?              @map(\"deleted_at\")\n  deleted_by            String?                @map(\"deleted_by\")\n  job_role_id           String                 @db.Uuid\n  submissions           CandidateSubmission[]\n  pocs                  POC[]\n  company               Company                @relation(fields: [company_id, is_company_deleted, company_name, company_status], references: [id, is_deleted, name, status])\n  jd_attachment         Document               @relation(\"position_to_jd_document\", fields: [jd_attachment_id, jd_filename, jd_file_type, jd_link, jd_thumbnail, jd_classification], references: [id, filename, mime_type, url, thumbnail, classification])\n  job_role              JobRole                @relation(fields: [job_role_id], references: [id])\n  relevant_keywords     Keyword[]              @relation(\"position_to_keywords\")\n\n  @@unique([id, title])\n  @@unique([id, company_id, is_deleted, is_company_deleted, company_name])\n  @@index([is_deleted, deleted_at(sort: Desc)])\n  @@index([is_deleted, is_company_deleted(sort: Desc), created_at])\n  @@index([is_deleted(sort: Desc), is_company_deleted(sort: Desc), created_at], map: \"positions_deleted_company_deleted_created_at\")\n  @@map(\"positions\")\n}\n\nmodel IntInterviewAttendees {\n  id                       String     @id @default(uuid()) @db.Uuid\n  other_external_attendees String[]\n  interviews               Interview?\n  other_internal_attendees User[]     @relation(\"internal_attendees\")\n\n  @@map(\"interview_attendees\")\n}\n\nmodel Interview {\n  id                     String                @id @default(uuid()) @map(\"id\") @db.Uuid\n  host_user_id           String                @db.Uuid\n  host_user_email        String\n  start_time             DateTime\n  end_time               DateTime\n  attendees_id           String                @unique @db.Uuid\n  outlook_calendar_event Json\n  interview_subject      String\n  feedback               String\n  candidate_id           String                @db.Uuid\n  submission_id          String                @db.Uuid\n  position_id            String                @db.Uuid\n  timezone_key           String\n  interview_mode         String\n  created_by             String?               @default(\"system\") @map(\"created_by\")\n  created_at             DateTime              @default(now())\n  last_updated_by        String?               @map(\"last_updated_by\")\n  last_updated_at        DateTime              @updatedAt @map(\"last_updated_at\")\n  is_deleted             Boolean               @default(false)\n  deleted_at             DateTime?             @map(\"deleted_at\")\n  deleted_by             String?               @map(\"deleted_by\")\n  attendees              IntInterviewAttendees @relation(fields: [attendees_id], references: [id])\n  feedback_rel           InterviewFeedback     @relation(fields: [feedback], references: [value])\n  interview_mode_rel     InterviewMode         @relation(fields: [interview_mode], references: [value])\n  submission             CandidateSubmission   @relation(fields: [submission_id, candidate_id, position_id], references: [id, candidate_id, position_id])\n  timezone               Timezone              @relation(fields: [timezone_key], references: [key])\n\n  @@index([start_time])\n  @@index([candidate_id])\n  @@index([position_id])\n  @@index([end_time])\n  @@map(\"interviews\")\n}\n\nmodel Timezone {\n  id                 String             @id @default(uuid()) @db.Uuid\n  field_type         FrontendFieldTypes @default(SINGLE_SELECT)\n  field_display_name String             @default(\"company_status\")\n  icon               String?\n  color              String?            @db.VarChar(32)\n  color_hex          String?            @db.Char(6)\n  key                String             @unique\n  value              String             @unique\n  created_by         String             @default(\"system\") @map(\"created_by\")\n  created_at         DateTime           @default(now())\n  Interview          Interview[]\n\n  @@index([field_display_name])\n  @@index([field_type])\n  @@index([value])\n  @@index([key])\n  @@index([color])\n  @@map(\"timezones\")\n}\n\nmodel InterviewFeedback {\n  id                 String             @id @default(uuid()) @map(\"id\") @db.Uuid\n  type               FrontendFieldTypes @default(SINGLE_SELECT)\n  field_display_name String             @default(\"company_status\")\n  icon               String?\n  color              String?            @db.VarChar(32)\n  color_hex          String?            @db.Char(6)\n  value              String             @unique\n  created_by         String             @default(\"system\") @map(\"created_by\")\n  created_at         DateTime           @default(now())\n  Interview          Interview[]\n\n  @@index([field_display_name])\n  @@index([type])\n  @@index([value])\n  @@index([color])\n  @@map(\"interview_feedbacks\")\n}\n\nmodel InterviewMode {\n  id                 String             @id @default(uuid()) @map(\"id\") @db.Uuid\n  field_type         FrontendFieldTypes @default(SINGLE_SELECT)\n  field_display_name String             @default(\"company_status\")\n  icon               String?\n  color              String?            @db.VarChar(32)\n  color_hex          String?            @db.Char(6)\n  value              String             @unique\n  created_by         String             @default(\"system\") @map(\"created_by\")\n  created_at         DateTime           @default(now())\n  Interview          Interview[]\n\n  @@index([field_display_name])\n  @@index([field_type])\n  @@index([value])\n  @@index([color])\n  @@map(\"interview_modes\")\n}\n\nmodel Attribute {\n  id              String          @id @default(uuid()) @db.Uuid\n  name            String\n  type            String\n  description     String?\n  tenant_id       String          @map(\"tenant_id\")\n  user_id         String          @map(\"user_id\")\n  version         Float           @default(1.0)\n  created_by      String?         @map(\"created_by\")\n  created_at      DateTime        @default(now())\n  last_updated_by String?         @map(\"last_updated_by\")\n  last_updated_at DateTime        @updatedAt @map(\"last_updated_at\")\n  is_deleted      Boolean         @default(false)\n  deleted_at      DateTime?       @map(\"deleted_at\")\n  deleted_by      String?         @map(\"deleted_by\")\n  user_attributes UserAttribute[]\n\n  @@index([name, type])\n  @@index([tenant_id])\n  @@index([user_id])\n  @@index([is_deleted, deleted_at])\n  @@index([created_at])\n  @@index([last_updated_at])\n  @@map(\"attributes\")\n}\n\nmodel UserAttribute {\n  id              String    @id @default(uuid()) @db.Uuid\n  tenant_id       String    @map(\"tenant_id\")\n  user_id         String    @map(\"user_id\")\n  attribute_id    String    @db.Uuid\n  version         Float     @default(1.0)\n  value           String?\n  created_by      String?   @map(\"created_by\")\n  created_at      DateTime  @default(now())\n  last_updated_by String?   @map(\"last_updated_by\")\n  last_updated_at DateTime  @updatedAt @map(\"last_updated_at\")\n  is_deleted      Boolean   @default(false)\n  deleted_at      DateTime? @map(\"deleted_at\")\n  deleted_by      String?   @map(\"deleted_by\")\n  attribute       Attribute @relation(fields: [attribute_id], references: [id])\n\n  @@unique([user_id, attribute_id])\n  @@index([user_id])\n  @@index([attribute_id])\n  @@index([is_deleted, deleted_at])\n  @@index([created_at])\n  @@index([last_updated_at])\n  @@map(\"user_attributes\")\n}\n\nmodel Note {\n  id              String    @id @default(cuid())\n  table_id        String    @map(\"table_id\")\n  field_id        String    @map(\"field_id\")\n  note            String\n  is_private      Boolean   @default(false)\n  created_by      String    @map(\"created_by\")\n  created_at      DateTime  @default(now()) @map(\"created_at\")\n  last_updated_by String?   @map(\"last_updated_by\")\n  last_updated_at DateTime? @updatedAt @map(\"last_updated_at\")\n\n  @@index([table_id, field_id])\n  @@map(\"notes\")\n}\n\nmodel CandidateSubmission {\n  id                  String                    @id @default(uuid()) @db.Uuid\n  status              String\n  submitted_at        DateTime                  @default(now())\n  submitted_by        String                    @db.Uuid\n  last_updated_by     String?\n  last_updated_at     DateTime                  @updatedAt\n  deleted_at          DateTime?\n  deleted_by          String?\n  candidate_full_name String\n  candidate_id        String                    @db.Uuid\n  company_id          String                    @db.Uuid\n  position_id         String                    @db.Uuid\n  is_position_deleted Boolean\n  is_company_deleted  Boolean\n  company_name        String\n  candidate           Candidate                 @relation(fields: [candidate_id, candidate_full_name], references: [id, candidate_full_name])\n  position            Position                  @relation(fields: [position_id, company_id, is_position_deleted, is_company_deleted, company_name], references: [id, company_id, is_deleted, is_company_deleted, company_name])\n  status_rel          CandidateSubmissionStatus @relation(fields: [status], references: [value])\n  interviews          Interview[]\n\n  @@unique([candidate_id, position_id])\n  @@unique([id, candidate_id, position_id])\n  @@unique([id, candidate_id, position_id, candidate_full_name])\n  @@map(\"candidate_submissions\")\n}\n\nmodel CandidateSubmissionStatus {\n  id                  String                @id @default(uuid()) @map(\"id\") @db.Uuid\n  field_display_name  String                @default(\"company_status\")\n  color               String?               @db.VarChar(32)\n  color_hex           String                @db.Char(6)\n  value               String                @unique\n  created_by          String                @default(\"system\") @map(\"created_by\")\n  created_at          DateTime              @default(now())\n  CandidateSubmission CandidateSubmission[]\n\n  @@index([field_display_name])\n  @@index([value])\n  @@index([color])\n  @@map(\"candidate_submission_status\")\n}\n\nmodel BooleanString {\n  id              String                  @id @default(uuid()) @db.Uuid\n  string          String\n  jd              String\n  upvote          Int                     @default(0)\n  downvote        Int                     @default(0)\n  created_by      String?                 @map(\"created_by\")\n  created_at      DateTime                @default(now())\n  last_updated_by String?                 @map(\"last_updated_by\")\n  last_updated_at DateTime                @updatedAt @map(\"last_updated_at\")\n  deleted_at      DateTime?               @map(\"deleted_at\")\n  deleted_by      String?                 @map(\"deleted_by\")\n  entity_id       String                  @db.Uuid\n  entity_type     BooleanStringEntityType\n\n  @@index([jd])\n  @@index([entity_id, upvote(sort: Desc)])\n  @@map(\"boolean_strings\")\n}\n\nmodel Location {\n  id                  String      @id @default(uuid()) @db.Uuid\n  country             String\n  short_code          String\n  state               String\n  city                String\n  zip                 String\n  user_id             String?\n  version             Float       @default(1.0)\n  created_by          String?     @map(\"created_by\")\n  created_at          DateTime    @default(now())\n  last_updated_by     String?     @map(\"last_updated_by\")\n  last_updated_at     DateTime    @updatedAt @map(\"last_updated_at\")\n  is_deleted          Boolean     @default(false)\n  deleted_at          DateTime?   @map(\"deleted_at\")\n  deleted_by          String?     @map(\"deleted_by\")\n  candidate_locations Candidate[]\n\n  @@unique([id, city, state, country, zip])\n  @@map(\"locations\")\n}\n\nmodel PersonalInformation {\n  id                   String     @id @default(uuid()) @db.Uuid\n  full_name            String\n  email                String\n  linkedin             String?\n  github               String?\n  user_id              String?\n  phone                String\n  address_string       String\n  country_of_residence String\n  city_of_residence    String\n  zip                  String\n  state_of_residence   String\n  age                  String\n  is_us_citizen        Boolean\n  created_by           String?    @map(\"created_by\")\n  created_at           DateTime   @default(now())\n  last_updated_by      String?    @map(\"last_updated_by\")\n  last_updated_at      DateTime   @updatedAt @map(\"last_updated_at\")\n  is_deleted           Boolean    @default(false)\n  deleted_at           DateTime?  @map(\"deleted_at\")\n  deleted_by           String?    @map(\"deleted_by\")\n  candidate            Candidate?\n\n  @@unique([id, full_name, email])\n  @@unique([id, full_name])\n  @@map(\"personal_information\")\n}\n\nmodel Candidate {\n  id                      String                 @id @default(uuid()) @db.Uuid\n  is_remote               Boolean?\n  total_work_experience   String\n  search_location         String\n  resume_text             String\n  url                     String?\n  status                  String\n  personal_information_id String                 @db.Uuid\n  sourced_from            String\n  location_id             String                 @db.Uuid\n  candidate_full_name     String\n  created_by              String?                @map(\"created_by\")\n  created_at              DateTime               @default(now())\n  last_updated_by         String?                @map(\"last_updated_by\")\n  last_updated_at         DateTime               @updatedAt @map(\"last_updated_at\")\n  is_deleted              Boolean                @default(false)\n  deleted_at              DateTime?              @map(\"deleted_at\")\n  deleted_by              String?                @map(\"deleted_by\")\n  bdm_id                  String?\n  assignee_id             String?\n  submissions             CandidateSubmission[]\n  location                Location               @relation(fields: [location_id], references: [id])\n  personal_information    PersonalInformation    @relation(fields: [personal_information_id, candidate_full_name], references: [id, full_name])\n  source                  CandidateSourceOptions @relation(fields: [sourced_from], references: [value])\n  certifications          Certification[]\n  education               Education[]\n  licenses                License[]\n  possible_job_roles      PossibleJobRole[]\n  work_experiences        WorkExperience[]\n  relevant_keywords       Keyword[]              @relation(\"candidate_to_keywords\")\n\n  @@unique([personal_information_id, candidate_full_name])\n  @@unique([id, candidate_full_name])\n  @@map(\"candidates\")\n}\n\nmodel CandidateSourceOptions {\n  id                 String      @id @default(uuid()) @map(\"id\") @db.Uuid\n  field_display_name String      @default(\"company_status\")\n  color              String?     @db.VarChar(32)\n  color_hex          String      @db.Char(6)\n  value              String      @unique\n  created_by         String      @default(\"system\") @map(\"created_by\")\n  created_at         DateTime    @default(now())\n  Candidate          Candidate[]\n\n  @@index([field_display_name])\n  @@index([value])\n  @@index([color])\n  @@map(\"candidate_source_options\")\n}\n\nmodel Education {\n  id              String    @id @default(uuid()) @db.Uuid\n  primary         String?\n  secondary       String?\n  graduation      String?\n  post_graduation String?\n  phd             String?\n  candidate_id    String    @db.Uuid\n  created_by      String?   @map(\"created_by\")\n  created_at      DateTime  @default(now())\n  last_updated_by String?   @map(\"last_updated_by\")\n  last_updated_at DateTime  @updatedAt @map(\"last_updated_at\")\n  is_deleted      Boolean   @default(false)\n  deleted_at      DateTime? @map(\"deleted_at\")\n  deleted_by      String?   @map(\"deleted_by\")\n  candidate       Candidate @relation(fields: [candidate_id], references: [id])\n\n  @@map(\"education\")\n}\n\nmodel Certification {\n  id                    String    @id @default(uuid()) @db.Uuid\n  name_of_certification String\n  institution           String\n  candidate_id          String    @db.Uuid\n  created_by            String?   @map(\"created_by\")\n  created_at            DateTime  @default(now())\n  last_updated_by       String?   @map(\"last_updated_by\")\n  last_updated_at       DateTime  @updatedAt @map(\"last_updated_at\")\n  deleted_at            DateTime? @map(\"deleted_at\")\n  deleted_by            String?   @map(\"deleted_by\")\n  candidate             Candidate @relation(fields: [candidate_id], references: [id])\n  relevant_keywords     Keyword[] @relation(\"certification_to_keywords\")\n\n  @@map(\"certifications\")\n}\n\nmodel JobRole {\n  id                            String           @id @default(uuid()) @db.Uuid\n  title_hash                    Bytes            @unique\n  title_display                 String           @db.VarChar(120)\n  title_normalized              String           @unique\n  role_description              String           @db.VarChar(500)\n  job_role_description_detailed String\n  positions                     Position[]\n  experienced_candidates        WorkExperience[]\n  relevant_keywords             Keyword[]        @relation(\"job_role_to_keywords\")\n\n  @@unique([title_normalized, title_display, job_role_description_detailed])\n  @@index([title_normalized])\n  @@index([title_hash], type: Hash)\n  @@index([role_description])\n  @@index([job_role_description_detailed])\n  @@map(\"job_roles\")\n}\n\nmodel WorkExperience {\n  id                String    @id @default(uuid()) @db.Uuid\n  title             String    @db.VarChar(120)\n  organization_name String\n  is_present        Boolean\n  description       String\n  start_month_year  String\n  end_month_year    String?\n  candidate_id      String    @db.Uuid\n  created_by        String?   @map(\"created_by\")\n  created_at        DateTime  @default(now())\n  last_updated_by   String?   @map(\"last_updated_by\")\n  last_updated_at   DateTime  @updatedAt @map(\"last_updated_at\")\n  deleted_at        DateTime? @map(\"deleted_at\")\n  deleted_by        String?   @map(\"deleted_by\")\n  job_role_id       String?   @db.Uuid\n  candidate         Candidate @relation(fields: [candidate_id], references: [id])\n  job_role          JobRole?  @relation(fields: [job_role_id], references: [id])\n\n  @@index([title])\n  @@index([organization_name])\n  @@index([is_present])\n  @@index([description])\n  @@map(\"work_experiences\")\n}\n\nmodel License {\n  id                String    @id @default(uuid()) @db.Uuid\n  name              String\n  candidate_id      String    @db.Uuid\n  created_by        String?   @map(\"created_by\")\n  created_at        DateTime  @default(now())\n  last_updated_by   String?   @map(\"last_updated_by\")\n  last_updated_at   DateTime  @updatedAt @map(\"last_updated_at\")\n  deleted_at        DateTime? @map(\"deleted_at\")\n  deleted_by        String?   @map(\"deleted_by\")\n  candidate         Candidate @relation(fields: [candidate_id], references: [id])\n  relevant_keywords Keyword[] @relation(\"license_to_keywords\")\n\n  @@map(\"licenses\")\n}\n\nmodel Keyword {\n  id                      Bytes           @id\n  term                    String          @db.VarChar(64)\n  term_hash               Bytes           @unique\n  normalized_term         String          @unique\n  category                TermCategory\n  term_type               TermType\n  is_active               Boolean         @default(true)\n  created_at              DateTime        @default(now())\n  created_by              String\n  updated_at              DateTime        @updatedAt\n  updated_by              String?\n  deleted_at              DateTime?\n  deleted_by              String?\n  relevant_candidates     Candidate[]     @relation(\"candidate_to_keywords\")\n  relevant_certifications Certification[] @relation(\"certification_to_keywords\")\n  relevant_job_roles      JobRole[]       @relation(\"job_role_to_keywords\")\n  relevant_licences       License[]       @relation(\"license_to_keywords\")\n  relevant_positions      Position[]      @relation(\"position_to_keywords\")\n\n  @@index([category, term_type])\n  @@index([normalized_term])\n  @@index([term_hash])\n  @@map(\"keywords\")\n}\n\nmodel PossibleJobRole {\n  id              String    @id @default(uuid()) @db.Uuid\n  job_role        String\n  user_id         String?\n  candidate_id    String    @db.Uuid\n  created_by      String?   @map(\"created_by\")\n  created_at      DateTime  @default(now())\n  last_updated_by String?   @map(\"last_updated_by\")\n  last_updated_at DateTime  @updatedAt @map(\"last_updated_at\")\n  deleted_at      DateTime? @map(\"deleted_at\")\n  deleted_by      String?   @map(\"deleted_by\")\n  candidate       Candidate @relation(fields: [candidate_id], references: [id])\n\n  @@map(\"possible_job_roles\")\n}\n\nmodel Comment {\n  id              String           @id @default(uuid()) @db.Uuid\n  text            String\n  table_name      String           @map(\"table_name\")\n  parent_id       String?          @map(\"parent_id\") @db.Uuid\n  record_id       String           @map(\"record_id\")\n  created_by      String           @map(\"created_by\")\n  created_at      DateTime         @default(now()) @map(\"created_at\")\n  last_updated_by String?          @map(\"last_updated_by\")\n  last_updated_at DateTime         @updatedAt @map(\"last_updated_at\")\n  is_deleted      Boolean          @default(false) @map(\"is_deleted\")\n  deleted_at      DateTime?        @map(\"deleted_at\")\n  deleted_by      String?          @map(\"deleted_by\")\n  mentions        CommentMention[]\n  parent          Comment?         @relation(\"parentComment\", fields: [parent_id], references: [id])\n  replies         Comment[]        @relation(\"parentComment\")\n\n  @@index([record_id])\n  @@index([parent_id])\n  @@index([created_at])\n  @@index([last_updated_at])\n  @@map(\"comments\")\n}\n\nmodel CommentMention {\n  id             String   @id @default(uuid()) @db.Uuid\n  comment_id     String   @map(\"comment_id\") @db.Uuid\n  tagged_user_id String   @map(\"user_id\") @db.Uuid\n  created_at     DateTime @default(now()) @map(\"created_at\")\n  comment        Comment  @relation(fields: [comment_id], references: [id])\n  tagged_user    User     @relation(fields: [tagged_user_id], references: [id])\n\n  @@unique([comment_id, tagged_user_id])\n  @@index([comment_id])\n  @@index([tagged_user_id])\n  @@map(\"comment_mentions\")\n}\n\nmodel Task {\n  id              String     @id @default(uuid()) @db.Uuid\n  title           String\n  details         String?\n  status          TaskStatus @default(PENDING)\n  priority        Priority   @default(MEDIUM)\n  due_date        DateTime?\n  completed_at    DateTime?\n  parent_id       String?    @db.Uuid\n  assignee        String     @db.Uuid\n  created_by      String\n  created_at      DateTime   @default(now())\n  last_updated_at DateTime   @updatedAt\n  last_updated_by String\n  is_deleted      Boolean?   @default(false)\n  deleted_at      DateTime?\n  deleted_by      String?\n  reminders       Reminder[]\n  parent          Task?      @relation(\"TaskHierarchy\", fields: [parent_id], references: [id])\n  subtasks        Task[]     @relation(\"TaskHierarchy\")\n\n  @@index([status, due_date])\n  @@index([parent_id])\n  @@map(\"tasks\")\n}\n\nmodel Reminder {\n  id         String    @id @default(uuid()) @db.Uuid\n  task_id    String    @db.Uuid\n  remind_at  DateTime\n  message    String?\n  is_sent    Boolean   @default(false)\n  sent_at    DateTime?\n  created_at DateTime  @default(now())\n  updated_at DateTime  @updatedAt\n  task       Task      @relation(fields: [task_id], references: [id])\n\n  @@index([task_id])\n  @@index([remind_at, is_sent])\n  @@map(\"reminders\")\n}\n\nenum AuthStrategy {\n  API_KEY\n  OAUTH2\n  EMAIL_PASSWORD\n  CERTIFICATE\n  CUSTOM_TOKEN\n  JWT\n  BASIC_AUTH\n}\n\nenum IntegrationCategory {\n  ANALYTICS\n  BILLING\n  COMMUNICATION\n  DATA_ENRICHMENT\n  AI_SERVICES\n  CUSTOM\n}\n\nenum IntegrationName {\n  LAGO\n  OPENMETER\n  FLUENTD\n  LOKI\n  STRIPE\n  APOLLO\n  OPENAI\n  ZOOMINFO\n  MAILCOW\n  MSGRAPH\n  SENDGRID\n  AIRTABLE\n  CUSTOM\n}\n\nenum ConfigStatus {\n  ACTIVE\n  INACTIVE\n  PENDING\n}\n\nenum MetricType {\n  API_CALLS\n  DATA_TRANSFER\n  STORAGE\n  PROCESSING_TIME\n  CUSTOM\n}\n\nenum NotificationType {\n  USAGE_THRESHOLD\n  RATE_LIMIT\n  ERROR\n  STATUS_CHANGE\n  CUSTOM\n}\n\nenum FrontendFieldTypes {\n  DATE\n  DATE_TIME\n  SHORT_TEXT\n  LONG_TEXT\n  URL\n  EMAIL\n  PHONE\n  USER\n  ATTACHMENT\n  CHECKBOX\n  MUTLI_SELECT\n  SINGLE_SELECT\n  NUMBER\n  PERCENT\n  CURRENCY\n  ONE_TO_MANY\n  ONE_TO_ONE\n  GEOLOCATION\n}\n\nenum NotificationPriority {\n  LOW\n  MEDIUM\n  HIGH\n  CRITICAL\n}\n\nenum DeliveryChannel {\n  EMAIL\n  WEBHOOK\n  SYSTEM\n  CUSTOM\n}\n\nenum ExtUsageTrackingInterval {\n  MINUTE\n  HOUR\n  DAY\n  WEEK\n  MONTH\n  QUARTER\n  YEAR\n}\n\nenum EmailServerType {\n  SMTP\n  IMAP\n}\n\nenum DomainStatus {\n  PENDING\n  ACTIVE\n  VERIFIED\n  SUSPENDED\n}\n\nenum DNSRecordType {\n  A\n  AAAA\n  CNAME\n  MX\n  TXT\n  SPF\n  DKIM\n  DMARC\n}\n\nenum SPFAllDirective {\n  PASS\n  NEUTRAL\n  SOFTFAIL\n  FAIL\n}\n\nenum DMARCPolicy {\n  NONE\n  QUARANTINE\n  REJECT\n}\n\nenum SMTPStatus {\n  ACTIVE\n  INACTIVE\n  PENDING_VERIFICATION\n}\n\nenum MailType {\n  MAILCOW\n  SENDGRID\n  MICROSOFT_GRAPH_API\n}\n\nenum MessageSource {\n  MS_GRAPH\n  MAILCOW\n  SG\n}\n\nenum PolicyStatus {\n  ACTIVE\n  INACTIVE\n  ARCHIVED\n}\n\nenum DocumentClassification {\n  SERVICE_AGREEMENT\n  JOB_DESCRIPTION\n  RESUME\n  CONTRACT\n  QUOTATION\n  INVOICE\n  RECEIPT\n  TAX_FORMS\n  IDENTITY_DOCUMENTS\n  WORK_PERMIT\n  VISA_DOCUMENTS\n  OFFER_LETTER\n  EMPLOYMENT_CONTRACT\n  MARKETING\n  IT\n  OTHER\n}\n\nenum FolderType {\n  INCOMING_FOLDER\n  OUTGOING_FOLDER\n}\n\nenum ConversationTopic {\n  INITIAL_CONTACT\n  POSITION_DESCRIPTION\n  JOB_DESCRIPTION\n  CANDIDATE_SUBMISSION\n  CANDIDATE_REVIEW\n  INTERVIEW\n  CONTRACT\n  EMPLOYMENT\n}\n\nenum RecipientType {\n  CANDIDATE\n  INTERNAL_USER\n  CLIENT_CONTACT\n  EXTERNAL_USER\n}\n\nenum EmailActionType {\n  REPLY\n  REQUEST_JD\n  REQUEST_RESUME\n  REQUEST_REVIEW\n  REQUEST_RESUME_REVIEW\n  REQUEST_DETAILS\n  REQUEST_FOLLOWUP\n  REQUEST_BENEFITS_DETAILS\n  REQUEST_EXPERIENCE_CERTIFICATE\n  REREQUEST_NEW_POSITION\n  FOLLOWUP\n  FORWARD\n  CHANGE_POC\n  SEND_CONTRACT\n  SCHEDULE_INTERVIEW\n  SEND_RESUME\n  SEND_OFFER_LETTER\n  SEND_JD\n  SALARY_NEGOTIATIONS\n  CONTRACT_NEGOTIATIONS\n  SUBMIT_CONTRACT_REVIEW\n  SUBMIT_RESUME_REVIEW\n}\n\nenum EmailTypes {\n  MARKETING\n  TRANSACTIONAL\n  PROMOTIONAL\n  COLD_EMAIL_CAMPAIGN\n  FOLLOW_UP\n  AUTOMATED\n  NOTIFICATION\n}\n\nenum EmailStatus {\n  DRAFT\n  QUEUED\n  SENT\n  FAILED\n  READ\n  UNREAD\n}\n\nenum CreditTypeEnum {\n  API\n  EMAIL\n}\n\nenum BooleanStringEntityType {\n  JobRole\n  Position\n}\n\nenum TermCategory {\n  INDUSTRY\n  TECHNICAL_SKILL\n  SOFT_SKILL\n  ROLE_TITLE\n  RESPONSIBILITY\n  TOOL\n  CERTIFICATION\n  DOMAIN\n}\n\nenum TermType {\n  NOUN\n  VERB\n  ADJECTIVE\n  COMPOUND\n}\n\nenum TaskStatus {\n  PENDING\n  IN_PROGRESS\n  COMPLETED\n  CANCELLED\n}\n\nenum Priority {\n  LOW\n  MEDIUM\n  HIGH\n}\n",
  "inlineSchemaHash": "cde035640a55f0fd76fe9b20ce833d6bd76fdc16fcb247a66fb554923f05bc56",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client-primary",
    "generated/client-primary",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"TenantConfiguration\":{\"dbName\":\"tenant_configurations\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"policy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"config\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ConfigStatus\",\"nativeType\":null,\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ApiKey\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ApiKey\",\"nativeType\":null,\"relationName\":\"ApiKeyToTenantConfiguration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domains\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Domain\",\"nativeType\":null,\"relationName\":\"DomainToTenantConfiguration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_preference\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmailPreference\",\"nativeType\":null,\"relationName\":\"EmailPreferenceToTenantConfiguration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_servers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmailServer\",\"nativeType\":null,\"relationName\":\"EmailServerToTenantConfiguration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"external_integrations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExternalIntegration\",\"nativeType\":null,\"relationName\":\"ExternalIntegrationToTenantConfiguration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"tenant_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"tenant_id\"]}],\"isGenerated\":false},\"ExternalIntegration\":{\"dbName\":\"external_integrations\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"IntegrationName\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"IntegrationCategory\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_strategy\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AuthStrategy\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"config\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"credentials\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_config_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"tenant_config\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TenantConfiguration\",\"nativeType\":null,\"relationName\":\"ExternalIntegrationToTenantConfiguration\",\"relationFromFields\":[\"tenant_config_id\",\"tenant_id\"],\"relationToFields\":[\"id\",\"tenant_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"credit_usage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExtIntegrationCreditUsage\",\"nativeType\":null,\"relationName\":\"ExtIntegrationCreditUsageToExternalIntegration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"integrationNotification\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExtIntegrationNotification\",\"nativeType\":null,\"relationName\":\"ExtIntegrationNotificationToExternalIntegration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usage_metrics\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExtIntUsageTrackingMetric\",\"nativeType\":null,\"relationName\":\"ExtIntUsageTrackingMetricToExternalIntegration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"tenant_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"tenant_id\"]}],\"isGenerated\":false},\"ExtIntUsageTrackingMetric\":{\"dbName\":\"integration_usage_metrics\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"integration_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metric_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MetricType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interval\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExtUsageTrackingInterval\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"error_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latency_ms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limit_remaining\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limit_reset_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"custom_metrics\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomMetricValue\",\"nativeType\":null,\"relationName\":\"CustomMetricValueToExtIntUsageTrackingMetric\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"integration\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExternalIntegration\",\"nativeType\":null,\"relationName\":\"ExtIntUsageTrackingMetricToExternalIntegration\",\"relationFromFields\":[\"integration_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CustomMetricValue\":{\"dbName\":\"custom_metric_values\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usage_metric_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usage_metric\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExtIntUsageTrackingMetric\",\"nativeType\":null,\"relationName\":\"CustomMetricValueToExtIntUsageTrackingMetric\",\"relationFromFields\":[\"usage_metric_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"usage_metric_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"usage_metric_id\",\"name\"]}],\"isGenerated\":false},\"ExtIntegrationCreditUsage\":{\"dbName\":\"integration_credit_usage\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"integration_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"credit_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"credit_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operation_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"integration\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExternalIntegration\",\"nativeType\":null,\"relationName\":\"ExtIntegrationCreditUsageToExternalIntegration\",\"relationFromFields\":[\"integration_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmailPreference\":{\"dbName\":\"email_preference\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"microsoft_graph\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"send_grid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_config\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TenantConfiguration\",\"nativeType\":null,\"relationName\":\"EmailPreferenceToTenantConfiguration\",\"relationFromFields\":[\"tenant_id\"],\"relationToFields\":[\"tenant_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TableView\":{\"dbName\":\"table_views\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table_display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"view_config\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ExtIntegrationNotification\":{\"dbName\":\"integration_notifications\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"integration_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"NotificationPriority\",\"nativeType\":null,\"default\":\"LOW\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"channel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DeliveryChannel\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trigger_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threshold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sent_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delivered_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"error\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"integration\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExternalIntegration\",\"nativeType\":null,\"relationName\":\"ExtIntegrationNotificationToExternalIntegration\",\"relationFromFields\":[\"integration_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Domain\":{\"dbName\":\"domains\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DomainStatus\",\"nativeType\":null,\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_config_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MailType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dns_records\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DNSRecord\",\"nativeType\":null,\"relationName\":\"DNSRecordToDomain\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_config\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TenantConfiguration\",\"nativeType\":null,\"relationName\":\"DomainToTenantConfiguration\",\"relationFromFields\":[\"tenant_config_id\",\"tenant_id\"],\"relationToFields\":[\"id\",\"tenant_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DNSRecord\":{\"dbName\":\"dns_records\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DNSRecordType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ttl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":3600,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dkim_record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DKIMRecord\",\"nativeType\":null,\"relationName\":\"DKIMRecordToDNSRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dmarc_record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DMARCRecord\",\"nativeType\":null,\"relationName\":\"DMARCRecordToDNSRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Domain\",\"nativeType\":null,\"relationName\":\"DNSRecordToDomain\",\"relationFromFields\":[\"domain_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spf_record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SPFRecord\",\"nativeType\":null,\"relationName\":\"DNSRecordToSPFRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"domain_id\",\"type\",\"name\"],[\"id\",\"domain_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"domain_id\",\"type\",\"name\"]},{\"name\":null,\"fields\":[\"id\",\"domain_id\"]}],\"isGenerated\":false},\"SPFRecord\":{\"dbName\":\"spf_records\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dns_record_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mechanisms\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"all\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SPFAllDirective\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dns_record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DNSRecord\",\"nativeType\":null,\"relationName\":\"DNSRecordToSPFRecord\",\"relationFromFields\":[\"dns_record_id\",\"domain_id\"],\"relationToFields\":[\"id\",\"domain_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"dns_record_id\",\"domain_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"dns_record_id\",\"domain_id\"]}],\"isGenerated\":false},\"DKIMRecord\":{\"dbName\":\"dkim_records\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dns_record_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"public_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"rsa\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dns_record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DNSRecord\",\"nativeType\":null,\"relationName\":\"DKIMRecordToDNSRecord\",\"relationFromFields\":[\"dns_record_id\",\"domain_id\"],\"relationToFields\":[\"id\",\"domain_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"dns_record_id\",\"domain_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"dns_record_id\",\"domain_id\"]}],\"isGenerated\":false},\"DMARCRecord\":{\"dbName\":\"dmarc_records\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dns_record_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"policy\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DMARCPolicy\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subdomain_policy\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DMARCPolicy\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"percentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"report_format\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"report_interval\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":86400,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"report_uris\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dns_record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DNSRecord\",\"nativeType\":null,\"relationName\":\"DMARCRecordToDNSRecord\",\"relationFromFields\":[\"dns_record_id\",\"domain_id\"],\"relationToFields\":[\"id\",\"domain_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"dns_record_id\",\"domain_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"dns_record_id\",\"domain_id\"]}],\"isGenerated\":false},\"EmailServer\":{\"dbName\":\"email_servers\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"host\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"port\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_secure\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_system_managed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmailServerType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smtp_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SMTPStatus\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_config_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_config\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TenantConfiguration\",\"nativeType\":null,\"relationName\":\"EmailServerToTenantConfiguration\",\"relationFromFields\":[\"tenant_config_id\",\"tenant_id\"],\"relationToFields\":[\"id\",\"tenant_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"server_type\",\"host\",\"username\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"server_type\",\"host\",\"username\"]}],\"isGenerated\":false},\"ApiKey\":{\"dbName\":\"api_keys\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_used_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_config_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_config\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TenantConfiguration\",\"nativeType\":null,\"relationName\":\"ApiKeyToTenantConfiguration\",\"relationFromFields\":[\"tenant_config_id\",\"tenant_id\"],\"relationToFields\":[\"id\",\"tenant_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":\"users\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"dbName\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interview_attendies_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mentions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommentMention\",\"nativeType\":null,\"relationName\":\"CommentMentionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Document\",\"nativeType\":null,\"relationName\":\"DocumentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"folders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Folder\",\"nativeType\":null,\"relationName\":\"FolderToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserAddress\",\"nativeType\":null,\"relationName\":\"UserToUserAddress\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"devices\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserDevice\",\"nativeType\":null,\"relationName\":\"UserToUserDevice\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_group_member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGroupMember\",\"nativeType\":null,\"relationName\":\"UserToUserGroupMember\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interview_attendees\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"IntInterviewAttendees\",\"nativeType\":null,\"relationName\":\"internal_attendees\",\"relationFromFields\":[\"interview_attendies_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shared_documents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Document\",\"nativeType\":null,\"relationName\":\"DocumentSharedWithUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"first_name\",\"last_name\",\"username\",\"email\"],[\"id\",\"email\",\"first_name\",\"last_name\"],[\"id\",\"first_name\",\"last_name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"first_name\",\"last_name\",\"username\",\"email\"]},{\"name\":null,\"fields\":[\"id\",\"email\",\"first_name\",\"last_name\"]},{\"name\":null,\"fields\":[\"id\",\"first_name\",\"last_name\"]}],\"isGenerated\":false},\"UserAddress\":{\"dbName\":\"user_addresses\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"short_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"system\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"system\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserToUserAddress\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"country\",\"short_code\",\"state\",\"city\",\"zip\",\"user_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"country\",\"short_code\",\"state\",\"city\",\"zip\",\"user_id\"]}],\"isGenerated\":false},\"UserDevice\":{\"dbName\":\"user_devices\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unique_device_signature\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_accessed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_accessed_from_location_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"device_metadata\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_device_locations_user_device_locations_device_id_user_idTouser_devices\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserDeviceLocation\",\"nativeType\":null,\"relationName\":\"user_device_locations_device_id_user_idTouser_devices\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_device_locations_user_devices_last_accessed_from_location_idTouser_device_locations\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserDeviceLocation\",\"nativeType\":null,\"relationName\":\"user_devices_last_accessed_from_location_idTouser_device_locations\",\"relationFromFields\":[\"last_accessed_from_location_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserToUserDevice\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"unique_device_signature\",\"user_id\"],[\"id\",\"user_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"unique_device_signature\",\"user_id\"]},{\"name\":null,\"fields\":[\"id\",\"user_id\"]}],\"isGenerated\":false},\"UserDeviceLocation\":{\"dbName\":\"user_device_locations\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"long\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"device_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_devices_user_device_locations_device_id_user_idTouser_devices\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserDevice\",\"nativeType\":null,\"relationName\":\"user_device_locations_device_id_user_idTouser_devices\",\"relationFromFields\":[\"device_id\",\"user_id\"],\"relationToFields\":[\"id\",\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_devices_user_devices_last_accessed_from_location_idTouser_device_locations\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserDevice\",\"nativeType\":null,\"relationName\":\"user_devices_last_accessed_from_location_idTouser_device_locations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"device_id\",\"user_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"device_id\",\"user_id\"]}],\"isGenerated\":false},\"AuditLog\":{\"dbName\":\"audit_logs\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Policy\":{\"dbName\":\"policies\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rules\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PolicyStatus\",\"nativeType\":null,\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"parent_policy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Policy\",\"nativeType\":null,\"relationName\":\"PolicyHierarchy\",\"relationFromFields\":[\"parent_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"child_policies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Policy\",\"nativeType\":null,\"relationName\":\"PolicyHierarchy\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"tenant_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenant_id\",\"name\"]}],\"isGenerated\":false},\"GroupTemplate\":{\"dbName\":\"group_templates\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attributes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"groups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Group\",\"nativeType\":null,\"relationName\":\"GroupToGroupTemplate\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Group\":{\"dbName\":\"groups\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"policies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GroupPolicy\",\"nativeType\":null,\"relationName\":\"GroupToGroupPolicy\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Group\",\"nativeType\":null,\"relationName\":\"GroupHierarchy\",\"relationFromFields\":[\"parent_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"children\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Group\",\"nativeType\":null,\"relationName\":\"GroupHierarchy\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GroupTemplate\",\"nativeType\":null,\"relationName\":\"GroupToGroupTemplate\",\"relationFromFields\":[\"template_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_groups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGroup\",\"nativeType\":null,\"relationName\":\"GroupToUserGroup\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserGroup\":{\"dbName\":\"user_groups\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"policies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GroupPolicy\",\"nativeType\":null,\"relationName\":\"GroupPolicyToUserGroup\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGroupMember\",\"nativeType\":null,\"relationName\":\"UserGroupToUserGroupMember\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Group\",\"nativeType\":null,\"relationName\":\"GroupToUserGroup\",\"relationFromFields\":[\"group_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserGroupMember\":{\"dbName\":\"user_group_members\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGroup\",\"nativeType\":null,\"relationName\":\"UserGroupToUserGroupMember\",\"relationFromFields\":[\"user_group_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserToUserGroupMember\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"user_group_id\",\"user_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"user_group_id\",\"user_id\"]}],\"isGenerated\":false},\"GroupPolicy\":{\"dbName\":\"group_policies\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"configuration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Group\",\"nativeType\":null,\"relationName\":\"GroupToGroupPolicy\",\"relationFromFields\":[\"group_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGroup\",\"nativeType\":null,\"relationName\":\"GroupPolicyToUserGroup\",\"relationFromFields\":[\"user_group_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TenantUsageMetric\":{\"dbName\":\"tenant_usage_metrics\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resource_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"module_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feature_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"context\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MessageType\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageSource\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sources\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Source\",\"nativeType\":null,\"relationName\":\"MessageTypeToSource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Source\":{\"dbName\":\"sources\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageToSource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageType\",\"nativeType\":null,\"relationName\":\"MessageTypeToSource\",\"relationFromFields\":[\"type_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Message\":{\"dbName\":\"messages\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ms_message_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subject\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sender_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sender_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"received_date_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sent_date_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body_preview\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipients\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cc_recipients\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcc_recipients\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reply_to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"has_attachments\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isArchived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRead\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isStarred\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Source\",\"nativeType\":null,\"relationName\":\"MessageToSource\",\"relationFromFields\":[\"source_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"folders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FolderMessage\",\"nativeType\":null,\"relationName\":\"FolderMessageToMessage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MessageCompanyRelation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageCompanyRelation\",\"nativeType\":null,\"relationName\":\"MessageToMessageCompanyRelation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MessageCompanyRelation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relevance_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"match_reasons\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageToMessageCompanyRelation\",\"relationFromFields\":[\"message_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Company\",\"nativeType\":null,\"relationName\":\"CompanyToMessageCompanyRelation\",\"relationFromFields\":[\"company_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Attachment\":{\"dbName\":\"attachments\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver_emails\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sender_emails\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ms_message_id\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"document_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"normalized_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content_full\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"document_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"document\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Document\",\"nativeType\":null,\"relationName\":\"AttachmentToDocument\",\"relationFromFields\":[\"document_id\",\"document_url\",\"content_hash\",\"normalized_content\",\"content\",\"content_full\"],\"relationToFields\":[\"id\",\"url\",\"content_hash\",\"normalized_content\",\"content\",\"content_full\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"document_id\",\"document_url\",\"content_hash\",\"normalized_content\",\"content\",\"content_full\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"document_id\",\"document_url\",\"content_hash\",\"normalized_content\",\"content\",\"content_full\"]}],\"isGenerated\":false},\"Document\":{\"dbName\":\"documents\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_attachment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_extension\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mime_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"charset\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content_full\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keywords\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"normalized_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preview_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"page_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_confidential\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classification\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DocumentClassification\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploaded_by_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploaded_by_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploaded_by_first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploaded_by_last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploaded_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"view_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"download_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_viewed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_edited\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"attachment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Attachment\",\"nativeType\":null,\"relationName\":\"AttachmentToDocument\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploaded_by\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"DocumentToUser\",\"relationFromFields\":[\"uploaded_by_id\",\"uploaded_by_email\",\"uploaded_by_first_name\",\"uploaded_by_last_name\"],\"relationToFields\":[\"id\",\"email\",\"first_name\",\"last_name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Position\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Position\",\"nativeType\":null,\"relationName\":\"position_to_jd_document\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shared_with\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"DocumentSharedWithUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"url\",\"content_hash\",\"normalized_content\",\"content\",\"content_full\"],[\"id\",\"filename\",\"mime_type\",\"url\",\"thumbnail\",\"classification\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"url\",\"content_hash\",\"normalized_content\",\"content\",\"content_full\"]},{\"name\":null,\"fields\":[\"id\",\"filename\",\"mime_type\",\"url\",\"thumbnail\",\"classification\"]}],\"isGenerated\":false},\"Folder\":{\"dbName\":\"folders\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"FolderType\",\"nativeType\":null,\"default\":\"INCOMING_FOLDER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color_hex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"FolderToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"key\"],[\"user_id\",\"key\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"key\"]},{\"name\":null,\"fields\":[\"user_id\",\"key\"]}],\"isGenerated\":false},\"FolderMessage\":{\"dbName\":\"folder_messages\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"folder_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"FolderMessageToMessage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"folder_key\",\"user_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"folder_key\",\"user_id\"]}],\"isGenerated\":false},\"Thread\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread_context_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"context_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread_summary_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message_db_ids\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ms_message_id\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"thread_context\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ThreadContext\",\"nativeType\":null,\"relationName\":\"ThreadToThreadContext\",\"relationFromFields\":[\"thread_context_id\",\"context_hash\"],\"relationToFields\":[\"id\",\"context_hash\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread_summary\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ThreadSummary\",\"nativeType\":null,\"relationName\":\"ThreadToThreadSummary\",\"relationFromFields\":[\"thread_summary_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread_messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ThreadMessage\",\"nativeType\":null,\"relationName\":\"ThreadToThreadMessage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"participants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ThreadParticipants\",\"nativeType\":null,\"relationName\":\"ThreadToThreadParticipants\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"thread_context_id\",\"context_hash\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"thread_context_id\",\"context_hash\"]}],\"isGenerated\":false},\"ThreadMessage\":{\"dbName\":\"thread_messages\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ms_conversation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message_db_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ms_message_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_db_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"child_db_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"child_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_root\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"thread_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Thread\",\"nativeType\":null,\"relationName\":\"ThreadToThreadMessage\",\"relationFromFields\":[\"thread_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ThreadSummary\":{\"dbName\":\"thread_summary\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message_db_ids\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ms_message_id\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"threads\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Thread\",\"nativeType\":null,\"relationName\":\"ThreadToThreadSummary\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ThreadParticipants\":{\"dbName\":\"thread_participants\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_internal_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threads\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Thread\",\"nativeType\":null,\"relationName\":\"ThreadToThreadParticipants\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ThreadContext\":{\"dbName\":\"thread_context\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"context_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"context\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Thread\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Thread\",\"nativeType\":null,\"relationName\":\"ThreadToThreadContext\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"context_history\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ThreadContextHistory\",\"nativeType\":null,\"relationName\":\"ThreadContextToThreadContextHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"context_hash\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"context_hash\"]}],\"isGenerated\":false},\"ThreadContextHistory\":{\"dbName\":\"thread_context_history\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"context\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"thread_context_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread_context\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ThreadContext\",\"nativeType\":null,\"relationName\":\"ThreadContextToThreadContextHistory\",\"relationFromFields\":[\"thread_context_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"context_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ThreadContextItems\",\"nativeType\":null,\"relationName\":\"ThreadContextHistoryToThreadContextItems\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ThreadContextItems\":{\"dbName\":\"thread_context_items\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"context\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organization\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submission\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread_context_history_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread_context_history\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ThreadContextHistory\",\"nativeType\":null,\"relationName\":\"ThreadContextHistoryToThreadContextItems\",\"relationFromFields\":[\"thread_context_history_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Conversation\":{\"dbName\":\"conversations\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threads\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"conversation_topic\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ConversationTopic\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmailActionHistory\":{\"dbName\":\"email_action_history\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_taken_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requires_follow_up\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_action_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thread_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_action\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmailActionHistory\",\"nativeType\":null,\"relationName\":\"NextAction\",\"relationFromFields\":[\"next_action_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previous_action\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmailActionHistory\",\"nativeType\":null,\"relationName\":\"NextAction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Lead\":{\"dbName\":\"leads\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"person_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"linkedin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revenue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"industry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lead_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_sent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_opened\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_pending\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_processed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"has_organization\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"has_positions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"retry_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_stuck\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Company\",\"nativeType\":null,\"relationName\":\"CompanyToLead\",\"relationFromFields\":[\"company_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Oppurtunity\":{\"dbName\":\"oppurtunities\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Deal\":{\"dbName\":\"deals\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Agreement\":{\"dbName\":\"agreements\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Company\":{\"dbName\":\"companies\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revenue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"industry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organization_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"careers_page\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"linkedin_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"raw_body\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"research_analyst\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recruiter_assignee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_rel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyStatus\",\"nativeType\":null,\"relationName\":\"CompanyToCompanyStatus\",\"relationFromFields\":[\"status\"],\"relationToFields\":[\"value\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contacts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contact\",\"nativeType\":null,\"relationName\":\"CompanyToContact\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Lead\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lead\",\"nativeType\":null,\"relationName\":\"CompanyToLead\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Position\",\"nativeType\":null,\"relationName\":\"CompanyToPosition\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MessageCompanyRelation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageCompanyRelation\",\"nativeType\":null,\"relationName\":\"CompanyToMessageCompanyRelation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"is_deleted\",\"name\",\"status\"],[\"id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"is_deleted\",\"name\",\"status\"]},{\"name\":null,\"fields\":[\"id\",\"name\"]}],\"isGenerated\":false},\"CompanyStatus\":{\"dbName\":\"company_status_multi_select\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"company_status\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color_hex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"system\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Company\",\"nativeType\":null,\"relationName\":\"CompanyToCompanyStatus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Contact\":{\"dbName\":\"contacts\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"linkedin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apollo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"linkedin_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"photo_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organization_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departments\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subdepartments\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seniority\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"functions\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"raw_body\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Company\",\"nativeType\":null,\"relationName\":\"CompanyToContact\",\"relationFromFields\":[\"company_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pocs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"POC\",\"nativeType\":null,\"relationName\":\"ContactToPOC\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"full_name\"],[\"id\",\"job_title\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"full_name\"]},{\"name\":null,\"fields\":[\"id\",\"job_title\"]}],\"isGenerated\":false},\"POC\":{\"dbName\":\"pocs\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact_role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"contact\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contact\",\"nativeType\":null,\"relationName\":\"ContactToPOC\",\"relationFromFields\":[\"contact_id\",\"contact_role\"],\"relationToFields\":[\"id\",\"job_title\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Position\",\"nativeType\":null,\"relationName\":\"POCToPosition\",\"relationFromFields\":[\"position_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"position_id\",\"contact_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"position_id\",\"contact_id\"]}],\"isGenerated\":false},\"Position\":{\"dbName\":\"positions\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_company_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_zip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jd_attachment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jd_filename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jd_file_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jd_thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jd_classification\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"DocumentClassification\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jd_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jd_link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recruiter_bdm_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recruiter_assignee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apollo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salary_range\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateSubmission\",\"nativeType\":null,\"relationName\":\"CandidateSubmissionToPosition\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pocs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"POC\",\"nativeType\":null,\"relationName\":\"POCToPosition\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Company\",\"nativeType\":null,\"relationName\":\"CompanyToPosition\",\"relationFromFields\":[\"company_id\",\"is_company_deleted\",\"company_name\",\"company_status\"],\"relationToFields\":[\"id\",\"is_deleted\",\"name\",\"status\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jd_attachment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Document\",\"nativeType\":null,\"relationName\":\"position_to_jd_document\",\"relationFromFields\":[\"jd_attachment_id\",\"jd_filename\",\"jd_file_type\",\"jd_link\",\"jd_thumbnail\",\"jd_classification\"],\"relationToFields\":[\"id\",\"filename\",\"mime_type\",\"url\",\"thumbnail\",\"classification\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobRole\",\"nativeType\":null,\"relationName\":\"JobRoleToPosition\",\"relationFromFields\":[\"job_role_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relevant_keywords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Keyword\",\"nativeType\":null,\"relationName\":\"position_to_keywords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"title\"],[\"id\",\"company_id\",\"is_deleted\",\"is_company_deleted\",\"company_name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"title\"]},{\"name\":null,\"fields\":[\"id\",\"company_id\",\"is_deleted\",\"is_company_deleted\",\"company_name\"]}],\"isGenerated\":false},\"IntInterviewAttendees\":{\"dbName\":\"interview_attendees\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_external_attendees\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interviews\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Interview\",\"nativeType\":null,\"relationName\":\"IntInterviewAttendeesToInterview\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_internal_attendees\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"internal_attendees\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Interview\":{\"dbName\":\"interviews\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"host_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"host_user_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attendees_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"outlook_calendar_event\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interview_subject\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feedback\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submission_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timezone_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interview_mode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"system\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attendees\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"IntInterviewAttendees\",\"nativeType\":null,\"relationName\":\"IntInterviewAttendeesToInterview\",\"relationFromFields\":[\"attendees_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feedback_rel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InterviewFeedback\",\"nativeType\":null,\"relationName\":\"InterviewToInterviewFeedback\",\"relationFromFields\":[\"feedback\"],\"relationToFields\":[\"value\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interview_mode_rel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InterviewMode\",\"nativeType\":null,\"relationName\":\"InterviewToInterviewMode\",\"relationFromFields\":[\"interview_mode\"],\"relationToFields\":[\"value\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submission\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateSubmission\",\"nativeType\":null,\"relationName\":\"CandidateSubmissionToInterview\",\"relationFromFields\":[\"submission_id\",\"candidate_id\",\"position_id\"],\"relationToFields\":[\"id\",\"candidate_id\",\"position_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timezone\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Timezone\",\"nativeType\":null,\"relationName\":\"InterviewToTimezone\",\"relationFromFields\":[\"timezone_key\"],\"relationToFields\":[\"key\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Timezone\":{\"dbName\":\"timezones\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"FrontendFieldTypes\",\"nativeType\":null,\"default\":\"SINGLE_SELECT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"company_status\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color_hex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"system\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Interview\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Interview\",\"nativeType\":null,\"relationName\":\"InterviewToTimezone\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InterviewFeedback\":{\"dbName\":\"interview_feedbacks\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"FrontendFieldTypes\",\"nativeType\":null,\"default\":\"SINGLE_SELECT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"company_status\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color_hex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"system\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Interview\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Interview\",\"nativeType\":null,\"relationName\":\"InterviewToInterviewFeedback\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InterviewMode\":{\"dbName\":\"interview_modes\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"FrontendFieldTypes\",\"nativeType\":null,\"default\":\"SINGLE_SELECT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"company_status\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color_hex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"system\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Interview\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Interview\",\"nativeType\":null,\"relationName\":\"InterviewToInterviewMode\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Attribute\":{\"dbName\":\"attributes\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"dbName\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_attributes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserAttribute\",\"nativeType\":null,\"relationName\":\"AttributeToUserAttribute\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserAttribute\":{\"dbName\":\"user_attributes\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"dbName\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Attribute\",\"nativeType\":null,\"relationName\":\"AttributeToUserAttribute\",\"relationFromFields\":[\"attribute_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"user_id\",\"attribute_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"user_id\",\"attribute_id\"]}],\"isGenerated\":false},\"Note\":{\"dbName\":\"notes\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table_id\",\"dbName\":\"table_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_id\",\"dbName\":\"field_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_private\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CandidateSubmission\":{\"dbName\":\"candidate_submissions\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submitted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submitted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate_full_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_position_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_company_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Candidate\",\"nativeType\":null,\"relationName\":\"CandidateToCandidateSubmission\",\"relationFromFields\":[\"candidate_id\",\"candidate_full_name\"],\"relationToFields\":[\"id\",\"candidate_full_name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Position\",\"nativeType\":null,\"relationName\":\"CandidateSubmissionToPosition\",\"relationFromFields\":[\"position_id\",\"company_id\",\"is_position_deleted\",\"is_company_deleted\",\"company_name\"],\"relationToFields\":[\"id\",\"company_id\",\"is_deleted\",\"is_company_deleted\",\"company_name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_rel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateSubmissionStatus\",\"nativeType\":null,\"relationName\":\"CandidateSubmissionToCandidateSubmissionStatus\",\"relationFromFields\":[\"status\"],\"relationToFields\":[\"value\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Interview\",\"nativeType\":null,\"relationName\":\"CandidateSubmissionToInterview\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"candidate_id\",\"position_id\"],[\"id\",\"candidate_id\",\"position_id\"],[\"id\",\"candidate_id\",\"position_id\",\"candidate_full_name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"candidate_id\",\"position_id\"]},{\"name\":null,\"fields\":[\"id\",\"candidate_id\",\"position_id\"]},{\"name\":null,\"fields\":[\"id\",\"candidate_id\",\"position_id\",\"candidate_full_name\"]}],\"isGenerated\":false},\"CandidateSubmissionStatus\":{\"dbName\":\"candidate_submission_status\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"company_status\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color_hex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"system\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CandidateSubmission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateSubmission\",\"nativeType\":null,\"relationName\":\"CandidateSubmissionToCandidateSubmissionStatus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BooleanString\":{\"dbName\":\"boolean_strings\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"string\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upvote\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"downvote\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entity_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entity_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BooleanStringEntityType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Location\":{\"dbName\":\"locations\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"short_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate_locations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Candidate\",\"nativeType\":null,\"relationName\":\"CandidateToLocation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"city\",\"state\",\"country\",\"zip\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"city\",\"state\",\"country\",\"zip\"]}],\"isGenerated\":false},\"PersonalInformation\":{\"dbName\":\"personal_information\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"linkedin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"github\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_string\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_of_residence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city_of_residence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state_of_residence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"age\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_us_citizen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Candidate\",\"nativeType\":null,\"relationName\":\"CandidateToPersonalInformation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"full_name\",\"email\"],[\"id\",\"full_name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"full_name\",\"email\"]},{\"name\":null,\"fields\":[\"id\",\"full_name\"]}],\"isGenerated\":false},\"Candidate\":{\"dbName\":\"candidates\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_remote\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_work_experience\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"search_location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resume_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"personal_information_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sourced_from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate_full_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bdm_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateSubmission\",\"nativeType\":null,\"relationName\":\"CandidateToCandidateSubmission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"nativeType\":null,\"relationName\":\"CandidateToLocation\",\"relationFromFields\":[\"location_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"personal_information\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PersonalInformation\",\"nativeType\":null,\"relationName\":\"CandidateToPersonalInformation\",\"relationFromFields\":[\"personal_information_id\",\"candidate_full_name\"],\"relationToFields\":[\"id\",\"full_name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateSourceOptions\",\"nativeType\":null,\"relationName\":\"CandidateToCandidateSourceOptions\",\"relationFromFields\":[\"sourced_from\"],\"relationToFields\":[\"value\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"certifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Certification\",\"nativeType\":null,\"relationName\":\"CandidateToCertification\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"education\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Education\",\"nativeType\":null,\"relationName\":\"CandidateToEducation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"License\",\"nativeType\":null,\"relationName\":\"CandidateToLicense\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"possible_job_roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PossibleJobRole\",\"nativeType\":null,\"relationName\":\"CandidateToPossibleJobRole\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"work_experiences\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkExperience\",\"nativeType\":null,\"relationName\":\"CandidateToWorkExperience\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relevant_keywords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Keyword\",\"nativeType\":null,\"relationName\":\"candidate_to_keywords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"personal_information_id\",\"candidate_full_name\"],[\"id\",\"candidate_full_name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"personal_information_id\",\"candidate_full_name\"]},{\"name\":null,\"fields\":[\"id\",\"candidate_full_name\"]}],\"isGenerated\":false},\"CandidateSourceOptions\":{\"dbName\":\"candidate_source_options\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"company_status\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color_hex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"system\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Candidate\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Candidate\",\"nativeType\":null,\"relationName\":\"CandidateToCandidateSourceOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Education\":{\"dbName\":\"education\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"secondary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"graduation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_graduation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Candidate\",\"nativeType\":null,\"relationName\":\"CandidateToEducation\",\"relationFromFields\":[\"candidate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Certification\":{\"dbName\":\"certifications\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name_of_certification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institution\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Candidate\",\"nativeType\":null,\"relationName\":\"CandidateToCertification\",\"relationFromFields\":[\"candidate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relevant_keywords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Keyword\",\"nativeType\":null,\"relationName\":\"certification_to_keywords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"JobRole\":{\"dbName\":\"job_roles\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title_display\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title_normalized\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_role_description_detailed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Position\",\"nativeType\":null,\"relationName\":\"JobRoleToPosition\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"experienced_candidates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkExperience\",\"nativeType\":null,\"relationName\":\"JobRoleToWorkExperience\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relevant_keywords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Keyword\",\"nativeType\":null,\"relationName\":\"job_role_to_keywords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"title_normalized\",\"title_display\",\"job_role_description_detailed\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"title_normalized\",\"title_display\",\"job_role_description_detailed\"]}],\"isGenerated\":false},\"WorkExperience\":{\"dbName\":\"work_experiences\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organization_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_present\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_month_year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_month_year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Candidate\",\"nativeType\":null,\"relationName\":\"CandidateToWorkExperience\",\"relationFromFields\":[\"candidate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobRole\",\"nativeType\":null,\"relationName\":\"JobRoleToWorkExperience\",\"relationFromFields\":[\"job_role_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"License\":{\"dbName\":\"licenses\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Candidate\",\"nativeType\":null,\"relationName\":\"CandidateToLicense\",\"relationFromFields\":[\"candidate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relevant_keywords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Keyword\",\"nativeType\":null,\"relationName\":\"license_to_keywords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Keyword\":{\"dbName\":\"keywords\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"term\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"term_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"normalized_term\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TermCategory\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"term_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TermType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relevant_candidates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Candidate\",\"nativeType\":null,\"relationName\":\"candidate_to_keywords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relevant_certifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Certification\",\"nativeType\":null,\"relationName\":\"certification_to_keywords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relevant_job_roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobRole\",\"nativeType\":null,\"relationName\":\"job_role_to_keywords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relevant_licences\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"License\",\"nativeType\":null,\"relationName\":\"license_to_keywords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relevant_positions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Position\",\"nativeType\":null,\"relationName\":\"position_to_keywords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PossibleJobRole\":{\"dbName\":\"possible_job_roles\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidate\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Candidate\",\"nativeType\":null,\"relationName\":\"CandidateToPossibleJobRole\",\"relationFromFields\":[\"candidate_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Comment\":{\"dbName\":\"comments\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table_name\",\"dbName\":\"table_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"dbName\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"record_id\",\"dbName\":\"record_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"dbName\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_by\",\"dbName\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"dbName\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_deleted\",\"dbName\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"dbName\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mentions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommentMention\",\"nativeType\":null,\"relationName\":\"CommentToCommentMention\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Comment\",\"nativeType\":null,\"relationName\":\"parentComment\",\"relationFromFields\":[\"parent_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Comment\",\"nativeType\":null,\"relationName\":\"parentComment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CommentMention\":{\"dbName\":\"comment_mentions\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_id\",\"dbName\":\"comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tagged_user_id\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Comment\",\"nativeType\":null,\"relationName\":\"CommentToCommentMention\",\"relationFromFields\":[\"comment_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tagged_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"CommentMentionToUser\",\"relationFromFields\":[\"tagged_user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"comment_id\",\"tagged_user_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"comment_id\",\"tagged_user_id\"]}],\"isGenerated\":false},\"Task\":{\"dbName\":\"tasks\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TaskStatus\",\"nativeType\":null,\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Priority\",\"nativeType\":null,\"default\":\"MEDIUM\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"due_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"last_updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reminders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reminder\",\"nativeType\":null,\"relationName\":\"ReminderToTask\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Task\",\"nativeType\":null,\"relationName\":\"TaskHierarchy\",\"relationFromFields\":[\"parent_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtasks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Task\",\"nativeType\":null,\"relationName\":\"TaskHierarchy\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reminder\":{\"dbName\":\"reminders\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"task_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remind_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_sent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sent_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"task\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Task\",\"nativeType\":null,\"relationName\":\"ReminderToTask\",\"relationFromFields\":[\"task_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"AuthStrategy\":{\"values\":[{\"name\":\"API_KEY\",\"dbName\":null},{\"name\":\"OAUTH2\",\"dbName\":null},{\"name\":\"EMAIL_PASSWORD\",\"dbName\":null},{\"name\":\"CERTIFICATE\",\"dbName\":null},{\"name\":\"CUSTOM_TOKEN\",\"dbName\":null},{\"name\":\"JWT\",\"dbName\":null},{\"name\":\"BASIC_AUTH\",\"dbName\":null}],\"dbName\":null},\"IntegrationCategory\":{\"values\":[{\"name\":\"ANALYTICS\",\"dbName\":null},{\"name\":\"BILLING\",\"dbName\":null},{\"name\":\"COMMUNICATION\",\"dbName\":null},{\"name\":\"DATA_ENRICHMENT\",\"dbName\":null},{\"name\":\"AI_SERVICES\",\"dbName\":null},{\"name\":\"CUSTOM\",\"dbName\":null}],\"dbName\":null},\"IntegrationName\":{\"values\":[{\"name\":\"LAGO\",\"dbName\":null},{\"name\":\"OPENMETER\",\"dbName\":null},{\"name\":\"FLUENTD\",\"dbName\":null},{\"name\":\"LOKI\",\"dbName\":null},{\"name\":\"STRIPE\",\"dbName\":null},{\"name\":\"APOLLO\",\"dbName\":null},{\"name\":\"OPENAI\",\"dbName\":null},{\"name\":\"ZOOMINFO\",\"dbName\":null},{\"name\":\"MAILCOW\",\"dbName\":null},{\"name\":\"MSGRAPH\",\"dbName\":null},{\"name\":\"SENDGRID\",\"dbName\":null},{\"name\":\"AIRTABLE\",\"dbName\":null},{\"name\":\"CUSTOM\",\"dbName\":null}],\"dbName\":null},\"ConfigStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"INACTIVE\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null}],\"dbName\":null},\"MetricType\":{\"values\":[{\"name\":\"API_CALLS\",\"dbName\":null},{\"name\":\"DATA_TRANSFER\",\"dbName\":null},{\"name\":\"STORAGE\",\"dbName\":null},{\"name\":\"PROCESSING_TIME\",\"dbName\":null},{\"name\":\"CUSTOM\",\"dbName\":null}],\"dbName\":null},\"NotificationType\":{\"values\":[{\"name\":\"USAGE_THRESHOLD\",\"dbName\":null},{\"name\":\"RATE_LIMIT\",\"dbName\":null},{\"name\":\"ERROR\",\"dbName\":null},{\"name\":\"STATUS_CHANGE\",\"dbName\":null},{\"name\":\"CUSTOM\",\"dbName\":null}],\"dbName\":null},\"FrontendFieldTypes\":{\"values\":[{\"name\":\"DATE\",\"dbName\":null},{\"name\":\"DATE_TIME\",\"dbName\":null},{\"name\":\"SHORT_TEXT\",\"dbName\":null},{\"name\":\"LONG_TEXT\",\"dbName\":null},{\"name\":\"URL\",\"dbName\":null},{\"name\":\"EMAIL\",\"dbName\":null},{\"name\":\"PHONE\",\"dbName\":null},{\"name\":\"USER\",\"dbName\":null},{\"name\":\"ATTACHMENT\",\"dbName\":null},{\"name\":\"CHECKBOX\",\"dbName\":null},{\"name\":\"MUTLI_SELECT\",\"dbName\":null},{\"name\":\"SINGLE_SELECT\",\"dbName\":null},{\"name\":\"NUMBER\",\"dbName\":null},{\"name\":\"PERCENT\",\"dbName\":null},{\"name\":\"CURRENCY\",\"dbName\":null},{\"name\":\"ONE_TO_MANY\",\"dbName\":null},{\"name\":\"ONE_TO_ONE\",\"dbName\":null},{\"name\":\"GEOLOCATION\",\"dbName\":null}],\"dbName\":null},\"NotificationPriority\":{\"values\":[{\"name\":\"LOW\",\"dbName\":null},{\"name\":\"MEDIUM\",\"dbName\":null},{\"name\":\"HIGH\",\"dbName\":null},{\"name\":\"CRITICAL\",\"dbName\":null}],\"dbName\":null},\"DeliveryChannel\":{\"values\":[{\"name\":\"EMAIL\",\"dbName\":null},{\"name\":\"WEBHOOK\",\"dbName\":null},{\"name\":\"SYSTEM\",\"dbName\":null},{\"name\":\"CUSTOM\",\"dbName\":null}],\"dbName\":null},\"ExtUsageTrackingInterval\":{\"values\":[{\"name\":\"MINUTE\",\"dbName\":null},{\"name\":\"HOUR\",\"dbName\":null},{\"name\":\"DAY\",\"dbName\":null},{\"name\":\"WEEK\",\"dbName\":null},{\"name\":\"MONTH\",\"dbName\":null},{\"name\":\"QUARTER\",\"dbName\":null},{\"name\":\"YEAR\",\"dbName\":null}],\"dbName\":null},\"EmailServerType\":{\"values\":[{\"name\":\"SMTP\",\"dbName\":null},{\"name\":\"IMAP\",\"dbName\":null}],\"dbName\":null},\"DomainStatus\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"VERIFIED\",\"dbName\":null},{\"name\":\"SUSPENDED\",\"dbName\":null}],\"dbName\":null},\"DNSRecordType\":{\"values\":[{\"name\":\"A\",\"dbName\":null},{\"name\":\"AAAA\",\"dbName\":null},{\"name\":\"CNAME\",\"dbName\":null},{\"name\":\"MX\",\"dbName\":null},{\"name\":\"TXT\",\"dbName\":null},{\"name\":\"SPF\",\"dbName\":null},{\"name\":\"DKIM\",\"dbName\":null},{\"name\":\"DMARC\",\"dbName\":null}],\"dbName\":null},\"SPFAllDirective\":{\"values\":[{\"name\":\"PASS\",\"dbName\":null},{\"name\":\"NEUTRAL\",\"dbName\":null},{\"name\":\"SOFTFAIL\",\"dbName\":null},{\"name\":\"FAIL\",\"dbName\":null}],\"dbName\":null},\"DMARCPolicy\":{\"values\":[{\"name\":\"NONE\",\"dbName\":null},{\"name\":\"QUARANTINE\",\"dbName\":null},{\"name\":\"REJECT\",\"dbName\":null}],\"dbName\":null},\"SMTPStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"INACTIVE\",\"dbName\":null},{\"name\":\"PENDING_VERIFICATION\",\"dbName\":null}],\"dbName\":null},\"MailType\":{\"values\":[{\"name\":\"MAILCOW\",\"dbName\":null},{\"name\":\"SENDGRID\",\"dbName\":null},{\"name\":\"MICROSOFT_GRAPH_API\",\"dbName\":null}],\"dbName\":null},\"MessageSource\":{\"values\":[{\"name\":\"MS_GRAPH\",\"dbName\":null},{\"name\":\"MAILCOW\",\"dbName\":null},{\"name\":\"SG\",\"dbName\":null}],\"dbName\":null},\"PolicyStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"INACTIVE\",\"dbName\":null},{\"name\":\"ARCHIVED\",\"dbName\":null}],\"dbName\":null},\"DocumentClassification\":{\"values\":[{\"name\":\"SERVICE_AGREEMENT\",\"dbName\":null},{\"name\":\"JOB_DESCRIPTION\",\"dbName\":null},{\"name\":\"RESUME\",\"dbName\":null},{\"name\":\"CONTRACT\",\"dbName\":null},{\"name\":\"QUOTATION\",\"dbName\":null},{\"name\":\"INVOICE\",\"dbName\":null},{\"name\":\"RECEIPT\",\"dbName\":null},{\"name\":\"TAX_FORMS\",\"dbName\":null},{\"name\":\"IDENTITY_DOCUMENTS\",\"dbName\":null},{\"name\":\"WORK_PERMIT\",\"dbName\":null},{\"name\":\"VISA_DOCUMENTS\",\"dbName\":null},{\"name\":\"OFFER_LETTER\",\"dbName\":null},{\"name\":\"EMPLOYMENT_CONTRACT\",\"dbName\":null},{\"name\":\"MARKETING\",\"dbName\":null},{\"name\":\"IT\",\"dbName\":null},{\"name\":\"OTHER\",\"dbName\":null}],\"dbName\":null},\"FolderType\":{\"values\":[{\"name\":\"INCOMING_FOLDER\",\"dbName\":null},{\"name\":\"OUTGOING_FOLDER\",\"dbName\":null}],\"dbName\":null},\"ConversationTopic\":{\"values\":[{\"name\":\"INITIAL_CONTACT\",\"dbName\":null},{\"name\":\"POSITION_DESCRIPTION\",\"dbName\":null},{\"name\":\"JOB_DESCRIPTION\",\"dbName\":null},{\"name\":\"CANDIDATE_SUBMISSION\",\"dbName\":null},{\"name\":\"CANDIDATE_REVIEW\",\"dbName\":null},{\"name\":\"INTERVIEW\",\"dbName\":null},{\"name\":\"CONTRACT\",\"dbName\":null},{\"name\":\"EMPLOYMENT\",\"dbName\":null}],\"dbName\":null},\"RecipientType\":{\"values\":[{\"name\":\"CANDIDATE\",\"dbName\":null},{\"name\":\"INTERNAL_USER\",\"dbName\":null},{\"name\":\"CLIENT_CONTACT\",\"dbName\":null},{\"name\":\"EXTERNAL_USER\",\"dbName\":null}],\"dbName\":null},\"EmailActionType\":{\"values\":[{\"name\":\"REPLY\",\"dbName\":null},{\"name\":\"REQUEST_JD\",\"dbName\":null},{\"name\":\"REQUEST_RESUME\",\"dbName\":null},{\"name\":\"REQUEST_REVIEW\",\"dbName\":null},{\"name\":\"REQUEST_RESUME_REVIEW\",\"dbName\":null},{\"name\":\"REQUEST_DETAILS\",\"dbName\":null},{\"name\":\"REQUEST_FOLLOWUP\",\"dbName\":null},{\"name\":\"REQUEST_BENEFITS_DETAILS\",\"dbName\":null},{\"name\":\"REQUEST_EXPERIENCE_CERTIFICATE\",\"dbName\":null},{\"name\":\"REREQUEST_NEW_POSITION\",\"dbName\":null},{\"name\":\"FOLLOWUP\",\"dbName\":null},{\"name\":\"FORWARD\",\"dbName\":null},{\"name\":\"CHANGE_POC\",\"dbName\":null},{\"name\":\"SEND_CONTRACT\",\"dbName\":null},{\"name\":\"SCHEDULE_INTERVIEW\",\"dbName\":null},{\"name\":\"SEND_RESUME\",\"dbName\":null},{\"name\":\"SEND_OFFER_LETTER\",\"dbName\":null},{\"name\":\"SEND_JD\",\"dbName\":null},{\"name\":\"SALARY_NEGOTIATIONS\",\"dbName\":null},{\"name\":\"CONTRACT_NEGOTIATIONS\",\"dbName\":null},{\"name\":\"SUBMIT_CONTRACT_REVIEW\",\"dbName\":null},{\"name\":\"SUBMIT_RESUME_REVIEW\",\"dbName\":null}],\"dbName\":null},\"EmailTypes\":{\"values\":[{\"name\":\"MARKETING\",\"dbName\":null},{\"name\":\"TRANSACTIONAL\",\"dbName\":null},{\"name\":\"PROMOTIONAL\",\"dbName\":null},{\"name\":\"COLD_EMAIL_CAMPAIGN\",\"dbName\":null},{\"name\":\"FOLLOW_UP\",\"dbName\":null},{\"name\":\"AUTOMATED\",\"dbName\":null},{\"name\":\"NOTIFICATION\",\"dbName\":null}],\"dbName\":null},\"EmailStatus\":{\"values\":[{\"name\":\"DRAFT\",\"dbName\":null},{\"name\":\"QUEUED\",\"dbName\":null},{\"name\":\"SENT\",\"dbName\":null},{\"name\":\"FAILED\",\"dbName\":null},{\"name\":\"READ\",\"dbName\":null},{\"name\":\"UNREAD\",\"dbName\":null}],\"dbName\":null},\"CreditTypeEnum\":{\"values\":[{\"name\":\"API\",\"dbName\":null},{\"name\":\"EMAIL\",\"dbName\":null}],\"dbName\":null},\"BooleanStringEntityType\":{\"values\":[{\"name\":\"JobRole\",\"dbName\":null},{\"name\":\"Position\",\"dbName\":null}],\"dbName\":null},\"TermCategory\":{\"values\":[{\"name\":\"INDUSTRY\",\"dbName\":null},{\"name\":\"TECHNICAL_SKILL\",\"dbName\":null},{\"name\":\"SOFT_SKILL\",\"dbName\":null},{\"name\":\"ROLE_TITLE\",\"dbName\":null},{\"name\":\"RESPONSIBILITY\",\"dbName\":null},{\"name\":\"TOOL\",\"dbName\":null},{\"name\":\"CERTIFICATION\",\"dbName\":null},{\"name\":\"DOMAIN\",\"dbName\":null}],\"dbName\":null},\"TermType\":{\"values\":[{\"name\":\"NOUN\",\"dbName\":null},{\"name\":\"VERB\",\"dbName\":null},{\"name\":\"ADJECTIVE\",\"dbName\":null},{\"name\":\"COMPOUND\",\"dbName\":null}],\"dbName\":null},\"TaskStatus\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"IN_PROGRESS\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null}],\"dbName\":null},\"Priority\":{\"values\":[{\"name\":\"LOW\",\"dbName\":null},{\"name\":\"MEDIUM\",\"dbName\":null},{\"name\":\"HIGH\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma/generated/client-primary/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client-primary/schema.prisma")
