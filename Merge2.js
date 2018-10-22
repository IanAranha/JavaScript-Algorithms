
/*

PSEUDOCODE FOR MERGE-SORT

SORT AN ARRAY USING THE MERGE/SORT METHOD

Assume you already have a Merge method written (Merge1.html)

mergerSort(list)
    basecase: if list.length < 2, return
    break list into 2 halves L & R
    Each list goes through merge sort repeatedly till only element left    
        L_sorted = mergeSort(L)
        R_sorted = mergeSort(R)
    return merge(L_sorted, r_sorted)

*/

var recursiveMergeSort = function(arr)
{
    //Base case
    if(arr.length < 2) 
        return arr;

    
    //Divide the input into two halves and assign them to L & R
    //The result of this is that all the items are in single arrays
    //The single arrays will be put togethe by the merge function

    //console.log("Full array: "+arr)
    var left = arr.slice(0, arr.length/2)
    var right = arr.slice(arr.length/2)
    //console.log("Left: "+left)
    //console.log("Right: "+right)
    var leftSorted = recursiveMergeSort(left)
    var rightSorted = recursiveMergeSort(right)
    //console.log("Left Sorted: "+leftSorted)
    //console.log("Right Sorted: "+rightSorted)
    
    // merge and sort each array

    var mergedArray = merge(leftSorted, rightSorted)
    return mergedArray
}

var merge = function(left, right)
{
    var result = []
    var Lptr = 0
    var Rptr = 0
    while (result.length < (left.length + right.length))
    {
        if (Lptr === left.length)
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
console.log(merge([2,5,8], [0,12,35]))
console.log(recursiveMergeSort([2,56,3,33,44,39,59,78,33,59,102]))