function getArrayParams(...arr) {

  let min = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr.length === 1){
      min = arr[i];
    }
    if(arr[i] < min){
      min = arr[i];
    }
  }
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      avg = +((sum / arr.length).toFixed(2));
    }
  }
  return { min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  if(arr.length === 0){
    return arr.length;
  }
  let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0){
    return arr.length;
  }
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0){
    return arr.length;
  }
let sumEvenElement = 0;
let sumOddElement = 0;
for (let i = 0; i < arr.length; i++) {
   if((arr[i] % 2) === 0) {
    sumEvenElement += arr[i];
   } else {
    sumOddElement += arr[i];
   }
}
return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0){
    return arr.length;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
     if((arr[i] % 2) === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
     } 
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for (let i = 0; i < arrOfArr.length; i++) {
   const result = func(...arrOfArr[i]);
   if (result > maxWorkerResult){
    maxWorkerResult = result;
   }
}
return maxWorkerResult;
}
