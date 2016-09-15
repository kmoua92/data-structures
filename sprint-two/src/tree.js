var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
    // push child with new Tree (value) to parent.children
  this.children.push(new Tree(value));
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



/*
 * Complexity: What is the time complexity of the above functions?
 addChild - Constant: Simple operation
 contains - Best case log, worst case linear: if value is found early, don't have
 to loop through all children;
 otherwise will loop until end to return false 
 */
