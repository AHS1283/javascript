var greet="Good Morning";
var totalChar=greet.length;
console.log("Total Character in the string is:",totalChar);

var charAtIndex5=greet.charAt(5);
console.log("Char present at index 5 is",charAtIndex5);
console.log(typeof charAtIndex5);
console.log("========================");
var str1="hey";
var str2="sweety";
var concatStr=str1.concat(str2);
console.log("Concatnated string is :",concatStr);

var indexOfD=greet.indexOf('D');
console.log("Index of D",indexOfD);

var indexOfd=greet.indexOf('d');
console.log("Index of D",indexOfd);

var indexOfo=greet.lastIndexOf('O')
console.log("index of O",indexOfo);
 
var myName="Aayesha Shaikh";
var result=myName.replace("Shaikh","Mulani");
console.log(result);

var city="Pune";
console.log(city.length);
var trimresult=city.trim();
console.log(trimresult,trimresult.length);

console.log(`After trim city is:${trimresult},its length is:${trimresult.length}`);
 var num=15;
var result= num.toString();
 console.log(`number is ${num} and its type is ${typeof num}`);
 console.log(`after conversion number is ${result},its type is ${typeof result}`);

 var greet="Good morning";
 var isavailable=greet.includes("ing");
 console.log(`is substring "ing" available=> ${isavailable}`);
 var result=greet.slice(5,10);
 console.log(`the string is ${result}`);

 var word="jenny Herry";
 var result=word.split(" ");
 console.log(result);
 console.log(`Total words in the string is; ${result.length}`);
 console.log(typeof result);


 var givenString="hey i am UI and java developer";
 var result=givenString.split(" ");
 console.log(result);
 console.log(`Total words in string is:${result.length}`);

