 const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };
// Without Object
  function isAnswerCorrect(index){
      if(index === 1){
          return true;
      }else{
          return false;
      }
  }

  function getCorrectAnswer(){
      if(correctAnswerIndex === 1){
          return 'Tashkent';
      }else if(correctAnswerIndex === 2){
          return 'Amaan';
      }else if(correctAnswerIndex === 3){
          return 'Kuwait City';
      }else if(correctAnswerIndex === 4){
          return 'Nairobi';
      }else{
          return 'Enter a valid number!';
      }
  }

// Organised Using Object

  let testNew = {
      title : 'Where is the capital of Jordan',
      options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
      correctAnswerIndex: 1,
      isAnswerCorrect(index){
        if(index === 1){
            return true;
        }else{
            return false;
        }
    },
      getCorrectAnswer(){
        if(correctAnswerIndex === 1){
            return 'Tashkent';
        }else if(correctAnswerIndex === 2){
            return 'Amaan';
        }else if(correctAnswerIndex === 3){
            return 'Kuwait City';
        }else if(correctAnswerIndex === 4){
            return 'Nairobi';
        }else{
            return 'Enter a valid number!';
        }
    },
  };

// function to create object

  function createObject(title,options,correctAnswerIndex){
    let test = {
        test.title = title,
        test.options = options,
        test.correctAnswerIndex= correctAnswerIndex,
        test.isAnswerCorrect= function(index){
          if(this.index === 1){
              return true;
          }else{
              return false;
          }
      },
        test.getCorrectAnswer= function(){
          if(this.correctAnswerIndex === 1){
              return 'Tashkent';
          }else if(this.correctAnswerIndex === 2){
              return 'Amaan';
          }else if(this.correctAnswerIndex === 3){
              return 'Kuwait City';
          }else if(this.correctAnswerIndex === 4){
              return 'Nairobi';
          }else{
              return 'Enter a valid number!';
          }
      },
    };
    return test;
}

// Creating two object
let test1 = createObject('Where is the city of London','England',3);
let test2 = createObject('Where is the city of America','USA',4);

console.group(test1.title);
console.log(test1.title);
console.log(test1.options);
console.log(test1.correctAnswerIndex);
console.log("Answer",test1.isAnswerCorrect(1));
console.log("Answer",test1.getCorrectAnswer("Amaan"));
console.groupEnd;

console.group(test2.title);
console.log(test2.title);
console.log(test2.options);
console.log(test2.correctAnswerIndex);
console.log("Answer",test2.isAnswerCorrect(3));
console.log("Answer",test2.getCorrectAnswer("Nairobi"));
console.groupEnd;