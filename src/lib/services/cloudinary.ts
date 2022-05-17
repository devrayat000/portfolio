import { Cloudinary } from '@cloudinary/url-gen'

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'buet',
  },
  url: {
    shorten: true,
    signUrl: true,
  },
})
