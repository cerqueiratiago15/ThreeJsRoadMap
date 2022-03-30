//if you have a problem loading the page, this function should prevent it.
import shapes;
window.onload = function(){
    let canvas = document.getElementById("canvas"); //canvas is a peace of paper where you will draw your stuff.
    const context = canvas.getContext('2d'); // there is the 2d and the 3d (webgl), so you must set to the browser which context you are working with.

    const circle = new Path2D();
    circle.arc(100,100,50,0,Math.PI*2,false);
    context.fillStyle = 'red';
    context.fill(circle);

    let isClicked = false;
    canvas.addEventListener('mousemove', event=>{
        if(context.isPointInPath(circle,event.offsetX,event.offsetY)){
            context.fillStyle = 'green';
        }
        else{
            if (!isClicked) {
                context.fillStyle = 'red';
            }
            
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fill(circle);
    });
    
    canvas.addEventListener('click', event=>{
        isClicked = !isClicked;
        if(context.isPointInPath(circle,event.offsetX,event.offsetY) && isClicked){
            context.fillStyle = 'green';
        }
        else{
            context.fillStyle = 'red';

            
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fill(circle);
    });
}
