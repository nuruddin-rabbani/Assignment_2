// 1. Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";

// 2. On one single line, declare three variables with the following names and values:

// firstName = "John";
// lastName = "Doe";
// age = 35;

// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 3rd Variable Name And Values Both!

let firstName = "John"; // write variable name
let lastName = "Doe"; //write variable values
let age = 35; // write variable name and values both

// 3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).

let x = 10;
let y = 5;
console.log((x = x * y)); // what will be the value of x ?

// 4. Use comments to describe the correct data type of the following variables:

let length = 16; // Number
let LastName = "Johnson"; // String

const fullName = {
    firstName: "John",
    lastName: "Doe",
}; // Object

// 5. Execute the function named myFunction.

function myFunction() {
    // alert("Hello World!");
}
myFunction();

// 6. Create an object called person with name = John, age = 50, Then,access the object to alert("John is 50").

const person = {
    name: "John",
    age: 50,
};

alert(`"${person.name} is ${person.age}"`);

// 7. The <button> element should do something when someone clicks on it. Try to fix it!

{
    /* <button>Click me.</button>  */
}

document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("para").innerHTML =
        "Please Subscribe my youtube channel!";
});

// 8. Alert the number of items in an array, using the correct Array property:

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(`the number of items in the array are ${cars.length}`);

// Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"];

Brand[0] = "Ford";

console.log(Brand);

// 9 Use the correct Math method to create a random number.
console.log(Math.floor(Math.random() * 11));

//  Use the correct Math method to return the largest number of 10 and 20.
function getRndInteger(min, max) {
    console.log(Math.floor(Math.random() * (max - min)) + min);
}
getRndInteger(10, 20);

// Use the correct Math method to get the square root of 9.
function getSquareRoot(min, max) {
    let a = Math.floor(Math.random() * (max - min)) + min;
    console.log(Math.sqrt(a));
}
getSquareRoot(9, 9);

// 10. Choose the correct comparison operator to alert true, when x is greater than y.
let m = 10;
let n = 5;

alert(m > n);

// alert(); " > " ?

// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let personAge = parseInt(prompt("Please enter your age :"));

console.log(personAge < 18 ? "Too young" : "Old enough");
