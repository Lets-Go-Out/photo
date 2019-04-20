const Sequelize = require('sequelize');
const mySQL = require('mysql');

const sequelize = new Sequelize('SDC', 'root', 'password', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const restaurant = sequelize.define(
  'restaurants',
  {
    // attributes
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING(50) },
    date: { type: Sequelize.STRING(10) },
    photoobj: { type: Sequelize.STRING(4000) }
  },
  {
    // options
    timestamps: false
  }
);

sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created!`);

  let quer = `copy restaurants (name,date,photoobj) from '/Users/benpoling/documents/ghrphx01/SDC/photo/pg.csv' DELIMITER '*' CSV`;
  sequelize.query(quer).then(data => console.log(data));
});

module.exports = sequelize;

//vanilla script for postgres insertiong, might utilize later

// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'root',
//   database: 'SDC',
//   password: 'password',
//   host: 'localhost',
//   port: 5432,
// });

// const restaurant = sequelize.define('restaurants', {
//   // attributes
//   id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
//   name: { type: Sequelize.STRING(50) },
//   date: { type: Sequelize.STRING(10) },
//   photoobj: { type: Sequelize.STRING(4000) },
// }, {
//   // options
//   timestamps: false,
// });
// const tableQuer = 'CREATE TABLE IF NOT EXISTS restaurants(id SERIAL,name VARCHAR(50) NOT NULL,date VARCHAR(10) NOT NULL,photoobj VARCHAR(4000) NOT NULL)';
// pool.query(tableQuer)
//   .then((data) => {
//     const checkQuer = 'SELECT name FROM restaurants WHERE id=100000;';
//     pool.query(checkQuer, (err, data2) => {
//       if (err) {
//         // console.log(err,'THIS IS THE ERROR')
// const quer = `copy restaurants (name,date,photoobj) from '/Users/benpoling/documents/ghrphx01/SDC/photo/pg.csv' DELIMITER '*' CSV`;
// pool.query(quer, (err, data) => {
//   if (err) {
//     console.log(err, 'THIS IS THE MILLION ERROR');
//   } else {
//     console.log(data, 'THIS IS TH EMILLIAN DATA');
//   }
// });

//     } else {
//       console.log(data2, 'THIS IS THE DATA');
//     }
//   });
// });

// pool.query('SELECT (photoObj) FROM restaurants WHERE id=10000000', (err, data) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })
