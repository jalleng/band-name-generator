'use strict';

module.exports = function postRandomWord(word, object) {
  if (object.hasOwnProperty(word)) {
    return {msg: 'Thanks for trying! we already have that word.'};
  } else {
    object[word] = true;
    return {msg: 'Thanks for submitting your word,' + word + '!'};
  }
};

