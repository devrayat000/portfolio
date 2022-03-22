import Image from '$models/image'
import Project from '$models/project'
import { ImageRefactoring1642153647340 } from 'migrations/1642153647340-ImageRefactoring'
import {
  createConnection,
  getConnectionOptions,
  // getConnection,
  //   getMetadataArgsStorage,
} from 'typeorm'

// import { connConfig } from './dbConfig'

// let connectionReadyPromise: Promise<void> | null = null

export const connection = (async () => {
  const options = await getConnectionOptions()
  return createConnection({
    ...options,
    entities: [Project, Image],
    migrations: [ImageRefactoring1642153647340],
  })
})()

// let cached = (global as any).pg
// if (!cached) cached = (global as any).pg = {}

// export function getConn() {
//   console.log(cached.conn)

//   if (!cached.conn) cached.conn = createConnection(connConfig)
//   return cached.conn
// }

// declare global {
//   namespace NodeJS {
//     export interface Global {
//       pg: { conn?: Promise<Connection> }
//     }
//   }
// }
