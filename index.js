class node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  class linkedlist {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    prepend(data) {
      this.head = new node(data, this.head);
      this.size++;
    }
    appendtail(data) {
      let tail = new node(data);
      let current;
      if (this.size === 0) this.prepend(data);
      else {
        current = this.head;
  
        while (current.next !== null) {
          current = current.next;
        }
        current.next = tail;
      }
      this.size++;
    }
    get getsize() {
      return this.size;
    }
    get headNode() {
      return this.head;
    }
    get tailNode() {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      console.log(current);
    }
    insertAt(data, index) {
      if (index < 0 || index > this.size) {
        //This tells index less 0 or greater than the isze of the linkedlist anlle no operation  indvila =>return
        return;
      } else if (index === 0) {
        this.prepend(data);
        return;
      }
      let node = new Node(data);
      let current = this.head;
      let previous;
      let currentPosition = 0;
      while (currentPosition < index) {
        previous = current; // Node before index
        current = current.next; // Node after index
        currentPosition++;
      }
      previous.next = node; // Adds new node after previous
      node.next = current; // Adds current after new inserted node
      this.size++;
    }
    at(index) {
      let current = this.head;
      let currentPosition = 0;
      while (current) {
        if (currentPosition == index) {
          console.log(current.data);
        }
        current = current.next;
        currentPosition++;
      }
      return null;
    }
  
    contains(value, current = this.head, count = 0) {
      if (current === null) return console.log(null);
      if (value === current.data) {
        return console.log(`true,index:${count}`);
      }
      // console.log("helo")
      this.contains(value, current.next, ++count);
    }
    pop() {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = null;
      this.size--;
    }
    toString() {
    let current = this.head;
    let string = "";
  
    while (current !== null) {
      string += `( ${current.data} ) -> `;
      current = current.next; // Traverse to the next node
    }
    string += `null`;
    return string;
  }
  
    find(data) {
      let current = this.head;
      let index = 0;
    
      while (current !== null) {
        if (current.data === data) {
          return index;
        } else {
          current = current.next; // Traverse to the next node
          index++;
        }
      }
      return null;
    }
    
    
  }
  
  const myLinkedList = new linkedlist();
  myLinkedList.prepend(300);
  myLinkedList.prepend(400);
  myLinkedList.prepend(700);
  myLinkedList.prepend(1400, 0);
  
  myLinkedList.appendtail(900);
  myLinkedList.appendtail(1100);
  
  console.log(myLinkedList.getsize);
  console.log(myLinkedList.headNode);
  console.log(myLinkedList.at(2));
  console.log(myLinkedList.find(700));
  console.log(myLinkedList.toString());
  
  console.log(myLinkedList.contains(500));
  
  console.log(myLinkedList.tailNode);