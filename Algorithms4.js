//Writing a factorial function using a for() loop

function computeFactorial(num)
{
    var result = 1
    console.log(1+": "+1)
    for(var i = 2; i <= num ; i++)
    {
        result *= i
        console.log(i+ ": "+ result)
    }
    return result
}

computeFactorial(10)


//Writing the smae funtion above but using recursion

function rComputeFactorial(num)
{
    if (num === 1)
    {
        console.log("1 = 1")
        return 1;
    }
    else 
    {
        var result = num * rComputeFactorial(num-1)
        console.log(num+" = "+result)
        return result;

    }
}

rComputeFactorial(10)
