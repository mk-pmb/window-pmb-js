/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, browser: true */
/*globals define:true*/
(function () {
  'use strict';

  function f(x) { return (typeof x === 'function'); }
  f.d = function (i) {  // functions expected on a document object
    'createElement getElementById getElementsByTagName'.replace(/\S+/g, i);
  };
  f.e = function (e) { return function () { throw new Error(e); }; };

  function fakeWin() {
    var d = { URL: 'http://example.net/' }, w = { document: d }, HFE;
    w.self = w.window = w.parent = w;
    f.d(function (m) { d[m] = f.e('document.' + m + ': stub!'); });

    HFE = function HTMLFakeElement(tagName) {
      var e = this;
      if (!(e instanceof HFE)) { return new HFE(tagName); }
      e.tagName = tagName;
      e.attrib = Object.create(null);
      e.getAttribute = function (attr) { return e.attrib[attr]; };
      e.setAttribute = function (attr, val) { e.attrib[attr] = val; };
      e.innerHTML = '';
      switch (tagName) {
      case 'script':
        e.src = '';    // in Firefox, tags w/o src attribute have .src=""
        break;
      }
      return e;
    };
    w.HTMLFakeElement = HFE;

    function cE(tn) { return new HFE(tn); }
    d.createElement = cE;
    d.fakeScriptTag = cE('script');

    function gEtn(tn) { return (gEtn[tn.toLowerCase()] || []); }
    gEtn.script = [ d.fakeScriptTag ];
    d.getElementsByTagName = gEtn;

    w.location = { href: d.URL };

    return w;
  }

  (function () {  // export and return either real or fake window
    function e(x) { return (x || false); }
    var w = e((typeof window === 'object') && window), d, m;
    d = ((w.self === w) && (w.window === w) && w.document);
    f.d(function (x) { d = (d && f(d[x]) && d); });
    w = (d ? w : fakeWin());
    if ((typeof define === 'function') && define.amd) { define(w); }
    m = e((typeof module === 'object') && module);
    m = ((typeof e(m.exports) === 'object') && m);
    if (m) { m.exports = w; }
  }());

}());
