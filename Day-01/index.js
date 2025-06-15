console.log("Hello, World!");


// This is a simple JavaScript program that prints "Hello, World!" to the console.


function sum (a,b) {
    const result = a + b;
    console.log(`The sum of ${a} and ${b} is ${result}`);
}

sum(5, 10);
sum(20, 30);


// This function takes two numbers as arguments and prints their sum to the console.


function Area (l,w) {
    if(l <= 0 ||  w <= 0 ){
        alert("Length and width must be positive numbers.");
        return
    }
    const area = l * w;
    console.log(`The area of rectangle with length ${l} and width ${w} is : ${area}`); 
}
Area(5, 10);

// This function calculates the area of a rectangle given its length and width and prints the result to the console.


// let length = parseInt(prompt("Enter the length of the rectangle:"));

// let width = parseInt(prompt("Enter the width of the rectangle:"));
// Area(length, width);


