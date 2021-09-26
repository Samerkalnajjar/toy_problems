/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * https://medium.com/@taylorshephard1/instantiation-patterns-in-javascript-7f9463b95839
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// const list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

const Node = function(data = null) {
  this.data = data
  this.next = null
}


const LinkedList = function() {
  //fill me in!
  this.head = null;
  this.length = 0;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value);
  this.length++;
  if(!this.head){
      this.head = newNode;
  } else {
      let lastNode = this.head;
      while(lastNode.next) {
          lastNode = lastNode.next;
      }
      lastNode.next = newNode;
  }
}

LinkedList.prototype.removeHead = function() {
  this.head = this.head.next;
}


LinkedList.prototype.contains = function(val) {
  let current = this.head;

  while(current) {
    if(current.value === val) {
      return true;
    }
    current = current.next;
  }
  return false;
}

describe("LinkedList", () => {
  it("checkTail", () => {
    const list = new LinkedList();
    expect(list.tail).toEqual(null)
  })

  it("addToTail", () => {
    const list = new LinkedList();
    expect(list.addToTail(4)).toEqual(list.head.value)
  })

  it("contains", () => {
    const list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    expect(list.contains(5)).toEqual(true)
  })

  it("removeHead", () => {
    const list = new LinkedList();
    list.addToTail(4);
    expect(list.removeHead()).toEqual(4)
  })
})