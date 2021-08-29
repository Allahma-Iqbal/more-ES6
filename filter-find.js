const numbers = [5, 60, 38, 29, 33, 56, 10, 2, 3, 48];
const bigNumbers = numbers.filter(numbers => numbers > 20);
const smallNumbers = numbers.filter(numbers => numbers < 20);
console.log(bigNumbers, smallNumbers);


const products = [

    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 50000, color: 'red' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'white' },
    { name: 'water glass', price: 3, color: 'silver' }
]

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem);