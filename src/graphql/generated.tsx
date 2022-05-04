import gql from 'graphql-tag';
import * as React from 'react';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export interface Admin {
  __typename?: 'Admin';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
}

export interface AdminAuthenticationWithPasswordFailure {
  __typename?: 'AdminAuthenticationWithPasswordFailure';
  message: Scalars['String'];
}

export type AdminAuthenticationWithPasswordResult = AdminAuthenticationWithPasswordFailure | AdminAuthenticationWithPasswordSuccess;

export interface AdminAuthenticationWithPasswordSuccess {
  __typename?: 'AdminAuthenticationWithPasswordSuccess';
  item: Admin;
  sessionToken: Scalars['String'];
}

export interface AdminCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}

export interface AdminOrderByInput {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
}

export interface AdminUpdateArgs {
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
}

export interface AdminUpdateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}

export interface AdminWhereInput {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IDFilter>;
  name?: InputMaybe<StringFilter>;
}

export interface AdminWhereUniqueInput {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
}

export interface ApiKey {
  __typename?: 'ApiKey';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
}

export interface ApiKeyCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
}

export interface ApiKeyOrderByInput {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
}

export interface ApiKeyUpdateArgs {
  data: ApiKeyUpdateInput;
  where: ApiKeyWhereUniqueInput;
}

export interface ApiKeyUpdateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
}

export interface ApiKeyWhereInput {
  AND?: InputMaybe<Array<ApiKeyWhereInput>>;
  NOT?: InputMaybe<Array<ApiKeyWhereInput>>;
  OR?: InputMaybe<Array<ApiKeyWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IDFilter>;
}

export interface ApiKeyWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export type AuthenticatedItem = Admin;

export const enum AzureStorageImageExtension {
  GIF = 'gif',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
};

export interface AzureStorageImageFieldInput {
  ref?: InputMaybe<Scalars['String']>;
  upload?: InputMaybe<Scalars['Upload']>;
}

export interface AzureStorageImageFieldOutput {
  extension: AzureStorageImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
}

export interface AzureStorageImageFieldOutputType extends AzureStorageImageFieldOutput {
  __typename?: 'AzureStorageImageFieldOutputType';
  extension: AzureStorageImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
}

export interface CreateInitialAdminInput {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}

export interface DateTimeFilter {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
}

export interface DateTimeNullableFilter {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
}

export interface Education {
  __typename?: 'Education';
  certificate?: Maybe<Scalars['String']>;
  description?: Maybe<Education_description_Document>;
  id: Scalars['ID'];
  passed?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
}

export interface EducationCreateInput {
  certificate?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  passed?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface EducationOrderByInput {
  certificate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  passed?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
}

export interface EducationUpdateArgs {
  data: EducationUpdateInput;
  where: EducationWhereUniqueInput;
}

export interface EducationUpdateInput {
  certificate?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  passed?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface EducationWhereInput {
  AND?: InputMaybe<Array<EducationWhereInput>>;
  NOT?: InputMaybe<Array<EducationWhereInput>>;
  OR?: InputMaybe<Array<EducationWhereInput>>;
  certificate?: InputMaybe<StringFilter>;
  id?: InputMaybe<IDFilter>;
  passed?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
}

export interface EducationWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface Education_description_Document {
  __typename?: 'Education_description_Document';
  document: Scalars['JSON'];
}


export interface Education_description_DocumentdocumentArgs {
  hydrateRelationships?: Scalars['Boolean'];
}

export interface IDFilter {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IDFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
}

export interface Image {
  __typename?: 'Image';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  image?: Maybe<AzureStorageImageFieldOutput>;
  label?: Maybe<Scalars['String']>;
}

export interface ImageCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<AzureStorageImageFieldInput>;
  label?: InputMaybe<Scalars['String']>;
}

export interface ImageManyRelationFilter {
  every?: InputMaybe<ImageWhereInput>;
  none?: InputMaybe<ImageWhereInput>;
  some?: InputMaybe<ImageWhereInput>;
}

export interface ImageOrderByInput {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
}

export interface ImageRelateToManyForCreateInput {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ImageCreateInput>>;
}

export interface ImageRelateToManyForUpdateInput {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ImageCreateInput>>;
  disconnect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ImageWhereUniqueInput>>;
}

export interface ImageUpdateArgs {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
}

export interface ImageUpdateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<AzureStorageImageFieldInput>;
  label?: InputMaybe<Scalars['String']>;
}

