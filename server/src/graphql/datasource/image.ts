import { DataSourceConfig } from 'apollo-datasource'
import DataLoader from 'dataloader'

import {
  CreateImageInput,
  ImagesBy,
  ImagesFilter,
  ImagesSort,
  InputMaybe,
  UpdateImageInput,
  Image as IImage,
} from '$graphql/generated'
import NotFoundError from '$utils/not_found_error'
import Image from '$models/image'
import { QueryInfo } from 'types/dataloader_input'
import TypeormDataSource from '.'

type Omitx<T extends object, K extends keyof T> = Omit<T, K>
type ImageInput = Omitx<
  IImage,
  '__typename' | '_id' | 'createdAt' | 'altText'
> & {
  altText?: InputMaybe<string>
}

export default class ImageAPI<
  TContext extends object = {}
> extends TypeormDataSource<Image, TContext> {
  override readonly loader = new DataLoader<QueryInfo<Image>, Image[]>(
    async info => {
      const ids = info.map(i => i.id)
      const fields: Array<keyof Image> = info[0].fields

      let query = this.builder

      if (fields && fields.length > 0) {
        fields.push('projectId')

        query = query.select(fields.map(f => 'image.' + f))
      }

      const images = await query
        .where('image.project_id IN (:...ids)', { ids })
        .getMany()

      return ids.map(id => {
        return images.filter(image => image.projectId === id)
      })
    }
  )

  getImages(
    where?: InputMaybe<ImagesFilter>,
    sort?: InputMaybe<ImagesSort>
  ): Promise<Image[]> {
    let query = this.builder.select()
    if (!!where) {
      let whereArr: string[] = []
      if (where.after) {
        whereArr.push('image.created_at > :after')
      }
      if (where.before) {
        whereArr.push('image.created_at < :before')
      }
      query = query.where(whereArr.join(' AND '), { ...where })
    }

    query = query.orderBy(sort?.by ?? ImagesBy.NAME, sort?.order ?? 'ASC')

    return query.getMany()
  }

  async getImageById(id: string): Promise<Image> {
    const image = await this.builder
      .select()
      .where('image._id = :id', { id })
      .limit(1)
      .getOne()

    if (!image) {
      throw new NotFoundError(`Image of id [${id}] not found`)
    }
    return image
  }

  async createImages(projectId: string, input: ImageInput[]): Promise<Image[]> {
    const result = await this.builder
      .insert()
      .values(input.map(i => ({ ...i, projectId })))
      .returning('*')
      .execute()

    return result.generatedMaps.map(m => Image.create(m))
  }

  async updateImage(id: string, input: Partial<ImageInput>): Promise<Image> {
    const result = await this.builder
      .update({ ...input })
      .where('image._id = :id', { id })
      .returning('*')
      .execute()

    return Image.create(result.generatedMaps[0])
  }

  async deleteImage(id: string): Promise<Image> {
    const result = await this.builder
      .delete()
      .where('image._id = :id', { id })
      .returning('*')
      .execute()

    return Image.create(result.raw[0] as Image)
  }

  override async initialize(config: DataSourceConfig<TContext>): Promise<void> {
    super.initialize(config)
    this.builder = this.connection.createQueryBuilder(Image, 'image')
  }
}
