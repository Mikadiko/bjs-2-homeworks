"use strict";

function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const min1 = Math.min(...arr);
  const max1 = Math.max(...arr);

  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const min2 = Math.min(...arr);
  const max2 = Math.max(...arr);

  const difference = max2 - min2;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  if (arrOfArr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arrOfArr.length; i++) {
    const numbers = arrOfArr[i];
    const res = func(...numbers);
    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }

  return maxWorkerResult;
}
