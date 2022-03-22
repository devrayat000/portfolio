import { Upload } from 'graphql-upload';
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
  Date: any;
  Upload: Upload;
};

export interface Base {
  _id: Scalars['ID'];
  createdAt: Scalars['Date'];
}

export interface CreateImageInput {
  altText?: InputMaybe<Scalars['String']>;
  image: Scalars['Upload'];
  name: Scalars['String'];
}

export interface CreateProjectInput {
  demo?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  slug: Scalars['String'];
  sourceCode: Scalars['String'];
  title: Scalars['String'];
}

export interface File {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
}

export interface Image extends Base {
  __typename?: 'Image';
  _id: Scalars['ID'];
  altText: Scalars['String'];
  createdAt: Scalars['Date'];
  encoding: Scalars['String'];
  mimetype: Scalars['String'];
  name: Scalars['String'];
  url: Scalars['String'];
}

export enum ImagesBy {
  ALT_TEXT = 'alt_text',
  CREATED_AT = 'created_at',
  NAME = 'name'
}

export interface ImagesFilter {
  after?: InputMaybe<Scalars['Date']>;
  before?: InputMaybe<Scalars['Date']>;
}

export interface ImagesSort {
  by?: InputMaybe<ImagesBy>;
  order?: InputMaybe<Order>;
}

export interface Mutation {
  __typename?: 'Mutation';
  createImages?: Maybe<Array<Image>>;
  createProject: Project;
  deleteImage: Image;
  deleteProject: Project;
  singleUpload: File;
  updateImage: Image;
  updateProject: Project;
}


export interface MutationcreateImagesArgs {
  input: Array<CreateImageInput>;
  projectId: Scalars['ID'];
}


export interface MutationcreateProjectArgs {
  images?: InputMaybe<Array<CreateImageInput>>;
  input: CreateProjectInput;
}


export interface MutationdeleteImageArgs {
  id: Scalars['ID'];
}


export interface MutationdeleteProjectArgs {
  id: Scalars['ID'];
}


export interface MutationsingleUploadArgs {
  upload: Scalars['Upload'];
}


export interface MutationupdateImageArgs {
  id: Scalars['ID'];
  input: UpdateImageInput;
}


export interface MutationupdateProjectArgs {
  id: Scalars['ID'];
  input: UpdateProjectInput;
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface Project extends Base {
  __typename?: 'Project';
  _id: Scalars['ID'];
  createdAt: Scalars['Date'];
  demo?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  images: Array<Image>;
  slug: Scalars['String'];
  sourceCode: Scalars['String'];
  title: Scalars['String'];
}

export enum ProjectsBy {
  CREATED_AT = 'created_at',
  TITLE = 'title'
}

export interface ProjectsFilter {
  after?: InputMaybe<Scalars['Date']>;
  before?: InputMaybe<Scalars['Date']>;
  hasDemo?: InputMaybe<Scalars['Boolean']>;
  hasImage?: InputMaybe<Scalars['Boolean']>;
}

export interface ProjectsSort {
  by?: InputMaybe<ProjectsBy>;
  order?: InputMaybe<Order>;
}

export interface Query {
  __typename?: 'Query';
  image: Image;
  images: Array<Image>;
  project: Project;
  projects: Array<Project>;
}


export interface QueryimageArgs {
  id: Scalars['ID'];
}


export interface QueryimagesArgs {
  sort?: InputMaybe<ImagesSort>;
  where?: InputMaybe<ImagesFilter>;
}


export interface QueryprojectArgs {
  slug: Scalars['String'];
}


export interface QueryprojectsArgs {
  sort?: InputMaybe<ProjectsSort>;
  where?: InputMaybe<ProjectsFilter>;
}

export interface UpdateImageInput {
  altText?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface UpdateProjectInput {
  demo?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sourceCode?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Base: ResolversTypes['Image'] | ResolversTypes['Project'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  CreateImageInput: CreateImageInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateProjectInput: CreateProjectInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  File: ResolverTypeWrapper<File>;
  Image: ResolverTypeWrapper<Image>;
  ImagesBy: ImagesBy;
  ImagesFilter: ImagesFilter;
  ImagesSort: ImagesSort;
  Mutation: ResolverTypeWrapper<{}>;
  Order: Order;
  Project: ResolverTypeWrapper<Project>;
  ProjectsBy: ProjectsBy;
  ProjectsFilter: ProjectsFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ProjectsSort: ProjectsSort;
  Query: ResolverTypeWrapper<{}>;
  UpdateImageInput: UpdateImageInput;
  UpdateProjectInput: UpdateProjectInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Base: ResolversParentTypes['Image'] | ResolversParentTypes['Project'];
  ID: Scalars['ID'];
  CreateImageInput: CreateImageInput;
  String: Scalars['String'];
  CreateProjectInput: CreateProjectInput;
  Date: Scalars['Date'];
  File: File;
  Image: Image;
  ImagesFilter: ImagesFilter;
  ImagesSort: ImagesSort;
  Mutation: {};
  Project: Project;
  ProjectsFilter: ProjectsFilter;
  Boolean: Scalars['Boolean'];
  ProjectsSort: ProjectsSort;
  Query: {};
  UpdateImageInput: UpdateImageInput;
  UpdateProjectInput: UpdateProjectInput;
  Upload: Scalars['Upload'];
};

export type BaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Base'] = ResolversParentTypes['Base']> = {
  __resolveType: TypeResolveFn<'Image' | 'Project', ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  altText?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImagesByResolvers = { ALT_TEXT: 'alt_text', CREATED_AT: 'created_at', NAME: 'name' };

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createImages?: Resolver<Maybe<Array<ResolversTypes['Image']>>, ParentType, ContextType, RequireFields<MutationcreateImagesArgs, 'input' | 'projectId'>>;
  createProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationcreateProjectArgs, 'input'>>;
  deleteImage?: Resolver<ResolversTypes['Image'], ParentType, ContextType, RequireFields<MutationdeleteImageArgs, 'id'>>;
  deleteProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationdeleteProjectArgs, 'id'>>;
  singleUpload?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<MutationsingleUploadArgs, 'upload'>>;
  updateImage?: Resolver<ResolversTypes['Image'], ParentType, ContextType, RequireFields<MutationupdateImageArgs, 'id' | 'input'>>;
  updateProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationupdateProjectArgs, 'id' | 'input'>>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  demo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectsByResolvers = { CREATED_AT: 'created_at', TITLE: 'title' };

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  image?: Resolver<ResolversTypes['Image'], ParentType, ContextType, RequireFields<QueryimageArgs, 'id'>>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<QueryimagesArgs, never>>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<QueryprojectArgs, 'slug'>>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryprojectsArgs, never>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Base?: BaseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  File?: FileResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  ImagesBy?: ImagesByResolvers;
  Mutation?: MutationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectsBy?: ProjectsByResolvers;
  Query?: QueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

