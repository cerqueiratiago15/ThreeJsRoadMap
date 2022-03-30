class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }
}
class Programmer extends Person{
    constructor(_name, _age,_yearsOfExperience){
        /* instead of declar these this._name = _name;
        this.age = _age; We use the super() */
        super(_name,_age);
        this.yearsOfExperience = _yearsOfExperience;
    }
    code(){ 
        console.log(`${this.name} is coding`);
    }
}