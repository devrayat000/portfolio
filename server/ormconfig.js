/**
 * @type {import('typeorm').ConnectionOptions}
 */
module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ppooii12',
  database: 'portfolio',
  entities: ['src/models/*.ts'],
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'portfolio_migration',
  // synchronize: true,
  logging: true,
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/migrations',
  },
}
