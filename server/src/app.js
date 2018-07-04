const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
const Mongoose = require('mongoose');
const config = require('./config/config');
dotenv.config();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);
require('./passport');

Mongoose.connect('mongodb://' + config.db.username + ':' + config.db.password + '@ds125821.mlab.com:25821/' + config.db.database).then((client) => {
  app.listen(process.env.PORT || 8081);
  console.log('server started');
}).catch((err) => {
  console.log(err);
});
