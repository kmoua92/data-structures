var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    sLength: 0,
    storage: {}
  };
  
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  size: function() {
    return this.sLength;
  },
  enqueue: function(value) {
    this.storage[this.sLength] = value;
    this.sLength++;
  },
  dequeue: function() {
    if (this.sLength > 0) {
      this.sLength--;
      var deQueue = this.storage[0];
      delete this.storage[0];
      
      for (var i = 0; i < this.sLength; i++) {
        this.storage[i] = this.storage[i + 1];
      }

      return deQueue;
    }
  }
};


