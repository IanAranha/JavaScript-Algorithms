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


bst = new Node(3) 						//===>  Node{value:{3}, left:{null}, right:{null}}
console.log(bst)
bst.insert(22)							//===>  Node{value:{3}, left:{null}, right:{value:{22}, left{null}, right:{null}}}
bst.insert(33)							//===>  Node{value:{3}, left:{null}, right:{value:{22}, left{null}, right:{value:33, left{nill}, right {null}}}}
bst.insert(14)							//===>  Node{value:{3}, left:{null}, right:{value:{22}, left{value:14, left{null}, right{null}}, right:{value:33, left{nill}, right {null}}}}
bst.insert(17)							//===>  Node{value:{3}, left:{null}, right:{value:{22}, left{value:14, left{null}, right{value:17, left{null}, right{null}}}, right:{value:33, left{null}, right {null}}}}
bst.insert(2)							//===>  Node{value:{3}, left:{value: 2, left:{null} right:{null}}, right:{value:{22}, left{value:14, left{null}, right{value:17, left{null}, right{null}}}, right:{value:33, left{null}, right {null}}}}
bst.insert(-5)
console.log(bst)
console.log(bst.contains(33))  			//===>true
console.log(bst.contains(50)) 			//===>false
