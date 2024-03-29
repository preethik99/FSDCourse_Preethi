class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// In-order traversal: Left -> Root -> Right
function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

// Pre-order traversal: Root -> Left -> Right
function preOrderTraversal(node) {
    if (node === null) {
        return;
    }
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
}

// Post-order traversal: Left -> Right -> Root
function postOrderTraversal(node) {
    if (node === null) {
        return;
    }
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("In-order traversal:");
inOrderTraversal(root);

console.log("Pre-order traversal:");
preOrderTraversal(root);

console.log("Post-order traversal:");
postOrderTraversal(root);

/*           1            
         2       3        
     4       5

*/
