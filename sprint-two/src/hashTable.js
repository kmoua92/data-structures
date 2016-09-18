

var HashTable = function() {
  this._limit = 8;
  this.count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  console.log('limit: ' + this._limit);
  console.log('index: ' + index);
  var bucket = this._storage.get(index);

  // check to double
  if ((this.count + 1) / this._limit >= .75) {
    this.resize(this._limit * 2);
  }

  if (!bucket) {
    bucket = [];
  }

  bucket.push([key, value]);

  this._storage.set(index, bucket);
  this.count++;
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

  // check to halve
  if ((this.count - 1) / this._limit < .25) {
    this.count = 0;
    this.resize(this._limit / 2);

  }

  _.each(bucket, function(tuple) {
    if (tuple[0] !== key) {
      newBucket.push([tuple[0], tuple[1]]);
    }
  });

  this._storage.set(index, newBucket);
  this.count--;  
};

HashTable.prototype.resize = function(newSize) {
  var oldStorage = this._storage;
  this._limit = newSize;
  this._storage = LimitedArray(this._limit);

  // declare holder array
  var valHold = [];

  // loop through storage
  for (var i = 0; i < oldStorage.length; i++) {
    var bucket = oldStorage[i];
    // for each bucket, loop
    for (var o = 0; o < bucket.length; o++) {
      // push each tuple to holder
      valHold.push(bucket[o]);
    }
  }

  // loop through holder
  for (var i = 0; i < valHold.length; i++) {
    // insert tuple in new storage
    // this.count = 0;
    console.log('loop: ' + i);
    this.insert(valHold[i][0], valHold[i][1]);
  }
  

  // for (var i = 0; i < oldStorage.length; i++) {
  //   var oldBucket = oldStorage[i];
  //   if (oldBucket) {
  //     var newBucket = [];
  //     for (var o = 0; o < oldBucket.length; o++) {
  //       var key = oldBucket[o][0];
  //       var value = oldBucket[o][1];
  //       // this.insert(key, value);
  //       newBucket.push([key, value]);
  //     }
  //     this._storage.set(index, newBucket);
  //   }
  // }
  
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert = constant; simple push of new bucket
 retrieve = linear; must traverse through all tuples in bucket
 remove = linear; traverse through bucket to rebuild bucket with only
  keys that should remain

 */


