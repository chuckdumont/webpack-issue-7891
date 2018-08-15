(function(context, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory();
  }
}(this, (function() {
  var context = {msg: "hello"};
  with (context) {
    console.log(msg);
  }
})));
