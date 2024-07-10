import dotenv from 'dotenv';
dotenv.config();

const { DB_CLIENT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const config = {
  development: {
    client: DB_CLIENT,
    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
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