export interface ImageWhereInput {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IDFilter>;
  label?: InputMaybe<StringFilter>;
}

export interface ImageWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface IntFilter {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
}

export interface KeystoneAdminMeta {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUIListMeta>;
  lists: Array<KeystoneAdminUIListMeta>;
}


export interface KeystoneAdminMetalistArgs {
  key: Scalars['String'];
}

export interface KeystoneAdminUIFieldMeta {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUIFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUIFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUIFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
}


export interface KeystoneAdminUIFieldMetaitemViewArgs {
  id?: InputMaybe<Scalars['ID']>;
}

export interface KeystoneAdminUIFieldMetaCreateView {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUIFieldMetaCreateViewFieldMode;
}

export const enum KeystoneAdminUIFieldMetaCreateViewFieldMode {
  EDIT = 'edit',
  HIDDEN = 'hidden'
};

export interface KeystoneAdminUIFieldMetaItemView {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUIFieldMetaItemViewFieldMode>;
}

export const enum KeystoneAdminUIFieldMetaItemViewFieldMode {
  EDIT = 'edit',
  HIDDEN = 'hidden',
  READ = 'read'
};

export interface KeystoneAdminUIFieldMetaListView {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUIFieldMetaListViewFieldMode;
}

export const enum KeystoneAdminUIFieldMetaListViewFieldMode {
  HIDDEN = 'hidden',
  READ = 'read'
};

export interface KeystoneAdminUIListMeta {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUIFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUISort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
}

export interface KeystoneAdminUISort {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUISortDirection;
  field: Scalars['String'];
}

export const enum KeystoneAdminUISortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
};

export interface KeystoneMeta {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
}

export interface Mutation {
  __typename?: 'Mutation';
  authenticateAdminWithPassword?: Maybe<AdminAuthenticationWithPasswordResult>;
  createAdmin?: Maybe<Admin>;
  createAdmins?: Maybe<Array<Maybe<Admin>>>;
  createApiKey?: Maybe<ApiKey>;
  createApiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  createEducation?: Maybe<Education>;
  createEducations?: Maybe<Array<Maybe<Education>>>;
  createImage?: Maybe<Image>;
  createImages?: Maybe<Array<Maybe<Image>>>;
  createInitialAdmin: AdminAuthenticationWithPasswordSuccess;
  createProject?: Maybe<Project>;
  createProjects?: Maybe<Array<Maybe<Project>>>;
  createService?: Maybe<Service>;
  createServices?: Maybe<Array<Maybe<Service>>>;
  createSkill?: Maybe<Skill>;
  createSkills?: Maybe<Array<Maybe<Skill>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  deleteAdmin?: Maybe<Admin>;
  deleteAdmins?: Maybe<Array<Maybe<Admin>>>;
  deleteApiKey?: Maybe<ApiKey>;
  deleteApiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  deleteEducation?: Maybe<Education>;
  deleteEducations?: Maybe<Array<Maybe<Education>>>;
  deleteImage?: Maybe<Image>;
  deleteImages?: Maybe<Array<Maybe<Image>>>;
  deleteProject?: Maybe<Project>;
  deleteProjects?: Maybe<Array<Maybe<Project>>>;
  deleteService?: Maybe<Service>;
  deleteServices?: Maybe<Array<Maybe<Service>>>;
  deleteSkill?: Maybe<Skill>;
  deleteSkills?: Maybe<Array<Maybe<Skill>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  endSession: Scalars['Boolean'];
  updateAdmin?: Maybe<Admin>;
  updateAdmins?: Maybe<Array<Maybe<Admin>>>;
  updateApiKey?: Maybe<ApiKey>;
  updateApiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  updateEducation?: Maybe<Education>;
  updateEducations?: Maybe<Array<Maybe<Education>>>;
  updateImage?: Maybe<Image>;
  updateImages?: Maybe<Array<Maybe<Image>>>;
  updateProject?: Maybe<Project>;
  updateProjects?: Maybe<Array<Maybe<Project>>>;
  updateService?: Maybe<Service>;
  updateServices?: Maybe<Array<Maybe<Service>>>;
  updateSkill?: Maybe<Skill>;
  updateSkills?: Maybe<Array<Maybe<Skill>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
}


