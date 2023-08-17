console.log("hello world!");
// step 1
let age0 = 20;
if ( age0 >= 20){
    console.log("You can enter this room.")
}else{
    console.log("You can't enter this room.")
}

// step 2
const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;

console.log(expression1, expression2, expression3, expression4);

// step 3

const age = 25;
let hasDriverLicense = true;
// hasDriverLicense = !hasDriverLicense
let hasCar = false;
let canDrive = false;
let canRentCar = false;
let needDriver = false;



if (age >= 18 && hasDriverLicense) {
  canDrive = true;
}

console.log(canDrive);

if (age >= 22 && hasDriverLicense && !hasCar) {
    canRentCar = true;
  }
  
  console.log(canRentCar);

  if (age < 18 && !hasDriverLicense && !hasCar) {
    needDriver = true;
  }
  console.log(needDriver);

//   STEP 4

const role= "admin";
switch (role) {
    case "admin":
      console.log("You have read and write access for the data");
        break;
 case "user":
 console.log("You have only read access for the data");
 break;
 case "guest":
    console.log("You have no access for the data");
    default:
        console.log("User role is not recoginized")
        break;
 }