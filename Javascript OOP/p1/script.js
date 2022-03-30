//object literal sintax below. Objcts have a key/value pair declaration.
const circle = {
    radius:1,
    location: {
        x:1,
        y:1
    },
    draw: function(){
        console.log('test');
    }
}; //const for constants and let is a best practice when you are setting up your variables;
circle.draw();