export interface MutationauthenticateAdminWithPasswordArgs {
  email: Scalars['String'];
  password: Scalars['String'];
}


export interface MutationcreateAdminArgs {
  data: AdminCreateInput;
}


export interface MutationcreateAdminsArgs {
  data: Array<AdminCreateInput>;
}


export interface MutationcreateApiKeyArgs {
  data: ApiKeyCreateInput;
}


export interface MutationcreateApiKeysArgs {
  data: Array<ApiKeyCreateInput>;
}


export interface MutationcreateEducationArgs {
  data: EducationCreateInput;
}


export interface MutationcreateEducationsArgs {
  data: Array<EducationCreateInput>;
}


export interface MutationcreateImageArgs {
  data: ImageCreateInput;
}


export interface MutationcreateImagesArgs {
  data: Array<ImageCreateInput>;
}


export interface MutationcreateInitialAdminArgs {
  data: CreateInitialAdminInput;
}


export interface MutationcreateProjectArgs {
  data: ProjectCreateInput;
}


export interface MutationcreateProjectsArgs {
  data: Array<ProjectCreateInput>;
}


export interface MutationcreateServiceArgs {
  data: ServiceCreateInput;
}


export interface MutationcreateServicesArgs {
  data: Array<ServiceCreateInput>;
}


export interface MutationcreateSkillArgs {
  data: SkillCreateInput;
}


export interface MutationcreateSkillsArgs {
  data: Array<SkillCreateInput>;
}


export interface MutationcreateTagArgs {
  data: TagCreateInput;
}


export interface MutationcreateTagsArgs {
  data: Array<TagCreateInput>;
}


export interface MutationdeleteAdminArgs {
  where: AdminWhereUniqueInput;
}


export interface MutationdeleteAdminsArgs {
  where: Array<AdminWhereUniqueInput>;
}


export interface MutationdeleteApiKeyArgs {
  where: ApiKeyWhereUniqueInput;
}


export interface MutationdeleteApiKeysArgs {
  where: Array<ApiKeyWhereUniqueInput>;
}


export interface MutationdeleteEducationArgs {
  where: EducationWhereUniqueInput;
}


export interface MutationdeleteEducationsArgs {
  where: Array<EducationWhereUniqueInput>;
}


export interface MutationdeleteImageArgs {
  where: ImageWhereUniqueInput;
}


export interface MutationdeleteImagesArgs {
  where: Array<ImageWhereUniqueInput>;
}


export interface MutationdeleteProjectArgs {
  where: ProjectWhereUniqueInput;
}


export interface MutationdeleteProjectsArgs {
  where: Array<ProjectWhereUniqueInput>;
}


export interface MutationdeleteServiceArgs {
  where: ServiceWhereUniqueInput;
}


export interface MutationdeleteServicesArgs {
  where: Array<ServiceWhereUniqueInput>;
}


export interface MutationdeleteSkillArgs {
  where: SkillWhereUniqueInput;
}


export interface MutationdeleteSkillsArgs {
  where: Array<SkillWhereUniqueInput>;
}


export interface MutationdeleteTagArgs {
  where: TagWhereUniqueInput;
}


export interface MutationdeleteTagsArgs {
  where: Array<TagWhereUniqueInput>;
}


export interface MutationupdateAdminArgs {
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
}


export interface MutationupdateAdminsArgs {
  data: Array<AdminUpdateArgs>;
}


export interface MutationupdateApiKeyArgs {
  data: ApiKeyUpdateInput;
  where: ApiKeyWhereUniqueInput;
}


export interface MutationupdateApiKeysArgs {
  data: Array<ApiKeyUpdateArgs>;
}


export interface MutationupdateEducationArgs {
  data: EducationUpdateInput;
  where: EducationWhereUniqueInput;
}


export interface MutationupdateEducationsArgs {
  data: Array<EducationUpdateArgs>;
}


export interface MutationupdateImageArgs {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
}


export interface MutationupdateImagesArgs {
  data: Array<ImageUpdateArgs>;
}


export interface MutationupdateProjectArgs {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
}


export interface MutationupdateProjectsArgs {
  data: Array<ProjectUpdateArgs>;
}


