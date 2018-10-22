//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

var numberLoop = function(n)
{
    while(n > 0)
    {
        console.log(n)
        n--
    }
}

//2. Next, try looping just like above except using recursion

var rNumberLoop = function(n)
{
    while(n > 0)
    {
        console.log(n)
        return rNumberLoop(--n)
    }
}
/*
rNumberLoop Under The Hood
==============================================================
function(n) ===> n == 5
{
    while(n > 0) ===> true
    {
        console.log(n)      ===> console.log (5)
        return rNumberLoop(--n) ===> 1) --n => 5 - 1 == {4}
    }
}
===============================================================
function(n) {4} ===> n == 4
{
    while(n > 0) ===> true
    {
        console.log(n) ===> console.log (4)
        return rNumberLoop(--n) ===> --n => 4-1 == {3}
    }
}
===============================================================
function(n) {3} ===> n == 3
{
    while(n > 0) ===> true
    {
        console.log(n) ===> console.log (3)
        return rNumberLoop(--n) ===> --n => 3-1 == {2}
    }
}
===============================================================
function(n) {2} ===> n == 2
{
    while(n > 0) ===> true
    {
        console.log(n) ===> console.log (2)
        return rNumberLoop(--n) ===> --n => 2-1 == {1}
    }
}
===============================================================
function(n) {1} ===> n == 1
{
    while(n > 0) ===> true
    {
        console.log(n) ===> console.log (1)
        return rNumberLoop(--n) ===> --n => 1-1 == {0}
    }
}
===============================================================
function(n) {0} ===> n == 0
{
    while(n > 0) ===> false  ====>exit function
    {
        console.log(n) 
        return rNumberLoop(--n)
    }
}
================================================================
*/
numberLoop(5)
rNumberLoop(10)