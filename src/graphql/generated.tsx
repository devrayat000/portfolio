import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type Admin = {
  __typename?: 'Admin';
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  freelance?: Maybe<AdminFreelanceType>;
  id: Scalars['ID'];
  languageSkills?: Maybe<Array<LanguageSkill>>;
  languageSkillsCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  rank?: Maybe<AdminRankType>;
  residence?: Maybe<Scalars['String']>;
};


export type AdminlanguageSkillsArgs = {
  orderBy?: Array<LanguageSkillOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LanguageSkillWhereInput;
};


export type AdminlanguageSkillsCountArgs = {
  where?: LanguageSkillWhereInput;
};

export type AdminAuthenticationWithPasswordFailure = {
  __typename?: 'AdminAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type AdminAuthenticationWithPasswordResult = AdminAuthenticationWithPasswordFailure | AdminAuthenticationWithPasswordSuccess;

export type AdminAuthenticationWithPasswordSuccess = {
  __typename?: 'AdminAuthenticationWithPasswordSuccess';
  item: Admin;
  sessionToken: Scalars['String'];
};

export type AdminCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  freelance?: InputMaybe<AdminFreelanceType>;
  languageSkills?: InputMaybe<LanguageSkillRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<AdminRankType>;
  residence?: InputMaybe<Scalars['String']>;
};

export const enum AdminFreelanceType {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable'
};

export type AdminFreelanceTypeNullableFilter = {
  equals?: InputMaybe<AdminFreelanceType>;
  in?: InputMaybe<Array<AdminFreelanceType>>;
  not?: InputMaybe<AdminFreelanceTypeNullableFilter>;
  notIn?: InputMaybe<Array<AdminFreelanceType>>;
};

export type AdminOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  age?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  freelance?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  rank?: InputMaybe<OrderDirection>;
  residence?: InputMaybe<OrderDirection>;
};

export const enum AdminRankType {
  BACK_END = 'back_end',
  FRONT_END = 'front_end',
  FULL_STACK = 'full_stack'
};

export type AdminRankTypeNullableFilter = {
  equals?: InputMaybe<AdminRankType>;
  in?: InputMaybe<Array<AdminRankType>>;
  not?: InputMaybe<AdminRankTypeNullableFilter>;
  notIn?: InputMaybe<Array<AdminRankType>>;
};

export type AdminRelateToOneForCreateInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
  create?: InputMaybe<AdminCreateInput>;
};

export type AdminRelateToOneForUpdateInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
  create?: InputMaybe<AdminCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type AdminUpdateArgs = {
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};

export type AdminUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  freelance?: InputMaybe<AdminFreelanceType>;
  languageSkills?: InputMaybe<LanguageSkillRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<AdminRankType>;
  residence?: InputMaybe<Scalars['String']>;
};

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  address?: InputMaybe<StringFilter>;
  age?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  freelance?: InputMaybe<AdminFreelanceTypeNullableFilter>;
  id?: InputMaybe<IDFilter>;
  languageSkills?: InputMaybe<LanguageSkillManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  rank?: InputMaybe<AdminRankTypeNullableFilter>;
  residence?: InputMaybe<StringFilter>;
};

export type AdminWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ApiKey = {
  __typename?: 'ApiKey';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
};

export type ApiKeyCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
};

export type ApiKeyOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type ApiKeyUpdateArgs = {
  data: ApiKeyUpdateInput;
  where: ApiKeyWhereUniqueInput;
};

export type ApiKeyUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
};

export type ApiKeyWhereInput = {
  AND?: InputMaybe<Array<ApiKeyWhereInput>>;
  NOT?: InputMaybe<Array<ApiKeyWhereInput>>;
  OR?: InputMaybe<Array<ApiKeyWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IDFilter>;
};

