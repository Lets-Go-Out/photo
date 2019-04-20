const cassandra = require('cassandra-driver');


const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'sdc' });


//table
// CREATE TABLE restaurants (id int, name text, date text, photoobj text, PRIMARY KEY (id))
//seed
// COPY sdc.restaurants FROM '/Users/benpoling/documents/ghrphx01/sdc/photo/testdata.csv' WITH DELIMITER='*' AND HEADER=TRUE AND MINBATCHSIZE=17 AND MAXBATCHSIZE=17 AND CHUNKSIZE=5000 AND INGESTRATE=300000;