console.log(`=================Step 1====================`);
var isEvenOdd=function(num) {
    if (num%2==0) {
        returnValue="Even";
    } else {
        returnValue= "ODD";
    }
   return returnValue; 
};
var result=isEvenOdd(45);
console.log(`given number is ${result}`);
var result=isEvenOdd(70);
console.log(`given number is ${result}`);
var result=isEvenOdd(67);
console.log(`given number is ${result}`);
var result=isEvenOdd(98);
console.log(`given number is ${result}`);
console.log(`====================STEP 2=================`);
var checkEligibilty=function(age)
{
  if(age>=18){
    console.log(`Eligible for Vote`);
  }else{
    console.log( `Not eligible for vote`);
  }
};
checkEligibilty(18);
console.log(`--------------------------`);
checkEligibilty(20);
console.log(`--------------------------`);
checkEligibilty(17);
console.log(`--------------------------`);
checkEligibilty(40);
console.log(`====================STEP 3=================`);

var checkStringLength=function (str) {
    if (str.length>10) {
        console.log(`String contains more than 10 chars`);
        
    } else {
        console.log( `String does not contain more than 10 chars`);
        
    }
};
checkStringLength("JavaScript-ES6");
console.log(`====================STEP 4=================`);
var checkStringStart=function (str) {
    if (str.startsWith("Java")) {
        console.log( `String Starts with "Java"`);
        
    } else {
        console.log(`String does not start with "Java"`);
    }

    
};
checkStringStart("JavaScript Language");