export type ApiKeyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type AuthenticatedItem = Admin;

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']>;
  aspect_ratio?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  color_space?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Scalars['String']>;
  default_image?: InputMaybe<Scalars['String']>;
  delay?: InputMaybe<Scalars['String']>;
  density?: InputMaybe<Scalars['String']>;
  dpr?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<Scalars['String']>;
  fetch_format?: InputMaybe<Scalars['String']>;
  flags?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  gravity?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  opacity?: InputMaybe<Scalars['String']>;
  overlay?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['String']>;
  radius?: InputMaybe<Scalars['String']>;
  transformation?: InputMaybe<Scalars['String']>;
  underlay?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['String']>;
  y?: InputMaybe<Scalars['String']>;
  zoom?: InputMaybe<Scalars['String']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mimetype?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilepublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type CreateInitialAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Education = {
  __typename?: 'Education';
  certificate?: Maybe<Scalars['String']>;
  description?: Maybe<Education_description_Document>;
  id: Scalars['ID'];
  passed?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type EducationCreateInput = {
  certificate?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  passed?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EducationOrderByInput = {
  certificate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  passed?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type EducationUpdateArgs = {
  data: EducationUpdateInput;
  where: EducationWhereUniqueInput;
};

export type EducationUpdateInput = {
  certificate?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  passed?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EducationWhereInput = {
  AND?: InputMaybe<Array<EducationWhereInput>>;
  NOT?: InputMaybe<Array<EducationWhereInput>>;
  OR?: InputMaybe<Array<EducationWhereInput>>;
  certificate?: InputMaybe<StringFilter>;
  id?: InputMaybe<IDFilter>;
  passed?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type EducationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Education_description_Document = {
  __typename?: 'Education_description_Document';
  document: Scalars['JSON'];
};


export type Education_description_DocumentdocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type IDFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IDFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
  __typename?: 'Image';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  label?: Maybe<Scalars['String']>;
};

export type ImageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['Upload']>;
  label?: InputMaybe<Scalars['String']>;
};

export type ImageManyRelationFilter = {
  every?: InputMaybe<ImageWhereInput>;
  none?: InputMaybe<ImageWhereInput>;
  some?: InputMaybe<ImageWhereInput>;
};

export type ImageOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
};

export type ImageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ImageCreateInput>>;
};

export type ImageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ImageCreateInput>>;
  disconnect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ImageWhereUniqueInput>>;
};

export type ImageUpdateArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['Upload']>;
  label?: InputMaybe<Scalars['String']>;
};

export type ImageWhereInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IDFilter>;
  label?: InputMaybe<StringFilter>;
};

export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUIListMeta>;
  lists: Array<KeystoneAdminUIListMeta>;
};


export type KeystoneAdminMetalistArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUIFieldMeta = {
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
};


export type KeystoneAdminUIFieldMetaitemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUIFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUIFieldMetaCreateViewFieldMode;
};

export const enum KeystoneAdminUIFieldMetaCreateViewFieldMode {
  EDIT = 'edit',
  HIDDEN = 'hidden'
};

export type KeystoneAdminUIFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUIFieldMetaItemViewFieldMode>;
};

export const enum KeystoneAdminUIFieldMetaItemViewFieldMode {
  EDIT = 'edit',
  HIDDEN = 'hidden',
  READ = 'read'
};

export type KeystoneAdminUIFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUIFieldMetaListViewFieldMode;
};

export const enum KeystoneAdminUIFieldMetaListViewFieldMode {
  HIDDEN = 'hidden',
  READ = 'read'
};

export type KeystoneAdminUIListMeta = {
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
};

export type KeystoneAdminUISort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUISortDirection;
  field: Scalars['String'];
};

export const enum KeystoneAdminUISortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
};

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type LanguageSkill = {
  __typename?: 'LanguageSkill';
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  type?: Maybe<LanguageSkillTypeType>;
  user?: Maybe<Admin>;
  value?: Maybe<Scalars['Int']>;
};

export type LanguageSkillCreateInput = {
  language?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<LanguageSkillTypeType>;
  user?: InputMaybe<AdminRelateToOneForCreateInput>;
  value?: InputMaybe<Scalars['Int']>;
};

