require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
var proxy = require('express-http-proxy');
const cors = require('cors');
const path = require('path');
const postGresDB = require('../database/postGres/postGres.js');
// const cassandra = require('../database/cassandra/cassandra.js');

const app = express();
const PORT = process.env.PORT || '3004';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, `../public`)));

app.get('/loaderio-a19109ac61015c0029ec1bfba0e1a603.txt', (req, res) => {
  console.log('HDIOWAJDIOJAWOIDAHIDOAWJDIO');
  res.sendFile(
    '/Users/benpoling/documents/ghrphx01/sdc/photo/loaderio-a19109ac61015c0029ec1bfba0e1a603.txt'
  );
});
app.get('/loaderio-a19109ac61015c0029ec1bfba0e1a603.html', (req, res) => {
  console.log('HDIOWAJDIOJAWOIDAHIDOAWJDIO');
  res.sendFile(
    '/Users/benpoling/documents/ghrphx01/sdc/photo/loaderio-a19109ac61015c0029ec1bfba0e1a603.txt'
  );
});
app.get('/loaderio-a19109ac61015c0029ec1bfba0e1a603/', (req, res) => {
  console.log('HDIOWAJDIOJAWOIDAHIDOAWJDIO');
  res.sendFile(
    '/Users/benpoling/documents/ghrphx01/sdc/photo/loaderio-a19109ac61015c0029ec1bfba0e1a603.txt'
  );
});
app.get('/restNames', (req, res) => {
  let quer = 'SELECT * FROM restaurants LIMIT 100';
  postGresDB.query(quer).then(data => res.send(data[data.length - 1].rows));
});

app.get('/:rest_id', (req, res) => {
  //get single route
  let id = req.params.rest_id;
  if (isNaN(id) !== true) {
    let quer = 'SELECT * FROM restaurants WHERE id=' + id;
    postGresDB.query(quer).then(data => {
      if (data[0].length === 0) {
        res.status(404);
        res.send(data[0]);
      } else {
        res.send(data[0][0]);
      }
    });
  }
});

app.delete('/:rest_id', (req, res) => {
  //this is the delete rest from data base endpoint
  let id = req.params.rest_id;
  if (typeof Number(id) === 'number') {
    let quer = 'DELETE FROM restaurants WHERE id=' + id;
    postGresDB.query(quer).then(data => res.send(data));
  }
});

app.patch('/:rest_id', (req, res) => {
  //this is the update route
  let id = req.params.rest_id;
  if (typeof Number(id) === 'number') {
    let name = req.body.name;
    let date = req.body.date;
    let photoobj = JSON.stringify(req.body.photoobj);
    let quer = `UPDATE restaurants SET name = '${name}', date = '${date}', photoobj = '${photoobj}' WHERE id=${id};`;
    postGresDB.query(quer).then(data => console.log(data, 'THIS IS THE DATA MMOOOFOOFFF'));
  }
});

app.post('/', (req, res) => {
  //this is the create route
  let name = req.body.name;
  let date = req.body.date;
  let photoobj = JSON.stringify(req.body.photoobj);
  let quer = `INSERT INTO restaurants (name,date,photoobj) VALUES('${name}','${date}','${photoobj}')`;
  postGresDB.query(quer).then(data => res.send(data));
});

app.listen(PORT, () => {
  console.log(`Now are listening on port ${PORT}`);
});
