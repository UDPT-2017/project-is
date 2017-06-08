var homeController = {
  index: function(req, res) {

var images = [
  {image: "images/image.jpg",
  tieude: "Tiêu đề 1"},
  {image: "images/image2.jpg",
  tieude: "Tiêu đề 2"},
  {image: "images/image3.jpg",
  tieude: "Tiêu đề 3"}
];

    res.render('home/index', {
      title: 'Đặt phòng khách sạn',
      imagesKS: images
    });
  }
};

module.exports = homeController;
