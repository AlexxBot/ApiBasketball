const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/basketball_api',{
    useMongoClient: true
}).then(db => console.log('db is conected'))
  .catch(err => console.log(err));
//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
//start the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});