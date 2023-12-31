const http = require('http');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { errorHandler } = require('./src/utils/errorHandler');

// const { router } = require("./src/routes");
const router = express.Router();

const http = require('http');
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use(router);


app.get('/', async (req, res) => {
  try {
    return res.status(200).json({ message: "Welcome to Team2's server!" });
  } catch (err) {
    console.log(err);
  }
});


const server = http.createServer(app);
const portNumber = process.env.PORT || 8000;

const start = async () => {
  try {
    server.listen(portNumber);
    console.log(`Server is listening on ${portNumber}`);
} catch (err) {
    console.error(err);
}
};

start();
