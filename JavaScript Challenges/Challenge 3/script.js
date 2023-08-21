console.log("hello world!");

// step 1

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(2, 8));
// /////////////////////////////////////////////////////////

function findMax(max1, max2) {
    let max = 7;
    if (max > max1) {
        console.log("max is larger than max1");
    }
    if (max < max1) {
        console.log("max is smaller than max1");
    } else if (max1 == max2) {
        console.log("Both are equal");
    }
}

findMax(2, 2);
// /////////////////
//  Nested Function

function compute(num1, num2, operation) {
    // add, subtract, multiply, divide
    function add() {
        return num1 + num2;
    }

    function subtract() {
        return num1 - num2;
    }
    function multiply() {
        return num1 * num2;
    }
    function divide() {
        return num1 / num2;
    }

    if (operation === "add") {
        return add();
    } else if (operation === "subtract") {
        return subtract();
    } else if (operation === "multiply") {
        return multiply();
    } else if (operation === "divide" && num2 >= 0) {
        return divide();
    } else {
        return "Invalid operation";
    }
}

// Call the outer function
compute();
console.log(compute(10, 5, "add"));
console.log(compute(9, 3, "subtract"));
console.log(compute(4, 0, "multiply"));
console.log(compute(8, 3, "divide"));
//
let locallVar = 9;
const squareNumber = (number) => number * number;
squareNumber(5);
console.log(locallVar);

let globalVar = 5;
console.log(squareNumber(globalVar) + " squareNumber globalVar");
//

// for loop
for (let i = 0; i <= 10; i++) {
    console.log(i + " for loop");
}

// Do-While Loop
let number = 0;

do {
    if (number % 2 === 0) {
        console.log(number + " even");
    }
    number++;
} while (number <= 10);

//

//Advanced Loop Challenge

const Fruits = ["apple", "banana", "strawberry", "watermelon"];

for (const fruit of Fruits) {
    if (fruit.length > 5) {
        console.log(fruit);
    }
}

//

// function
const processArray = (array, call) => {
    for (const element of array) {
        call(element);
    }
};

const myArray = [1, 2, 3, 4, 5];
const double = (num) => {
    console.log(num * 2);
};

processArray(myArray, double);
// console.log (processArray(myArray, double));

// multiplier

const multiplyNumber = (factor) => (number) => factor * number;

const multiplyByNumber = multiplyNumber(10);

console.log(multiplyByNumber(5) + " multiply Number");
console.log(multiplyByNumber(1) + " multiply Number");
