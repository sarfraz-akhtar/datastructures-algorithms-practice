class Node{
    constructor(val){
        this.val = val;
    }
}

class Stack{
    constructor(val){
        this.first = null;
        this.last = null;     
        this.size = 0;
    }
    push(val){
        var node = new Node(val);

        if (!this.first){
            this.first = node;
            this.last = node;
        } else {
            var tmp = this.first;
            this.first=node;
            this.first.next=tmp;
        }

        return ++this.size;
    }
    pop(){
        const removed = this.first;
        if(this.size ===0) return -1;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            // let current = this.last;
            
            // while(current.next.value !== this.first){
            //     current = current.next;
            // }
            
            this.first = this.first.next;
            
        }
        
        this.size--;
        return removed.value;
    }
}

var stack = new Stack();
stack.push(10);
stack.push(100);
stack.push(1000);
stack.pop();
stack.pop();
stack.pop();