export interface MutationupdateServiceArgs {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
}


export interface MutationupdateServicesArgs {
  data: Array<ServiceUpdateArgs>;
}


export interface MutationupdateSkillArgs {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
}


export interface MutationupdateSkillsArgs {
  data: Array<SkillUpdateArgs>;
}


export interface MutationupdateTagArgs {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
}


export interface MutationupdateTagsArgs {
  data: Array<TagUpdateArgs>;
}

export interface NestedStringFilter {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
}

export const enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc'
};

export interface PasswordState {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
}

export interface Project {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['DateTime']>;
  demo?: Maybe<Scalars['String']>;
  description?: Maybe<Project_description_Document>;
  id: Scalars['ID'];
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<ProjectStatusType>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
}


export interface ProjectimagesArgs {
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ImageWhereInput;
}


export interface ProjectimagesCountArgs {
  where?: ImageWhereInput;
}


export interface ProjecttagsArgs {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
}


export interface ProjecttagsCountArgs {
  where?: TagWhereInput;
}

export interface ProjectCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  demo?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<ImageRelateToManyForCreateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProjectStatusType>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ProjectManyRelationFilter {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
}

export interface ProjectOrderByInput {
  createdAt?: InputMaybe<OrderDirection>;
  demo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishedAt?: InputMaybe<OrderDirection>;
  source?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
}

export interface ProjectRelateToManyForCreateInput {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCreateInput>>;
}

export interface ProjectRelateToManyForUpdateInput {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCreateInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
}

export const enum ProjectStatusType {
  DRAFT = 'draft',
  PUBLISHED = 'published'
};

export interface ProjectStatusTypeNullableFilter {
  equals?: InputMaybe<ProjectStatusType>;
  in?: InputMaybe<Array<ProjectStatusType>>;
  not?: InputMaybe<ProjectStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<ProjectStatusType>>;
}

export interface ProjectUpdateArgs {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
}

export interface ProjectUpdateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  demo?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<ImageRelateToManyForUpdateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProjectStatusType>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ProjectWhereInput {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  demo?: InputMaybe<StringFilter>;
  id?: InputMaybe<IDFilter>;
  images?: InputMaybe<ImageManyRelationFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  source?: InputMaybe<StringFilter>;
  status?: InputMaybe<ProjectStatusTypeNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
}

export interface ProjectWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface Project_description_Document {
  __typename?: 'Project_description_Document';
  document: Scalars['JSON'];
}


export interface Project_description_DocumentdocumentArgs {
  hydrateRelationships?: Scalars['Boolean'];
}

export interface Query {
  __typename?: 'Query';
  admin?: Maybe<Admin>;
  admins?: Maybe<Array<Admin>>;
  adminsCount?: Maybe<Scalars['Int']>;
  apiKey?: Maybe<ApiKey>;
  apiKeys?: Maybe<Array<ApiKey>>;
  apiKeysCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  education?: Maybe<Education>;
  educations?: Maybe<Array<Education>>;
  educationsCount?: Maybe<Scalars['Int']>;
  image?: Maybe<Image>;
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
  service?: Maybe<Service>;
  services?: Maybe<Array<Service>>;
  servicesCount?: Maybe<Scalars['Int']>;
  skill?: Maybe<Skill>;
  skills?: Maybe<Array<Skill>>;
  skillsCount?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
}


export interface QueryadminArgs {
  where: AdminWhereUniqueInput;
}


export interface QueryadminsArgs {
  orderBy?: Array<AdminOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AdminWhereInput;
}


export interface QueryadminsCountArgs {
  where?: AdminWhereInput;
}


export interface QueryapiKeyArgs {
  where: ApiKeyWhereUniqueInput;
}


export interface QueryapiKeysArgs {
  orderBy?: Array<ApiKeyOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ApiKeyWhereInput;
}


export interface QueryapiKeysCountArgs {
  where?: ApiKeyWhereInput;
}


export interface QueryeducationArgs {
  where: EducationWhereUniqueInput;
}


export interface QueryeducationsArgs {
  orderBy?: Array<EducationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EducationWhereInput;
}


export interface QueryeducationsCountArgs {
  where?: EducationWhereInput;
}


export interface QueryimageArgs {
  where: ImageWhereUniqueInput;
}


