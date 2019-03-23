const mongoose = require("mongoose");
//const dockerdb = "photodb:27017";
//const dockerdb = "localhost"

//const mongoUri = `mongodb://${dockerdb}/restaurant_images`;
//const mongoUri = `mongodb://localhost/restaurant_images`;
const mongoUri = process.env.MONGODB_URI || `mongodb://lana:lana1234@ds123896.mlab.com:23896/photo`

const db = mongoose.connect(mongoUri);

module.exports = db;
