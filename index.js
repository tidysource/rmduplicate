'use strict';

module.exports = function removeDuplicates(arr){
  var tmpCache = {};
  for(var i=arr.length-1; i>-1; --i){
    var val = arr[i];
    if (tmpCache[val]){
      arr.splice(i, 1);
    }
    else{
      tmpCache[val] = true;
    }
  }
  return arr;
};