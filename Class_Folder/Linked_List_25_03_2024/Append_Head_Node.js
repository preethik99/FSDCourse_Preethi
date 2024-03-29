// Code for Appending the Head Node in Linked List

// Node Class (node):
// Represents a single node in the linked list.
// Each node contains data for an employee (name, employee ID, and phone number) and a reference to the next node in the list (next).

class node
{
    constructor(name,empid,phone)
    {
        this.name=name;
        this.empid=empid;
        this.phone=phone;
        this.next=null;
    }
}


class linked_List
{
    constructor()
    {
        this.head=null; //initially, the linked list is empty
    }

    append(name,empid,phone)
    {
        let newNode = new node(name,empid,phone); //Creates a new node with the provided employee data
        if(this.head==null) //If the linked list is empty, set the new node as the head
        {
            this.head=newNode;
        }
        else
        {
            let temp=this.head; //Otherwise, traverses the list to find the last node and appends the new node to its next pointer.
            while(temp.next!=null)
            {
                temp=temp.next;
            }
            temp.next=newNode;
        }
    }

    AppendHead(name,empid,phone) 
    {
        let newNode = new node(name,empid,phone);
        if (this.head == null) //Checks if the list is empty (i.e., head is null). If so, returns null.
        {
            this.head= newNode;          
        }
        else
        {
           newNode.next=this.head;
           this.head=newNode;           
        }
        let addNode = this.head; //Stores a reference to the current head node in removeNo
        return addNode;//Returns the removed node.
    }
}

let empList=new linked_List();
//empList.append("Preethi",34,8987737879);
empList.append("Shruthi",36,7887737879);
empList.append("Reethi",35,9987737879);
empList.append("Kruthi",88,7569842632);

console.log("Linked list before removing the head node:", empList.head);
let appendHeadEmployee = empList.AppendHead("Preethi",34,8987737879);
console.log("Linked list after removing the head node:", empList.head);

