const faker = require('faker');
const fs = require('fs');
const Restaurent_Gallery = require('./Image.js')

let ourfaker =[];
  let imageCounter = 1;
  for (i = 1; i < 101; i++) {
    let data = {};
    data.res_id = i;
      let images_array = [];
      for (j = 1; j < faker.random.number(10) + 6; j++) {
        let image_object ={};
        image_object.image_id = (i * 100) + j;
        image_object.image_url = 'https://s3-us-west-1.amazonaws.com/lanakhan/img' + imageCounter + '.jpg';
        if (imageCounter == 57) {
          imageCounter = 0;
        }
        imageCounter++;
        image_object.description = faker.lorem.sentence();
        image_object.taken_by = faker.name.findName();
        images_array.push(image_object);
      }
    data.images_array = images_array;
    ourfaker.push(data);
    console.log(ourfaker);
  }
Restaurent_Gallery.create(ourfaker);


