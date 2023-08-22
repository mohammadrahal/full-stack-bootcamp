console.log("hello wolrd!")

// step 1
const array = [1,2,3,4,5,6,7];
console.log(array)

const personalInfo = {
    fname:"mohammad",
    age:27,
    height:"185 cm",
    locations:"lebanon tyre",
    nationality:"lebanon"
}

console.log("I'm " + personalInfo.fname);
console.log( personalInfo.age + " years");
console.log("I'm " + personalInfo.height);
console.log("location " + personalInfo.locations);
console.log("from " + personalInfo.nationality);

// step 2
// New Array with Spread
const fiveNumbers = [1, 2, 3,];
const nextThreeNumbers = [4,5,6];

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