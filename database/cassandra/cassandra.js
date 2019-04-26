const cassandra = require('cassandra-driver');
// const cluster = cassandra.Cluster;
const client = new cassandra.Client({
  contactPoints: ['18.236.64.38', '52.88.244.50', '54.200.118.111'],
  localDataCenter: 'us-west-2',
  keyspace: 'sdc'
});
client.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected!');
  }
});
const query = 'SELECT * FROM restaurants WHERE id = 900';
client.execute(query).then(result => console.log(result));
// let cluster = Cluster(['172.31.18.204', '172.31.23.45', '172.31.21.205']);
//table
// CREATE TABLE restaurants (id int, date text, name text, photoobj text, PRIMARY KEY (id))
//seed
// COPY sdc.restaurants FROM '/Users/benpoling/documents/ghrphx01/sdc/photo/testdata.csv' WITH DELIMITER='*' AND HEADER=TRUE AND MINBATCHSIZE=17 AND MAXBATCHSIZE=17 AND CHUNKSIZE=5000 AND INGESTRATE=300000;
// /home/ec2-user
//COPY sdc.restaurants FROM '/home/ec2-user/data.csv' WITH DELIMITER='*' AND HEADER=TRUE AND MINBATCHSIZE=17 AND MAXBATCHSIZE=17 AND CHUNKSIZE=5000;
// 172.31.18.204
// 172.31.23.45
// 172.31.21.205
