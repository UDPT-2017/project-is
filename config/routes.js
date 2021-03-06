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
	
  var lienheRouter = Router()
  .get('/',controllers.lienhe.index);
  
  var camnangRouter = Router()
  .get('/',controllers.camnang.index);
  
  var khuyenmaiRouter = Router()
  .get('/',controllers.khuyenmai.index);
 
  app.use('/', homeRouter);
  app.use('/khachsan', khachsanRouter);
  app.use('/lienhe',lienheRouter);
  app.use('/camnang',camnangRouter);
  app.use('/khuyenmai',khuyenmaiRouter);
};
