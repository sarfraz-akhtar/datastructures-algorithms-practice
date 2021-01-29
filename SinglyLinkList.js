class Node {
    constructor(val){
       this.val = val;
       this.next = null; 
    }
}

class SinglyLinkList {
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
            this.tail.next = node;
        }

        this.tail = node; 
        this.length++;

        return node;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shift() {

        if(!this.head) return undefined;
        const removeNode = this.head;
        this.head = this.head.next;
        this.length--;
        removeNode.next = null;
        return removeNode;
    }

    unshift(val) {
        const node = new Node(val);
        if(this.length === 0){
           this.tail = node;
        } else {
            node.next = this.head;
        }

        this.head = node;        
        this.length++;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
         let node = this.head;
         for(var i = 1; i <= index; i++) {
             node = node.next;
         }

         return node;

    }

     insert(index, val){
        if(index < 0 || index > this.length) return null;
         if(index === 0) return this.unshift(val);
         if(index === this.length) return this.push(val);

         let nextNode = this.get(index);
         let prevNode = this.get(index - 1);
         let node = new Node(val);
         prevNode.next = node;
         node.next = nextNode;
         this.length++;
         return node;
    }


    set(index, val){
        if(index < 0 || index > this.length) return null;
         let node = this.get(index);
          node.val = val;
         return node;

    }

     remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index ===0) return this.shift();
        if(index === this.length -1) return this.pop();  
         
         let prevNode  = this.get(index -1);
         let currentNode = prevNode.next;
         let nextNode = node.next;
          
          prevNode.next = nextNode;
          currentNode.next = null;
          this.length--;
         return currentNode;

    }

    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }

}

var singlyLinkList = new SinglyLinkList();

singlyLinkList.push(1);
singlyLinkList.push(2);
singlyLinkList.push(3);
singlyLinkList.shift();
singlyLinkList.unshift(0);
singlyLinkList.insert(1,1);
singlyLinkList.set(3,10);

console.log(singlyLinkList);

console.log(singlyLinkList.get(2));