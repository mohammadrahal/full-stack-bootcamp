console.log('hello world!');


// step 1

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(2, 8))
// /////////////////////////////////////////////////////////

function findMax(max1, max2) {
    let max = 7;
    if (max > max1) {
        console.log("max is larger than max1");
    } if (max < max1) {
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

    if (operation === 'add') {
        return add();
    } else if (operation === 'subtract') {
        return subtract();
    } else if (operation === 'multiply') {
        return multiply();
    } else if (operation === 'divide' && num2 >= 0) {
        return divide();
    } else {
        return "Invalid operation";
    }
}

// Call the outer function
compute();
console.log(compute(10, 5, 'add'));
console.log(compute(9, 3, 'subtract'));
console.log(compute(4, 0, 'multiply'));
console.log(compute(8,3, 'divide'));
// 
let locallVar = 9;
const squareNumber = (number) => number * number;
squareNumber(5)
console.log(locallVar);



let globalVar = 5;
console.log(squareNumber(globalVar) + " squareNumber globalVar" );
// 



