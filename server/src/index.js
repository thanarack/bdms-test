/* This is importing the dotenv package and configuring it. */
const dotenv = require('dotenv');
dotenv.config();

/* This is importing all the dependencies that are needed for the backend. */
const express = require('express');
const { createServer } = require('http');
const bodyParser = require('body-parser');
const { cleanEnv, num } = require('envalid');
const cors = require('cors');
const Routes = require('./routes');

/* Reading the .env file and setting the port number to 4000. */
const env = cleanEnv(process.env, {
  APP_PORT: num({ default: 4000 }),
});

/* Creating a server using the express app. */
const app = express();
const server = createServer(app);

/* This is allowing the frontend to access the backend. */
app.use(cors());
app.use(express.static('public'));

/* Parsing the body of the request. */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Using the routes file to handle all the requests. */
app.use('/v1', Routes(express.Router()));

/* Listening to the port number that is defined in the .env file. */
server.listen(env.APP_PORT, () => {
  console.log(`Application started on port ${env.APP_PORT}`);
});
