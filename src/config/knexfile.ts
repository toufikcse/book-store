import dotenv from 'dotenv';

dotenv.config();

const { DB_CLIENT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const config = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'book-store',
      user: 'postgres',
      password: '1234',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

export default config;
