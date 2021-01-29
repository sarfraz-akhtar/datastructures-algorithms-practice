class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value){
      const node =new Node(value);
      if(!this.root){
          this.root = node;
      } else {
      
      let root = this.root;
      let hasChildren = true;
      
      while(hasChildren){
          if(value < root.value){
              if(!root.left){
                 root.left = node;
                 hasChildren = false;
              } else {
                  root = root.left
              }
          } else{
               if(!root.right){
                 root.right = node;
                 hasChildren = false;
              } else {
                  root = root.right
              }
          }
          
      }
      }
      
      return this;
  }
}

var bst = new BinarySearchTree();
bst.insert(15);
bst.insert(20);
bst.insert(10);
bst.insert(12);