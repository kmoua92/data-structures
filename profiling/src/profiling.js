// create stacks function

  // create value number of stacks
var stackOne = new Stack();
var stackTwo = new Stack();
var stackThree = new Stack();

var addToStacks = function addStackVals() {

  stackOne.push(1);
  stackOne.push(2);
  stackOne.push(3);

  stackTwo.push(4);
  stackTwo.push(5);
  stackTwo.push(6);

  stackThree.push(7);
  stackThree.push(8);
  stackThree.push(9);
};

var remFromStacks = function remStackVals() {
  stackOne.pop();
  stackOne.pop();
  stackOne.pop();

  stackTwo.pop();
  stackTwo.pop();
  stackTwo.pop();

  stackThree.pop();
  stackThree.pop();
  stackThree.pop();
};

addToStacks();
remFromStacks();


// create queues function
// create value number of queues
var queueOne = new Queue();
var queueTwo = new Queue();
var queueThree = new Queue();

var addToQueues = function addQueueVals() {

  queueOne.enqueue(1);
  queueOne.enqueue(2);
  queueOne.enqueue(3);

  queueTwo.enqueue(4);
  queueTwo.enqueue(5);
  queueTwo.enqueue(6);

  queueThree.enqueue(7);
  queueThree.enqueue(8);
  queueThree.enqueue(9);
};

var remFromQueues = function remQueueVals() {
  queueOne.dequeue();
  queueOne.dequeue();
  queueOne.dequeue();

  queueTwo.dequeue();
  queueTwo.dequeue();
  queueTwo.dequeue();

  queueThree.dequeue();
  queueThree.dequeue();
  queueThree.dequeue();
};

addToQueues();
remFromQueues();

for (var i = 0; i < 100; i++) {
  new Stack();
}

for (var i = 0; i < 100; i++) {
  new Queue();
}





