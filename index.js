'use strict';

// copied from class1b demo

require('dotenv').config();

const server = require('./server');

server.start(process.env.PORT);

