
//postgres generating script
const restaurant = sequelize.define('restaurants', {
  // attributes
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING(50) },
  date: { type: Sequelize.STRING(10) },
  photoobj: { type: Sequelize.STRING(4000) },
}, {
  // options
  timestamps: false,
});

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)

  // let quer = `LOAD DATA LOCAL INFILE '/Users/benpoling/documents/ghrphx01/SDC/photo/data.csv' INTO TABLE restaurants FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' (name,date,photoObj)`;
  let quer = `copy restaurants (name,date,photoobj) from '/Users/benpoling/documents/ghrphx01/SDC/photo/pg.csv' DELIMITER '*' CSV`;
  sequelize.query(quer).then((data) => console.log(data))
});


module.exports = sequelize;

//cassanda cqlsh script 
// COPY sdc.restaurants FROM '/Users/benpoling/documents/ghrphx01/sdc/photo/testdata.csv' WITH DELIMITER='*' AND HEADER=TRUE AND MINBATCHSIZE=17 AND MAXBATCHSIZE=17;