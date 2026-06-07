/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// function findLargestElement(numbers) {
//     let largest = Math.max(...numbers);
//     return largest;
    
// }

function findLargestElement(numbers) {
    
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

let largestElement = findLargestElement([3, 7, 2, 9, 1]);
console.log(largestElement); // Output: 9