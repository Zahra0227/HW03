// write your func here
let numbers = [3, 7, 2, 8, 5];
let max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}, numbers[0]);

console.log(max);
