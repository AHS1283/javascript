const str1="Hard Work always pays back";
const str2="Soon I will be Angular IT Champ";
function reverString(str) {
    let rstr=" ";
    for(let i=str.length-1;i>=0;i--)
    {
        if (str[i]!=='') {
            
        
        rstr=rstr+str.charAt(i);
        }
    }
    return rstr;
} 
console.log(`Reversed first string:`,reverString(str1));

console.log(`Reversed Second String`,reverString(str2));
