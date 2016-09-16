

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  // console.log(this);
  // if storage bucket is empty
    // make nodes object
    // append first node to nodes
  // else
    // get current nodes object
    // append current node to nodes

  var node = {index: index, key: key, value: value};
  this._storage.set(index, node);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var retNode = this._storage.get(index);
  return retNode.value;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  // retrieve all of the nodes in an index
  // loop through all the nodes
  // remove the target node
  // re-insert all nodes into the key

  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


