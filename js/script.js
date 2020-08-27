$(document).ready(function() {
  for (var i = 0; i< 6; i++){
    $('.box').append('<div class="wrapper"></div>');
  }
  for (var i = 0; i< 6; i++){
    $('.wrapper').append('<div class="square"></div>');
  }
  $('.square').click(function() {
    var testo = $(this);
    $.ajax(
      {
        'url': "https://flynn.boolean.careers/exercises/api/random/int",
        'method': "GET",
        'success': function (risposta) {
            testo.text(risposta.response);
            if (risposta.response > 5){
              $(testo).addClass('green');
              $(testo).removeClass('giallo');
            } else {
              $(testo).addClass('giallo');
              $(testo).removeClass('green');
            }
        },
        'error': function () {
          alert("E' avvenuto un errore. ");
        }
      }
    );

  });
});
