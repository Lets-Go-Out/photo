const mongoose = require("mongoose");
//const dockerdb = "photodb:27017";
//const dockerdb = "localhost"

//const mongoUri = `mongodb://${dockerdb}/restaurant_images`;
const mongoUri = `mongodb://localhost/restaurant_images`;

const db = mongoose.connect(mongoUri);

module.exports = db;