export type LanguageSkillManyRelationFilter = {
  every?: InputMaybe<LanguageSkillWhereInput>;
  none?: InputMaybe<LanguageSkillWhereInput>;
  some?: InputMaybe<LanguageSkillWhereInput>;
};

export type LanguageSkillOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export type LanguageSkillRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LanguageSkillWhereUniqueInput>>;
  create?: InputMaybe<Array<LanguageSkillCreateInput>>;
};

export type LanguageSkillRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LanguageSkillWhereUniqueInput>>;
  create?: InputMaybe<Array<LanguageSkillCreateInput>>;
  disconnect?: InputMaybe<Array<LanguageSkillWhereUniqueInput>>;
  set?: InputMaybe<Array<LanguageSkillWhereUniqueInput>>;
};

export const enum LanguageSkillTypeType {
  HUMAN = 'human',
  PROGRAMMING = 'programming'
};

export type LanguageSkillTypeTypeNullableFilter = {
  equals?: InputMaybe<LanguageSkillTypeType>;
  in?: InputMaybe<Array<LanguageSkillTypeType>>;
  not?: InputMaybe<LanguageSkillTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<LanguageSkillTypeType>>;
};

export type LanguageSkillUpdateArgs = {
  data: LanguageSkillUpdateInput;
  where: LanguageSkillWhereUniqueInput;
};

export type LanguageSkillUpdateInput = {
  language?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<LanguageSkillTypeType>;
  user?: InputMaybe<AdminRelateToOneForUpdateInput>;
  value?: InputMaybe<Scalars['Int']>;
};

export type LanguageSkillWhereInput = {
  AND?: InputMaybe<Array<LanguageSkillWhereInput>>;
  NOT?: InputMaybe<Array<LanguageSkillWhereInput>>;
  OR?: InputMaybe<Array<LanguageSkillWhereInput>>;
  id?: InputMaybe<IDFilter>;
  language?: InputMaybe<StringFilter>;
  type?: InputMaybe<LanguageSkillTypeTypeNullableFilter>;
  user?: InputMaybe<AdminWhereInput>;
  value?: InputMaybe<IntFilter>;
};

export type LanguageSkillWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
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
  createLanguageSkill?: Maybe<LanguageSkill>;
  createLanguageSkills?: Maybe<Array<Maybe<LanguageSkill>>>;
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
  deleteLanguageSkill?: Maybe<LanguageSkill>;
  deleteLanguageSkills?: Maybe<Array<Maybe<LanguageSkill>>>;
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
  updateLanguageSkill?: Maybe<LanguageSkill>;
  updateLanguageSkills?: Maybe<Array<Maybe<LanguageSkill>>>;
  updateProject?: Maybe<Project>;
  updateProjects?: Maybe<Array<Maybe<Project>>>;
  updateService?: Maybe<Service>;
  updateServices?: Maybe<Array<Maybe<Service>>>;
  updateSkill?: Maybe<Skill>;
  updateSkills?: Maybe<Array<Maybe<Skill>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
};


export type MutationauthenticateAdminWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationcreateAdminArgs = {
  data: AdminCreateInput;
};


export type MutationcreateAdminsArgs = {
  data: Array<AdminCreateInput>;
};


export type MutationcreateApiKeyArgs = {
  data: ApiKeyCreateInput;
};


export type MutationcreateApiKeysArgs = {
  data: Array<ApiKeyCreateInput>;
};


export type MutationcreateEducationArgs = {
  data: EducationCreateInput;
};


export type MutationcreateEducationsArgs = {
  data: Array<EducationCreateInput>;
};


export type MutationcreateImageArgs = {
  data: ImageCreateInput;
};


export type MutationcreateImagesArgs = {
  data: Array<ImageCreateInput>;
};


export type MutationcreateInitialAdminArgs = {
  data: CreateInitialAdminInput;
};


