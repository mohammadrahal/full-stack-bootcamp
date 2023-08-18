console.log('I am linked now!');
// step 1
const name = "mohammad";
// alert(name)
// step 2 + 3
const String = "this is a text";
console.log(String  + " the data type is String");
const bool1 = "true";
console.log(bool1  +  " the data type is boolean");
const bool2 = "false";
console.log(bool2  +   " the data type is boolean");
const number = "1215";
console.log(number  +  " the data type is number");
const string = "999";
console.log(string  +  " the data type is String");
const operator = `{}`;
console.log(operator  +  " the data type is Operator" ); 
const array= ["array"];
console.log(array  +  " the data type is Array" );
const per="null undefined";
 console.log(per  +  " the data type is primitive data types");
// step 4
 const fullNameObject = {

    fname:"mohamad",
    lname:"rahal",
    DOB:"1996"
 } 
 console.log(fullNameObject.fname, fullNameObject.lname, fullNameObject.DOB);
// step 5
 const counter = 3;
 console.log(counter)
 const backtick = `This is my text using backticks ${counter} times`;
 console.log(backtick + " also known as template strings ");
 const singleQuote =
 'This is my text using single quotations ${counter} times' ;
   console.log(singleQuote);
 const doubleQuote =
   "This is my text using double quotations ${counter} times";
   console.log(doubleQuote);
 const tryThisAlso = `This is my new version, it’s the ${2 + 3} th version`;
 console.log(tryThisAlso);

// step 6
 const num1=" 0";
 const num2= "1";
 const resulte = `${num1} + ${num2} `;
 console.log(resulte);

//  step 8
let result0 = 5 + 3 * 2;
console.log("result0 " + result0)


let result1 = 10 / 2 + 3;
console.log( "result1 " + result1)

let result2 = 10 / (2 + 3);
console.log("result2 " + result2)

let comp = result1 == result2
console.log(comp)
