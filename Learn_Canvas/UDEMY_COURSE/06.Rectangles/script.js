//if you have a problem loading the page, this function should prevent it.
window.onload = function(){
    var canvas = document.getElementById("canvas"); //canvas is a peace of paper where you will draw your stuff.
    const context = canvas.getContext('2d'); // there is the 2d and the 3d (webgl), so you must set to the browser which context you are working with.


    // Part 1;
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.lineJoin = 'round';
    context.fillStyle = 'magenta';
    context.rect(100,200,150,150);
    context.stroke();
    context.fill();


    //part 2
    context.fillStyle = 'green';
    context.fillRect(300,200,150,150);



    //part 3
    context.beginPath();
    context.strokeStyle = 'gray';
    context.lineWidth = 20;
    context.lineJoin = 'belve';
    context.strokeRect(500,200,150,150);


    //part 4
    context.clearRect(0,0,200,250);

}