const mongoose = require('mongoose');
const db = require('./myConnection.js');
mongoose.Promise = global.Promise;


const restaurantSchema = new mongoose.Schema({
	res_id: Number,
	images_array: [{
  	image_id: Number,
  	image_url: String,
  	description: String,
  	taken_by: String
  }]
});

const Restaurent_Gallery = mongoose.model('restaurent', restaurantSchema);

module.exports = Restaurent_Gallery;