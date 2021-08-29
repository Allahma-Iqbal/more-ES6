const friends = ['tom hakins', 'stepen hawkin', 'tom brandy', 'jhon kala'];

const fLenght = friends.map(friend => friend.length);
// console.log(fLenght);

const products = [

    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 50000, color: 'red' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'white' },
    { name: 'water glass', price: 3, color: 'silver' }
]

const productName = products.map(product => product.name);

const priceName = products.map(products => products.price);
const colorName = products.map(products => products.color);

// products.map(product => console.log(product));

products.forEach(product => console.log(product));

// console.log(productName, priceName, colorName)