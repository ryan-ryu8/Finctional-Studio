$(document).ready(function() {

  $('#portfolio span').addClass("hide");
  $('#portfolio .doings').hover(function() {

    $(this).find('span').removeClass('hide');
    $(this).find('.doings').addClass('imageEffect');
  }, function() {

    $(this).find('span').addClass('hide');
    $(this).find('.doings').removeClass('imageEffect');
  });

  $(".first").click(function() {
    $(".illustration1").toggle(500);
    $(".details1").toggle(500);
  });
  $(".second").click(function() {
    $(".illustration2").toggle(500);
    $(".details2").toggle(500);
  });
  $(".third").click(function() {
    $(".illustration3").toggle(500);
    $(".details3").toggle(500);
  });
  //Submission Form
  $('#submit').submit(function(event) {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    if (name == "" || email == "" || message == "") {
      $("#message").text("Please fill in all the fields with correct data.");
      $('#message').removeClass("success");
      $('#message').addClass("failed");
    } else {
      $("#message").text("Thank you " + name + ".<br>Your message has been successfully submitted.");
      $('#message').removeClass("failed");
      $('#message').addClass("success");
    }
    event.preventDefault();
  });
  
  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 300, 'linear');
    });
  });
});
