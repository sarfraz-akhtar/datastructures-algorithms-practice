class Stack {
    constructor(){
        this.stack = [];
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    getLength(){
       return this.length;
    }

    push(val){
        this.stack.push(val);
        const index = this.stack.length -1;
        if(!this.first) {
            this.first = index;
        }
        this.last = index;
        this.size++;
        return this.last;
    }

    pop(val) {
        this.stack.pop();
        const index = this.stack.length -1;
        if(!this.last) {
            return null;
        }
        this.size--;
        if(this.size ===0){
            this.first = null;
            this.last = null;
        }
        return this.last;
    }
}