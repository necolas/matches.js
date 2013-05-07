/*! matches.js v1.0.1 - Nicolas Gallagher - MIT license */

;(function (global) {

'use strict';

/**
 * Vendor-specific implementations of `Element.prototype.matches()`
 */

var proto = Element.prototype;
var vendorMatches = proto.matches ||
    proto.mozMatchesSelector ||
    proto.msMatchesSelector ||
    proto.oMatchesSelector ||
    proto.webkitMatchesSelector;

/**
 * Determine if a DOM element matches a CSS selector
 *
 * @param {Element} elem
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function matches(elem, selector) {
    if (vendorMatches) {
        return vendorMatches.call(elem, selector);
    }

    var elemParent = elem.parentNode;
    var nodes;
    var i;

    // if the element has no parent, append it to a documentFragment
    if (!elemParent) {
        elemParent = document.createDocumentFragment();
        elemParent.appendChild(elem);
    }

    // from the parent element's context, get all nodes that match the selector
    nodes = elemParent.querySelectorAll(selector);
    i = nodes.length;

    // since support for `matches()` is missing, we need to check to see if
    // any of the nodes returned by our query match the given element
    while (i--) {
        if (nodes[i] === elem) {
            return true;
        }
    }

    return false;
}

/**
 * Expose `matches`
 */

// common js export
if (typeof exports === 'object') {
    module.exports = matches;
}
// amd export
else if (typeof define === 'function' && define.amd) {
    define(matches);
}
// browser global
else {
    global.matches = matches;
}

}(this));
