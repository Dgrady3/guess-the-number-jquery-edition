var min = 1;
var max = 100;
var count = 0;
var rando = Math.floor((Math.random()* max) + min);
$('#play_again').hide();

$(function(){
  $('form').on('submit', function(event) {
    event.preventDefault();
    var guess = +$('#an-input').val();



    if (guess == rando) {
      $(".answer").text(" Wowzers, you're good! And it only took you " + count +" guess(s)!");
      $('#play_again').show();

    }
    if (guess < rando) {
      $(".answer").text(" was too low, try again...");
      count ++;
    }
    if(guess < min || guess > max){
    $(".answer").text("Please pic a num between" +min+" and "+max);
    $('#play_again').show();
  }
    else if (guess > rando) {
      $(".answer").text(" was too high, try again...");
      count ++;
    }


});
  $('form').on('reset', function(event){
    event.preventDefault();
    document.location.reload();

  });
});






