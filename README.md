# Book Store

## Installation

Follow below steps to run the project on local environment

1. `yarn install`
2. `cp .env.example .env`
3. `Open pg admin`
4. `create a database name "book-store" as mention in .env file`
   `in .env file DB_USER and DB_PASSWORD use as your pg admin have.`
5. Run below command
   `npx knex migrate:make init --migrations-directory src/config/migrations --knexfile knexfile.ts --client pg`
6. Copy src/config/migrations/20240708193228_init.js and past into new created ....init.js file on migrations folder file
7. Then run below command
   `npx knex migrate:latest --knexfile src/config/knexfile.ts`
8. Finally run `yarn dev`
