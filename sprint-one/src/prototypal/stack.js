var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.sLength = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.sLength] = value;
    this.sLength++;
  },
  size: function() {
    return this.sLength;
  },
  pop: function() {
    if (this.sLength > 0) {
      this.sLength--;
      var popped = this.storage[this.sLength];
      delete this.storage[this.sLength];
      return popped;
    }
  }
};


