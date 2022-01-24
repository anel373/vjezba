// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//setting up pretier in vs code
/*
const x = 23;

const calcAge = (birthYear) => 2037 - birthYear;

console.log();

console.log(calcAge(1999));
*/

//PROBLEM 1:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

//1) understanding the problem
//-What is temp amplitude?
//-How to compute max and min temperatures?
//-What's a senso error? And what to do with it?

//2) breaking up into small problems
//-How to ignore error?
//-Find max values in temp array
//-Find min values in temp array
//-Subtract min from max and return it

/*
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperature1 = [2, -4, -12, -2, 12];
const temperature2 = temperature.concat(temperature1);

function calcTemp(temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
}
const amplitude = calcTemp(temperature2);
console.log(amplitude);
*/

//PROBLEM 2:
//function should now recive 2 arrays of temps

//1)Understand the problem
//-With 2 arrays, should we implement funcionality twice? NO! Just merge two arrays

//2)
//-Breaking u into small problems
//- How to merge 2 arrays

//debugging
/*
function mesaureKelvin() {
  const mersaurement = {
    type: "temp",
    unit: "celsius",
    //value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  console.log(mesaureKelvin.value);
  console.warn(mesaureKelvin.value);
  console.error(mesaureKelvin.value);
  console.table(mersaurement);

  const kelvin = mersaurement.value + 273;
  return kelvin;
}

console.log(mesaureKelvin());
*/

//using a debugger
/*
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperature1 = [2, -4, -12, -2, 12];
const temperature2 = temperature.concat(temperature1);

function calcTemp(temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
}
const amplitude = calcTemp(temperature2);
console.log(amplitude);
*/

//challange 1
const niz1 = [17, 21, 23];
const niz2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let niz = " ";
  for (let i = 0; i < arr.length; i++) {
    niz = niz + `${arr[i]}C in ${i + 1} days... `;
  }
  console.log("..." + niz);
}
console.log(printForecast(niz2));
