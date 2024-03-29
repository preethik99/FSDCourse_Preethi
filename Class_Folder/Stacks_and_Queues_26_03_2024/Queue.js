//In JavaScript, a queue is a data structure that follows the First-In-First-Out (FIFO) principle


class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) //method adds elements to the rear end of the queue
    {
        this.queue.push(element);
    }

    dequeue() //method removes and returns elements from the front end of the queue
    {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return undefined;
        }
        return this.queue.shift();
    }

    isEmpty() //method checks if the queue is empty.
    {
        return this.queue.length === 0;
    }

    printQueue() //method prints the elements of the queue.
    {
        console.log("Queue:", this.queue);
    }
}

// Example usage:
let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.printQueue(); // Output: Queue: [1, 2, 3]

console.log("Dequeued element:", queue.dequeue()); // Output: Dequeued element: 1

queue.printQueue(); // Output: Queue: [2, 3]
