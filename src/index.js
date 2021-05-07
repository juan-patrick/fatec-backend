require('./database');
require('dotenv')

const app = require('./server');

app.listen(3333 || process.env.PORT, () => {
  console.log({
    server: 'http://localhost:3333',
    database: process.env.DB_DIALECT,
    orm: 'sequelize'
  });
});