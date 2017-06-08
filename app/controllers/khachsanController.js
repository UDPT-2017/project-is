var khachsanController = {
  index: function(req, res) {
    res.render('khachsan/khachsan', {
      title: 'Khách sạn',
      message: 'Danh sách các khách sạn'
    });
  }
};

module.exports = khachsanController;
