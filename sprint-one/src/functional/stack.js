var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageLength = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storageLength] = value;
    storageLength++;
  };

  someInstance.pop = function() {

    if (storageLength > 0) {
      storageLength--;
      var popped = storage[storageLength];
      delete storage[storageLength];
    }
    return popped;
  };

  someInstance.size = function() {
    return storageLength;
  };


  return someInstance;
};