export type MutationcreateLanguageSkillArgs = {
  data: LanguageSkillCreateInput;
};


export type MutationcreateLanguageSkillsArgs = {
  data: Array<LanguageSkillCreateInput>;
};


export type MutationcreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationcreateProjectsArgs = {
  data: Array<ProjectCreateInput>;
};


export type MutationcreateServiceArgs = {
  data: ServiceCreateInput;
};


export type MutationcreateServicesArgs = {
  data: Array<ServiceCreateInput>;
};


export type MutationcreateSkillArgs = {
  data: SkillCreateInput;
};


export type MutationcreateSkillsArgs = {
  data: Array<SkillCreateInput>;
};


export type MutationcreateTagArgs = {
  data: TagCreateInput;
};


export type MutationcreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationdeleteAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type MutationdeleteAdminsArgs = {
  where: Array<AdminWhereUniqueInput>;
};


export type MutationdeleteApiKeyArgs = {
  where: ApiKeyWhereUniqueInput;
};


export type MutationdeleteApiKeysArgs = {
  where: Array<ApiKeyWhereUniqueInput>;
};


export type MutationdeleteEducationArgs = {
  where: EducationWhereUniqueInput;
};


export type MutationdeleteEducationsArgs = {
  where: Array<EducationWhereUniqueInput>;
};


export type MutationdeleteImageArgs = {
  where: ImageWhereUniqueInput;
};


export type MutationdeleteImagesArgs = {
  where: Array<ImageWhereUniqueInput>;
};


export type MutationdeleteLanguageSkillArgs = {
  where: LanguageSkillWhereUniqueInput;
};


export type MutationdeleteLanguageSkillsArgs = {
  where: Array<LanguageSkillWhereUniqueInput>;
};


export type MutationdeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationdeleteProjectsArgs = {
  where: Array<ProjectWhereUniqueInput>;
};


export type MutationdeleteServiceArgs = {
  where: ServiceWhereUniqueInput;
};


export type MutationdeleteServicesArgs = {
  where: Array<ServiceWhereUniqueInput>;
};


export type MutationdeleteSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationdeleteSkillsArgs = {
  where: Array<SkillWhereUniqueInput>;
};


export type MutationdeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationdeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationupdateAdminArgs = {
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};


export type MutationupdateAdminsArgs = {
  data: Array<AdminUpdateArgs>;
};


export type MutationupdateApiKeyArgs = {
  data: ApiKeyUpdateInput;
  where: ApiKeyWhereUniqueInput;
};


export type MutationupdateApiKeysArgs = {
  data: Array<ApiKeyUpdateArgs>;
};


export type MutationupdateEducationArgs = {
  data: EducationUpdateInput;
  where: EducationWhereUniqueInput;
};


export type MutationupdateEducationsArgs = {
  data: Array<EducationUpdateArgs>;
};


export type MutationupdateImageArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationupdateImagesArgs = {
  data: Array<ImageUpdateArgs>;
};


export type MutationupdateLanguageSkillArgs = {
  data: LanguageSkillUpdateInput;
  where: LanguageSkillWhereUniqueInput;
};


export type MutationupdateLanguageSkillsArgs = {
  data: Array<LanguageSkillUpdateArgs>;
};


export type MutationupdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationupdateProjectsArgs = {
  data: Array<ProjectUpdateArgs>;
};


export type MutationupdateServiceArgs = {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};


export type MutationupdateServicesArgs = {
  data: Array<ServiceUpdateArgs>;
};


export type MutationupdateSkillArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};


export type MutationupdateSkillsArgs = {
  data: Array<SkillUpdateArgs>;
};


export type MutationupdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationupdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};

export type NestedStringFilter = {
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
};

export const enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc'
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Project = {
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
};


export type ProjectimagesArgs = {
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ImageWhereInput;
};


export type ProjectimagesCountArgs = {
  where?: ImageWhereInput;
};


