const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');

const Restaurant_Gallery = require('../database/Image.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/../public'));


// get the whole list of restaurants
app.get('/api/restaurants', function(req, res){
  Restaurant_Gallery.find(function(err, results){
    if(err){
      throw err;
    }else{
      res.send(results);
    }
  });
});

//get info of specific restaurant by id
app.get('/api/restaurants/:rest_id', function(req, res){
  Restaurant_Gallery.find({res_id: req.params.rest_id},
     function(err, response){
        if(err){
          res.json(0);
        }else{
          res.json(response);
        }
     }

  )
});





app.listen(PORT, () => {
  console.log(`Now are listening on port ${PORT}`);
});
