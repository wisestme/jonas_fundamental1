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

const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);

const minWinningScore = 100;

if (averageScoreDolphins > minWinningScore || averageScoreKoalas > averageScoreKoalas) {
    if (averageScoreDolphins !== averageScoreKoalas) {
        if (averageScoreDolphins > averageScoreKoalas) {
            console.log(`Team Dolphins wins`);
        } else {
            console.log(`Team Koalas wins`);
        }
    } else {
        console.log(`you all are winners`);
    }
} else {
    console.log(`Both teams lost`);
}