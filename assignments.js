/*
//variables
let country = "BiH";
const continent = "Europe";
let population = 2345965;

console.log(country);
console.log(continent);
console.log(population);

//data types
let isIsland = false;
let language = "bosnian";

console.log(isIsland);
console.log(language);

//operators
let newPopulation = population / 2;
newPopulation++;
console.log(newPopulation);

const Finland = 6000000;
console.log(Finland < newPopulation);

console.log(newPopulation > 33000000);

const description = "Portugal is in Europe, and its"
const portugalPop = " 11 milion ";
const description1 = "people speak portugese"
console.log(description + portugalPop + description1);

//strings and template literals
const description2 = (`Portugal is in Europe, and its${portugalPop}${description1}.`);
console.log(description2);

//taking decisions, if/else statement
if (population > 22000000) {
  console.log('Bosni and Herzegovinas population is more than 22000000.')
} else {
  console.log('Bosnia and Herzegovinas population is less than 22000000.')
}

//type conversion and coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log('114' + 3);
*/

/*
//vjezba 1
//DATA 1
let marksHeight = 1.69;
let marksMass = 78;

let johnsHeight = 1.95;
let johnsMass = 92;

let marksBMI =  marksMass / marksHeight ** 2;
let johnsBMI = johnsMass / johnsHeight ** 2;

if (marksBMI > johnsBMI) {
  console.log(`Marks BMI (${marksBMI}) is higher than Johns.`);
}else{
  console.log(`Johns BMI (${johnsBMI}) is higher than Mars.`);
}

//DATA 2
let marksHeight1 = 1.88;
let marksMass1 = 75;

let johnsHeight1 = 1.84;
let johnsMass1 = 75;

let marksBMI1 = marksMass1 / marksHeight1 ** 2;
let johnsBMI1 = johnsMass1 / johnsHeight1 ** 2;

if (marksBMI1 > johnsBMI1) {
  console.log(`Marks BMI (${marksBMI1}) is higher than Johns.`);
} else {
  console.log(`Johns BMI (${johnsBMI1}) is higher than Johns.`);
}
*/

/*
//equality == or ===
const numNeighbours = 3;

if (numNeighbours === 1) {
  console.log("Only 1 border.");
} else if(numNeighbours === 2) {
  console.log("We have 2 borders.");
} else if(numNeighbours === 3){
  console.log("We have 3 borders.");
} else if(numNeighbours === 0){
  console.log("We do not have borders.")
} else {
  console.log("We have many borders.");
}
*/

/*
//AND(&&) OR(||) NOT(!)
const language = "English";
const population = 222300300;
const isIsland = true;

const shouldLive = language == "English" && population >= 50000000 && isIsland;

if (shouldLive) {
  console.log("Sarah should live in my country.");
} else {
  console.log("Sarah should not live in my country.");
}
*/

/*
//vjezba 2
const Dolphins = (113 + 108 + 89) / 3;
const Koalas = (97 + 112 + 101) / 3;

if (Dolphins > Koalas) {
  console.log("Dolphins won.");
} else if ( Dolphins === Koalas){
  console.log("It is a draw.");
} else {
  console.log("Koalas won.");
}

const bonusDolphins = (107 + 112 + 101) / 3;
const bonusKoalas  = (99 + 95 + 123) / 3;

if (bonusDolphins > bonusKoalas && bonusDolphins >= 100 && bonusKoalas >= 100) {
  console.log("Dolphins won.");
} else if (bonusDolphins < bonusKoalas && bonusDolphins >= 100 && bonusKoalas >= 100){
  console.log("Koalas won.");
} else if (bonusDolphins === bonusKoalas && bonusDolphins >= 100 && bonusKoalas >= 100){
  console.log("It is a draw.");
} else{
  console.log("Nobody gets the trophye.");
}
*/

/*
//SWITCH STATEMENT
const language = "chinese";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;

  case "spanish":
    console.log("2nd place in number of native speakers.");
    break;

  case "english":
    console.log("3nd place.");
    break;

  case "hindi":
    console.log("Number 4th");
    break;

  case "arabic":
    console.log("5th most spoken language.");
    break;

  default:
    console.log("Great language too.");
    break;
}
*/

/*
//THE CONDITIONAL OPERATOR
const population = 33000000;

console.log(`BiH population is ${population > 33000000 ? "above" : "below"} average`);
*/

/*
//vjezba 3
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? 
bill * 0.15 :
bill * 0.2;
console.log(`The bill was ${bill}, the tip was 
${tip}, and the total was ${bill + tip}.`);
*/
