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

treeMethods.contains = function(target) {
  //debugger;
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].contains(target);
    }
  } else {
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
