/*
STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.

Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation.

Use an object as the underlying data structure.

*** Operations:
myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection 

myStack.count()
=> number of elements in stack

*** Additional Exercises:
Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
*/

function Stack(capacity)
  {
    this._capacity = capacity;
    this._storage = {}
    this._counter = 0;
  }
  
  Stack.prototype.push = function(value) 
  {
    if(this._counter < this._capacity)
    {
      this._storage[this._counter] = value
      this._counter += 1
      return this._counter
    }
    var msg = console.log("Capacity full. Delete an element")
    return msg
  };

  Stack.prototype.pop = function()
  {
    if(this._counter === 0)
    {
      var x = "There are no elements to delete"
      console.log(x)
      return x;
    }
    else
    {
      var value = this._storage[--this._counter]
      delete this._storage[this._counter]
      console.log(value)
      return value
    }
  }

  Stack.prototype.peek = function() {
    if(this._counter === 0)
    {
      var x = console.log("No elements to peek at ")
      return x
    }
    var peek = console.log(this._storage[this._counter-1])
    return peek
  };

  Stack.prototype.count = function() 
  {
    var size = this._counter
    console.log(size)
  };

  Stack.prototype.contains = function(value)
  {
    var pointer = 0
    var flag = true
    if (this._counter === 0)
    {
      return console.log("There are no elements in the storage")
    }
    while(flag && pointer <= this._counter)
    {
      if(this._storage[pointer] === value)
      {
        flag = false
        return console.log("Item is in storage")
      }
      else
      {
        pointer += 1
      }
      if(pointer > this._counter)
      {
        return console.log("Item is not in storage")
      }
    }
  };

  Stack.prototype.until=function(value)
  {
    var flag = true
    var pops = 0
    while(flag && this._counter > 0)
    {
      var x = myStack.pop()
      pops += 1
      if(x === value)
      {
        flag = false
        return console.log( pops + "pops")
      }
      else
      {
        return console.log("Item not found")
      }
    }
  }

console.log("Hello World")
var myStack = new Stack(10)
console.log(myStack)
console.log(myStack._capacity)
console.log(myStack._counter)
myStack.push("a")
myStack.push("b")
console.log(Object.values(myStack))
console.log(myStack)
console.log(myStack._capacity)
console.log(myStack._storage)
myStack.push("c")
myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack._counter)
myStack.push("A")
myStack.push("Freedom")
myStack.push("Seahawks")
myStack.peek()
myStack.count()
myStack.push("Mumbai")
myStack.peek()
myStack.count()
myStack.pop()
myStack.pop()
myStack.count()
myStack.pop()
myStack.pop()
myStack.pop()
myStack.peek()
myStack.push("Testing")
myStack.peek()
myStack.count()
myStack.contains("Seahawks")
myStack.contains("c")
for(var i = 0; i<=myStack._capacity; i++)
{
  myStack.push(i)
}(
console.log(Object.values(myStack)))
myStack.until(5)


  