import { ConnectionOptions } from 'typeorm'

import Image from '$models/image'
import Project from '$models/project'

export const connConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ppooii12',
  database: 'portfolio',
  entities: [Project, Image],
  synchronize: true,
  logging: true,
}

// let cached = (global as any).pg
// if (!cached) cached = (global as any).pg = {}

// if (!cached.conn) cached.conn = createConnection(connConfig)

// export const connection = cached.conn
