const express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(express.static('public'));
  app.use('/components', express.static('bower_components'));

  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({
    extended: true
  })); // support encoded bodies
};
