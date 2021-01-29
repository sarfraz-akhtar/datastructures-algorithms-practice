class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList {
   constructor(){
       this.head = null;
       this.tail = null;
       this.length = 0;
   }

   push(val){
        const node = new Node(val);
        if(this.length === 0){
           this.head = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
        }

        this.tail = node; 
        this.length++;

        return node;
    } 

     pop(){
        if(!this.tail) return null;
        const node = this.tail;
         const prevNode = this.tail.prev;
         prevNode.next = null;
         this.tail.prev = null;
        this.tail = prevNode; 
        this.length--;

        return node;
    }

    shift() {
       if(!this.head) return null;
       const node = this.head;
       const nextNode = this.head.next;
       nextNode.prev = null;
       node.next = null;
       this.head = nextNode;
       this.length--;
       return node;
    }

    unShift(val) {
       if(!this.head) return this.push(val);
       const node = new Node(val);
       this.head.prev = node;
       node.next = this.head;
       this.head = node;
       this.length++;
       return node;
    }

    get(index) {
       if(index < 0 || index >= this.length) return null;
         const mid = Math.abs(this.length - 1/2);
         if(index <= mid){
           let node = this.head;
         for(var i = 1; i <= index; i++) {
             node = node.next;
         }
         return node; 
         } else {
             let node = this.tail;

             for(var i = this.length -2; i >= index; i--){
                 node = node.prev;
             } 

             return node;
         }
         

           
    }

    set(index,val){
        const node = this.get(index);
        if(node){
            node.val = val;
        }

        return node;
    }

    insert(index, val){
        if(index === 0) return this.unShift(val);
        if(index === this.length) return this.push(val);
        const node = new Node(val);
        const nextNode = this.get(index);
        const prevNode = nextNode.prev;
        prevNode.next = node;
        nextNode.prev = node;
        node.prev = prevNode;
        node.next = nextNode;
        this.length ++;
        return node;
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index ===0) return this.shift();
        if(index === this.length -1) return this.pop();  
         
         let currentNode  = this.get(index);
         let prevNode = prevNode.prev;
         let nextNode = currentNode.next;

         prevNode.next = nextNode;
         nextNode.prev = prevNode;
          currentNode.prev = null;
          currentNode.next = null;
          this.length--;
         return currentNode;

    }
}

var doublyLinkList = new DoublyLinkList();

doublyLinkList.push(1);
//doublyLinkList.push(2);
doublyLinkList.push(3);
doublyLinkList.push(4);
doublyLinkList.push(5);
doublyLinkList.push(6);
doublyLinkList.push(7);
doublyLinkList.insert(1,2);
console.log(doublyLinkList.set(5,0));

console.log(doublyLinkList);
console.log(doublyLinkList.get(5));
