import { DataSourceConfig } from 'apollo-datasource'

import Project from '$models/project'
import {
  CreateImageInput,
  CreateProjectInput,
  InputMaybe,
  ProjectsBy,
  ProjectsFilter,
  ProjectsSort,
  UpdateProjectInput
} from '$graphql/generated'
import NotFoundError from '$utils/not_found_error'
import TypeormDataSource from '.'
import Image from '$models/image'

// TODO: Implement persisted query everywhere

export default class ProjectAPI<
  TContext extends ApolloContext = ApolloContext
> extends TypeormDataSource<Project, TContext> {
  async getProjects(
    where?: InputMaybe<ProjectsFilter>,
    sort?: InputMaybe<ProjectsSort>,
    fields?: Partial<Project>
  ): Promise<Project[]> {
    let query = this.builder

    if (fields) {
      let hasImages = 'images' in fields
      let image: Image | undefined = fields.images as any

      if (hasImages) {
        delete fields.images
      }

      const projectFields = Object.keys(fields).map(d => 'project.' + d)
      query = query.select(projectFields)

      if (hasImages) {
        query = query
        // .addSelect('image.name')
        .leftJoinAndSelect('project.images', 'image')
        .select(projectFields.concat(Object.keys(image!).map(d => 'image.'+d)))
      }
    }

    if (!!where) {
      let whereArr: string[] = []
      if (where.after) {
        whereArr.push('project.created_at > :after')
      }
      if (where.before) {
        whereArr.push('project.created_at < :before')
      }
      if (where.hasDemo) {
        whereArr.push('project.demo IS NOT NULL')
      }
      query = query.where(whereArr.join(' AND '), { ...where })
    }

    query = query.orderBy(sort?.by ?? ProjectsBy.TITLE, sort?.order ?? 'ASC')

    const projects = await query.getMany()
    console.log(projects);
    
    return projects
  }

  async getProjectBySlug(slug: string): Promise<Project> {
    const project = await this.builder
      .select()
      .where('project.slug = :slug', { slug })
      .limit(1)
      .getOne()

    if (!project) {
      throw new NotFoundError(`Project of slug [${slug}] not found`)
    }
    return project
  }

  async createProject(
    input: CreateProjectInput,
    images?: InputMaybe<CreateImageInput[]>
  ): Promise<Project> {
    console.log('Input2', input)

    const result = await this.builder
      .insert()
      .values({ ...input })
      .returning('*')
      .execute()
    //

    const newProject = Project.create(result.generatedMaps[0])

    return newProject
  }

  async updateProject(id: string, input: UpdateProjectInput): Promise<Project> {
    const result = await this.builder
      .update({ ...input })
      .where('project._id = :id', { id })
      .returning('*')
      .execute()

    return Project.create(result.generatedMaps[0])
  }

  async deleteProject(id: string): Promise<Project> {
    const result = await this.builder
      .delete()
      .where('project._id = :id', { id })
      .returning('*')
      .execute()

    return Project.create(result.raw[0] as Project)
  }

  override initialize(config: DataSourceConfig<TContext>): Promise<void> {
    super.initialize(config)
    this.builder = this.connection.createQueryBuilder(Project, 'project')
    return Promise.resolve()
  }
}
