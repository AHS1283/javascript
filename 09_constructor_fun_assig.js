console.log(`========================Step 1 and Step 2===================`);
function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
  }
  

  const yesBank = new Bank('Yes Bank', 'Pandharpur', 'YES123', 'YB001');
  console.log(`Bank Details: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
  
  const sbiBank = new Bank('SBI Bank', 'Akluj', 'SBI456', 'SB002');
  console.log(`Bank Details: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
  
  const mahBank = new Bank('Mah Bank', 'Indapur', 'MAH789', 'MB003');
  console.log(`Bank Details: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);
  
  const axisBank = new Bank('Axis Bank', 'Solapur', 'AXIS012', 'AB004');
  console.log(`Bank Details: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);
  
  console.log(`========================Step 3,4 and 5===================`);
  Bank.prototype.openTime = "9 AM IST";
  Bank.prototype.closeTime = "6 PM IST";
 
  console.log(`SBI Bank Opening Time: ${sbiBank.openTime}, Closing Time: ${sbiBank.closeTime}`);
  console.log(`========================Step 6===================`);
 
  console.log(`Axis Bank Name: ${axisBank.bankName}, Closing Time: ${axisBank.closeTime}`);
  console.log(`========================Step 7===================`);
  console.log(`Yes Bank Name: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Opening Time: ${yesBank.openTime}`);