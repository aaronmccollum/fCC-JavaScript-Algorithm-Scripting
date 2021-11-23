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

// ----------------------------------- //

// 3. Caesars Cipher

// Function that shifts a given letter by a given number in the alphabet.
const shiftLetter = (letter, num) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmn";
  if (alphabet.includes(letter)) {
    let index = alphabet.indexOf(letter);
    let shift = index + num;
    return alphabet[shift];
  };
  return letter;
};

// A function that loops through the given string to create a shiftedLetters array.
// Then it loops again to replace undefinded values with a space.
// Lastly it returns a joined array in all upper case to pass the tests.
const rot13 = (str) => {
  let lowerCaseStr = str.toLowerCase();
  let lowerLetters = lowerCaseStr.split("");
  let shiftedLetters = [];

  for (let i = 0; i < lowerLetters.length; i++) {
    let letter = lowerLetters[i];
    shiftedLetters.push(shiftLetter(letter, 13));
  }

  for (let j = 0; j < shiftedLetters.length; j++) {
    if (shiftedLetters[j] === undefined) {
      shiftedLetters[j] = " ";
    }
  }

  return shiftedLetters.join("").toUpperCase();
}
