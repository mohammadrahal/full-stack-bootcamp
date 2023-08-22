console.log("hello wolrd!")

// step 1
const array = [1,2,3,4,5,6,7];
console.log(array)

const personalInfo = {
    fname:"mohammad",
    age:27,
    height:"185 cm",
    locations:"lebanon tyre",
    nationality:"lebanon",

    contactInfo: { 
        email:"info@gmail.com",
        phone:78907635,
    }
}

console.log("I'm " + personalInfo.fname);
console.log( personalInfo.age + " years");
console.log("I'm " + personalInfo.height);
console.log("location " + personalInfo.locations);
console.log("from " + personalInfo.nationality);

// step 2
// New Array with Spread
const fiveNumbers = [1, 2, 3,4,5];
const nextThreeNumbers = [6,7,8];

const allNumbers = [...fiveNumbers, ...nextThreeNumbers];

console.log(allNumbers);


// New Object with Spread

const additionalInfo = {
    occupation: "developer",
    hobby: "reading",
    education: "MIS"
};

const fullInfo = { ...personalInfo, ...additionalInfo };
const fullInfoArray = Object.entries(fullInfo);
fullInfoArray.sort((a, b) => a[0].localeCompare(b[0]));
const sortedFullInfo = Object.fromEntries(fullInfoArray);

console.log(fullInfo);

// Step 3

// Destructuring Arrays

// mwjod fiveNumbers bel task abel so bjebon mno
const [firstNum, secondNum, thirdNum] = fiveNumbers;
console.log(firstNum); //1
console.log(secondNum); //2
console.log(thirdNum); //3 index

// Destructuring Objects
// 3mlo abel
const { fname, locations, nationality } = personalInfo;

console.log(fname);
console.log(locations);  
console.log(nationality);

// step 4
const { contactInfo: { email, phone } } = personalInfo;

console.log(email);
console.log(phone);

// Rest with Destructuring

const [firstNum1, secondNum2, ...restOfNumbers] = fiveNumbers;

console.log(firstNum);
console.log(secondNum);
console.log(restOfNumbers);   // Output: [3, 4, 5]

// Merging and Overwriting with Spread

const info = {
    name: "mohammad",
    age: 25,
    occupation: "web developer"
};

const infoOver = {
    age: 27,
    hobby: "Reading"
};

const merging = { ...info, ...infoOver };

console.log(merging);
