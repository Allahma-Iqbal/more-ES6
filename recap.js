
// 1. let and const;
const hubby = 'Omor Sani'; // always fixed value;
let phone = 'iphone 15'; // changeable value;

phone = 'realme 2 pro';

//2.default parameter;
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}

const biggest = maxNumber();
console.log(biggest);
// 3. template string;
const myNotes = `i am mojnu of ${hubby}. i have a ${phone}.
`
console.log(myNotes);

// 4. arrow function;
// function square(x) {
//     return x * x;
// }

const square = x => x * x;
console.log(square(8, 8));

//5. spreade of three dots.