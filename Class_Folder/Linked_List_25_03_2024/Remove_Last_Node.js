// Removal of Head Node in Linked List

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

    removeLast() 
    {
        if (this.head == null) //Checks if the list is empty (i.e., head is null). If so, returns null.
        {
            return null;
        }
        let temp=this.head;
        let prev=null;
        while(temp.next!=null)
        {
            prev=temp;
            temp=temp.next;
        }
        if(prev==null)  // If the list has only one node
        {
            this.head=null;
        }
        else
        {
            prev.next=null;
        }
        return temp;
     
    }
}

let empList=new linked_List();
empList.append("Preethi",34,8987737879);
empList.append("Shruthi",36,7887737879);
empList.append("Reethi",35,9987737879);
empList.append("Kruthi",88,7569842632);

let removedEmployee = empList.removeLast();
console.log("Removed employee last node:", removedEmployee);


