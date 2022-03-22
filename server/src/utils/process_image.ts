import { Upload } from 'graphql-upload'
import { createWriteStream } from 'fs'

import { finished } from 'stream/promises'
import {
  CreateImageInput,
  UpdateImageInput,
  Image as IImage,
  InputMaybe,
} from '$graphql/generated'

type Omitx<T extends object, K extends keyof T> = Omit<T, K>
type ImageInput = Omitx<
  IImage,
  '__typename' | '_id' | 'createdAt' | 'altText'
> & {
  altText: InputMaybe<string>
}

export async function processImage(upload: Upload) {
  const { createReadStream, filename, mimetype, encoding } = await upload

  // Invoking the `createReadStream` will return a Readable Stream.
  // See https://nodejs.org/api/stream.html#stream_readable_streams
  const stream = createReadStream()

  // This is purely for demonstration purposes and will overwrite the
  // local-file-output.txt in the current working directory on EACH upload.
  const out = createWriteStream(`image/${filename}`)
  stream.pipe(out)
  await finished(out)

  return { url: filename, mimetype, encoding }
}

export async function processImageInput(input: CreateImageInput) {
  const { name, altText, image } = input
  return { ...(await processImage(image)), name, altText }
}

export async function processMultipleImage(inputs: CreateImageInput[]) {
  return await Promise.all(inputs.map(processImageInput))
}
