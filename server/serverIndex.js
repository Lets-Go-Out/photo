const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
var proxy = require("express-http-proxy");
const cors = require("cors");
const path = require("path");
const ourfaker = require("../database/seed.js");
const Restaurent_Gallery = require("../database/Image.js");
const Restaurant_Names = require("../database/restaurant.js");
const mysqlDB = require('../database/mysql/mysqDB.js')
const fs = require('fs');
const createCsvWriter = require('csv-writer').createArrayCsvWriter;


const restName = [
  { id: 1, name: 'flexibility' },
  { id: 2, name: 'THX' },
  { id: 3, name: 'Global protocol B2C' },
  { id: 4, name: 'Toys Landing' },
  { id: 5, name: 'Planner Computers Director' },
  { id: 6, name: 'Sleek Granite Salad' },
  { id: 7, name: 'Licensed' },
  { id: 8, name: 'Naira payment productize' },
  { id: 9, name: 'mint green' },
  { id: 10, name: 'Cheese Generic' },
  { id: 11, name: 'tertiary Designer compress' },
  { id: 12, name: 'approach Minnesota' },
  { id: 13, name: 'Central Customer Persistent' },
  { id: 14, name: 'back-end 1080p' },
  { id: 15, name: 'Sleek Fresh Hat Directives' },
  { id: 16, name: 'Dobra Corporate Jordan' },
  { id: 17, name: 'Security Rubber Bacon' },
  { id: 18, name: 'Chicken payment' },
  { id: 19, name: 'Sausages archive' },
  { id: 20, name: 'architectures' },
  { id: 21, name: 'Buckinghamshire withdrawal Gardens' },
  { id: 22, name: 'Optimized Generic bypass' },
  { id: 23, name: 'Licensed Frozen Gloves New Mexico Vision-oriented' },
  { id: 24, name: 'parse' },
  { id: 25, name: 'redundant' },
  { id: 26, name: 'Games backing up' },
  { id: 27, name: 'Corners Egyptian Pound dynamic' },
  { id: 28, name: 'Sleek Money Market Account' },
  { id: 29, name: 'JBOD connect' },
  { id: 30, name: 'architectures website Burg' },
  { id: 31, name: 'RSS capacitor supply-chains' },
  { id: 32, name: 'responsive' },
  { id: 33, name: 'Beauty virtual Nevada' },
  { id: 34, name: 'Tunnel' },
  { id: 35, name: 'Unbranded Frozen Shoes Prairie web-enabled' },
  { id: 36, name: 'Bacon' },
  { id: 37, name: 'calculating Communications' },
  { id: 38, name: 'Investment Account Personal Loan Account' },
  { id: 39, name: 'Implementation' },
  { id: 40, name: 'Concrete' },
  { id: 41, name: 'Chief Sleek' },
  { id: 42, name: 'Fantastic' },
  { id: 43, name: 'Incredible synthesizing El Salvador' },
  { id: 44, name: 'Horizontal Accounts' },
  { id: 45, name: 'Wooden Manager port' },
  { id: 46, name: 'pixel architect' },
  { id: 47, name: 'HDD intranet Bedfordshire' },
  { id: 48, name: 'teal product' },
  { id: 49, name: 'Electronics Tokelau' },
  { id: 50, name: 'Checking Account virtual' },
  { id: 51, name: 'Borders capacitor' },
  { id: 52, name: 'Personal Loan Account' },
  { id: 53, name: 'copy Secured Handcrafted' },
  { id: 54, name: 'Michigan' },
  { id: 55, name: 'coherent Designer' },
  { id: 56, name: 'scalable Berkshire' },
  { id: 57, name: 'Gorgeous contextually-based' },
  { id: 58, name: 'Tanzanian Shilling Corners' },
  { id: 59, name: 'Dynamic Object-based Pants' },
  { id: 60, name: 'quantify Kids withdrawal' },
  { id: 61, name: 'gold' },
  { id: 62, name: 'Manager multi-byte Borders' },
  { id: 63, name: 'sensor' },
  { id: 64, name: 'metrics backing up' },
  { id: 65, name: 'mission-critical' },
  { id: 66, name: 'compress Handcrafted' },
  { id: 67, name: 'one-to-one visualize' },
  { id: 68, name: 'upward-trending database' },
  { id: 69, name: 'Practical withdrawal' },
  { id: 70, name: 'XML brand payment' },
  { id: 71, name: 'cross-platform Chief Alaska' },
  { id: 72, name: 'Consultant Credit Card Account back-end' },
  { id: 73, name: 'plug-and-play incremental' },
  { id: 74, name: 'circuit Jewelery' },
  { id: 75, name: 'haptic Cross-group turn-key' },
  { id: 76, name: 'Chilean Peso Unidades de fomento Licensed' },
  { id: 77, name: 'Cambridgeshire' },
  { id: 78, name: 'haptic card invoice' },
  { id: 79, name: 'transmitter Cheese' },
  { id: 80, name: 'Producer' },
  { id: 81, name: 'Costa Rica' },
  { id: 82, name: 'clear-thinking' },
  { id: 83, name: 'matrix systems matrix' },
  { id: 84, name: 'matrix' },
  { id: 85, name: 'Investment Account' },
  { id: 86, name: 'models Ohio' },
  { id: 87, name: 'Missouri San Marino Licensed' },
  { id: 88, name: 'interface Nakfa Games' },
  { id: 89, name: 'Trafficway Berkshire' },
  { id: 90, name: 'copy' },
  { id: 91, name: 'website' },
  { id: 92, name: 'maximize' },
  { id: 93, name: 'AGP methodology quantifying' },
  { id: 94, name: 'extranet visualize invoice' },
  { id: 95, name: 'Fresh Infrastructure' },
  { id: 96, name: 'deliverables' },
  { id: 97, name: 'yellow rich' },
  { id: 98, name: 'Distributed Granite Credit Card Account' },
  { id: 99, name: 'copy Bike Guam' },
  { id: 100, name: 'Surinam Dollar generate' },
];

