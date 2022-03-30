

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(1);
//iterate through the objts properties
for(let key in circle){
    console.log(key,circle[key]);
}
//return the properties
const keys = Object.keys(circle);
console.log(keys);

//check if a obj has a property
if('radius' in circle){
    console.log('circle has a radius');
}