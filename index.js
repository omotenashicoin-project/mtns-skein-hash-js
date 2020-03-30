'use strict';

var skein = require('./lib/skein');
var h = require('./lib/helper');
var skeinhash = module.exports;

module.exports.skein = function( str, format, output ) {
  return skein(str,format,output);
}

module.exports.digest = function( str, format, output ) {

  // kaniTODO input values validate check

  var a = skein(str,format,2);
  a = a.slice(0,8); // kaniTODO
  
  if (output === 1) {
    // output 8-bit
    return a;
  }
  else if (output === 2) {
    // output 32-bit
    return h.int32Buffer2Bytes(a);
  }
  else {
    return h.int32ArrayToHexString(a);
  }
}
