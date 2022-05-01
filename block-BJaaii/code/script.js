class Stack {
    constructor(stack){
        this.stack = stack;
    }
    push(value){
        for(let i = 0; i < this.length; i++){
            this.push(value);
        }
    }
    pop(){
        for(let i = this.length; i <0 ; i--){
            this.pop(i);
        }
    }
    peek(){
        return this.length;
    }
    reverse(){
        for(let i = 0; i < this.length; i++){
            this.reverse();
        }
    }
    isEmpty(){
        for(let i = 0; i < this.length; i++){
           if(this.stack === 0){
               return true;
           } else{
               return false;
           }
        }
    }
    displayStack(){
        return '${this.stack}';
    }
    get length(){
        return this.stack;
    }
}


// class Queue
class Queue {
    constructor(queue){
        this.queue = queue;
    }
    enqueue(item){
        for(let i = 0; i < this.length; i++){
            this.push(item);
        }
    }
    dequeue(){
        for(let i = this.length; i <0 ; i--){
            this.pop(i);
        }
    }
    peek(){
        return this.length;
    }
    isEmpty(){
        for(let i = 0; i < this.length; i++){
           if(this.queue === 0){
               return true;
           } else{
               return false;
           }
        }
    }
    displayQueue(){
        return `${this.queue}`;
    }
    get length(){
        return this.queue;
    }
}
