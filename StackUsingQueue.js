class Stack {
    constructor() {
        this.queue = new Queue();
//         this.first = this.queue.first;
//         this.last = this.queue.last;
//         this.size = this.queue.size;
    }
    push(val) {
        this.queue.enqueue(val);
        let temp = this.queue.first;
        this.queue.first = this.queue.last;
        this.queue.last = temp;
        return this;
    }
    pop() {
        return this.queue.dequeue();
    }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var s = new Stack();

s.push(10).push(20).push(30);
s.pop();
s.pop();
s.pop();
s.pop();