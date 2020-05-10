var customerMessage=[];
function showCustomerMessage(){
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var message=document.getElementById("textarea").value;

  if(name && email && message){
    customerMessage.push(name, email, message);
    return name;
  }
}

$(document).ready(function){
  $(window).on("load",function(){
    loaderFadeOutTime= 1000;
    function hideLoader=(){
      var loader=$('.loader');
      loader.fadeOut(loaderFadeOutTime);
    }
    hideLoader();
  });

  $(".design-initially-showing").click(function(){
    $(".design-initially-hidden").slideToggle();
    $(".design-initially-showing").slideToggle();
  });

  $(".dev-initially-showing").click(function(){
    $(".dev-initially-hidden").slideToggle();
    $(".dev-initially-showing").slideToggle();
  });

  $(".product-initially-showing").click(function(){
    $(".product-initially-hidden").slideToggle();
    $(".product-initially-showing").slideToggle();
  });

  $(".portfolio img").hover(function(){
    $(".col-sm-3 img").addClass("image");
    $(".project-name").show();
  });

  $("#button").click(function(){
    event.preventDefault();
  });

$("#button").click(function(){
  if (showCustomerMessage()){
    $("#message-alert").text("Hey" + showCustomerMessage() + "Thanks for reaching out, a response will soon be made.");
    $("#message-alert").addClass("alert-successful");
    $("#message-alert").removeClass("alert-dismiss");
    $("#message-alert").show();
  }
  else{
    $("#message-alert").text("Fill in all fields as required please..");
    $("#message-alert").addClass("alert-successful");
    $("#message-alert").removeClass("alert-dismiss");
    $("#message-alert").show();
  }
});

  $("button").on("click",funtion(){
    alertFadeOutTime = 3000;
    function hideAlert(){
      var messageAlert=$('#message-alert');
      messageAlert.fadeOut(alertFadeOutTime);
    }
    hideAlert();
  });
}
