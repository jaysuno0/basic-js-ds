const { ListNode } = require("../extensions/list-node.js");


class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  enqueue(value) {
    let current;
    let node = new ListNode(value);

    if (this.head === null) this.head = node;
    else {
      current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }

    this.length++;
  }


  dequeue() {
    let current = this.head;

    if (current) {
      this.head = this.head.next;
      this.length--;
      return current.value;
    }
  }

  
  getUnderlyingList() {
    return this.head;
  }
}


module.exports = {
  Queue,
};