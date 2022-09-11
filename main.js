// const heightJohn = 1.95;
// const massJohn = 92;
// const heightMark = 1.69;
// const massMark = 78;

// const johnBMI = massJohn / heightJohn ** 2;

// const markBMI = massMark / heightMark ** 2;

// if (johnBMI != markBMI) {
//     if (johnBMI > markBMI) {
//         console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
//     } else {
//         console.log(`John's BMI ${johnBMI} is lesser than Mark's ${markBMI}`);
//     }
// }
// // const firstName = 'Chiji';
// // const job = 'Teacher';
// // const birthYear = 1987;
// // const currentYear = 2022;

// // const chiji = `I'm ${firstName}, a ${currentYear - birthYear} year old JavaScript ${job}`;

// // console.log(chiji);

// const userDOB = 2004;
// const currentYear = 2022;
// const userAge = currentYear - userDOB;

// let isMinor;
// const minAge = 18;

// isMinor = userAge < minAge ? true : false;

// if (!isMinor) {
//     console.log('you are old enough to be a driver');
// } else {
//     const remainderAge = minAge - userAge;
//     if (remainderAge > 0) {
//         let pluralizer;
//         if (remainderAge > 1) {
//             pluralizer = 's';
//         } else {
//             pluralizer = '';
//         }
//         console.log(`you have ${remainderAge} year${pluralizer} left before you can drive`);
//     }
// }

// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 106) / 3;

// console.log(averageScoreDolphins, averageScoreKoalas);

// const minWinningScore = 100;

// if (averageScoreDolphins > minWinningScore || averageScoreKoalas > averageScoreKoalas) {
//     if (averageScoreDolphins !== averageScoreKoalas) {
//         if (averageScoreDolphins > averageScoreKoalas) {
//             console.log(`Team Dolphins wins`);
//         } else {
//             console.log(`Team Koalas wins`);
//         }
//     } else {
//         console.log(`you all are winners`);
//     }
// } else {
//     console.log(`Both teams lost`);
// }

// function calculateTip(bill) {
//     const tipPercent = (bill > 50 && bill < 300) ? 15 : 20;

//     const tip = (tipPercent / 100) * bill;

//     console.log(`the bill value is ${bill}, the tip is ${tip} and the total value is ${bill + tip}`);
// }

// calculateTip(430);

// const threeScoreAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// }

// const dolphinsAverage = threeScoreAverage(85, 54, 41);
// const koalasAverage = threeScoreAverage(23, 34, 27);

// const checkWinner = (averageKoalas, averageDolphins) => {
//     if (averageKoalas > averageDolphins && averageDolphins > (2 * averageDolphins)) {
//         console.log(`Koalas won (${averageKoalas} vs. ${averageDolphins})`);
//     } else if (averageDolphins > averageKoalas && averageDolphins > (2 * averageKoalas)) {
//         console.log(`Dolphins won (${averageDolphins} vs. ${averageKoalas})`);
//     } else {
//         console.log(`No winner`);
//     }
// }

// checkWinner(koalasAverage, dolphinsAverage);

// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];

// function calculateTip(bill) {
//     const tipPercent = (bill > 50 && bill < 300) ? 15 : 20;

//     const tip = (tipPercent / 100) * bill;

//     const total = tip + bill;

//     tips.push(tip);
//     totals.push(total);

//     console.log(`the bill value is ${bill}, the tip is ${tip} and the total value is ${bill + tip}`);

//     console.log(tips, totals);

// }

// calculateTip(bills[0]);
// calculateTip(bills[1]);
// calculateTip(bills[2]);


// tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];

// const chiji = {
//     firstName: 'Chijioke',
//     lastName: 'Nwagwu',
//     employed: true,
//     birthYear: 1987,
//     friends: ['Marvellous', 'Gloria', 'Sherifat'],
//     job: 'Web Developer',
//     hasDriversLicense: true,
//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         this.message = `${this.firstName} is a ${this.age} years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence`;
//         return this.message;
//     }

// };

// chiji.location = 'Nigeria';

// console.log(chiji);

//const interestedIn = prompt('What do you want to know about Chiji? age, job, firstname, friends?');

// console.log(chiji[interestedIn]);

// console.log(`${chiji.firstName} has ${chiji.friends.length} friends and the name of the best friend is ${chiji.friends[1]}`);
// chiji.calcAge();
// console.log(chiji.age);

// chiji.getSummary();
// console.log(chiji.message);

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Milan',
//     getFullname: function () {
//         this.fullname = this.firstName + " " + this.lastName;
//         return this.fullname;
//     },
//     mass: 78.92,
//     height: 1.6995,
//     calcBMI: function () {
//         this.markBMI = this.mass / this.height ** 2;
//         this.getFullname();
//         return this.markBMI;
//     }
// };

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     getFullname: function () {
//         this.fullname = `${this.firstName} ${this.lastName}`;
//         return this.fullname;
//     },
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.johnBMI = this.mass / this.height ** 2;
//         this.getFullname();
//         return this.johnBMI;
//     }
// }

// // john.getFullname();
// // mark.getFullname();
// john.calcBMI();
// mark.calcBMI();


// john.johnBMI > mark.markBMI ?
//     console.log(`${john.fullname}'s BMI (${john.johnBMI}) is higher than ${mark.fullname}'s BMI(${mark.markBMI})`) :
//     console.log(`${mark.fullname}'s BMI (${mark.markBMI}) is higher than ${john.fullname}'s BMI(${john.johnBMI})`);

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weight ${rep}`);
// }

// const birthYears = [2007, 1991, 1969, 2020];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//     age = 2022 - birthYears[i];
//     ages.push(age);
// }
// console.log(ages);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    function calculateTip() {
        const tipPercent = (bills[i] > 50 && bills[i] < 300) ? 15 : 20;

        const tip = (tipPercent / 100) * bills[i];

        const total = tip + bills[i];

        tips.push(tip);
        totals.push(total);

        // console.log(`the bill value is ${bill}, the tip is ${tip} and the total value is ${bill + tip}`);


    }
    // console.log(tips, totals);
    calculateTip();
}

console.log(tips, totals);