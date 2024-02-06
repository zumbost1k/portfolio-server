require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUploud = require('express-fileupload');
const sequelize = require('./db');
const path = require('path');
require('./models/models');

const router = require('./routes/index');
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUploud());

app.use('/api', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log('server started on port ' + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
