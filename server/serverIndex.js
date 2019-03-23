const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
var proxy = require("express-http-proxy");
const cors = require("cors");
const path = require("path");
const ourfaker = require("../database/seed.js");
const Restaurent_Gallery = require("../database/Image.js");

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
Restaurent_Gallery.create(ourfaker);
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
});

app.listen(PORT, () => {
  console.log(`Now are listening on port ${PORT}`);
});


