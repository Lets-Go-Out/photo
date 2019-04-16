const Sequelize = require('sequelize');

const sequelize = new Sequelize('SDC', 'root', 'password', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const restaurant = sequelize.define('restaurant', {
  // attributes
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  photoObj: { type: Sequelize.STRING(5000) },
}, {
  // options
});

module.exports = sequelize;
