const express = require('express');
const bodyParser = require('body-parser');
const {data} = require('./data.json');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false}));
app.use('/static', express.static('public'));
const routes = require('./routes');

app.use(routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.log('Error Status: ' + err.status);
  console.log('Error Message: ' + err.message);
  res.render('error');
});


app.listen(port, ()=>{
  console.log('Go to "localhost:3000" in your browser to view the site!');
});
