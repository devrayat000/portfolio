import graphqlFields from 'graphql-fields'
import type { GraphQLResolveInfo } from 'graphql'
import type { BaseEntity } from 'typeorm'

export function extractFields<IEntity extends BaseEntity & { _id: string }>(
  info: GraphQLResolveInfo,
  exclude?: Array<keyof IEntity>
) {
  const obj = graphqlFields(
    info as any,
    {},
    { excludedFields: ['__typename'] }
  ) as Partial<IEntity>
  obj._id = ''

  exclude?.forEach(e => {
    if (Object.prototype.hasOwnProperty.call(obj, e)) {
      delete obj[e]
    }
  })

  return obj
}
