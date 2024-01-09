const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`==========================Step 1=========================`);
console.log("Total Element:",arrayNumbers.length);
console.log(`==========================Step 2=========================`);
console.log("First Element:",arrayNumbers[0]);
console.log("Last Element:",arrayNumbers[arrayNumbers.length-1]);
console.log(`==========================Step 3=========================`);
console.log("third last Element:",arrayNumbers[arrayNumbers.length-3]);
console.log(`==========================Step 4=========================`);
for (const num of arrayNumbers) {
    if(num%2===0)
    console.log("Even Number:",num);
}
console.log(`==========================Step 5=========================`);
for (const num of arrayNumbers) {
    if(num%2!==0)
    console.log("Odd Number:",num);
}
console.log(`==========================Step 6=========================`);
let evenPositionedSum=0;
for (let i = 0; i < arrayNumbers.length; i+=2) {
    evenPositionedSum+=arrayNumbers[i];
}
console.log("sum of even positioned elements:",evenPositionedSum);
console.log(`==========================Step 7=========================`);
let oddPositionedSum=0;
for (let i = 0; i < arrayNumbers.length; i+=2) {
    oddPositionedSum+=arrayNumbers[i];
}
console.log(`sum of odd positioned elements:`,oddPositionedSum);
console.log(`==========================Step 8=========================`);
const totalSum=arrayNumbers.reduce((acc,num)=>acc+num,0);
console.log(`Sum of all element:`,totalSum);
console.log(`==========================Step 9=========================`);
const multipleOf5=arrayNumbers.filter(num=>num%5===0);
console.log("Multiple of 5:",multipleOf5);
console.log(`==========================Step 10=========================`);
console.log("Number 115 is in the Array:",arrayNumbers.includes(115));
console.log(`==========================Step 11=========================`);
console.log(`Number 23 is in the array:`,arrayNumbers.includes(23));
console.log(`==========================Step 12=========================`);
arrayNumbers.splice(3,0,55,66);
console.log(`Array after insertion:`,arrayNumbers);
console.log(`==========================Step 13=========================`);
arrayNumbers.splice(4,3);
console.log("Array after deletion: ",arrayNumbers);

