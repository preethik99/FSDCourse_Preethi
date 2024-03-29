// In JavaScript, a stack is a data structure that follows the Last-In-First-Out (LIFO) principle, 
//meaning that the last element added to the stack is the first one to be removed.
// It operates on the principle of pushing elements onto the top of the stack and popping them off the top.


class Stack {
    constructor(capacity) {
        this.capacity = capacity;
        this.stack = [];
    }

    push(element) {
        if (this.isFull()) {
            console.log("Stack is full. Cannot push element:", element);
            return;
        }
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Cannot pop.");
            return undefined;
        }
        return this.stack.pop();
    }

    isFull() {
        return this.stack.length == this.capacity;
    }

    isEmpty() {
        return this.stack.length == 0;
    }

    printStack() {
        console.log("Stack:", this.stack);
    }
}

// Example usage:
let stack = new Stack(3); // Create a stack with capacity 3
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4); // Trying to push when stack is full
stack.printStack(); // Output: Stack: [1, 2, 3]

let poppedElement = stack.pop(); // Pop an element
console.log("Popped element:", poppedElement); // Output: Popped element: 3
stack.printStack(); // Output: Stack: [1, 2]


