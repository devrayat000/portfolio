import { GraphQLScalarType, Kind } from 'graphql'
import { GraphQLUpload } from 'graphql-upload'

import { extractFields } from '$utils/extract_fields'
import { processImage, processMultipleImage } from '$utils/process_image'
import type {
  Resolvers as IResolvers,
  Image as IImage,
  InputMaybe,
} from '$graphql/generated'
import type { default as Project } from '$models/project'
import type { default as Image } from '$models/image'

type Omitx<T extends object, K extends keyof T> = Omit<T, K>
type ImageInput = Omitx<
  IImage,
  '__typename' | '_id' | 'createdAt' | 'altText'
> & {
  altText: InputMaybe<string>
}

const resolvers: IResolvers<ApolloContext> = {
  Query: {
    projects(_parent, { where, sort }, { dataSources }, info) {
      const fields = extractFields<Project>(info)

      return dataSources.project.getProjects(where, sort, fields)
    },
    project(_parent, { slug }, { dataSources }) {
      return dataSources.project.getProjectBySlug(slug)
    },
    images(_parent, { where, sort }, { dataSources }) {
      console.log(sort)

      return dataSources.image.getImages(where, sort)
    },
    image(_parent, { id }, { dataSources }) {
      return dataSources.image.getImageById(id)
    },
  },
  Mutation: {
    // Project Mutation
    async createProject(_parent, { input, images }, { dataSources }) {
      const newProject = await dataSources.project.createProject(input, images)

      if (images) {
        const inputs = await processMultipleImage(images)
        const newImages = await dataSources.image.createImages(
          newProject._id,
          inputs
        )

        newProject.images = newImages
      }

      return newProject
    },
    updateProject(_parent, { id, input }, { dataSources }) {
      console.log('Input', input)
      return dataSources.project.updateProject(id, input)
    },
    deleteProject(_parent, { id }, { dataSources }) {
      return dataSources.project.deleteProject(id)
    },
    // Image Mutation
    async createImages(_parent, { projectId, input }, { dataSources }) {
      const newInputs = await processMultipleImage(input)

      return dataSources.image.createImages(projectId, newInputs)
    },
    async updateImage(_parent, { id, input }, { dataSources }) {
      const { name, altText, image } = input
      let params: Partial<ImageInput> = { name, altText }

      if (image) {
        const { url, mimetype, encoding } = await processImage(image)
        params = { ...params, url, mimetype, encoding }
      }

      return dataSources.image.updateImage(id, params)
    },
    deleteImage(_parent, { id }, { dataSources }) {
      return dataSources.image.deleteImage(id)
    },
    //
    // async singleUpload(parent, { upload }, ctx) {
    //   const { createReadStream, filename, mimetype, encoding } = await upload

    //   // Invoking the `createReadStream` will return a Readable Stream.
    //   // See https://nodejs.org/api/stream.html#stream_readable_streams
    //   const stream = createReadStream()

    //   // This is purely for demonstration purposes and will overwrite the
    //   // local-file-output.txt in the current working directory on EACH upload.
    //   const { createWriteStream } = await import('fs')
    //   const out = createWriteStream(`public/${filename}`)
    //   stream.pipe(out)
    //   await finished(out)

    //   return { filename, mimetype, encoding }
    // },
  },
  Project: {
    // images(parent, args, { dataSources }, info) {
    //   if (parent.images && parent.images.length > 0) {
    //     return parent.images
    //   }
    //   const fields = extractFields<Image>(info)
    //   return dataSources.image.loader.load({
    //     id: parent._id,
    //     fields: [...fields],
    //   })
    // },
  },
  Upload: GraphQLUpload,
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Scalar for Javascript Date',
    parseValue(input) {
      if (typeof input !== 'string') {
        throw new TypeError('Invalid value for date serialization')
      }
      return new Date(input)
    },
    serialize(output) {
      if (!(output instanceof Date)) {
        throw new TypeError('Invalid value for date deserialization')
      }
      return output.toISOString()
    },
    parseLiteral(valueNode) {
      if (valueNode.kind !== Kind.STRING) {
        throw new TypeError('Invalid hard-coded value (not an string)')
      }
      return new Date(valueNode.value)
    },
  }),
}

export default resolvers
