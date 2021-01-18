require('dotenv').config();

module.exports = {
  development: {
    username: 'tester',
    password: 'test',
    database: 'lumapple',
    host: '173.23.0.1',
    port: '5432',
    dialect: 'postgres',
    define: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    quoteIdentifiers: false
  }
};
