const mongoose = require('mongoose');
const db = require('./myConnection.js');
mongoose.Promise = global.Promise;

const restNameSchema = new mongoose.Schema({
  
  restName: String,
  
});




const RestName = mongoose.model('RestName', restNameSchema);

module.exports = RestName;