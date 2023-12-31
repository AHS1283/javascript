function stringHandson() {
    console.log(`==============STEP 1===========`);
    var givenString="Hey you are doing good, keep it up";
    console.log(`given string ${givenString}`);
    console.log(`===================STEP 2===============`);
    var stringlength=givenString.length;
    console.log(`length of the string is: ${stringlength}`);
    console.log(`===================STEP 3===============`);
    var trimedString=givenString.trim();
    console.log(`trimmed string: ${trimedString} length after trim:${trimedString.length}`);
    console.log(`===================STEP 4===============`);
    var extraspaceCount=givenString.length-trimedString.length;
    console.log(`Total number of extra space is:${extraspaceCount}`);
    console.log(`===================STEP 5===============`);
    console.log(`First and Last  characters after trim:${trimedString[0]} ${trimedString.slice(-1)}`);
    console.log(`===================STEP 6===============`);
    var wordCount=trimedString.split(/\s+/).length;
    console.log(`Total number of word in the String:${wordCount}`);
    console.log(`===================STEP 7===============`);
    var indexOfGood=trimedString.indexOf("good");
    console.log(`index of the word "good" is:${indexOfGood}`);
    console.log(`===================STEP 8===============`);
    var subStringUsingSubstring=trimedString.substring(22);
    var subStringUsingSlice=trimedString.slice(22);
    console.log(`substring starting from the index 22 (substring()): ${subStringUsingSubstring}`);
    console.log(`Substring starting from index 22 (slice()):${subStringUsingSlice}`);
    console.log(`===================STEP 9===============`);
    var endwithUp=trimedString.endsWith("up");
    console.log(`Does the stringends with up ${endwithUp}`);
    console.log(`===================STEP 10===============`);
    var startWithHey=trimedString.startsWith("Hey");
    console.log(`Does the string start with Hey ${startWithHey}`);



    
}
stringHandson()