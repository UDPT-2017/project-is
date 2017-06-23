var Router = require('express').Router;

var controllers = require('../app/controllers');

module.exports = function(app) {

  var homeRouter = Router()
    .get('/', controllers.home.index)
    .get('/searchhotel', controllers.home.searchHotel)
    .get('/searchcity', controllers.home.searchCity)
    .post('/timkiem', controllers.home.search);

  var khachsanRouter = Router()
    .get('/', controllers.khachsan.index);

  app.use('/', homeRouter);
  app.use('/khachsan', khachsanRouter);
};
