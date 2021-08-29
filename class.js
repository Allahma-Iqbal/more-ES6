class Support {
    name;
    designation = 'Support web dev';
    address = 'BD';
    constructor(name, address, designation) {
        this.name = name;
        this.address = address;
        this.designation = designation;
    }
    startSession() {
        console.log('start a support session')
    }
}

const aamir = new Support('aamir khan', 'BD', 'Web dev');
const salman = new Support('Salman Khan', 'Dubai', 'web design');
const sharuk = new Support('sharuk Khan', 'Dubai', 'graphics designer');

aamir.startSession();
salman.startSession();
sharuk.startSession();
console.log(aamir, salman, sharuk);
// console.log(aamir);
// console.log(salman);