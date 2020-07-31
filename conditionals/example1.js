'use stric'

// function that takes in nimeric grade and returns the equivilant 

function convertToLetter(grade){
    console.log("input to my function ", grade);
     
    if (grade > 89) {
        return "A";
    }

    if (grade > 79) {
        return "B";
    }

    if (grade > 74) {
        return "C";
    }

    if (grade > 69) {
        return "D";
    }

        return "F";

}

console.log(convertToLetter("92"))