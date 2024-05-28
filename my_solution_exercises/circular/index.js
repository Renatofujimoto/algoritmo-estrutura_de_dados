const { LinkedList } = require("../linkedlist");

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

const l = new LinkedList();

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

l.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log(circular(l)); // true

module.exports = circular;