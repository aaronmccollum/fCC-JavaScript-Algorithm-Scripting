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

// ---------------------------------
//2. Diff Two Arrays
const diffArray = (arr1, arr2) => {
  const mergedLists = arr1.concat(arr2);
  const newArr = mergedLists.filter(ele => !(arr1.includes(ele) && arr2.includes(ele)));
  return newArr;
}

// ---------------------------------
//3. Seek and Destroy
function destroyer(arr) {
  // Gathering arguments and separating between the given array and the rest of the arguments
  const arrCopy = [...arr];
  const extraArgs = [];
  for (let i = 1; i < arguments.length; i++) {
    extraArgs.push(arguments[i]);
  }
  
  // Remove  elements from arrCopy that are the same value as each extraArgs
  const answer = arrCopy.filter(ele => !(extraArgs.includes(ele)));
  return answer;
}
