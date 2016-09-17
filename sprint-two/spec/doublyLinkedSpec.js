describe('doublyLinkedList', function() {
  var dblList;

  beforeEach(function() {
    dblList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dblList).to.have.property('head');
    expect(dblList).to.have.property('tail');
  });
  
  it('should have methods named "addToTail", "addToHead", "removeHead", "removeTail", and "contains"', function() {
    expect(dblList.addToTail).to.be.a('function');
    expect(dblList.addToHead).to.be.a('function');
    expect(dblList.removeHead).to.be.a('function');
    expect(dblList.removeTail).to.be.a('function');
    expect(dblList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    dblList.addToTail(4);
    expect(dblList.tail.value).to.equal(4);
    dblList.addToTail(5);
    expect(dblList.tail.value).to.equal(5);
  });

  it('should add to the head of the list when addToHead is invoked', function() {
    dblList.addToHead(4);
    expect(dblList.head.value).to.equal(4);
    dblList.addToHead(5);
    expect(dblList.head.value).to.equal(5);
  });

  it ('should link the new head to the previous head and vice versa', function() {
    dblList.addToHead(4);
    dblList.addToHead(5);
    expect(dblList.head.next.value).to.equal(4);
    expect(dblList.tail.previous.value).to.equal(5);
  });

  it ('should link the new tail to the previous tail and vice versa', function() {
    dblList.addToTail(6);
    dblList.addToTail(7);
    expect(dblList.tail.previous.value).to.equal(6);
    expect(dblList.head.next.value).to.equal(7);
  });

  it('should remove the head from the list when removeHead is called', function() {
    dblList.addToTail(4);
    dblList.addToTail(5);
    expect(dblList.head.value).to.equal(4);
    dblList.removeHead();
    expect(dblList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    dblList.addToTail(4);
    expect(dblList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    dblList.addToTail(4);
    dblList.addToTail(5);
    expect(dblList.contains(4)).to.equal(true);
    expect(dblList.contains(5)).to.equal(true);
    expect(dblList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    dblList.addToTail(4);
    dblList.addToTail(5);
    dblList.removeHead();
    expect(dblList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList
  it ('should have a head node if tail is added to empty doublyLinkedList', function() {
    dblList.addToTail(4);
    expect(dblList.head.value).to.equal(4);
  });

});
