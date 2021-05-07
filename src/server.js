const cors = require('cors');
const express = require('express');

const routes = require('./routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

module.exports = server;