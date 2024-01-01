console.log("=========================STEP 1=============================");
function squareOfWordLength(word)
{
    var lengthSquare=word.length**2;
    console.log(`The square of the length of "${word}"is:${lengthSquare}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google chrome");
squareOfWordLength("Developer Smart");
console.log("===========================Step 2================================");
function calculateStringProperties()
{
    var inputString ="I am Angular Developer";
    var words=inputString.split(" ");
    var totalWords=words.length;
    var stringLength=inputString.length;
    console.log(`Result of string length  divided by total no of words:${stringLength/totalWords}`);
    console.log(`Result of string length multiplied by  total no of word:${stringLength*totalWords}`);
}
calculateStringProperties()