var exphbs = require('express-handlebars');
var path = require('path');

module.exports = function(app) {
app.engine('hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.resolve('app/views/layouts'),
  partialsDir: path.resolve('app/views/partials'),
  helpers: {
    getStar: function(number) {
      var text="";
      for(i=0; i<number; i++) {
        text += '<span style="color:rgb(255, 191, 0)" class="glyphicon glyphicon-star"></span>';
      }
      return text;
    }
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.resolve('app/views'));
};
