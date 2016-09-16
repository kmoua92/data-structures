var BST = function(value) {
  this.value = value;
  this.left;
  this.right;
};

BST.prototype.insert = function(value) {
  if (!this.right && value > this.value) {
    this.right = new BST(value);
  } 

  if (!this.left && value < this.value) {
    this.left = new BST(value);
  } 

  if (this.right && value > this.value) {
    this.right.insert(value);
  }

  if (this.left && value < this.value) {
    this.left.insert(value);
  }
};

BST.prototype.contains = function(value) {
  // returns a boolean

};

BST.prototype.depthFirstLog = function() {};


/*
 * Complexity: What is the time complexity of the above functions?
 */
