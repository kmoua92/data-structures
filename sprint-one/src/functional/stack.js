var Stack = function newStack() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageLength = 0;

  // Implement the methods below
  someInstance.push = function stackPush(value) {
    storage[storageLength] = value;
    storageLength++;
  };

  someInstance.pop = function stackPop() {

    if (storageLength > 0) {
      storageLength--;
      var popped = storage[storageLength];
      delete storage[storageLength];
    }
    return popped;
  };

  someInstance.size = function stackSize() {
    return storageLength;
  };


  return someInstance;
};
