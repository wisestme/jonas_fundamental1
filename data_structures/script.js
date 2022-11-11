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
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`let's make pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

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

let { thu: thursday, fri: { open, close }, sat, mon = [] } = openingHours;

console.log(open, close);

const newMenu = [...restaurant.mainMenu, 'Kulikuli'];
console.log(newMenu);

const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(allMenu);

// const ingredients = [prompt(`Let's make pasta \n Ingredient1`), prompt(`Ingredient 2`), prompt(`Ingredient 3`)];

// restaurant.orderPasta(...ingredients);

const newRestaurant = {
  foundedIn: 1987,
  ...restaurant,
  founder: 'Wisestme'
}

console.log(newRestaurant);

const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others);

let { sat: weekend, ...weekdays } = restaurant.openingHours;

console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

add(2, 3);
add(2, 3, 4);

restaurant.orderPizza('asun', 'suya', 'mushroom');