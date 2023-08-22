console.log("hello wolrd!")

// step 1
const array = [1,2,3,4,5,6,7];
console.log(array)

const personalInfo = {
    fname:"mohammad",
    age:27,
    height:"185 cm",
    location:"lebanon tyre",
    nationality:"lebanon"
}

console.log("I'm " + personalInfo.fname);
console.log( personalInfo.age + " years");
console.log("I'm " + personalInfo.height);
console.log("location " + personalInfo.location);
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