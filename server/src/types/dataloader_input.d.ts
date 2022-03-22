import type { BaseEntity } from 'typeorm'

export interface QueryInfo<IEntity extends BaseEntity, IKey = string> {
  fields: Array<keyof IEntity>
  id: IKey
}
