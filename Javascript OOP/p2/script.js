
/*
imagine in the previous example 
that you want to create another circle,
you would need to duplicate the code
and that's all wrong because the obj 
has 1 or more methods. The literal sintaxe
is not a problem if the obj has no behavior
(methods)
 */
//factory function
function createCircle(radius){
    return {
        radius,//if the property has the same name as the parameter, you can reduce it to one word.
        draw: function(){
            console.log("draw");
        }
    }
}
const circle = createCircle(1);
circle.draw();