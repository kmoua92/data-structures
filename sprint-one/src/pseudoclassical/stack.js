var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sLength = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.sLength] = value;
  this.sLength++;
};

Stack.prototype.pop = function() {
  if (this.sLength > 0) {
    this.sLength--;
    var popped = this.storage[this.sLength];
    delete this.storage[this.sLength];
    return popped;
  }
};

Stack.prototype.size = function() {
  return this.sLength;
};



