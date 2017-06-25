

//var socket = io("http://localhost:3000");
(function($) {
    //var socket = io("http://localhost:3000");
    $(document).ready(function() {
        //var socket = io("http://localhost:3000");
        var $chatbox = $('.chatbox'),
            $chatboxTitle = $('.chatbox__title'),
            $chatboxTitleClose = $('.chatbox__title__close'),
            $chatboxCredentials = $('.chatbox__credentials');
        $chatboxTitle.on('click', function() {
            $chatbox.toggleClass('chatbox--tray');
        });
        $chatboxTitleClose.on('click', function(e) {
            e.stopPropagation();
            $chatbox.addClass('chatbox--closed');
        });
        $chatbox.on('transitionend', function() {
            if ($chatbox.hasClass('chatbox--closed')) $chatbox.remove();
        });
        $chatboxCredentials.on('submit', function(e) {
            e.preventDefault();
            $chatbox.removeClass('chatbox--empty');
        });
    });
})(jQuery);

socket.on("server-send-dki-thanhcong", function(data){
  $("#currentUser").html(data);
  $("#loginForm").hide(2000);
  $("#chatForm").show(1000);
});

socket.on("server-send-mesage", function(data){
  $("#listMessages").append("<div class='ms'>" + data.un + ":" + data.nd +"</div>");
});

socket.on("enterChat", function(data){
  $("#thongbao").html("<img width='20px' src='images/waitMess.gif'> " + data);
});

socket.on("stopEnter", function(){
  $("#thongbao").html("");
});