export type ProjecttagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type ProjecttagsCountArgs = {
  where?: TagWhereInput;
};

export type ProjectCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  demo?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<ImageRelateToManyForCreateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProjectStatusType>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProjectManyRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  demo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishedAt?: InputMaybe<OrderDirection>;
  source?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ProjectRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCreateInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
};

export const enum ProjectStatusType {
  DRAFT = 'draft',
  PUBLISHED = 'published'
};

export type ProjectStatusTypeNullableFilter = {
  equals?: InputMaybe<ProjectStatusType>;
  in?: InputMaybe<Array<ProjectStatusType>>;
  not?: InputMaybe<ProjectStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<ProjectStatusType>>;
};

export type ProjectUpdateArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  demo?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<ImageRelateToManyForUpdateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProjectStatusType>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProjectWhereInput = {
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
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Project_description_Document = {
  __typename?: 'Project_description_Document';
  document: Scalars['JSON'];
};


export type Project_description_DocumentdocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type Query = {
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
  languageSkill?: Maybe<LanguageSkill>;
  languageSkills?: Maybe<Array<LanguageSkill>>;
  languageSkillsCount?: Maybe<Scalars['Int']>;
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
};


export type QueryadminArgs = {
  where: AdminWhereUniqueInput;
};


export type QueryadminsArgs = {
  orderBy?: Array<AdminOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AdminWhereInput;
};


export type QueryadminsCountArgs = {
  where?: AdminWhereInput;
};


export type QueryapiKeyArgs = {
  where: ApiKeyWhereUniqueInput;
};


export type QueryapiKeysArgs = {
  orderBy?: Array<ApiKeyOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ApiKeyWhereInput;
};


export type QueryapiKeysCountArgs = {
  where?: ApiKeyWhereInput;
};


export type QueryeducationArgs = {
  where: EducationWhereUniqueInput;
};


export type QueryeducationsArgs = {
  orderBy?: Array<EducationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EducationWhereInput;
};


export type QueryeducationsCountArgs = {
  where?: EducationWhereInput;
};


export type QueryimageArgs = {
  where: ImageWhereUniqueInput;
};


export type QueryimagesArgs = {
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ImageWhereInput;
};


export type QueryimagesCountArgs = {
  where?: ImageWhereInput;
};


export type QuerylanguageSkillArgs = {
  where: LanguageSkillWhereUniqueInput;
};


export type QuerylanguageSkillsArgs = {
  orderBy?: Array<LanguageSkillOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LanguageSkillWhereInput;
};


export type QuerylanguageSkillsCountArgs = {
  where?: LanguageSkillWhereInput;
};


export type QueryprojectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryprojectsArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type QueryprojectsCountArgs = {
  where?: ProjectWhereInput;
};


export type QueryserviceArgs = {
  where: ServiceWhereUniqueInput;
};


export type QueryservicesArgs = {
  orderBy?: Array<ServiceOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ServiceWhereInput;
};


export type QueryservicesCountArgs = {
  where?: ServiceWhereInput;
};


export type QueryskillArgs = {
  where: SkillWhereUniqueInput;
};


export type QueryskillsArgs = {
  orderBy?: Array<SkillOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SkillWhereInput;
};


export type QueryskillsCountArgs = {
  where?: SkillWhereInput;
};


export type QuerytagArgs = {
  where: TagWhereUniqueInput;
};


export type QuerytagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type QuerytagsCountArgs = {
  where?: TagWhereInput;
};

export const enum QueryMode {
  DEFAULT = 'default',
  INSENSITIVE = 'insensitive'
};

export type Service = {
  __typename?: 'Service';
  details?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  title?: Maybe<Scalars['String']>;
};

export type ServiceCreateInput = {
  details?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ServiceOrderByInput = {
  details?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ServiceUpdateArgs = {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};

export type ServiceUpdateInput = {
  details?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ServiceWhereInput = {
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  details?: InputMaybe<StringFilter>;
  id?: InputMaybe<IDFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ServiceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  type?: Maybe<SkillTypeType>;
  value?: Maybe<Scalars['Int']>;
};

export type SkillCreateInput = {
  label?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SkillTypeType>;
  value?: InputMaybe<Scalars['Int']>;
};

export type SkillOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export const enum SkillTypeType {
  DEV = 'dev',
  LANG = 'lang'
};

export type SkillTypeTypeNullableFilter = {
  equals?: InputMaybe<SkillTypeType>;
  in?: InputMaybe<Array<SkillTypeType>>;
  not?: InputMaybe<SkillTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<SkillTypeType>>;
};

export type SkillUpdateArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};

export type SkillUpdateInput = {
  label?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SkillTypeType>;
  value?: InputMaybe<Scalars['Int']>;
};

export type SkillWhereInput = {
  AND?: InputMaybe<Array<SkillWhereInput>>;
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  OR?: InputMaybe<Array<SkillWhereInput>>;
  id?: InputMaybe<IDFilter>;
  label?: InputMaybe<StringFilter>;
  type?: InputMaybe<SkillTypeTypeNullableFilter>;
  value?: InputMaybe<IntFilter>;
};

export type SkillWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type StringFilter = {
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
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};


export type TagprojectsArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type TagprojectsCountArgs = {
  where?: ProjectWhereInput;
};

export type TagCreateInput = {
  name?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToManyForCreateInput>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectRelateToManyForUpdateInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<IDFilter>;
  name?: InputMaybe<StringFilter>;
  projects?: InputMaybe<ProjectManyRelationFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type DemoProjectFragmentFragment = { __typename?: 'Project', id: string, title?: string | null, demo?: string | null, source?: string | null, description?: { __typename?: 'Project_description_Document', document: any } | null, images?: Array<{ __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'CloudinaryImage_File', id?: string | null, publicUrl?: string | null } | null }> | null };

export type ProjectFragmentFragment = { __typename?: 'Project', id: string, title?: string | null, demo?: string | null, source?: string | null, description?: { __typename?: 'Project_description_Document', document: any } | null, images?: Array<{ __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'CloudinaryImage_File', id?: string | null, publicUrl?: string | null } | null }> | null };

export type ImageFragmentFragment = { __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'CloudinaryImage_File', id?: string | null, publicUrl?: string | null } | null };

export type LanguageFragmentFragment = { __typename?: 'LanguageSkill', id: string, language?: string | null, value?: number | null };

export type MyInfoFragment = { __typename?: 'Admin', age?: number | null, residence?: string | null, freelance?: AdminFreelanceType | null, address?: string | null, rank?: AdminRankType | null };

export type TagFragmentFragment = { __typename?: 'Tag', id: string, name?: string | null, slug?: string | null };

export type EducationFragmentFragment = { __typename?: 'Education', id: string, title?: string | null, passed?: any | null, certificate?: string | null, description?: { __typename?: 'Education_description_Document', document: any } | null };

export type GetDemoProjectsQueryVariables = Exact<{
  where?: InputMaybe<ProjectWhereInput>;
}>;


export type GetDemoProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string, title?: string | null, demo?: string | null, source?: string | null, description?: { __typename?: 'Project_description_Document', document: any } | null, images?: Array<{ __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'CloudinaryImage_File', id?: string | null, publicUrl?: string | null } | null }> | null }> | null };

