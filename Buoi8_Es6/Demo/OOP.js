// function Student(name){
//     this.name = name;
// }

class Student {
    constructor(){
        this.name = name;
    }
}

let student = new Student("nguyen");

class Mother{
    constructor(name){
        this.name = name;
    }

    colorEyes(){
        console.log('Red');        
    }
}

class Me extends Mother{
    colorSkin(){
        console.log('Brown');
    }
}

let me = new Me('Nguyen');
me.colorEyes();


class Person {
    constructor(name) {
    this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Monkey extends Person{
    getName(){
        return "Hello " + this.name;
    }
}

let monkey = new Monkey('Khai');
console.log(monkey.getName());

class People{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    getInfo(){
        console.log(`ten: ${this.name} - tuoi: ${this.age}`);
    }
}

class Monkey2 extends People{
    constructor(name, age, eat){
        super(name, age);
        this.eat = eat;
    }

    getInfo(){
        super.getInfo();
        console.log(this.eat);
    }
}

let monkey2 = new Monkey2('Khi',10,'chuoi');
monkey2.getInfo();
