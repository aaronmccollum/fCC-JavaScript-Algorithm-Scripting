//1. Sum All Numbers in a Range
const createRange = (start, end) => {
  const rangeArr = [];
  if (start < end) {
    for (let i = start; i <= end; i++) {
      rangeArr.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      rangeArr.push(i);
    }
  }
  return rangeArr;
}

const sumAll = (arr) => {
  const range = createRange(arr[0], arr[1]);
  const sum = range.reduce((sum, ele) => sum + ele);
  return sum;
}

