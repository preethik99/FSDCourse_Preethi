class Node {
    constructor(name, empid, phone) {
        this.name = name;
        this.empid = empid;
        this.phone = phone;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(name, empid, phone) {
        let newNode = new Node(name, empid, phone);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteNode(empid) {
        if (this.head == null) {
            return "Linked List is Empty";
        }
        
        if (this.head.empid == empid) 
        {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let prev = null;

        while (current !== null && current.empid !== empid) 
        {
            prev = current;
            current = current.next;
        }

        if (current == null) // when the empid we are searching is not present 
        {
            console.log(`Employee with empid ${empid} not found.`);
            return;
        }
        prev.next = current.next; //updates the next reference of the previous node to skip the node to be deleted
    }

    display() 
    {
        let current = this.head;
        while (current !== null)
        {
            console.log(`Name: ${current.name}, EmpID: ${current.empid}, Phone: ${current.phone}`);
            current = current.next;
        }
    }
}

// Example usage:
let empList = new LinkedList();
empList.append("Preethi",34,8987737879);
empList.append("Shruthi",36,7887737879);
empList.append("Reethi",35,9987737879);
empList.append("Kruthi",88,7569842632);

console.log("Before deletion:");
empList.display();

// Delete a node with empid 102
empList.deleteNode(36);

console.log("After deletion:");
empList.display();
