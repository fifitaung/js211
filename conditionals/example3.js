'use stric'

// function that takes in nimeric grade and returns the equivilant 

let convertToLetter = (grade) =>{
    console.log("input to my function ", grade);
     
    let letter;

    if (grade >= 90) {
        letter = "A";
    }else if (grade >= 80) {
        letter = "B";
    }else if (grade >= 75) {
        lettet = "C";
    }else if (grade >= 70) {
        letter = "D";
    } else{
        letter = "F";
    }

    return letter

} 


console.log(convertToLetter("92"));
console.log(convertToLetter("105"));
console.log(convertToLetter("73"));


/*star with one if
0 or more else if or one else
*/