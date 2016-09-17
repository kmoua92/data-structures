var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
    // push child with new Tree (value) to parent.children
  var child = new Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target, wasFound) {
 
  // wasFound = wasFound || false;

  // if (this.value === target) {
  //   wasFound = true;
  //   return wasFound;
  // }

  wasFound = wasFound || this.value === target;

  if (wasFound) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    wasFound = this.children[i].contains(target, wasFound);
  }

  return wasFound;
};

treeMethods.removeFromParent = function() {
  this.parent.children.splice(_.indexOf(this.parent.children, this), 1);
  //console.log(this);
  //console.log(this.value);
  this.parent = null;
  //console.log(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild - Constant: Simple operation
 contains - Linear: traverses tree 
 */
