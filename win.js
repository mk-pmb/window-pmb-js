/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, browser: true */
/*globals define:true*/
(function () {
  'use strict';

  function s() { throw new Error('stub!'); }
  function e(x) { return (x || false); }
  function f(x) { return (typeof x === 'function'); }
  f.n = function (i) {
    'createElement getElementById getElementsByTagName'.replace(/\S+/g, i);
  };

  var w = e((typeof window === 'object') && window), m;
  w = ((w.self === w) && (w.window === w) && (function (d) {
    if (!d) { return; }
    f.n(function (x) { w = (w && f(d[x]) && w); });
    return w;
  }(w.document)));
  if (!w) {
    w = {};
    w.document = (function (d) {
      f.n(function (x) { d[x] = s; });
      return d;
    }({}));
    w.self = w.window = w;
  }

  if ((typeof define === 'function') && define.amd) { define(w); }

  m = e((typeof module === 'object') && module);
  m = ((typeof e(m.exports) === 'object') && m);
  if (m) { m.exports = w; }












}());
