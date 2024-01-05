var checkInterviewEligibilty=function(gradScore,hscScore,sscScore,candidateName) {
    if(gradScore>=70 || hscScore>=60||sscScore>90)
    {
        console.log(` Congrates,${candidateName},you are eligible for TCS Interview`);
    }else{
        console.log(` Unfortunately,${candidateName},you are not eligible for TCS Interview`);
    }
}
checkInterviewEligibilty(80,86,90,"Aayesha Shaikh");
checkInterviewEligibilty(70,65,55,"Monali Maske");
checkInterviewEligibilty(60,79,88,"Ashwini Bagal");