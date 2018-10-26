const express = require('express');
const bodyParser = require('body-parser');
var faker = require('faker');

const Restaurent_Gallerys = require('../database/Image.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '../public'));


// after database is populated it will populate..
app.get('/api/rest', function(req, res) {
  Restaurent_Gallerys.find({})
        .exec()
      .then(restaurents => {
          res.status(200).json({
              restaurents
          });
      })
      .catch(err => {
          console.log(err)
      });
});

app.get('/api/user', function(req, res) {
  var ourfaker =[];
  var imageCounter = 1;
  for (i = 1; i < 101; i++) {
    var data = {};
    data.res_id = i;
      var images_array = [];
      for (j = 1; j < 11; j++) {
            var image_object ={};
            image_object.image_id = (i* 100) + j;
            //image_object.image_url = faker.image.food();
            image_object.image_url = 'https://s3-us-west-1.amazonaws.com/lanakhan/img' + imageCounter + '.jpg';
            if (imageCounter == 57) {imageCounter = 0;}
            imageCounter++;
            image_object.description = faker.lorem.sentence();
            image_object.taken_by = faker.name.findName();
            images_array.push(image_object);
          }
    data.images_array = images_array;
    ourfaker.push(data);
  }

  res.json(ourfaker)
});



app.listen(PORT, () => {
  console.log(`Now are listening on port ${PORT}`);
});
