// Pseudoclassical Pattern
function CreateAnimal(location,numberOfLegs){
    let animal = {};
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;

}

    CreateAnimal.prototype  = {
    eat : function(){
        console.log("I live in ${location} and I can eat");
    },
    changeLocation : function(newLocation){
        this.location = newLocation;
        return newLocation;
    },
    summary : function(){
        return `I live in ${location} and I have ${numberOfLegs}`;
    }
}



function CreateDog(location,numberOfLegs,name,color){
    let dog = {}
    CreateAnimal.call(this,[location,numberOfLegs]);
    dog.name = name;
    dog.color = color;
}

    CreateDog.prototype = {
    bark : function(){
        alert("I am ${name} and I can bark 🐶");
    },
    changeName : function(newName){
        this.name = newName;
        return newName;
    },
    changeColor : function(newColor){
        this.color = newColor;
        return newColor;
    },
    summary : function(){
        return `I am ${this.name} and I am of ${color} color. I can also bark`;
    }
}

Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype);

function CreateCat(location,numberOfLegs,name,colorOfEyes){
    let cat = {};
    CreateAnimal.call(this,[location,numberOfLegs]);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
}

    CreateCat.prototype = {
    meow : function(){
        alert("I am ${name} and I can do mewo meow 😹");
    },
    changeName : function(newName){
        this.name = newName;
        return newName;
    },
    changeColorOfEyes : function(newColor){
        this.colorOfEyes = newColor;
        return newColor;
    },
    summary : function(){
        return `I am ${this.name} and I am of ${colorOfEyes} color. I can also do meow meow`;
    }
}

Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype);

let animal2 = new CreateAnimal("Spain",4);
let dog2 = new CreateDog("Mumbai",4,"Tom","White");
let cat2 = new CreateCat("Pune",4,"cattie","Black");

console.group(animal2.location);
console.log(animal2.numberOfLegs);
console.groupEnd();

console.group(dog2.location);
console.log(dog2.numberOfLegs);
console.log(dog2.name);
console.log(dog2.color);
console.groupEnd();

console.group(cat2.location);
console.log(cat2.numberOfLegs);
console.log(cat2.name);
console.log(cat2.colorOfEyes);
console.groupEnd();