// declear variable based on the name of an object property;

const myObject = { x: 2, y: 3, z: 60, a: 300, b: 20 };
const { x, b } = myObject;
// console.log('myObject.p', myObject?.p?.q)
// console.log(x, b);

// destructuring array;

const [p, q] = [43, 56];
// console.log(p, q);


const [best, faltu] = ['Rakib', 'Mehedi'];
// console.log(best, faltu);

const { sky, color, money } = { sky: 'blue', soil: 'mati', color: 'red', money: 500 };

// chaining;

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'azmol', food: 'fuchka' },
    web: {
        work: 'web development', employee: 22, framework: 'react',
        tech: { first: 'html', second: 'css', third: 'js' }
    },


};

// console.log(company.web.tech.third);
console.log(company?.back?.tech.third);
