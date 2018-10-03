// this is where we are going to set up our server and connect it to MongoDB

'use strict'


// import our npm packages
// import cors from 'cors';
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
const cors = require('cors');
const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

// set up express router
const app = express();
const router = express.Router();

// connect to mongoose
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/MERN-starter'
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(bodyParser.json(), cors())

// require-in our routes
app.use(require('../routes/user.routes.js'));

app.all('*', (request, response) => {
  console.log('Returning a 404 from the catch-all route');
  return response.sendStatus(404);
})

//error middleware
app.use(require('./error-middleware'));



// export the start and stop variables that turn our server off and on and log what port we are on.
const start = modules.exports = () => {
  app.listen(PORT, () => {
    console.log('Listening on port: ${PORT}')
  })
}

const stop = module.exports = () => {
  app.close(PORT, () => {
    console.log('Shut down on port: ${PORT}')
  })
}
