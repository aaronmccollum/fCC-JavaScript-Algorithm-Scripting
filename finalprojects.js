// 1. Palindrome Checker

// Function to remove all non-alphanumeric characters from tests
const removeSymbols = (str) => {
  return str.replace(/[^0-9a-z]/gi, '')
}

/* Function that does the following:
   - Changes input str to lowercase
   - Splits the lowercase string into an array
   - If the string matches the reverse string, returns true
   - Return false by default if not true
*/
const palindrome = (str) => {
  const alphaStr = removeSymbols(str).toLowerCase();
  const alphaArr = alphaStr.split("");
  if (alphaArr.join("") === alphaArr.reverse().join("")) {
    return true;
  }
  return false;
}
