//FUNCTIONS
/*
function describeCountry(country, population, capitalCity) {
  const city = `${country} has ${population} million people and its capital city is ${capitalCity}.`
  return city;
}

country = describeCountry("Finland", 6, "Helsinki");
console.log(country);

country1 =describeCountry("BiH", 2, "Sarajevo");
console.log(country1);

country2 = describeCountry("Portugal", 20, "Lisabon");
console.log(country2);
*/

//FUNCTION DECLARATION VS EXPRESSIONS
/*
//function declaration
function percentageOfWorld(population) {
  return (population / 7900) *100;
}

const populationCount= percentageOfWorld(1441);
console.log(populationCount);

const populationCount1= percentageOfWorld(700);
console.log(populationCount1);

const populationCount2= percentageOfWorld(2);
console.log(populationCount2);

//function experssion
const percentageOfWorld1 =function(population1) {
  return (population1 / 7900) *100;
}

const populationCount3= percentageOfWorld1(33);
console.log(populationCount3);

const populationCount4= percentageOfWorld1(400);
console.log(populationCount4);

const populationCount5= percentageOfWorld1(260);
console.log(populationCount5);
*/

//ARROW FUNCTION
/*
const percentageOfWorld2 = (population2) => {
  return (population2 / 7900) * 100;
}
console.log(percentageOfWorld2(400));


//FUNCTIONS CALLIN OTHER FUNCTIONS
function describePopulation(country, population, percentageOfPop) {
  const chinasPopulation = percentageOfWorld2(percentageOfPop);

  const city = `${country} has ${population} milion people which is about ${chinasPopulation} of the world.`
  return city;
}

console.log(describePopulation("China", "1441", 1441));
console.log(describePopulation("Germany", "300", 300));
*/

/*
//VJEZBA 1
const calcAverage = (avgScoore) =>
{
  return avgScoore / 3;
}

function checkWinner(avgKoalas, avgDolphins) {
  const avgScore1 = calcAverage(avgKoalas);
  const avgScore2 = calcAverage(avgDolphins);

  if (avgScore1 >= avgScore2 * 2) {
    console.log(`Koalas won with a score of ${avgScore1}, and Doplphins only ${avgScore2}`);
  } else if(avgScore2 >= avgScore1 * 2) {
    console.log(`Dolphins won with a score of ${avgScore2}, and Koalas only ${avgScore1}`);
  } else {
    console.log("No one won.")
  }

}

checkWinner(54+23+71,185+154+141);
checkWinner(85+54+41, 23+34+27);
*/

//introduction to arrays
/*
function percentageOfWorld(population) {
  return (population / 7900) *100;
}

const population = [300, 700, 1200, 2]
console.log(population.length === 4);
const percentages = [
percentageOfWorld(population[0]),
percentageOfWorld(population[1]),
percentageOfWorld(population[2]),
percentageOfWorld(population[3])
];

console.log(percentages);
*/

//basic array operations
/*
const neighbours = ["Serbia", "Hrvatska", "Crna Gora"];
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country.")
}
neighbours[neighbours.indexOf("Serbia")] = "Kosovo";
console.log(neighbours);
*/

//vjezba 2
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ?
  bill * 0.15:
  bill * 0.2;
}


const bills = [125, 555, 44];
const tips = [
calcTip(bills[0]), 
calcTip(bills[1]),
calcTip(bills[2])];
console.log(bills, tips);
*/

//introudction to objects
/*
const myCountry = {
  country: "BiH",
  capital: "Sarajevo",
  population: 2,
  neighbours: ["Hrvatska", "Srbija", "Crna Gora"],

  describe: function() {
  return (`${this.country} has ${this.population} million people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}. It ${!this.checkIsLand ? "is" : "is not an"} Island.`);
  },

  checkIsLand: function(){
    this.isItIsland = this.neighbours.length === 0 ? true : false;
  },
};

console.log(`${myCountry.country} has ${myCountry.population} million people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
console.log(myCountry.describe());

myCountry.population += 2;
myCountry["population"] -= 2;
console.log(myCountry.population);
*/

//vjezba 3
/*
const johnsInfo = {
  name: "John Smith",
  mass: 78,
  height: 1.69,

  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const marksInfo = {
  name: "Mark Miller",
  mass: 92,
  height: 1.95,

  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(marksInfo.calcBMI(), johnsInfo.calcBMI());

  if (johnsInfo.bmi > marksInfo.bmi) {
    console.log(`${johnsInfo.name} BMI (${johnsInfo.bmi}) is higher than ${marksInfo.name} (${marksInfo.bmi}).`)
  } else {
    console.log(`${marksInfo.name} BMI (${marksInfo.bmi}) is higher than ${johnsInfo.name} (${johnsInfo.bmi}).`)
  };
*/

//the for loop
/*
for (let rep = 1; rep <= 50; rep++) {
  console.log(`Voter number ${rep} is voting.`);
};
*/

//looping arays, breaking and contining
/*
function percentageOfWorld(population) {
  return (population / 7900) *100;
}

const population = [300, 700, 1200, 2]
console.log(population.length === 4);

const percentages = [
percentageOfWorld(population[0]),
percentageOfWorld(population[1]),
percentageOfWorld(population[2]),
percentageOfWorld(population[3])
];
console.log(percentages);

const percentages2 = [];
for (let i = 0; i < population.length; i++) {
  const perc=percentageOfWorld(population[i]);
  percentages2.push(perc);
}
console.log(percentages2);
*/

//looping backwards and loops in loops
/*
function percentageOfWorld(population) {
  return (population / 7900) *100;
}
const population = [300, 700, 1200, 2]
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"]
];
for (let i = listOfNeighbours.length - 1; i >= 0; i--) {
  console.log(listOfNeighbours[i]);
};

for (let i = 0; i<listOfNeighbours.length;i++)
  for (let y=0;y<listOfNeighbours.length;y++)
    console.log(`Neighbour: ${listOfNeighbours [i] [y]}`);
*/

//THE WHILE LOOP
/*
const percentages3 = [];
let i = 0;
while (i < population.length) {
  const perc = percentageOfWorld(population[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);
*/

const bills = [22, 295, 170, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tipsCal = calcTip(bills[i]);
  tips.push(tipsCal);
  const totalCal = bills[i] + tips[i];
  total.push(totalCal);
}

console.log(tips);
console.log(total);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 4, 6]));
console.log(calcAverage(total));
