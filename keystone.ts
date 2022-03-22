/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from '@keystone-6/core'

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema'

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from './auth'
import { env } from './utils/env'

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    // db: {
    //   provider: 'postgresql',
    //   url: env(
    //     'DATABASE_URL',
    //     'postgres://postgres:ppooii12@localhost:5432/portfolio'
    //   ),
    //   onConnect: async context => {
    //     /* ... */
    //   },
    //   // Optional advanced configuration
    //   enableLogging: env('NODE_ENV') !== 'production',
    //   useMigrations: true,
    //   idField: { kind: 'cuid' },
    // },
    db: {
      provider: 'sqlite',
      url: 'file:./app.db',
      idField: { kind: 'cuid' },
      enableLogging: true,
      useMigrations: true,
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: context => !!context.session?.data,
    },
    server: {
      port: env.int('PORT', 3001),
    },
    lists,
    session,
    images: {
      upload: 'local',
      local: {
        baseUrl: '/images',
        storagePath: 'public/images',
      },
    },
    graphql: {
      playground: true,
    },
    experimental: {
      generateNodeAPI: true,
      generateNextGraphqlAPI: true,
      enableNextJsGraphqlApiEndpoint: true,
    },
  })
)
