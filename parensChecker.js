// Given a string, check to see if the function has matching, equivalent set of open and closing parentheses.
// Returns a boolean

function parensChecker(str){
  if (str.length % 2 !== 0) {
    return false
    console.log('test');
  } else {
    let split = str.split('')
    let firstTest = []
    let secondTest = []
    let splitFirst = []
    let splitSecond = []
    for (let i=0; i<str.length/2; i++){
      firstTest.push('(');
      secondTest.push(')');
      splitFirst.push(split[i]);
      splitSecond.push(split[i+str.length/2])
    }
    // console.log(splitFirst);
    // console.log(firstTest);
    // console.log(secondTest);
    // console.log(splitSecond);
    // console.log(split);
    if (firstTest.join('') === splitFirst.join('') && secondTest.join('') === splitSecond.join('')){
      return true
    } else {
      return false
      console.log('test');
    }
  }
}

function betterParensChecker(str){
  let count = 0;
  if (str.indexOf('(') < 0) {
    return false
  }

  for (let ele of str){
    if (ele == ')') {
      count--
    }
    if (ele == '('){
      count++
    }
    if (count < 0){
      return false
    }
  }

  if (count == 0) {
    return true
  } else {
    return false
  }
}


var testA = '(()())'        // true
var testB = '(9)'           // true
var testC = '(9+0)+(9+0)'   // true
var testD = ')('            // false
var testE = '))'            // false
var testF = 'a'             // false
var testG = '(9+0)+(9+0))'  // false
var testH = '('             // false

console.log(betterParensChecker(testA));
console.log(betterParensChecker(testB));
console.log(betterParensChecker(testC));
console.log(betterParensChecker(testD));
console.log(betterParensChecker(testE));
console.log(betterParensChecker(testF));
console.log(betterParensChecker(testG));
