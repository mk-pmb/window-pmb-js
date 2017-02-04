/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';


(function readmeDemo() {
  //#u
  var win = require('window-pmb'), doc = win.document,
    equal = require('assert').deepStrictEqual;

  equal(win, win.window);
  equal(win, win.self);

  equal('function', typeof doc.createElement);
  equal('function', typeof doc.getElementById);
  equal('function', typeof doc.getElementsByTagName);
  //#r
}());












console.log("+OK tests passed.");   //= "+OK tests passed."