export type GetProjectsQueryVariables = Exact<{
  where?: InputMaybe<ProjectWhereInput>;
}>;


export type GetProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string, title?: string | null, demo?: string | null, source?: string | null, description?: { __typename?: 'Project_description_Document', document: any } | null, images?: Array<{ __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'CloudinaryImage_File', id?: string | null, publicUrl?: string | null } | null }> | null }> | null };

export type GetProjectsIdQueryVariables = Exact<{
  where?: InputMaybe<ProjectWhereInput>;
}>;


export type GetProjectsIdQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string }> | null };

export type GetProjectByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProjectByIdQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: string, title?: string | null, demo?: string | null, source?: string | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null, slug?: string | null }> | null, description?: { __typename?: 'Project_description_Document', document: any } | null, images?: Array<{ __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'CloudinaryImage_File', id?: string | null, publicUrl?: string | null } | null }> | null } | null };

export type GetProjectsByTagQueryVariables = Exact<{
  tag: Scalars['ID'];
}>;


export type GetProjectsByTagQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string, title?: string | null, demo?: string | null, source?: string | null, description?: { __typename?: 'Project_description_Document', document: any } | null, images?: Array<{ __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'CloudinaryImage_File', id?: string | null, publicUrl?: string | null } | null }> | null }> | null };

