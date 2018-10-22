/*
Introduction to Stacks

This code was written ALONG with the online video

*/

var Stack = function()
    {
        this.storage = " "
    }
    Stack.prototype.push = function(item)
    {
        this.storage = this.storage.concat("-"+item)
    }

    Stack.prototype.pop = function()
    {
       //first we create a separate variable an store the last value of the stack in this variable
       //storage is a string, so we find the index of "-" from the back and slice at that point.
       var str = this.storage.slice(this.storage.lastIndexOf("-"))

       //next we update storage with the same string, minus the last value.
       this.storage = this.storage.substring(0, this.storage.lastIndexOf("-"))

       //now we return the last value which has been stored in the variable
       return str;
       
    }
    Stack.prototype.size = function()
    {   
        //to determine how many stacks are in the storage. we will first initialize a counter
        var counter = 0
        //use a loop to pop the last item and add to the counter each loop
        while(this.storage.length != 0)
        {
            var size = myWeeklyMenu.pop()
            counter += 1
        }
        console.log("The stack has: "+ counter + " items.")

    }
    

    var myWeeklyMenu = new Stack();

    myWeeklyMenu.push("Red Beans");
    myWeeklyMenu.push("Irish Stew");
    myWeeklyMenu.push("Tacos");
    myWeeklyMenu.push("Green Salad");
    myWeeklyMenu.push("White Bean Chili")
    myWeeklyMenu.push("Veggie Burger")
    myWeeklyMenu.push("Chicken Curry")

    myWeeklyMenu.pop()
    console.log(myWeeklyMenu)
    myWeeklyMenu.pop()
    console.log(myWeeklyMenu)

    myWeeklyMenu.size()