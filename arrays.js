var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
//var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars, unshift(candyString);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
  return chocolateBars;
}

function accessElementInArray(array, index){
  return array [index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolatBars){
  chocolatBars.shift();
  return chocolatBars;
}

function removeElementFromBeginningOfArray(chocolatBars){
  return chocolatBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolatBars){
  chocolatBars.pop();
  return chocolatBars;
}

function removeElementFromEndOfArray(chocolatBars){
  return chocolatBars.slice(0, chocolatBars.length -1);
}
