console.log(`===================Step 1========================`);
let professor={
    name:'Professor',
    age:45,
    experties:'Computer Science',
    teachingSubject:['Data Structures','Algorithms','Machine Learning'],
    university:'Tech university',

    degrees:{
        engineering:'CSC',
        phD:'Adv Computing ',
        additionalDegree:'MBA'
    },
   
    certificates:['Hacker Rank Participation','Certificates in Full stack Course','Certificate in adv Programming'],
    totalExperience:"14 years",
};
console.log(professor);
console.log(`============================Step 2=================================`);
console.log(professor.degrees);
console.log(`============================Step 3=================================`);
console.log(professor.certificates);
console.log(`============================Step 4=================================`);
console.log(professor.totalExperience);
console.log(`============================Step 5=================================`);
professor.age=46;
console.log(professor.age);
console.log(`============================Step 6=================================`);
professor.certificates.splice(2,0,'Oracle Certified');
console.log(professor.certificates);
console.log(`============================Step 7=================================`);
console.log("Last Certificate:",professor.certificates[professor.certificates.length-1]);
console.log(`============================Step 8=================================`);
console.log(professor);
console.log("certificates:");
for (const certificates of professor.certificates) {
    console.log("- "+certificates );
    
}