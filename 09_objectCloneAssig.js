console.log(`==============Step 1=================`);
const bankSbi={
    name:`SBI`,
    branch:`Main Branch`,
    accounts:10000,
    services:['savings','loans']
};
console.log(bankSbi);
console.log(`==============Step 2=================`);
const bankLocation={
    street:'123 Main Street',
    city:'Cityville',
    pin:'12345'
};
console.log(bankLocation);
console.log(`==============Step 3=================`);
const cloneBankSbi=Object.assign({},bankSbi);
console.log(`Cloned BankSbi:`,cloneBankSbi);

const clonedBankLocation=Object.assign({},bankLocation);
console.log(`cloned Bank Location:`,clonedBankLocation);
console.log(`==============Step 4=================`);

const rateOfInterest={
    hlInterest:5.5,
    plInterest:8,
    dueInterest:7.5
};
console.log(rateOfInterest);
console.log(`==============Step 5=================`);
const sbiDetails=Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(`Merged SbiDetails:`,sbiDetails);
console.log(`==============Step 6=================`);
console.log(`Traversing Sbi Details`);
for (const key in sbiDetails) {
    console.log(`${key}:${sbiDetails[key]}`);
}