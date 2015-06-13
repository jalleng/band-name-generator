'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));



var Adjective = function() {
  this.sleepy = true;
  this.soporific = true;
  this.tasty = true;
  this.awesome = true;
  this.penultimate = true;
  this.lazy = true;
  this.sweaty = true;
}
var adjective = new Adjective();

var Verb = function() {
  this.screaming = true;
  this.leaping = true;
  this.running = true;
  this.sleeping = true;
  this.kicking = true;
  this.howling = true;
  this.squeezing = true;
}
var verb = new Verb();

var Noun = function() {
  this.snake = true;
  this.ferret = true;
  this.chupacabra = true;
  this.shopvac = true;
  this.towel = true;
  this.floormat = true;
  this.waffleiron = true;
}
var noun = new Noun();

function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() *
    propArray.length)];
  return {word: randomProp};
}



app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.listen(port, function() {
  console.log('server available at http://localhost:' + port
    );
});
