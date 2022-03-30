

function Circle(radius){
    this.radius = radius;

    let defaultLocation = {x:1,y:1};
    let privateProperty = 'this is private info';
    this.getPrivateMethod = function(print){
        return privateProperty;
    }//getter
    
    Object.defineProperty(this,'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x ||  !value.y)
                throw new Error('Invalid input');
            
                defaultLocation = value;

        }
    })

    /*We want the method to the objs
    but We*/
    
    }

    /*javascript as dynamic language accept 
    a property to be attached to any obj in any time.
    But if We want that property to go to all objects
    We will need to use the prototype objects.
     */
    Circle.prototype.draw = function(){
        console.log('draw');
}
