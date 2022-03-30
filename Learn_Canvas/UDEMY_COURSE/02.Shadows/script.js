
window.onload = function(){

    var canvas = document.getElementById('cnv');
    var context = canvas.getContext('2d');


    /*
    Shadow attribustes on canvas:
    - shadowColor
    - shadowOffsetX
    - shadowOffsetY
    - shadowBlur
     */


    //line 1
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = '10';
    context.shadowColor = 'black';
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 5;
    context.moveTo(50,100);
    context.lineTo(150,100);
    context.stroke();


      //line 2
      context.beginPath();
      context.strokeStyle = 'red';
      context.lineWidth = '10';
      context.shadowColor = 'black';
      context.shadowOffsetX = 10;
      context.shadowOffsetY = 10;
      context.shadowBlur = 10;
      context.moveTo(50,140);
      context.lineTo(150,140);
      context.stroke();

        //line 3
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = '10';
    context.shadowColor = 'black';
    context.shadowOffsetX = -10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 0;
    context.moveTo(50,180);
    context.lineTo(150,180);
    context.stroke();

      //line 4
      context.beginPath();
      context.strokeStyle = 'red';
      context.lineWidth = '10';
      context.shadowColor = 'black';
      context.shadowOffsetX = -10;
      context.shadowOffsetY = -10;
      context.shadowBlur = 5;
      context.moveTo(50,220);
      context.lineTo(150,220);
      context.stroke();




}