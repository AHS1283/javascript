console.log(`=======================Step 1===================`);
const str="I am very good IT Developer";
let vowelCount=0;
for (let i = 0; i < str.length; i++) {
    const char=str[i].toLowerCase();
    if(char==='a'||char ==='e'||char==='i'||char==='o'||char==='u')
    {
        vowelCount++;
    }
}
console.log("total number of vowels",vowelCount);

console.log(`=======================Step 2===================`);
function sumOfCubes() {
    let sum=0;
    for (let i = 0; i <=5; i++) {
        sum+=i*i*i;
        
    }
    return sum;
}
const result=sumOfCubes();
console.log("sum of cubes",result);
console.log(`=======================Step 3===================`);
const str1="Hard Work always pay back";
const str2="Soon I Will be UI IT champ";
function oddPositionChars(str) {
    for (let i = 0; i < str.length; i++) {
        if(i%2!==0 && str[i]!=='')
        {
            console.log(str[i]);
        }
        
    }
    
}
console.log(`Odd positioned chars for str1:`);
oddPositionChars(str1);
console.log(`Odd positioned chars for str2:`);
oddPositionChars(str2);


