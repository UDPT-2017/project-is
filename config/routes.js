var Router = require('express').Router;

var controllers = require('../app/controllers');

module.exports = function(app) {

  var homeRouter = Router()
    .get('/', controllers.home.index);

    app.use('/', homeRouter);
};
