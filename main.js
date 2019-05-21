$(document).ready(function(){

// funzione per ottenere numeri casuali
function getRandomNumber(low, high) {
  var r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}

// CREO IL TEMPLATE CON Handlebars
var source = $('#quadratino-Handlebars').html();
var template = Handlebars.compile(source);

// FISSO I CAMPI COMPILABILI DI HANDLEBARS
var context = {
  'number' : getRandomNumber(0 , 9)
};
var html = template(context);

// appendo i quadratini nel container
for (var i = 0; i < 36; i++) {
  $('.container').append(html);
}
// ciclo per aggiungere i numeri random(var numerorandom dentro il ciclo!)
$('.quadrato').each( function (){
  // invoco la funzione dentro il ciclo così ottengo numeri diversi
  var numero_random = getRandomNumber(0, 9)
  $(this).data('attribute', numero_random);
});


// clicco ogni quadrato, se il numero è <=5 diventa giallo
// altrimenti diventa verde
$(document).on('click', '.quadrato', function(){
  var numero = $(this).data('attribute');
  if ( numero <= 5) {
    $(this).addClass('yellow');
  } else{
    $(this).addClass('green');
  }
  // mostro il numero trigger, sia esso giallo o verde.
  $(this).text(numero);
})

$.ajax({
url :
"https://www.boolean.careers/api/random/int",
method : “GET”,
success : function (data,stato) {
$("#risultati").html(data);
},
error : function (richiesta,stato,errori) {
alert("E' avvenuto un errore. "+errore);
}
});




})
