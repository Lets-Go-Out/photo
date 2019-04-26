const request = require('request');

for (let i = 0; i < 1000; i++) {
  request('http://localhost:3004/', (err, resp, body) => {});
}
