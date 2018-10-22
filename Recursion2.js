//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

var exponent = function (base, expo)
{
    var product = base
    var counter = 1
    while (expo > 0)
    {
        product =  product * base
        --expo
        counter +=1
        console.log(base+"^"+counter+"="+product)
    }
    return product
}

exponent(5, 5)

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

var rExponent = function(base, expo)
{
    var product = 1
    if(expo === 0)
    {
        console.log("Base: "+base+ " * Expo "+expo+" = "+product)
        return product;
    }
    else
    {   
        product = base * (rExponent(base, --expo))
        console.log("Base: "+base+ " * Expo "+(expo+1)+" = "+product)
        return product
    }
}
rExponent(2, 8)