let randomDate = () => {
  let month = Math.floor(Math.random() * 12 + 1);
  let day = Math.floor(Math.random() * 28 + 1);
  return `${month}/${day}/2019`;
}

let photoObjGenerator = () => {
	const ourfaker = [];
	let imageCounter = 1;
	  let randomPhotoNum = Math.floor(Math.random() * 8 + 6);
	  let i = 0;
	  const images_array = [];
	  for (let j = 1; j < randomPhotoNum; j++) {
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
	return JSON.stringify(ourfaker);
}


const csvFN = () => {
  let str = '';
  // for(let i = 0; i < 1; i++) {
    // if(i !== 0) {
    //   str += '\r\n';
    // }
    const randomNameNum = Math.floor(Math.random() * 99 + 1);
    str += restName[randomNameNum].name + '*' + randomDate() + '*' + photoObjGenerator();
    str += '\n';
  // }
  return str;
}


//app.use('/replace with my proxy', proxy('url'));
///
const Restaurant_Gallery = require("../database/Image.js");

const app = express();
const PORT = process.env.PORT || '3004';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/replace with my proxy', proxy('url'));

//app.use(express.static(path.join(__dirname, `../public`)));


//Restaurent_Gallery.create(ourfaker);


//app.use("/restaurants/:rest_id", express.static(`${__dirname}/../public`));


app.use("/", express.static(`${__dirname}/../public`));

// get the whole list of restaurants
// app.get('/api/restaurants', (req, res) => {
//   Restaurant_Gallery.find((err, results) => {
//     if (err) {
//       throw err;
//     } else {
//       res.send(results);
//     }
//   });
// });

// get info of specific restaurant by id
///restaurants/:rest_id/gallery


app.get('/csv', (req, res) => {
  const file = fs.createWriteStream('./pg.csv');
  file.setMaxListeners(100000000);
  let i = 10000001;
  const cb = () => {
    console.log('FINISHED')
  }
  console.log('started')
  let write = () => {
    if(i % 10000 === 0) {
      console.clear();
    }
    while(i >= 2) {
      console.log(i);
      let str = csvFN();
      i--
      if(i === 2) {
        file.write(str, 'UTF8', cb);
      } else {
        let check = file.write(str, 'UTF8');
        if(!check) {
          file.once('drain', write);
          break;
        }
      }
    }
  }
  write();
})

// app.get("/restNames", (req, res)=>{
//   Restaurant_Names.find({}, (err, result)=>{
//     if(err){
//       res.json(0);
//     }else{
//       res.json(result);
//     }
//   });
// });


app.get("/:rest_id", (req, res) => {
  Restaurant_Gallery.findOne(
    { res_id: req.params.rest_id },
    (err, response) => {
      if (err) {
        res.json(0);
      } else {
        res.json(response);
      }
    }
  );
  //this is the read route
});

app.delete('/:rest_id', (req, res) => {
  //this is the delete rest from data base endpoint
})

app.patch('/:rest_id', (req, res) => {
  //this is the update route
})

app.post('/', (req, res) => {
  //this is the create route
})

app.listen(PORT, () => {
  console.log(`Now are listening on port ${PORT}`);
});



