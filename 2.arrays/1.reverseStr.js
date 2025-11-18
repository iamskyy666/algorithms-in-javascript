//Ex. Reverse A String
// Tip: On all ops. on 'str', turn them to an Array[] first.

function reverseStr(str) {
  // Check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return `Error! Input must be a proper-string 🔴`;
  }
  return str.split("").reverse().join(""); //1 liner-> short,sweet
  //or
  //! return [...str].reverse().join("");
}

console.log(reverseStr(123));
console.log(reverseStr("wHatevEr 1234 hahaha"));
console.log(reverseStr(null));
console.log(reverseStr(""));

// split() method splits a string into an array of substrings,
// and reverse() method reverses the order of the elements in an array.
// join() method joins all elements of an array into a string, and returns the resulting string.

// Solution: Use a combination of split(), reverse(), and join() methods in a single line.

// "Hi there" -> ["h", "i", " ", "t", "e", "r", "e", "h"] -> ["h", "e", "r", "e", " ", "t", "i", "h"] -> "hi there"
// "wHatevEr 1234 hahaha" -> ["h", "a", "h", "a", "h", " ", "4", "3", "2", "1", " ", "r", "e", "t", "v", "a", "H", "w"] -> ["h", "a", "h", "a", "h", " ", "4", "3", "2", "1", " ", "r", "e", "t", "v", "a", "H", "w"] -> "hahaha 1234 wHatevEr"
