'use strict';
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
  $('#submitAdjective').on('submit', function(e) {
    e.preventDefault();
    var adjective = $("input[name=adjective]").val();
    var adjPost;
    if (adjective) {
      adjPost = {word: adjective};
      $.post("adjective", adjPost, function(response) {
        var adjectiveRes = response.msg;
        $("#adjectiveRes").text(adjectiveRes);
      });
    }
  });
  $('#submitVerb').on('submit', function(e) {
    e.preventDefault();
    var verb = $("input[name=verb]").val();
    var verbPost;
    if (verb) {
      verbPost = {word: verb};
      $.post("verb", verbPost, function(response) {
        var verbRes = response.msg;
        $("#verbRes").text(verbRes);
      });
    }
  });
  $('#submitNoun').on('submit', function(e) {
    e.preventDefault();
    var noun = $("input[name=noun]").val();
    var nounPost;
    if (noun) {
      nounPost = {word: noun};
      $.post("noun", nounPost, function(response) {
        var nounRes = response.msg;
        $("#nounRes").text(nounRes);
      });
    }
  });
});



