/**
 * Function to find the longest common prefix string amongst an array of strings
 * @param a - an array of strings
 * @returns string
 */
const getLongest = (a) => {
  const stack = [];

  for (let i = 0; i < a.length; i++) {
    const words = a[i];
    for (let j = 0; j < words.length; j++) {
      const char = words[j];
      let flag = true;
      for (let i = 0; i < a.length; i++) {
        const subWords = a[i];
        if (subWords[j] !== char) {
          flag = false;
        }
      }
      if (flag && !stack.includes(char)) {
        stack.push(char);
      }
    }
  }

  return stack.join('');
};

console.log(getLongest(['flower', 'flow', 'flight'])); // "fl"
console.log(getLongest(['dog', 'racecar', 'car'])); // ""
console.log(getLongest(['bank', 'bang', 'banana'])); // "ban"
