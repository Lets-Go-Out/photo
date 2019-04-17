const Sequelize = require('sequelize');
const mySQL = require('mysql');

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


const restaurant = sequelize.define('restaurants', {
  // attributes
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING(50) },
  photoObj: { type: Sequelize.STRING(4000) },
}, {
  // options
  timestamps: false,
});


sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
      
  let quer = `LOAD DATA LOCAL INFILE '/Users/benpoling/documents/ghrphx01/SDC/photo/data.csv' INTO TABLE restaurants FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' (name,photoObj)`;

  sequelize.query(quer).then((data) => console.log(data))
});

module.exports = sequelize;
