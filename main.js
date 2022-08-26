const heightJohn = 1.95;
const massJohn = 92;
const heightMark = 1.69;
const massMark = 78;

const johnBMI = massJohn / heightJohn ** 2;

const markBMI = massMark / heightMark ** 2;

if (johnBMI != markBMI) {
    if (johnBMI > markBMI) {
        console.log("John has a higher BMI than Mark");
    } else {
        console.log("John has a lesser BMI than Mark")
    }
}