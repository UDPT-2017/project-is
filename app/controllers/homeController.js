var Image = require("../models/image");
var Hotel =  require("../models/hotel");
var City = require("../models/city");

var homeController = {
  index: function(req, res) {
    Image.getAll(function(err, images) {
        res.render('home/index', {
          title: 'Đặt phòng khách sạn',
          imagesKS: images,
        });
    });
  },

  searchHotel: function(req, res) {
    Hotel.getHotel(req.query.key, function(err, _hotelname){
      res.end(JSON.stringify(_hotelname));
    });
  },

  searchCity: function(req, res){
    City.getCity(req.query.key, function(err, cityname){
      res.end(JSON.stringify(cityname));
    });
  },

  search: function(req, res) {
    Image.search(req.body.keyword, function(err, kq) {
      Image.getAll(function(err, images) {
        res.render('home/index', {
          title: 'Kết quả',
          hotel: kq,
          imagesKS: images
        });
      });
    });
  }
};

module.exports = homeController;