export type GetImagesQueryVariables = Exact<{
  where?: InputMaybe<ImageWhereInput>;
}>;


export type GetImagesQuery = { __typename?: 'Query', images?: Array<{ __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'CloudinaryImage_File', id?: string | null, publicUrl?: string | null } | null }> | null };

export type GetImageByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetImageByIdQuery = { __typename?: 'Query', image?: { __typename?: 'Image', id: string, label?: string | null, image?: { __typename?: 'CloudinaryImage_File', id?: string | null, publicUrl?: string | null } | null } | null };

export type GetHumanLanguageSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHumanLanguageSkillsQuery = { __typename?: 'Query', languageSkills?: Array<{ __typename?: 'LanguageSkill', id: string, language?: string | null, value?: number | null }> | null };

export type GetProgrammingLanguageSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProgrammingLanguageSkillsQuery = { __typename?: 'Query', languageSkills?: Array<{ __typename?: 'LanguageSkill', id: string, language?: string | null, value?: number | null }> | null };

export type GetMyInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyInfoQuery = { __typename?: 'Query', admin?: { __typename?: 'Admin', age?: number | null, residence?: string | null, freelance?: AdminFreelanceType | null, address?: string | null, rank?: AdminRankType | null } | null };

export type GetMyEducationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyEducationQuery = { __typename?: 'Query', educations?: Array<{ __typename?: 'Education', id: string, title?: string | null, passed?: any | null, certificate?: string | null, description?: { __typename?: 'Education_description_Document', document: any } | null }> | null };

export const DemoProjectFragmentFragmentDoc = gql`
    fragment DemoProjectFragment on Project {
  id
  title
  description {
    document
  }
  demo
  source
  images(take: 1) {
    id
    label
    image {
      id
      publicUrl
    }
  }
}
    `;
export const ImageFragmentFragmentDoc = gql`
    fragment ImageFragment on Image {
  id
  label
  image {
    id
    publicUrl
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
export const LanguageFragmentFragmentDoc = gql`
    fragment LanguageFragment on LanguageSkill {
  id
  language
  value
}
    `;
export const MyInfoFragmentDoc = gql`
    fragment MyInfo on Admin {
  age
  residence
  freelance
  address
  rank
}
    `;
export const TagFragmentFragmentDoc = gql`
    fragment TagFragment on Tag {
  id
  name
  slug
}
    `;
export const EducationFragmentFragmentDoc = gql`
    fragment EducationFragment on Education {
  id
  title
  passed
  certificate
  description {
    document
  }
}
    `;
export const GetDemoProjectsDocument = gql`
    query GetDemoProjects($where: ProjectWhereInput = {status: {equals: published}}) {
  projects(where: $where) {
    ...DemoProjectFragment
  }
}
    ${DemoProjectFragmentFragmentDoc}`;

export function useGetDemoProjectsQuery(options?: Omit<Urql.UseQueryArgs<GetDemoProjectsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetDemoProjectsQuery>({ query: GetDemoProjectsDocument, ...options });
};
export const GetProjectsDocument = gql`
    query GetProjects($where: ProjectWhereInput = {status: {equals: published}}) {
  projects(where: $where) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}
