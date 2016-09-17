var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = new Node(value);
    var currentTail = this.tail;

    if (!this.head) {
      this.head = newTail;
    }
    
    if (this.tail) {
      this.tail.next = newTail;
    }
  
    this.tail = newTail;
    this.tail.previous = currentTail;
  };

  list.addToHead = function(value) {
    var newHead = new Node(value);
    var currentHead = this.head;

    if (!this.tail) {
      this.tail = newHead;
    }

    if (this.head) {
      this.head.previous = newHead;
    }

    this.head = newHead;
    this.head.next = currentHead;
  };

  list.removeHead = function() {
    
    // variable with this head value
    var removed = this.head.value;
    this.head = this.head.next;
    // return this head value
    return removed;
  };

  list.removeTail = function() {};

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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: constant - no loop; simple operations
 removeHead: constant - no loop; simple operations
 contains: linear - one loop
 */
