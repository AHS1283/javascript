console.log("==============================Step 1========================");
var maleMarriageEligibility=function (gender,age,boyName) {
   var result=(gender==="Male" && age>=21)? `Hey ${boyName},you are eligible for marrige`:` Not eligible for Marraige`;
   console.log(result);
};
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");
console.log("==============================Step 2========================");
var femaleMarriageEligibilty=function(gender,age,girlName) {
 var result=(gender==="Female" && age>=18) ? `Hey ${girlName}, you are eligible  for marriage`:`Not eligible for marriage`;
 console.log(result);
    
};
femaleMarriageEligibilty("Female",16,"Jenifer");
femaleMarriageEligibilty("Female",27,"Malinda Gates");