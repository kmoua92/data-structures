var Queue = function newQueue() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageLength = 0;
  // Implement the methods below

  someInstance.enqueue = function addToQueue(value) {
    storage[storageLength] = value;
    storageLength++;
  };

  someInstance.dequeue = function removefromQueue() {
   
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

  someInstance.size = function queueSize() {
    return storageLength;
  };

  return someInstance;
};
