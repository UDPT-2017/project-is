var homeController = {
  index: function(req, res) {
    res.render('home/index', {
      title: 'Đặt phòng khách sạn'
    });
  }
};

module.exports = homeController;
