function square(num)
{
    console.log("given value is",num);
    var result=num*num;
    console.log("Result is:",result);
}
square(9);
square(25);
square(1023);

console.log("=====================STEP 2================");

function multiply(n1,n2,n3)
{
    console.log("given numbers are:",n1,n2,n3);
    var result=n1*n2*n3;
    return result;
}
var returnValue=multiply(5,5,5);
console.log("Multiplication is:",returnValue);

console.log("=======================Step 3=================");
function swap(n1,n2)
{
    console.log("before Swap",n1,n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log("After swap",n1,n2);
}
swap(100,200);
swap("jemmy","memmy");
