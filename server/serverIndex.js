const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
var proxy = require('express-http-proxy');
const cors = require('cors');
const path = require('path');
const ourfaker = require('../database/seed.js');
const Restaurent_Gallery = require('../database/Image.js');
const Restaurant_Names = require('../database/restaurant.js');
// const postGresDB = require('../database/postGres/postGres.js')
const cassandra = require('../database/cassandra/cassandra.js');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || '3004';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, `../public`)));

app.get('/csv', (req, res) => {
  const file = fs.createWriteStream('./testdata.csv');
  file.setMaxListeners(100000000);
  let i = 10000000;
  const cb = () => {
    console.log('FINISHED');
  };
  console.log('started');
  let write = () => {
    if (i % 1000000 === 0) {
      console.clear();
    }
    while (i >= 1) {
      console.log(i);
      if (i === 10000000) {
        file.write('id*date*name*photoobj \n', 'UTF8');
      }
      let id = i + '*';
      let str = csvFN();
      str = id.concat(str);
      i--;
      if (i === 1) {
        file.write(str, 'UTF8', cb);
      } else {
        const check = file.write(str, 'UTF8');
        if (!check) {
          file.once('drain', write);
          break;
        }
      }
    }
  };
  write();
});

// app.get("/restNames", (req, res)=>{
//   Restaurant_Names.find({}, (err, result)=>{
//     if(err){
//       res.json(0);
//     }else{
//       res.json(result);
//     }
//   });
// });

app.get('/:rest_id', (req, res) => {
  //findOne({ res_id: req.params.rest_id }, (err, response) => {
  //   if (err) {
  //     res.json(0);
  //   } else {
  //     res.json(response);
  //   }
  // });
  //this is the read route
});

app.delete('/:rest_id', (req, res) => {
  //this is the delete rest from data base endpoint
});

app.patch('/:rest_id', (req, res) => {
  //this is the update route
});

app.post('/', (req, res) => {
  //this is the create route
});

app.listen(PORT, () => {
  console.log(`Now are listening on port ${PORT}`);
});
