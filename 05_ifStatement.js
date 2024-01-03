var age=25;
if (age>=21) {
    console.log(`Inside if block.....`);
    
}
console.log(`outside if block..........`);
var age=22;
if (age>=21) {
    console.log(`Eligible for marriage`);
    console.log(`inside if block`);
} else {
    console.log(`Nope.. please try next time..`);
    
}
var isEvenOdd=function(num) {
    if (num%2==0) {
        returnValue="Even";
    } else {
        returnValue= "ODD";
    }
   return returnValue; 
};
var result=isEvenOdd(23);
console.log(`23 given number is ${result}`);
var result=isEvenOdd(30);
console.log(`30 given number is ${result}`);



