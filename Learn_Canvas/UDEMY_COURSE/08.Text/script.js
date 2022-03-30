//if you have a problem loading the page, this function should prevent it.
window.onload = function(){
    var canvas = document.getElementById("canvas"); //canvas is a peace of paper where you will draw your stuff.
    const context = canvas.getContext('2d'); // there is the 2d and the 3d (webgl), so you must set to the browser which context you are working with.

    context.font = 'italic bolder 45px fantasy';
    var text = 'Fill text canvas';
    context.fillStyle = 'red';
    context.shadowColor = 'black';
    context.shadowOffsetX = 10;
    context.shadowOffsetY = -10;
    context.shadowBlur = 5;
    context.fillText(text,80,100);

    var notFilledText = 'not filled text';
    context.fillStyle = 'red';
    context.shadowColor = 'black';
    context.shadowOffsetX = 10;
    context.shadowOffsetY = -10;
    context.shadowBlur = 5;
    context.strokeStyle = 'red';
    context.strokeText(notFilledText,80,200);
}
