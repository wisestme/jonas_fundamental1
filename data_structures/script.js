'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  }
};

const [starter, mainCourse] = restaurant.order(0, 2);
console.log(starter, mainCourse);


let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary)

const nested = [2, 4, [5, 6]];

let [a, b, [c = 1, d = 1, e = 1]] = nested;

console.log(d, e);

const { name, openingHours, categories } = restaurant;

console.log(openingHours)

const { thu: thursday, fri, sat, mon = [] } = openingHours;

console.log(thursday, mon)

const obj = { a: 23, b: 7, c: 15 };
({ a, b } = obj);
console.log(a, b)