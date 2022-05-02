class Person {
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        return `I am ${this.name} and I like eating`;
    }
    sleep(){
        return `I am ${this.name} and I like Sleeping`;
    }
    walk(){
        return `I am ${this.name} and I like Walking`;
    }
}

class Player extends Person {
    constructor(name,age,gender,sportsName){
        super(name,age,gender);
        this.sportsName = sportsName;
    }
    play(){
        return `I am ${this.name} and I am a player`;
    }

}

class Teacher extends Person {
    constructor(name,age,gender,instituteName){
        super(name,age,gender);
        this.instituteName = instituteName;
    }
    teach(){
        return `I am ${this.name} and I am a teacher`;
    }

}

class Artist extends Person {
    constructor(name,age,gender,kind){
        super(name,age,gender);
        this.kind = kind;
    }
    createArt(){
        return `I am ${this.name} and I am an Artist`;
    }

}

class Cricketer extends Player {
    constructor(name,age,gender,sportsName,teamName){
        super(name,age,gender,sportsName);
        this.teamName = teamName;
    }
    playCricket(){
        return `I am ${this.name} and I am a Cricketer`;
    }

}

let person = new Person("John",23,"Male");
let person2 = new Player("Arya",22,"Female","Badminton");
let person3 = new Teacher("Sarah",21,"Female","Bombay University");
let person4 = new Artist("Sameer",24,"Male","Nature");
let person5 = new Cricketer("Sachin",25,"Male","Cricket","India");
