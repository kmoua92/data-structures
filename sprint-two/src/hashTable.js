

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  // console.log(this);
  var bucket = this._storage.get(index);
  // if storage bucket is empty
    // make bucket array
    // append first tuple to bucket
  // else
    // get current bucket
    // append current tuple to bucket

  var node = {index: index, key: key, value: value};
  this._storage.set(index, node);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var retNode = this._storage.get(index);
  return retNode.value;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  // retrieve bucket for an index
  // loop through tuples in bucket
  // remove the target tuple
  // re-insert bucket into index

  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


