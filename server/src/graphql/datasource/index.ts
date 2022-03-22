import 'reflect-metadata'
import { DataSource, DataSourceConfig } from 'apollo-datasource'
import {
  BaseEntity,
  Connection,
  getConnection,
  SelectQueryBuilder,
} from 'typeorm'
import type { default as DataLoader } from 'dataloader'
import { QueryInfo } from 'types/dataloader_input'
// import { connection } from '$utils/connection'
// import { connConfig } from '$utils/dbConfig'

export default abstract class TypeormDataSource<
  TEntity extends BaseEntity,
  TContext extends object = {}
> extends DataSource<TContext> {
  protected context: TContext
  protected connection: Connection

  public builder: SelectQueryBuilder<TEntity>

  constructor(/*private connection: Connection*/) {
    super()
    // this.connection = connection
  }

  readonly loader: DataLoader<QueryInfo<TEntity>, TEntity[]>

  override async initialize(config: DataSourceConfig<TContext>): Promise<void> {
    this.context = config.context
    this.connection = getConnection()
  }
}
