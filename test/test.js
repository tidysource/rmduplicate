'use strict';

var test = require('tidytest');
var rmDuplicate = require('../index.js');

test('byDepth()', function(assert){
  assert.plan(1);
  
  var arr = [1,3,2,3,3];
  
  arr = rmDuplicate(arr);
  
  assert.deepEqual(arr, [1,2,3]);
});