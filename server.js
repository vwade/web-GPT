const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database!');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(error => {
    console.error(error);
  });

