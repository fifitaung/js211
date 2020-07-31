
'use stric'

// function that takes in nimeric grade and returns the equivilant 

function convertToLetter(grade){
    console.log("input to my function ", grade);
     
    let letter = "F";

    if (grade >= 90) {
        letter = "A";
    }

    if (grade >= 80 && grade <90) {
        letter = "B";
    }

    if (grade >= 75 && grade < 80) {
        lettet = "C";
    }

    if (grade >= 70 && grade < 75) {
        letter = "D";
    }

        return letter;

}

console.log(convertToLetter("92"));
console.log(convertToLetter("105"));
console.log(convertToLetter("73"));
