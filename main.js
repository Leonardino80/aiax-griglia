$(document).ready(function(){

// CREO IL TEMPLATE CON Handlebars
var source = $('#quadratino-Handlebars').html();
var template = Handlebars.compile(source);

// FISSO I CAMPI COMPILABILI DI HANDLEBARS
var context = {
  'number' : '0',
  'testo' : '?'
};
var html = template(context);

// appendo i quadratini nel container
for (var i = 0; i < 36; i++) {
  $('.container').append(html);
}

// clicco ogni quadrato, tolgo i colori, parte ajax, se il numero nel data è <=5 diventa giallo
// altrimenti diventa verde
$(document).on('click', '.quadrato', function(){

  $(this).removeClass('yellow green');

  var numero = $(this).data('attribute');

  $.ajax({
    url : "https://www.boolean.careers/api/random/int",
    success : function (data) {
      $('.quadrato').data('attribute', data.response);
    },
    error : function () {
      alert("E' avvenuto un errore. "+errore);
    }
  });

  if ( numero <= 5) {
    $(this).addClass('yellow');
  } else{
    $(this).addClass('green');
  }
  // mostro il numero trigger, sia esso giallo o verde.
  $(this).text(numero + '!');
})

})

// ESERCIZIO SENZA AJAX
// $(document).ready(function(){
//
// // funzione per ottenere numeri casuali
// function getRandomNumber(low, high) {
//   var r = Math.floor(Math.random() * (high - low + 1)) + low;
//   return r;
// }
//
// // CREO IL TEMPLATE CON Handlebars
// var source = $('#quadratino-Handlebars').html();
// var template = Handlebars.compile(source);
//
// // FISSO I CAMPI COMPILABILI DI HANDLEBARS
// var context = {
//   'number' : getRandomNumber(0 , 9),
//   'testo' : '?'
// };
// var html = template(context);
//
// // appendo i quadratini nel container
// for (var i = 0; i < 36; i++) {
//   $('.container').append(html);
// }
// // ciclo per aggiungere i numeri random(dentro il ciclo altrimenti da tutti numeri uguali)
// $('.quadrato').each( function (){
//   // invoco la funzione dentro il ciclo così ottengo numeri diversi
//   var numero_random = getRandomNumber(0, 9)
//   $(this).data('attribute', numero_random);
// });
//
//
// // clicco ogni quadrato, se il numero nel data è <=5 diventa giallo
// // altrimenti diventa verde
// $(document).on('click', '.quadrato', function(){
//   var numero = $(this).data('attribute');
//   if ( numero <= 5) {
//     $(this).addClass('yellow');
//   } else{
//     $(this).addClass('green');
//   }
//   // mostro il numero trigger, sia esso giallo o verde.
//   $(this).text(numero + '!');
// })
//
// function n_random_ajax() {
//   $.ajax({
//   url : "https://www.boolean.careers/api/random/int",
//   success : function (data,stato) {
//   },
//   error : function (richiesta,stato,errori) {
//     alert("E' avvenuto un errore. "+errore);
//   }
// });
//
//
// }
//
// var numero_random_ajax_def = data.response;
//
// console.log(numero_random_ajax_def);
//
//
//
// })
