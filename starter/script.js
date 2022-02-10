'use strict';
/*


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/
/*
//destructuring objects
const { name, openingHours, categories } = restaurant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;

//the spread operator(...)
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const orderPasta = function (ing1, ing2, ing3) {
  console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
};
const ingredients = [
  promt("Let's make pasta! Ingredint 1? "),
  promt("Let's make pasta! Ingredint 2? "),
  promt("Let's make pasta! Ingredint 3? "),
];
restaurant.orderPasta(...ingredients);

//rest paterns and parameters
const { sat, ...wekdays } = restaurant.openingHours;
console.log(wekdays);

//functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
};
add(2, 3);
add(5, 3, 7, 2);
*/
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

const temp = first;
first = second;
second = first;

//destructuring
[first, second] = [second, first];
console.log(first, second);

console.log(restaurant.order(2, 0));
*/

//short circuiting (&& and ||)
/*
console.log(3 || 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

const order =
  restaurant.orderPizza ?? restaurant.orderPizza('mushrooms', 'spinach');

const rest1 = {
  name: 'capris',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovani Rossi',
};
//OR assigment operator
rest1.numbGuests = rest1.numGuests || 10;
rest2.numbGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
*/

//coding chalange 1
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const playersFinal = [...players1, 'Thiago', 'coutihno', 'Perisic'];
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6
const printsGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printsGoals('Davis', 'Muller', 'Lewandovski', 'Kimich');
printsGoals('Davis', 'Muller');
printsGoals(...game.scored);
//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
//coding chalange 2
//1
for(const [key, values] of game.scored.entries()) {
  console.log(`Goal scored ${key + 1}: ${values}.`);
}
//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds)
average += odd;
average /= odds.length;
console.log(`The average odds for teams is ${average}.`);
//3
for(const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `Victory ${game[team]}`;
  console.log(`The odds of ${teamStr} is ${odd}`);
}
*/

//looping arrays: the for-of loop
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
/*
const menu = [...restaurant.starterMenu, ...restaurant.starterMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  
  console.log(`${i + 1}: ${el}`);
};

//optional chaining(?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days){
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}.`);
};

//mothods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist.");
console.log(restaurant.order?.(0, 1) ?? "Method does not exist.");

//arrays
const users = [
  {name : "Anel", email: "anel373.com"}];
  
  console.log(users[0]?.name ?? "User array empty.");
  
  if (users.length > 0) {
    console.log(users[0].name);
  } else {
    console.log("user array is empty.");
  };
  */

//looping objects: object key, values, and entries
//property NAMES
/*
 const properties = Object.keys(restaurant.openingHours);
 console.log(properties);
 
 let openStr = `We are open on ${properties.length} days: `;
 
 for(const day of Object.keys(restaurant.openingHours)){
   console.log(day);
  }
  
  //property values
  const values = Object.values(restaurant.openingHours);
  console.log(values);
  
  //entire object
  const entries = Object.entries(restaurant.openingHours);
  //console.log(entries);
  
  for(const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}.`);
  }

  //sets
const ordersSet = new Set (["Pasta", "Pizza", "Pizza", "Risoto", "Pasta", "Pizza"]);
console.log(ordersSet);

console.log(new Set("Jonas"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risoto");
//ordersSet.clear();
console.log(ordersSet);

for(const order of ordersSet) console.log(order);

//Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUn = [...new Set(staff)];
console.log(staffUn);
console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size);

console.log(new Set("anelvuković").size);

//maps
const rest = new Map();
rest.set("name", "Pepe Nero");
rest.set(1, "Zenica")
rest.set(2, "Sarajevo")

rest.set("categories", ["Italian", "Pizzeria", "Vegeterian", "Organic"])
.set("open", 11)
.set("close", 23)
.set(true, "We are open.")
.set(false, "We are closed.");

console.log(rest.get("name"));
console.log(rest.get(true));

const time =15;
const wh = rest.get(time > rest.get("open") && time < rest.get("close"));
console.log(wh);

console.log(rest.has("categories"));
rest.delete(2);

rest.set([1,2], "Test");
console.log(rest);
console.log(rest.size);

rest.get([1,2]);

//maps iteration
const question = new Map ([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "Correct"],
  [false, "Try again"],
])
console.log(question);

//convert object to map
//const hoursNew = new Map(Object.entries(openingHours));

//quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if(typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt("Your answer"));
//console.log(answer);
//console.log(question.get(question.get("Correct")=== answer));

//convert map to object
//log([...question]);
*/
//Coding challange 3
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map ([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

//2
gameEvents.delete(64);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//3

console.log(`An event happened, on average, every ${
 90 / gameEvents.size} minutes`);

 //4
for (const [min, event] of gameEvents){
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`${half} HALF ${min} minute: ${event}`);
};
*/
//strings part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));

console.log(airline.slice(0, 4));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat.');
  else console.log('You got lucky.');
};
checkSeat('11B');
checkSeat('23C');
checkSeat('3E');

//strings part 2
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

const passenger = 'aNeL';
const passLower = passenger.toLowerCase();
const passCorr = passenger[0].toUpperCase() + passLower.slice(1);
console.log(passCorr);

//comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.io \n';

//const lowerEmail = loginEmail.toLowerCase();
//const trimEmail = lowerEmail.trim();
//console.log(trimEmail);

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);
console.log(email === normalEmail);

//replacing
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to barding door 23. Boarding door 23.';

console.log(announcement.replaceAll('door', 'gate'));

//bolleans
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW family');
}

//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board.');
  } else {
    console.log('Welcome.');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//strings part 3
console.log('a+very+nice+string'.split('+'));
console.log('Anel Vuković'.split(' '));

const [firstName, lastName] = 'Anel Vuković'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capName('jessica ann smith davis');

//padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Anel'.padEnd(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(235665432434));
console.log(maskCreditCard('87598347590238409238'));

//repeat
const mess2 = 'Bad weather...All Departuers delayed... ';
console.log(mess2.repeat(10));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'¤'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

//coding challange 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'§'.repeat(i + 1)}`);
  }
});

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();

//last exercise
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_delayed') ? '§' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(';', 'h')})`.padStart(36);
  console.log(output);
}
