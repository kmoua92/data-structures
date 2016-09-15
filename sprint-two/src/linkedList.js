var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = new Node(value);

    if (!this.head) {
      this.head = newTail;
    }
    
    if (this.tail) {
      this.tail.next = newTail;
    }
  
    this.tail = newTail;

  };

  list.removeHead = function() {
    
    // variable with this head value
    var removed = this.head.value;
    this.head = this.head.next;
    // return this head value
    return removed;
  };

  list.contains = function(target) {
    
    return _.reduce(this, function(result, node) {
      if (node.value === target) {
        result = true;
      }
      return result;
    }, false);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Complexity is linear. It has to traverse the linked list to find
 a node or value.
 */
