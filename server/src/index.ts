import '$utils/dotenv'
import express, { Express } from 'express'
import cors from 'cors'
import logger from 'morgan'
import { graphqlUploadExpress } from 'graphql-upload'

import { startServer } from '$utils/apollo'

const app: Express = express(),
  api: Express = express()

app.set('port', process.env.PORT ?? 3001)

app.use(express.json())
app.use(express.urlencoded())

app.use('/image', express.static('image'))

app.use(logger('dev'))
app.use(cors())

api.use(graphqlUploadExpress())
app.use('/api', api)

if (__DEV__) {
  app.get('/', (req, res) => {
    res.send('Hi ya all!! (edited twice!)')
  })
}

async function listen() {
  await startServer({ app: api })

  const port = app.get('port')

  await new Promise<void>(r => app.listen(port, r))
  console.log(`>_ http://localhost:${port}`)
}

export { app, listen }
export default app
