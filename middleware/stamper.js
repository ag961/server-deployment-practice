'use strict';

module.exports = (request, res, next) => {
  request.timestamp = new Date();
  next();
}

