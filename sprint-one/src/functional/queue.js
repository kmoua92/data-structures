var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageLength = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storageLength] = value;
    storageLength++;
  };

  someInstance.dequeue = function() {
   
    if (storageLength > 0) {
      var deQueued = storage[0];
      
      delete storage[0];

      storageLength--;
      
      for (var i = 0; i < storageLength; i++) {
        storage[i] = storage[i + 1];
      }
    }

    return deQueued;


  };

  someInstance.size = function() {
    return storageLength;
  };

  return someInstance;
};
