const express = require('express');
const path = require('path');

var app = express();
const dirpath = path.join(__dirname,'/../public');

app.use(express.static(dirpath));

app.get('/', (req, res) =>{
  res.send('Tell it to stop');
});

app.listen(3000, () => {
  console.log('server is up');
});
