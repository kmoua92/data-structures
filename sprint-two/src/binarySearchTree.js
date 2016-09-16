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

BST.prototype.contains = function(target) {
  // returns a boolean
  if (this.value === target) {
    return true;
  }

  if (this.right && target > this.value) {
    return this.right.contains(target);
  } else if (this.left && target < this.value) {
    return this.left.contains(target);
  } else {
    return false;
  }

};

BST.prototype.depthFirstLog = function(callback) {
  
  callback(this.value);

  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 Insert: Logarithmic - only inserts on one side
 Contains: Logarithmic - only checks on one side
 depthFirstLog: Linear - traverses entire tree
 */
