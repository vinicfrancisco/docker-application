import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: 'db',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
  },
});

export default db;
