function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  iterate through each num in array
  identify a complement that adds to target;
  comp = target - num
  iterate through rest of array
  check if any num is compliment
  if so, return true
  if i reach the end of array, return false
*/

/*
  Add written explanation of your solution here

  make a function called hasTargetSum
  2 numbers from the array must equal the target
  Example [1,2,3,4] and target is 6 means this is true because 2+4=6
  For each number, check for another to add to equal target

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
