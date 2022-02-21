
const canvas = document.getElementById("canva1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d"); // this method is especific to canvas elements.

// adding this event to hold the rectangle in the proper size instead of stretch or shorten everytime that the window is resized.
window.addEventListener('resize',function(){


    //scalling properly the page
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //drawing the rectangle
    context.fillStyle = "white";
    context.fillRect(10,10,150,100); 
});

const mouse = {
    x: null,
    y: null
}
var startDrawing = false;
canvas.addEventListener('click',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    startDrawing = !startDrawing;
    console.log(startDrawing);
    //console.log(event); investigate what is the event object.
   // drawMultipleCircles();
});
canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    if(startDrawing){
        drawCircles();
    }
    
})
function drawMultipleCircles(){

    context.fillStyle = "red";
    context.strokeStyle = "red";
    context.beginPath();// as the javascript doesn't know where ends a line and where begins other, you need to set the start.
    context.arc(mouse.x,mouse.y,10,0,Math.PI*2);
    context.fill();
    context.stroke();
    //  console.log(context);
}
function animate(){
    if(!startDrawing){
        context.clearRect(0,0,canvas.width,canvas.height);
    }
    drawMultipleCircles();
    requestAnimationFrame(animate);
}
    
 //animate();