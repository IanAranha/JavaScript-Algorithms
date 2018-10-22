
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

var recursiveMultiplier = function( arr, num)
{
    if (arr.length === 0)
    {
        return arr
    }
    else
    {
        var last = arr.pop()
        recursiveMultiplier(arr, num)
        arr.push(last * num)
        return arr
    }
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
var recursiveReverse = function(arr)             
{
    var reversedArr = []
    var addItems = function(orderedArray)
    {
        if(orderedArray.length > 0)
        {
            reversedArr.push(orderedArray.pop())
            addItems(orderedArray)
        }
        return;
    }
    addItems(arr)
    return reversedArr;
}


console.log(recursiveMultiplier([1,2,3,4],5))
console.log(recursiveReverse([1,2,3,4,5]))
