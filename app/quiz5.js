

$(function() {

  $('#clickMe').on("click", function() {

    $.get("http://localhost:3000/adjective", function(response) {
      var adjective = response.word;
      $("#adjective").text(adjective);
    });

    $.get("http://localhost:3000/verb", function(response) {
      var verb = response.word;
      $("#verb").text(verb);
    });

    $.get("http://localhost:3000/noun", function(response) {
      var noun = response.word;
      $("#noun").text(noun);
    });

  });

});



