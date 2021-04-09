const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.arr = [];
    this.node = {};
  }

  get size() {
    return this.arr.length;
  }

  enqueue(element) {
    this.arr.push(element);

    this.arr.reverse().reduce((acc, el) => {
      this.node = new ListNode(el);
      this.node.next = acc;

      return this.node;
    }, null);

    this.arr.reverse();
  }

  dequeue() {
    return this.arr.splice(0, 1)[0];
  }
}

module.exports = Queue;
