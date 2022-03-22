import gql from 'graphql-tag';
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
  _FieldSet: any;
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

export type AuthenticatedItem = Admin;

export interface CloudImageFieldOutput extends ImageFieldOutput {
  __typename?: 'CloudImageFieldOutput';
  extension: ImageExtension;
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
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  label?: Maybe<Scalars['String']>;
}

export interface ImageCreateInput {
  image?: InputMaybe<ImageFieldInput>;
  label?: InputMaybe<Scalars['String']>;
}

export const enum ImageExtension {
  GIF = 'gif',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
};

export interface ImageFieldInput {
  ref?: InputMaybe<Scalars['String']>;
  upload?: InputMaybe<Scalars['Upload']>;
}

export interface ImageFieldOutput {
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
}

export interface ImageManyRelationFilter {
  every?: InputMaybe<ImageWhereInput>;
  none?: InputMaybe<ImageWhereInput>;
  some?: InputMaybe<ImageWhereInput>;
}

export interface ImageOrderByInput {
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
  image?: InputMaybe<ImageFieldInput>;
  label?: InputMaybe<Scalars['String']>;
}

export interface ImageWhereInput {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  id?: InputMaybe<IDFilter>;
  label?: InputMaybe<StringFilter>;
}

export interface ImageWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
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

export interface LocalImageFieldOutput extends ImageFieldOutput {
  __typename?: 'LocalImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
}

export interface Mutation {
  __typename?: 'Mutation';
  authenticateAdminWithPassword?: Maybe<AdminAuthenticationWithPasswordResult>;
  createAdmin?: Maybe<Admin>;
  createAdmins?: Maybe<Array<Maybe<Admin>>>;
  createImage?: Maybe<Image>;
  createImages?: Maybe<Array<Maybe<Image>>>;
  createInitialAdmin: AdminAuthenticationWithPasswordSuccess;
  createProject?: Maybe<Project>;
  createProjects?: Maybe<Array<Maybe<Project>>>;
  deleteAdmin?: Maybe<Admin>;
  deleteAdmins?: Maybe<Array<Maybe<Admin>>>;
  deleteImage?: Maybe<Image>;
  deleteImages?: Maybe<Array<Maybe<Image>>>;
  deleteProject?: Maybe<Project>;
  deleteProjects?: Maybe<Array<Maybe<Project>>>;
  endSession: Scalars['Boolean'];
  updateAdmin?: Maybe<Admin>;
  updateAdmins?: Maybe<Array<Maybe<Admin>>>;
  updateImage?: Maybe<Image>;
  updateImages?: Maybe<Array<Maybe<Image>>>;
  updateProject?: Maybe<Project>;
  updateProjects?: Maybe<Array<Maybe<Project>>>;
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


export interface MutationdeleteAdminArgs {
  where: AdminWhereUniqueInput;
}


export interface MutationdeleteAdminsArgs {
  where: Array<AdminWhereUniqueInput>;
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


export interface MutationupdateAdminArgs {
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
}


export interface MutationupdateAdminsArgs {
  data: Array<AdminUpdateArgs>;
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
  demo?: Maybe<Scalars['String']>;
  description?: Maybe<Project_description_Document>;
  id: Scalars['ID'];
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
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

export interface ProjectCreateInput {
  demo?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<ImageRelateToManyForCreateInput>;
  source?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ProjectOrderByInput {
  demo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  source?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
}

export interface ProjectUpdateArgs {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
}

export interface ProjectUpdateInput {
  demo?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<ImageRelateToManyForUpdateInput>;
  source?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ProjectWhereInput {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  demo?: InputMaybe<StringFilter>;
  id?: InputMaybe<IDFilter>;
  images?: InputMaybe<ImageManyRelationFilter>;
  source?: InputMaybe<StringFilter>;
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
  authenticatedItem?: Maybe<AuthenticatedItem>;
  image?: Maybe<Image>;
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
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

export const enum QueryMode {
  DEFAULT = 'default',
  INSENSITIVE = 'insensitive'
};

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

export type ProjectFragmentFragment = { __typename?: 'Project', id: string, title?: string | null | undefined, demo?: string | null | undefined, source?: string | null | undefined, description?: { __typename?: 'Project_description_Document', document: any } | null | undefined, images?: Array<{ __typename?: 'Image', id: string, label?: string | null | undefined, image?: { __typename?: 'CloudImageFieldOutput', id: string, url: string, width: number, height: number } | { __typename?: 'LocalImageFieldOutput', id: string, url: string, width: number, height: number } | null | undefined }> | null | undefined };

export type ImageFragmentFragment = { __typename?: 'Image', id: string, label?: string | null | undefined, image?: { __typename?: 'CloudImageFieldOutput', id: string, url: string, width: number, height: number } | { __typename?: 'LocalImageFieldOutput', id: string, url: string, width: number, height: number } | null | undefined };

export type GetProjectsQueryVariables = Exact<{
  where?: InputMaybe<ProjectWhereInput>;
}>;


export type GetProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string, title?: string | null | undefined, demo?: string | null | undefined, source?: string | null | undefined, description?: { __typename?: 'Project_description_Document', document: any } | null | undefined, images?: Array<{ __typename?: 'Image', id: string, label?: string | null | undefined, image?: { __typename?: 'CloudImageFieldOutput', id: string, url: string, width: number, height: number } | { __typename?: 'LocalImageFieldOutput', id: string, url: string, width: number, height: number } | null | undefined }> | null | undefined }> | null | undefined };

export type GetProjectByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProjectByIdQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: string, title?: string | null | undefined, demo?: string | null | undefined, source?: string | null | undefined, description?: { __typename?: 'Project_description_Document', document: any } | null | undefined, images?: Array<{ __typename?: 'Image', id: string, label?: string | null | undefined, image?: { __typename?: 'CloudImageFieldOutput', id: string, url: string, width: number, height: number } | { __typename?: 'LocalImageFieldOutput', id: string, url: string, width: number, height: number } | null | undefined }> | null | undefined } | null | undefined };

export type GetImagesQueryVariables = Exact<{
  where?: InputMaybe<ImageWhereInput>;
}>;


export type GetImagesQuery = { __typename?: 'Query', images?: Array<{ __typename?: 'Image', id: string, label?: string | null | undefined, image?: { __typename?: 'CloudImageFieldOutput', id: string, url: string, width: number, height: number } | { __typename?: 'LocalImageFieldOutput', id: string, url: string, width: number, height: number } | null | undefined }> | null | undefined };

export type GetImageByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetImageByIdQuery = { __typename?: 'Query', image?: { __typename?: 'Image', id: string, label?: string | null | undefined, image?: { __typename?: 'CloudImageFieldOutput', id: string, url: string, width: number, height: number } | { __typename?: 'LocalImageFieldOutput', id: string, url: string, width: number, height: number } | null | undefined } | null | undefined };

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
    ${ImageFragmentFragmentDoc}`;
export const GetProjectsDocument = gql`
    query GetProjects($where: ProjectWhereInput = {}) {
  projects(where: $where) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;

export function useGetProjectsQuery(options?: Omit<Urql.UseQueryArgs<GetProjectsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProjectsQuery>({ query: GetProjectsDocument, ...options });
};
export const GetProjectByIdDocument = gql`
    query GetProjectById($id: ID!) {
  project(where: {id: $id}) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;

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