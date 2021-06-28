// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('==============')

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));

printProfileData(profileDataArgs);

// using function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
// };

// using arrow function syntax
// const addNums = (numOne + numTwo) => {
//     return numOne + numTwo;
// }