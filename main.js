/******************
 * YOUR CODE HERE *
******************/

function doubleAll(num) {
  const newDouble = [];
  for (let i = 0; i < num.length; i++) {
    newDouble.push(num[i] * 2)
  }
  return newDouble
}

function yelledGreetings(str) {
  const newGreeting = [];
  for (let i = 0; i < str.length; i++) {
    newGreeting.push(str[i] + '!')
  }
  return newGreeting
}

function absoluteValues(num) {
  const newNumber = []; 
  for (let i = 0; i < num.length; i++) { 
    bestNumber = Math.abs(num[i])
    newNumber.push(bestNumber);
  }
  return (newNumber)
}


function upperCaseFirstLetters(initial) {
  const newArr = [];
  for (let i = 0; i < initial.length; i++) {
    newArr.push(initial[i][0].toUpperCase() 
    + initial[i].slice(1).toLowerCase())
  }
  return newArr
}



function changeToInitials(str) {
  const newName = [];
  for (let i = 0; i < str.length; i++){
    newName.push(str[i] )
  }

}




/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
