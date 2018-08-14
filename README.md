# Test case for webpack issue 7891

This is a test case for ["use strict" optimization bug](https://github.com/webpack/webpack/issues/7891).  To reproduce the problem:

* `npm install`
* `npm run build`
* Load the file index.html in Chrome (you can load it from the file system).
* Observe the error message `Uncaught SyntaxError: Strict mode code may not include a with statement` in the Chrome developer tools console.

The problem does not reproduce if you change the mode from `production` to `development`.
