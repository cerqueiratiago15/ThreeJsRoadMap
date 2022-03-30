//if you have a problem loading the page, this function should prevent it.
window.onload = function(){
    var canvas = document.getElementById("canvas"); //canvas is a peace of paper where you will draw your stuff.
    const context = canvas.getContext('2d'); // there is the 2d and the 3d (webgl), so you must set to the browser which context you are working with.


    // Part 1;
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.fillStyle = 'magenta';
    var radian = Math.PI/180;
    context.arc(200,200,100,0,radian*360,false);
    context.stroke();
    context.fill();

}