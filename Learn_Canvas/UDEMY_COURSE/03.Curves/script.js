
window.onload = function(){

    var canvas = document.getElementById('cnv');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    var radian = Math.PI/180;
    context.arc(200,200,100,0,radian*180,false);
    context.stroke();

}