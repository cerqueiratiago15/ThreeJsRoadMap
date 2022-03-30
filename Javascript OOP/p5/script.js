

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(10);
circle.location = {x:1};
// in order to access properties dynamically
const propertyName = 'location';
circle[propertyName] = {x:1};

//dynamically delete a property
delete circle[propertyName];
//in order to know how many properties a function has;
console.log(Circle.length);
