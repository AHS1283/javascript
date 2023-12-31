console.log("=====================STEP 1===================");
var side=34;
function area_of_square()
{
    var area=side*side;
    console.log("Area of the Square ="+""+area);
    
}
area_of_square();
 function addition() {
    var a=10;
    var b=20;
    var c=a+b;
    console.log("Total number is"+c);
 }
 addition();
 console.log("=====================STEP 2=====================");
 function personalDetails(firstName,lastName,collegeName) {
    console.log("My First Name is:"+firstName);
    console.log("my last Name is:"+lastName);
    console.log("my College Name is:"+collegeName);
    
 }
 personalDetails("Aayesha","Shaikh","Karmayogi Engineering College Shelve Pandharpur")
 console.log("==========================STEP 3==================");
 function swapValues(first,last){
   var temp;
   //var firstName="Aayesha";
   //var lastName="Shaikh";
   console.log("before Swapping:"+first,last);
   temp=first;
   first=last;
   last=temp;
   console.log("After Swapping:"+first,last);

 }
 swapValues("Aayesha","Shaikh")
 swapValues(1000,2000)
console.log("==========================STEP 4=================");
function addThreeValues(n1,n2,n3) {
   var n4=n1+n2+n3;
   console.log("Addition:"+n4);
}
addThreeValues(10.23,600,4)
addThreeValues("Hello"," Good"," Morning")