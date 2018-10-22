
/*
Bubble SORT
*** Description
Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array
*/

var bubbleSort = function(arr)
{
    //This first loop: the outer loop. This has to traverse the length of the array
    //Pointer is pointing to 2nd element
    for(var k = 1; k < arr.length; k++)
    {
        //This second loop: inner loop.
        //Pointer is pointing to the 1st element.
        //While the outer pointer is pointing to element 2
        //This for-loop will compare element 1 and 2, then outer loop increments by 1 and this inner-loop is repeated.....
        for(var i = 0; i < arr.length; i++)
        {
            //comparison
            if(arr[i] > arr[i+1])
            {
                var temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr;
}

var bubbleSort2 = function(arr)
{
    var swapSignal = true
    while( swapSignal)
    {
        swapSignal = false
        for(var i = 0; i < arr.length-1; i++)
        {
            if(arr[i] > arr[i+1])
            {
                var temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = temp
                swapSignal = true
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4,2,5,1,7,0]))
console.log(bubbleSort([4,1,23,22,94,22,34,10,12,45,9,29,33,22,5,1,7,0]))