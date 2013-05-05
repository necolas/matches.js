/*! matches.js v0.0.0 - Nicolas Gallagher - MIT license */

;(function (global) {

'use strict';


/**
 * Expose `matches`
 */

// common js export
if (typeof exports === 'object') {
    module.exports = matches;
}
// amd export
else if (typeof define === 'function' && define.amd) {
    define(function () {
        return matches;
    });
}
// browser global
else {
    global.matches = matches;
}

}(this));
