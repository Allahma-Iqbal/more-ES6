
const fish = { id: 58, name: 'king of Fish', price: 9000, phone: '0172345690', address: 'chandpur', dress: 'silver' }

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id, address } = fish;

// console.log(phone, dress);
// console.log(phone, price);
// console.log(phone, id);
// console.log(phone, address);

// multi object;
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'azmol', food: 'fuchka' },
    web: {
        work: 'web development', employee: 22, framework: 'react',
        tech: { first: 'html', second: 'css', third: 'js' }
    },


};

// const work = company.web.work;
// const framework = company.web.framework;

const { work, framework } = company.web;

const { food } = company.ceo;
const { second, third } = company.web.tech;

console.log(work, framework, food, second, third);