export interface QueryimagesArgs {
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ImageWhereInput;
}


export interface QueryimagesCountArgs {
  where?: ImageWhereInput;
}


export interface QueryprojectArgs {
  where: ProjectWhereUniqueInput;
}


export interface QueryprojectsArgs {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
}


export interface QueryprojectsCountArgs {
  where?: ProjectWhereInput;
}


export interface QueryserviceArgs {
  where: ServiceWhereUniqueInput;
}


export interface QueryservicesArgs {
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ServiceWhereInput;
}


export interface QueryservicesCountArgs {
  where?: ServiceWhereInput;
}


export interface QueryskillArgs {
  where: SkillWhereUniqueInput;
}


export interface QueryskillsArgs {
  orderBy?: Array<SkillOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SkillWhereInput;
}


export interface QueryskillsCountArgs {
  where?: SkillWhereInput;
}


export interface QuerytagArgs {
  where: TagWhereUniqueInput;
}


export interface QuerytagsArgs {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
}


export interface QuerytagsCountArgs {
  where?: TagWhereInput;
}

export const enum QueryMode {
  DEFAULT = 'default',
  INSENSITIVE = 'insensitive'
};

export interface Service {
  __typename?: 'Service';
  details?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<AzureStorageImageFieldOutput>;
  title?: Maybe<Scalars['String']>;
}

export interface ServiceCreateInput {
  details?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AzureStorageImageFieldInput>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ServiceOrderByInput {
  details?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
}

export interface ServiceUpdateArgs {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
}

export interface ServiceUpdateInput {
  details?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AzureStorageImageFieldInput>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ServiceWhereInput {
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  details?: InputMaybe<StringFilter>;
  id?: InputMaybe<IDFilter>;
  title?: InputMaybe<StringFilter>;
}

export interface ServiceWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface Skill {
  __typename?: 'Skill';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  type?: Maybe<SkillTypeType>;
  value?: Maybe<Scalars['Int']>;
}

export interface SkillCreateInput {
  label?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SkillTypeType>;
  value?: InputMaybe<Scalars['Int']>;
}

export interface SkillOrderByInput {
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
}

export const enum SkillTypeType {
  DEV = 'dev',
  LANG = 'lang'
};

export interface SkillTypeTypeNullableFilter {
  equals?: InputMaybe<SkillTypeType>;
  in?: InputMaybe<Array<SkillTypeType>>;
  not?: InputMaybe<SkillTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<SkillTypeType>>;
}

export interface SkillUpdateArgs {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
}

export interface SkillUpdateInput {
  label?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SkillTypeType>;
  value?: InputMaybe<Scalars['Int']>;
}

export interface SkillWhereInput {
  AND?: InputMaybe<Array<SkillWhereInput>>;
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  OR?: InputMaybe<Array<SkillWhereInput>>;
  id?: InputMaybe<IDFilter>;
  label?: InputMaybe<StringFilter>;
  type?: InputMaybe<SkillTypeTypeNullableFilter>;
  value?: InputMaybe<IntFilter>;
}

export interface SkillWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface StringFilter {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
}

export interface Tag {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
}


export interface TagprojectsArgs {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
}


export interface TagprojectsCountArgs {
  where?: ProjectWhereInput;
}

export interface TagCreateInput {
  name?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToManyForCreateInput>;
}

export interface TagManyRelationFilter {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
}

export interface TagOrderByInput {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
}

export interface TagRelateToManyForCreateInput {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
}

export interface TagRelateToManyForUpdateInput {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
}

export interface TagUpdateArgs {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
}

export interface TagUpdateInput {
  name?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToManyForUpdateInput>;
}

export interface TagWhereInput {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<IDFilter>;
  name?: InputMaybe<StringFilter>;
  projects?: InputMaybe<ProjectManyRelationFilter>;
}

export interface TagWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export type ProjectFragmentFragment = { __typename?: 'Project', id: string, title?: string | null, demo?: string | null, source?: string | null, description?: { __typename?: 'Project_description_Document', document: any } | null, images?: Array<{ __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'AzureStorageImageFieldOutputType', id: string, url: string, width: number, height: number } | null }> | null };

export type ImageFragmentFragment = { __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'AzureStorageImageFieldOutputType', id: string, url: string, width: number, height: number } | null };

