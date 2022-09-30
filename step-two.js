// 1) Sum Zero

const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] != arr[i]) {
        if (arr[i] + arr[j] === 0) {
          console.log(true);
          return;
        }
      }
    }
  }
  console.log(false);
};

addToZero([1, 2, 3, -2]);
// O(n^2)

function uniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}
console.log(uniqueChars("monday"));

// O(n)

isPangram = (str) => {
  str = str.toLowerCase();

  if (str.includes("a") != true) {
    return false;
  }
  if (str.includes("b") != true) {
    return false;
  }
  if (str.includes("c") != true) {
    return false;
  }
  if (str.includes("d") != true) {
    return false;
  }
  if (str.includes("e") != true) {
    return false;
  }
  if (str.includes("f") != true) {
    return false;
  }
  if (str.includes("g") != true) {
    return false;
  }
  if (str.includes("h") != true) {
    return false;
  }
  if (str.includes("i") != true) {
    return false;
  }
  if (str.includes("j") != true) {
    return false;
  }
  if (str.includes("k") != true) {
    return false;
  }
  if (str.includes("l") != true) {
    return false;
  }
  if (str.includes("m") != true) {
    return false;
  }
  if (str.includes("n") != true) {
    return false;
  }
  if (str.includes("o") != true) {
    return false;
  }
  if (str.includes("p") != true) {
    return false;
  }
  if (str.includes("q") != true) {
    return false;
  }
  if (str.includes("r") != true) {
    return false;
  }
  if (str.includes("s") != true) {
    return false;
  }
  if (str.includes("t") != true) {
    return false;
  }
  if (str.includes("u") != true) {
    return false;
  }
  if (str.includes("v") != true) {
    return false;
  }
  if (str.includes("w") != true) {
    return false;
  }
  if (str.includes("x") != true) {
    return false;
  }
  if (str.includes("y") != true) {
    return false;
  }
  if (str.includes("z") != true) {
    return false;
  }
  return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

// O(1)

const findLongestWord = (arr) => {
  wordLength = [];
  for (let i = 0; i < arr.length; i++) {
    wordLength.push(arr[i].length);
  }
  let largest = wordLength[0];
  for (let j = 0; j < wordLength.length; j++) {
    if (largest <= wordLength[j]) {
      largest = wordLength[j];
    }
  }
  console.log(largest);
};

findLongestWord(["hi", "hello"]);

// O(n^2)
