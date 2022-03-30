
//also, we have the constructor function
//this is very similar to what we have in C#
function Circle(radius){
    //console.log('this',this);
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
/*the constructor function will be a 
constructor for a global object, mainly
bacause we are using the word this to assign
variables. If you don't the 'new' word in the 
declaration of the constructor, like calling a function
you will be able to see that the window (the global obj
    inside the browser) obj is being modified. 
So We don't want to mess with that
because it can cause bugs in the app.The new word 
below will create a new empty objct other than
window and will prevent the app from bugs changin
the global object */
const circle = new Circle(1);
circle.draw();
//functions in js are objs

