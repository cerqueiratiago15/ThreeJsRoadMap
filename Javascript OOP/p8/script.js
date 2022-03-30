class Anima{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log('Generic Animal Sound');
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    makeSound(){
        console.log('Woof woof');
    }
}