export type GetProjectsQueryVariables = Exact<{
  where?: InputMaybe<ProjectWhereInput>;
}>;


export type GetProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string, title?: string | null, demo?: string | null, source?: string | null, description?: { __typename?: 'Project_description_Document', document: any } | null, images?: Array<{ __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'AzureStorageImageFieldOutputType', id: string, url: string, width: number, height: number } | null }> | null }> | null };

export type GetProjectByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProjectByIdQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: string, title?: string | null, demo?: string | null, source?: string | null, description?: { __typename?: 'Project_description_Document', document: any } | null, images?: Array<{ __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'AzureStorageImageFieldOutputType', id: string, url: string, width: number, height: number } | null }> | null } | null };

export type GetImagesQueryVariables = Exact<{
  where?: InputMaybe<ImageWhereInput>;
}>;


export type GetImagesQuery = { __typename?: 'Query', images?: Array<{ __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'AzureStorageImageFieldOutputType', id: string, url: string, width: number, height: number } | null }> | null };

export type GetImageByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetImageByIdQuery = { __typename?: 'Query', image?: { __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'AzureStorageImageFieldOutputType', id: string, url: string, width: number, height: number } | null } | null };

export const ImageFragmentFragmentDoc = gql`
    fragment ImageFragment on Image {
  id
  label
  image {
    id
    url
    width
    height
  }
}
    `;
export const ProjectFragmentFragmentDoc = gql`
    fragment ProjectFragment on Project {
  id
  title
  description {
    document
  }
  demo
  source
  images {
    ...ImageFragment
  }
}
    `;
export const GetProjectsDocument = gql`
    query GetProjects($where: ProjectWhereInput = {status: {equals: published}}) {
  projects(where: $where) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}
${ImageFragmentFragmentDoc}`;

export const GetProjectsComponent = (props: Omit<Urql.QueryProps<GetProjectsQuery, GetProjectsQueryVariables>, 'query'> & { variables?: GetProjectsQueryVariables }) => (
  <Urql.Query {...props} query={GetProjectsDocument} />
);


export function useGetProjectsQuery(options?: Omit<Urql.UseQueryArgs<GetProjectsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProjectsQuery>({ query: GetProjectsDocument, ...options });
};
export const GetProjectByIdDocument = gql`
    query GetProjectById($id: ID!) {
  project(where: {id: $id}) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}
${ImageFragmentFragmentDoc}`;

export const GetProjectByIdComponent = (props: Omit<Urql.QueryProps<GetProjectByIdQuery, GetProjectByIdQueryVariables>, 'query'> & { variables: GetProjectByIdQueryVariables }) => (
  <Urql.Query {...props} query={GetProjectByIdDocument} />
);


export function useGetProjectByIdQuery(options: Omit<Urql.UseQueryArgs<GetProjectByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProjectByIdQuery>({ query: GetProjectByIdDocument, ...options });
};
export const GetImagesDocument = gql`
    query GetImages($where: ImageWhereInput = {}) {
  images(where: $where) {
    ...ImageFragment
  }
}
    ${ImageFragmentFragmentDoc}`;

export const GetImagesComponent = (props: Omit<Urql.QueryProps<GetImagesQuery, GetImagesQueryVariables>, 'query'> & { variables?: GetImagesQueryVariables }) => (
  <Urql.Query {...props} query={GetImagesDocument} />
);


export function useGetImagesQuery(options?: Omit<Urql.UseQueryArgs<GetImagesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetImagesQuery>({ query: GetImagesDocument, ...options });
};
export const GetImageByIdDocument = gql`
    query GetImageById($id: ID!) {
  image(where: {id: $id}) {
    ...ImageFragment
  }
}
    ${ImageFragmentFragmentDoc}`;

export const GetImageByIdComponent = (props: Omit<Urql.QueryProps<GetImageByIdQuery, GetImageByIdQueryVariables>, 'query'> & { variables: GetImageByIdQueryVariables }) => (
  <Urql.Query {...props} query={GetImageByIdDocument} />
);


export function useGetImageByIdQuery(options: Omit<Urql.UseQueryArgs<GetImageByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetImageByIdQuery>({ query: GetImageByIdDocument, ...options });
};