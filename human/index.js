class Person {
    constructor(age, name) {
    this.age = age;
    this.name = name;
    return age + name;
    }
    get info() {
        console.log(`Person: ${this.name} ${this.age}`);
    }
}

let Andriy = new Person(20, 'Andriy');
let Boris = new Person(21, 'Boris');
let Serhiy = new Person(17, 'Serhiy');

class Auto {
    constructor(brend, model, year, number) {
        this.brend = brend;
        this.model = model;
        this.year = year;
        this.number = number;
        return brend + model + year + number;
    }
    owner(owner) {
        if (owner.age < 18) {
            console.log('Вы слишком молоды');
        } else {
            this.nameOwner = owner;
        }
    }
    get autoInfo() {
        console.log(`Auto: ${this.brend} ${this.model} ${this.year} ${this.number}`);
        this.nameOwner ? this.nameOwner.info : console.log(`У ${this.brend} ${this.model} владельца нет`);
    }
}

let bmw = new Auto('bmw', 'm2', 2003, 2112);
let opel = new Auto('opel', 'vivaro', 1998, 3212);
let vaz = new Auto('vaz', '2106', 1986, 7832);

Andriy.info;
Boris.info;

bmw.owner(Andriy);
vaz.owner(Boris);
opel.owner(Serhiy); // Выведет вы слишком молоды так как меньше 18

bmw.autoInfo;
opel.autoInfo; // без владельца так как Сергею меньше 18 авто не закрепилось за ним