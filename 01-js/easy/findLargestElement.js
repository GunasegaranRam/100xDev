/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    //simple method using math inbuilt function and spread operator
    // if(numbers.length>0)
    //     return Math.max(...numbers)
    // else
    //     undefined;
if(numbers.length== 0) return undefined;
else{
    let max=numbers[0];
    numbers.forEach(num =>{
        if(max < num)
             max = num;
    });
    return max;
}
}

module.exports = findLargestElement;