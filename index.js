const express = require('express');
const app = express();

require('./config')(app);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.engine('hbs', exphbs());

var server = require("http").Server(app);
var io = require("socket.io")(server);


var mangUsers=[];

io.on("connection", function(socket){
  console.log("Co nguoi ket noi " + socket.id);

  socket.on("client-send-Username", function(data){
    if(mangUsers.indexOf(data)>=0){
      socket.emit("server-send-dki-thatbai");
    }else{
      mangUsers.push(data);
      socket.Username = data;
      socket.emit("server-send-dki-thanhcong", data);
    }
  });

  socket.on("user-send-message", function(data){
    io.sockets.emit("server-send-mesage", {un:socket.Username, nd:data} );
  });

  socket.on("myEnterMess", function(){
    var s = socket.Username + " đang trả lời";
    io.sockets.emit("enterMess", s);
  });

  socket.on("myStopMess", function(){
    io.sockets.emit("stopEnterMess");
  });


});


