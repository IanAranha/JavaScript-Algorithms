
/*

PSEUDOCODE FOR MERGE

Merge two sorted arrays.

Array 1 = L
Array 2 = R

L-pointer = 0
R-pointer = 0

Merged Array = []

merge(L, R)

Loop until L-Pointer === L.length-1 && R-Pointer === R.length-1
    If L[L-Pointer] is larger than R[R-Pointer]
        push R[R-pointer], to merged Array
        increment R-pointer
    else
        push L[L-Pointer] to merged Array
        increment L-pointer

*/

var merge = function(left, right)
{
    var result = []
    var Lptr = 0
    var Rptr = 0

    //While the result array is not fully populated, loop is repeated
    while(result.length < (left.length + right.length))
    {
        /*For each iteration of the loop, only ONE of the following is performed before looping back
            If the left pointer is equal to the length of left array (all left elements have been added)
                then just add all the remaining right elements, spicing from where we left off.
            else
            if the right pointer is equal to lenght of the right array
                then just add all the remoaing left elements splicing from where we left off.
            else
            compare left array item to right array item 
                if left is smaller, push the left item to the array and increment the left pointer.
            else
                push the right item to the array and increase the right pointer
            */
        if(Lptr === left.length)
        {
            result = result.concat(right.slice(Rptr))
        }
        else if (Rptr === right.length)
        {
            result = result.concat(left.slice(Lptr))
        }
        else if (left[Lptr] <= right[Rptr])
        {
            result.push(left[Lptr++])
        }
        else
        {
            result.push(right[Rptr++])
        }
    }
    return result
}

console.log(merge([3,5,7,9], [2,4,11,23]))
console.log(merge([3,5,7,9,18,23,45,78,97,103,344], [2,4,11,23]))
console.log(merge([3,5,7,9], [2,4,11,23,27,28,49,51,67,82,92,107,140,234,654,1999]))