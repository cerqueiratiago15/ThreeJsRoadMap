
window.onload = function(){

    var canvas = document.getElementById('cnv');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    //var radian = Math.PI/180;
    
    context.moveTo(100,400);
    context.bezierCurveTo(-100,300,300,350,200,400);;
    context.stroke();

}