

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

  
  return _.reduce(bucket, function(tupleVal, tuple) {
    if (tuple[0] === key) {
      tupleVal = tuple[1];
    }
    return tupleVal;
  }, tupleValue);

};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  var newBucket = [];

  _.each(bucket, function(tuple) {
    if (tuple[0] !== key) {
      newBucket.push([tuple[0], tuple[1]]);
    }
  });

  this._storage.set(index, newBucket);  
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert = constant; simple push of new bucket
 retrieve = linear; must traverse through all tuples in bucket
 remove = linear; traverse through bucket to rebuild bucket with only
  keys that should remain

 */


