'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective.js');
var Noun = require('./lib/noun.js');
var Verb = require('./lib/verb.js');

var getRandomWord = require('./lib/getRandomWord.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/app/'));

var adjective = new Adjective();
var noun = new Noun();
var verb = new Verb();

app.get('/', function(req, res) {
  res.sendFile('index.html');
});
app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.post('/adjective', function(req, res) {
  var word = postRandomWord(req.body.word, adjective);
  res.json(word);
});

app.post('/noun', function(req, res) {
  var word = postRandomWord(req.body.word, noun);
  res.json(word);
});

app.post('/verb', function(req, res) {
  var word = postRandomWord(req.body.word, verb);
  res.json(word);
})


app.listen(port, function() {
  console.log('server available at http://localhost:' + port
    );
});
