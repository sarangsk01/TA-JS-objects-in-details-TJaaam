function createAnimal(location,numberOfLegs){
    let animal = Object.create(animalMethod);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

let animalMethod = {
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

function createDog(location,numberOfLegs,name,color){
    let dog = Object.create(dogMethod);
    dog.location = location;
    dog.numberOfLegs = numberOfLegs;
    dog.name = name;
    dog.color = color;
    return dog;
}

let dogMethod = {
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

function createCat(location,numberOfLegs,name,colorOfEyes){
    let cat = Object.create(catMethod);
    cat.location = location;
    cat.numberOfLegs = numberOfLegs;
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}

let catMethod = {
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

//prototypal pattern

Object.setPrototypeOf(animalMethod,dogMethod,catMethod);
let animal2 = createAnimal("Spain",4);
let dog2 = createDog("Mumbai",4,"Tom","White");
let cat2 = createCat("Pune",4,"cattie","Black");

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