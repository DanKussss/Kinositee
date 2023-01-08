const { config } = require('dotenv');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname+'/www'));
const port = process.env.PORT || 8080;
// npm run start (code will run for site)
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});

app.post('/signup', function(req,res) {
  console.log(req.body);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

