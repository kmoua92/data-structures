

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    bucket = [];
  }

  bucket.push([key, value]);

  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  var tupleValue;

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      tupleValue = bucket[i][1];
    }
  }
  return tupleValue;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  var newBucket = [];

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] !== key) {
      newBucket.push([bucket[i][0], bucket[i][1]]);
    }
  }

  this._storage.set(index, newBucket);  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


