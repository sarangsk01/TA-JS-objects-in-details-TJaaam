// Prototypal pattern
   
  function createObject(title,options,correctAnswerIndex){
    let test = Object.create(objectMethods);
        test.title = title;
        test.options = options;
        test.correctAnswerIndex= correctAnswerIndex;
        return test;
}

let objectMethods = {
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    },    
}
// Pseudoclassical Pattern
   createObject.prototype ={
    isAnswerCorrect: function(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function(){
        return this.options[this.correctAnswerIndex];
    },
   };

// Create using Class
class Object{
    constructor(title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex= correctAnswerIndex;
    }
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}

// Creating two objects
let firstQuestion = new Object(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Object(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

console.group(firstQuestion.title);
console.log(firstQuestion.title);
console.log(firstQuestion.options);
console.log(firstQuestion.correctAnswerIndex);
console.log("Answer",firstQuestion.isAnswerCorrect(1));
console.log("Answer",firstQuestion.getCorrectAnswer("Amaan"));
console.groupEnd;

console.group(secondQuestion.title);
console.log(secondQuestion.title);
console.log(secondQuestion.options);
console.log(secondQuestion.correctAnswerIndex);
console.log("Answer",secondQuestion.isAnswerCorrect(3));
console.log("Answer",secondQuestion.getCorrectAnswer("Nairobi"));
console.groupEnd;