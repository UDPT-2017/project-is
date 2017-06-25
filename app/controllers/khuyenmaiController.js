var khuyenmaiController = {
	index: function (req,res){
		res.render('khuyenmai/khuyenmai', {
			title: 'Khuyến mãi'
		});
	}
};
module.exports = khuyenmaiController;