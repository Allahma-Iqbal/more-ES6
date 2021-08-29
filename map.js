const numbers = [4, 5, 8, 11];
const output = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = num => num * 2;

for (const num of numbers) {
    const result = doubleIt(num);
    output.push(result);
}

// console.log(output);

// 1. loop through each element;
// 2. for each element call the provieded function.
// 3. result for each element will be stored in array;

const output2 = numbers.map(x => x * 2);
console.log(output2)

const squares = numbers.map(x => x * x);
console.log(squares);