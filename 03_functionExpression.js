//function Expression-FE
//FE-Strong fuctoin inside the variable
var display=function(){
    console.log("display");
}
display();//call -Function expression

var maleMarriageEligibility=function(gender,age,boyName)
{
    var result=gender=="Male" && age>21 ? `HEy ${boyName}you are eligible for marriage`:`unfortunately- you are not eligible ,go and watch pogo`;
    console.log(result);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",20,"Elon");