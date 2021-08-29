class TeamMember {
    name;
    designation = 'Support web dev';
    address = 'BD';
    constructor(name, address, designation) {
        this.name = name;
        this.address = address;
        this.designation = designation;
    }

}


class Support extends TeamMember {
    groupSupportTime;

    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log('start a support session')
    }
}

class StudentCare {
    name;
    designation = 'student care web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildAroutin() {
        console.log(this.name, 'Build a routine for', student)
    }
}

class NeptuneDev {
    name;
    designation = 'Student Care App Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    releaseApp(version) {
        console.log(this.name, 'Release app version', version);
    }
}

const aamir = new Support('aamir khan', 'BD', 'Web dev', 11);
const salman = new Support('Salman Khan', 'Dubai', 'web design', 12);
const sharuk = new Support('sharuk Khan', 'Dubai', 'graphics designer', 4);
// const alia = new Support('Alia  Bhaat', 'Mumbai', 'UI/UX designer', 3);


const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(alia);

aamir.startSession();
salman.startSession();
sharuk.startSession();
console.log(aamir, salman, sharuk);
// console.log(aamir);
// console.log(salman);