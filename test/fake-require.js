/*jslint indent: 2, maxlen: 80, browser: true */
/* -*- tab-width: 2 -*- */

(function () {
  'use strict';
  function req(mod) { return req[mod]; }
  window.require = req;
  function dfn(mod) { req['window-pmb'] = mod; };
  dfn.amd = {};
  window.define = dfn;

  function assertTrue(x, err) {
    if (!x) { throw new Error(err || 'assertTrue: nope!'); }
  };

  function assertExactlyEqual(a, b) {
    assertTrue(a === b, 'values differ: ' + String(a) + ' !== ' + String(b));
  };

  req['equal-pmb'] = assertExactlyEqual;















}());
