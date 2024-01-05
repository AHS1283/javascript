function checkMarriageEligibility(gender,age) {
    
    if (gender==="Male" && age>=21) {
        console.log(`Age ${age} eligible for marriage`);
        
    } else if (gender==="Female" && age>=18) {
        console.log(`Age ${age} eligible for marraige`);
    }
     else if(gender==="Other" && age>=21)   
     {
        console.log(`Age ${age} is not eligible for Marriage`);
     }
    else{
        console.log( `Age ${age} not eligible for marraige`);

    }
}
checkMarriageEligibility("Male",17);
checkMarriageEligibility("Male",25);
checkMarriageEligibility("Female",28);
checkMarriageEligibility("Female",16);
checkMarriageEligibility("other",35);
checkMarriageEligibility("other",41);
