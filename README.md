Only Perfect Code
=================

Did you know that Walter Rumsby doesn't *need* to write tests because he writes perfect code 80% of the time, every time? He still writes tests because he knows someone else will mess up his perfect bundle of 1's and 0's, but *he* doesn't need them.

This module removes the ability to write tests that are used by many libraries/frameworks. Any function that has an `assert` or `expect` property will have this property turned into undefined.

### Usage ###

``` JavaScript
// Put this at the beginning of the file you want to become "untestable"
require('onlyperfectcode');

```
