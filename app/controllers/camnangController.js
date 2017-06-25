var camnangController = {
	index: function (req,res){
		res.render('camnang/camnang', {
			title: 'Cẩm nang du lịch'
		});
	}
};
module.exports = camnangController;