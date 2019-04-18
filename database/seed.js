const faker = require("faker");
// const Restaurent_Gallery = require('./Image.js');

// const ourfaker = [];
// let imageCounter = 1;
// for (let i = 1; i < 101; i += 1) {
//   const data = {};
//   data.res_id = i;
//   const images_array = [];
//   for (let j = 1; j < faker.random.number(10) + 6; j += 1) {
//     const imageObject = {};
//     imageObject.image_id = i * 100 + j;
//     imageObject.image_url = `https://s3-us-west-1.amazonaws.com/lanakhan/img${imageCounter}.jpg`;
//     if (imageCounter === 57) {
//       imageCounter = 0;
//     }
//     imageCounter += 1;
//     imageObject.description = faker.lorem.sentence();
//     imageObject.taken_by = faker.name.findName();
//     images_array.push(imageObject);
//   }
//   data.images_array = images_array;
//   ourfaker.push(data);
// }

//creates image array for single row photo obj
const ourfaker = [];
let imageCounter = 1;
let randomPhotoNum = Math.floor(Math.random() * 10 + 6);
let i = 0;
const images_array = [];
for (let j = 1; j < randomPhotoNum; j += 1) {
  const randomImageURL = Math.floor(Math.random() * 57 + 1)
  const data = {};
  const imageObject = {};
  imageObject.image_id = i * 100 + j;
  imageObject.image_url = `https://s3-us-west-2.amazonaws.com/sdc-restaurant-photos/img${randomImageURL}.jpg`;
  if (imageCounter === 57) {
    imageCounter = 0;
  }
  imageCounter += 1;
  imageObject.description = 'Lorem ipsum dolor sit amet, elit enim blandit eget eu mi amet, cum vestibulum autem sapien risus vivamus, fringilla purus in.';
  imageObject.taken_by = 'Beth';
  images_array.push(imageObject);
  data.images_array = images_array;
  j === randomPhotoNum - 2 ? ourfaker.push(data) : null;
  i++
}

// Restaurent_Gallery.create(ourfaker);

module.exports = ourfaker;
