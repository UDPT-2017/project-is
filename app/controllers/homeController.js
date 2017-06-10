var Image = require("../models/image");

var homeController = {
  index: function(req, res) {
    Image.getAll(function(err, images){
      res.render('home/index', {
        title: 'Đặt phòng khách sạn',
        imagesKS: images
      });
    });
  }
};

module.exports = homeController;
