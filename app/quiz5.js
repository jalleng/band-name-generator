
/*$(function() {

var myArray= ['one', 'two', 'three', 'four', 'five'];
var someString = '';
var randomString = function(stringArray) {
  var random = (Math.floor(Math.random() * stringArray.length));
  someString = stringArray[random];
  return someString;
}

$('#clickMe').on("click", function(e) {
  e.preventDefault();
  randomString(myArray);
  $('#adjective').text(someString);
});

});*/

$(function() {

  $('#clickMe').on("click", function() {

  $.get("http://localhost:3000/adjective", function(response) {
    var adjective = response.word;
    $("#adjective").text(adjective);
  });

});
});