${ImageFragmentFragmentDoc}`;

export function useGetProjectsQuery(options?: Omit<Urql.UseQueryArgs<GetProjectsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProjectsQuery>({ query: GetProjectsDocument, ...options });
};
export const GetProjectsIdDocument = gql`
    query GetProjectsId($where: ProjectWhereInput = {status: {equals: published}}) {
  projects(where: $where, take: 5) {
    id
  }
}
    `;

export function useGetProjectsIdQuery(options?: Omit<Urql.UseQueryArgs<GetProjectsIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProjectsIdQuery>({ query: GetProjectsIdDocument, ...options });
};
export const GetProjectByIdDocument = gql`
    query GetProjectById($id: ID!) {
  project(where: {id: $id}) {
    ...ProjectFragment
    tags {
      ...TagFragment
    }
  }
}
    ${ProjectFragmentFragmentDoc}
${ImageFragmentFragmentDoc}
${TagFragmentFragmentDoc}`;

export function useGetProjectByIdQuery(options: Omit<Urql.UseQueryArgs<GetProjectByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProjectByIdQuery>({ query: GetProjectByIdDocument, ...options });
};
export const GetProjectsByTagDocument = gql`
    query GetProjectsByTag($tag: ID!) {
  projects(where: {tags: {some: {id: {equals: $tag}}}}) {
    ...DemoProjectFragment
  }
}
    ${DemoProjectFragmentFragmentDoc}`;

export function useGetProjectsByTagQuery(options: Omit<Urql.UseQueryArgs<GetProjectsByTagQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProjectsByTagQuery>({ query: GetProjectsByTagDocument, ...options });
};
export const GetImagesDocument = gql`
    query GetImages($where: ImageWhereInput = {}) {
  images(where: $where) {
    ...ImageFragment
  }
}
    ${ImageFragmentFragmentDoc}`;

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

export function useGetImageByIdQuery(options: Omit<Urql.UseQueryArgs<GetImageByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetImageByIdQuery>({ query: GetImageByIdDocument, ...options });
};
export const GetHumanLanguageSkillsDocument = gql`
    query GetHumanLanguageSkills {
  languageSkills(
    where: {type: {equals: human}, user: {email: {equals: "dev.rayat000@gmail.com"}}}
  ) {
    ...LanguageFragment
  }
}
    ${LanguageFragmentFragmentDoc}`;

export function useGetHumanLanguageSkillsQuery(options?: Omit<Urql.UseQueryArgs<GetHumanLanguageSkillsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetHumanLanguageSkillsQuery>({ query: GetHumanLanguageSkillsDocument, ...options });
};
export const GetProgrammingLanguageSkillsDocument = gql`
    query GetProgrammingLanguageSkills {
  languageSkills(
    where: {type: {equals: programming}, user: {email: {equals: "dev.rayat000@gmail.com"}}}
  ) {
    ...LanguageFragment
  }
}
    ${LanguageFragmentFragmentDoc}`;

export function useGetProgrammingLanguageSkillsQuery(options?: Omit<Urql.UseQueryArgs<GetProgrammingLanguageSkillsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProgrammingLanguageSkillsQuery>({ query: GetProgrammingLanguageSkillsDocument, ...options });
};
export const GetMyInfoDocument = gql`
    query GetMyInfo {
  admin(where: {email: "dev.rayat000@gmail.com"}) {
    ...MyInfo
  }
}
    ${MyInfoFragmentDoc}`;

export function useGetMyInfoQuery(options?: Omit<Urql.UseQueryArgs<GetMyInfoQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMyInfoQuery>({ query: GetMyInfoDocument, ...options });
};
export const GetMyEducationDocument = gql`
    query GetMyEducation {
  educations {
    ...EducationFragment
  }
}
    ${EducationFragmentFragmentDoc}`;

export function useGetMyEducationQuery(options?: Omit<Urql.UseQueryArgs<GetMyEducationQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMyEducationQuery>({ query: GetMyEducationDocument, ...options });
};