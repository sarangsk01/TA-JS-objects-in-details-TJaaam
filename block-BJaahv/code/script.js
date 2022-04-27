// Prototypal pattern
function createProject(name,id,noOfProjects){
    let project = Object.create(projectMethods);
    this.name = name;
    this.id = id;
    this.noOfProjects= noOfProjects;
        return project;
}

let projectMethods = {
    getProjects(){
        return this.noOfProjects = noOfProjects;
    },
    changeName(newName){
        return this.name = newName;
    },    
    incrementProject(value = 1){
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    },
    decrementProject(value = 1){
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    },
}
// Pseudoclassical Pattern
   createProject.prototype ={
    getProjects :function(){
        return this.noOfProjects = noOfProjects;
    },
    changeName :function(newName){
        return this.name = newName;
    },    
    incrementProject :function(value = 1){
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    },
    decrementProject :function(value = 1){
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    },
   };

// Create using Class
class Projects{
    constructor(name,id,noOfProjects){
        this.name = name;
        this.id = id;
        this.noOfProjects= noOfProjects;
    }
    getProjects(){
        return this.noOfProjects = noOfProjects;
    }
    changeName(newName){
        return this.name = newName;
    }    
    incrementProject(value = 1){
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    }
    decrementProject(value = 1){
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    }
}

// Creating two objects
let firstProject = new Projects(
    ['kdjgje', 'jedhgit', 'deghekf', 'piehgt'],
    [1,2,3,4],4
  );
  let secondProject = new Projects(
    ['ehdigjt', 'oejgie', 'nehfke', 'qwfbej'],
    [1,2,3,4],4
  );

console.group(firstProject.name);
console.log(firstProject.name);
console.log(firstProject.id);
console.log(firstProject.noOfProjects);
console.log("Answer",firstProject.getProjects(4));
console.log("Answer",firstProject.changeName("negjth"));
console.log("Answer",firstProject.incrementProject(1));
console.log("Answer",firstProject.decrementProject(2));
console.groupEnd;

console.group(secondProject.name);
console.log(secondProject.name);
console.log(secondProject.id);
console.log(secondProject.noOfProjects);
console.log("Answer",secondProject.getProjects(4));
console.log("Answer",secondProject.changeName("endhgkt"));
console.log("Answer",secondProject.incrementProject(1));
console.log("Answer",secondProject.decrementProject(1));
console.groupEnd;