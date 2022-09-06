const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname + '/static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('localhost:3000');
});
