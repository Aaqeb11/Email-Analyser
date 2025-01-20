
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

exports.Prisma.AgreementsScalarFieldEnum = {
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

exports.Prisma.InterviewsScalarFieldEnum = {
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

exports.Prisma.Legacy_positionsScalarFieldEnum = {
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

exports.Prisma.OrganizationsScalarFieldEnum = {
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

exports.Prisma.PositionsScalarFieldEnum = {
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

exports.Prisma.SubmissionsScalarFieldEnum = {
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

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  agreements: 'agreements',
  interviews: 'interviews',
  legacy_positions: 'legacy_positions',
  organizations: 'organizations',
  positions: 'positions',
  submissions: 'submissions',
  users: 'users'
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
