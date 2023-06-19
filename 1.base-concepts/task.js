"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let disc = Math.pow(b, 2) - (4 * a * c);
  if (disc > 0) {
    let rootOne = (-b + Math.sqrt(disc)) / (2 * a);
    let rootTwo = (-b - Math.sqrt(disc)) / (2 * a);
    arr.push(rootOne);
    arr.push(rootTwo);
    return arr;
  } else if (disc === 0) {
    let rootThree = -b/(2*a);
    arr.push(rootThree);
    return arr;
  } else {
    return arr;
  }
  
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent /= 100;
  percent /= 12;
  amount -= contribution;
  let sumCridinInMount = amount * (percent + (percent / (Math.pow((1 + percent), countMonths) - 1)));
  let allSum = sumCridinInMount * countMonths;
  return +(allSum.toFixed(2));
  
}