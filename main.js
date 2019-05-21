$(document).ready(function(){

var source = $('#quadratino-Handlebars').html();
// console.log(source);
var template = Handlebars.compile(source);
// console.log(template);

var context = {
  'title' : "numerino"
};

var html = template(context);

for (var i = 0; i < 36; i++) {
$('.container').append(html);
}
// console.log(html);
})


// $.ajax({
// url :
// "https://www.boolean.careers/api/random/int",
// method : “GET”,
// success : function (data,stato) {
// $("#risultati").html(data);
// },
// error : function (richiesta,stato,errori) {
// alert("E' avvenuto un errore. "+errore);
// }
// });
