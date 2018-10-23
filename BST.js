/*

Binary Search Tree is a tree with restraints. It is an Abstract Data Type.

Each node in the tree has only two children:
	Left: Smaller than the parent node (node.left)
	Right: Larger than the parent node. (node.right)


PSEUDOCODE

Binary Search Tree

Constructor
	value
	left node
	right node

Methods
	Insert
		Goal: Find the proper place for {value}
		remember each node has this.value, this.left and this.right

	insert(value)
		if value <= this.value
			if there is a left
				this.left.insert(value)
			else
				this.left = new BST(value)
		
		if value >= this.value
			if there is a right
				this.right.insert(value)
			else
				this.right = new BST(value)

		

	Contains
		Goal : scans a tree and returns true/false if {value} is present
		Remember each node has this.value, this.left and this.right

		
	contains(value)
		if the this.value === value
			return true
		else
			if value > this.value
				if there is a right
					"go right" this.right.contains(value)
			else
				if value < this.value
					if there is a left
						"go left" this.left.insert

*/


function Node(val)          						//This function creates node objects.
{
	this.value = val
	this.left = null
	this.right = null
}



Node.prototype.insert = function(value)
{
	//First check memory to see if a node with passed value exists. 
	//If  not, then start a new Node with that value(root)
	//IF the tree already exists, then if the passed value smaller than the current value, then go left and establish the new node
	if(value <= this.value)										
	{
		if(this.left)
			{
				this.left.insert(value)
			}
		else
			this.left = new Node(value)
	}
	else
		if(this.right)
		{
			this.right.insert(value)
		}
		else
			this.right = new Node(value)
	return this
}


Node.prototype.contains = function(value)
{
	if (this.value === value)
		return true
	if(value < this.value)
	{
		//New JS trick learned! Double bang forces the computer to do the first command, if false, second command not performed
		// this kind of end requires BOTH conditions to return true for it to become true.
		//The first one !! is like a gateway...it proceeds to the second one only if it is true
		//if the second one returns false
		//So in this case, the pointer is going down the left side and at each node, compares the node value to the passed value
		//if the node value is the same as the passed value, it will return true 
		//this is set up recursively to test each node. 
		return !!this.left && this.left.contains(value)
	}
	else if(value > this.value)
	{
		return !!this.right && this.right.contains(value)
	}
	return false
}


bst = new Node(10) 						//===>  Node{value:{3}, left:{null}, right:{null}}
// console.log(bst)
// bst.insert(22)							//===>  Node{value:{3}, left:{null}, right:{value:{22}, left{null}, right:{null}}}
// bst.insert(33)							//===>  Node{value:{3}, left:{null}, right:{value:{22}, left{null}, right:{value:33, left{nill}, right {null}}}}
// bst.insert(14)							//===>  Node{value:{3}, left:{null}, right:{value:{22}, left{value:14, left{null}, right{null}}, right:{value:33, left{nill}, right {null}}}}
// bst.insert(17)							//===>  Node{value:{3}, left:{null}, right:{value:{22}, left{value:14, left{null}, right{value:17, left{null}, right{null}}}, right:{value:33, left{null}, right {null}}}}
// bst.insert(2)							//===>  Node{value:{3}, left:{value: 2, left:{null} right:{null}}, right:{value:{22}, left{value:14, left{null}, right{value:17, left{null}, right{null}}}, right:{value:33, left{null}, right {null}}}}
// bst.insert(-5)
// console.log(bst)
bst.insert(5).insert(15).insert(8).insert(3).insert(7).insert(20).insert(17).insert(9).insert(14);
console.log(bst.contains(33))  			//===>true
console.log(bst.contains(50)) 			//===>false



//Binary Search Tree In-Order Traversal 
// This visits each node starting from the least and then hitting each in ascending order.
// Basically the pattern is
// LEFT ---> PARENT -----> RIGHT 

Node.prototype.In_Order_Traverse = function(fn)
{
	//Base case : If there are no leafs in the node, return this.
	if( !this.left && !this.right)
		return fn(this)

	// GO LEFT
	if(this.left) 
		this.left.In_Order_Traverse(fn)

	//SELF (back to the parent)
	fn(this)

	//GO RIGHT
	if(this.right)
		this.right.In_Order_Traverse(fn)
}


//Establish an empty array
var Result_In_Order = []

//Establish a function that will travese the whole BST and push each value to the new array
fn = function(node)
{
	Result_In_Order.push(node.value)
}

bst.In_Order_Traverse(fn)

console.log(Result_In_Order)


Node.prototype.Pre_Order_Traverse = function(fn)

//This visits the current node before the child node
{
	//Base case : If there are no leafs in the node, return this.
	if( !this.left && !this.right)
		return fn(this)

	//SELF 
	fn(this)

	// GO LEFT
	if(this.left) 
		this.left.In_Order_Traverse(fn)

	//GO RIGHT
	if(this.right)
		this.right.In_Order_Traverse(fn)
}



var Result_Pre_Order = [];

fn = function(node)
{
	Result_Pre_Order.push(node.value)
}

bst.Pre_Order_Traverse(fn)

console.log(Result_Pre_Order);




Node.prototype.Post_Order_Traverse = function(fn)

//This visits the current node after the child node
{
	//Base case : If there are no leafs in the node, return this.
	if( !this.left && !this.right)
		return fn(this)

	// GO LEFT
	if(this.left) 
		this.left.In_Order_Traverse(fn)

	//GO RIGHT
	if(this.right)
		this.right.In_Order_Traverse(fn)

	//SELF
	fn(this)
}



var Result_Post_Order = [];


fn = function(node)
{
	Result_Post_Order.push(node.value)
}

bst.Post_Order_Traverse(fn)

console.log(Result_Post_Order);


