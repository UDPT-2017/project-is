var lienheController = {
	index: function (req,res){
		res.render('lienhe/lienhe', {
			title: 'Liên hệ'
		});
	}
};
module.exports = lienheController;