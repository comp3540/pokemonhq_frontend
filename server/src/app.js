const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback');
const Mongoose = require('mongoose');
dotenv.config();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(history());
app.use(express.static(path.join(__dirname, './../../client/dist')));
require('./routes')(app);
require('./passport');

Mongoose.connect('mongodb://localhost/pokemonhq').then((client) => {
  app.listen(process.env.PORT || 8081);
  console.log('server started');
}).catch((err) => {
  console.log(err);
});
