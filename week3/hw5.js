// array of cars that consist of a string of cars
let cars = ["Ford","Honda", "Mustang", "Chevy"];
console.log("Cars array: ");
console.log(cars.length);

//more array of cars
let moreCars = ["Audi", "Toyota", "Infinity", "Honda"];
console.log("moreCars array: ");
console.log(moreCars);
//cancatination 
let totalCars = cars.concat(moreCars);
console.log("Total Cars: ");
console.log(totalCars) ;
//index of

console.log(totalCars.indexOf("Honda"));
console.log("indexOf Honda: ");

console.log(totalCars.lastIndexOf("Ford"));
console.log("LastOfIndex of Ford: ");
//string of cars
let stringOfCars = totalCars.join();
console.log("String Of Cars: ");
console.log(stringOfCars);
//All Total Cars 
let allTotalCars = stringOfCars.split();
console.log("Total Of Cars: "); 
console.log(allTotalCars);

let carsInReverse = totalCars.reverse();
console.log("Car In Reverse: ");
console.log(carsInReverse);

let prediCars = carsInReverse.sort();
console.log("Cars Predict: ");
console.log(prediCars);
// alert(carsInReverse.indexOf("Audi"));

let removedCars = prediCars.slice(1,7);
console.log(removedCars);
console.log("Removed Cars : ");

let splicedCars = prediCars.splice(1,2,"Ford", "Honda");
console.log("Slice Replace")
console.log(splicedCars);
console.log(prediCars);

let joinedCars = prediCars.push("Toyoya", "Audi");
console.log("Push ")
console.log(joinedCars);
console.log(prediCars);

console.log(carsInReverse.pop());

console.log(carsInReverse.shift());

console.log(carsInReverse.unshift("BMW "));
console.log(carsInReverse);

let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
function addTwo(item) {
    console.log(item + 2);
}
numbers.forEach(addTwo);



