const cassandra = require('cassandra-driver');


const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'sdc' });


const query = `copy restaurants (id,name,date,photoobj) from '/Users/benpoling/documents/ghrphx01/SDC/photo/testdata.csv' DELIMITER '*' WITH HEADER = FALSE;`
// const query = `INSERT INTO restaurants (id,date,name,photoobj) VALUES (now(),'1/12/30','another','thing');`;
client.execute(query).then(data => console.log(data));

COPY sdc.restaurants FROM '/Users/benpoling/documents/ghrphx01/sdc/photo/testdata.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY sdc.restaurants FROM '/Users/benpoling/documents/ghrphx01/sdc/photo/testdata.csv' WITH DELIMITER=',' AND HEADER=TRUE;