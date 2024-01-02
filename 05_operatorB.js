console.log(`================Step 1=========================`);
function greaterNumber(num1,num2){
(num1>num2)?console.log(`${num1} is grater`):(num1<num2)?console.log(`${num2} is greater`):console.log(`numbers are equal`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`=======================Step 2=====================`);
function isEvenOrOddNum(num){
console.log(num %2=== 0 ?`${num} is even`:`${num} is odd`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`=======================Step 3=====================`);
function wordLength(word)
{
    console.log(word.length % 2===0 ? `${word} length is EVEN `: `${word} length is ODD`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");