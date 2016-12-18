
<!--#echo json="package.json" key="name" underline="=" -->
window-pmb
==========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
(running_in_a_browser ? window : fake_stub)
<!--/#echo -->


Usage
-----

<!--#include file="test/all.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="11" -->
```javascript
var win = require('window-pmb'), equal = require('equal-pmb'), doc;

equal(win, win.window);
equal(win, win.self);

doc = win.document;
equal('function', typeof doc.createElement);
equal('function', typeof doc.getElementById);
equal('function', typeof doc.getElementsByTagName);
```
<!--/include-->






<!--#toc stop="scan" -->


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
