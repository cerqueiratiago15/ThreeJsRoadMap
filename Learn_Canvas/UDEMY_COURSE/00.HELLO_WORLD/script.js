//if you have a problem loading the page, this function should prevent it.
window.onload = function(){
    var mainCanvas = document.getElementById("main_canvas"); //canvas is a peace of paper where you will draw your stuff.
    const context = mainCanvas.getContext('2d'); // there is the 2d and the 3d (webgl), so you must set to the browser which context you are working with.

/*now, imagine that you are drawing in a 
canvas with oil paint and all that artist stuff. 
First thing you will do before put the pencil 
in the canvas will be fill your brush with paint*/
    context.fillStyle = 'blue';

    context.fillRect(0,0,20,30)// rectangle with the upper-right conner with 0,0 coordinates.

    context.beginPath(); //this line states 'your pencil' that you will start to draw.
    context.moveTo(10,0); //moves your pencil to start drawing in the 0,0 coordinate
    
    context.lineWidth = "2";
    
    context.lineCap = 'round'; //butt/round/square/
    context.lineTo(mainCanvas.width,mainCanvas.height-10); 
    context.lineTo(0,mainCanvas.height-10);//you can add as much lines as you want to achieve the needed shape
    context.stroke();
    

    DrawLine(context,'10','red','round',100,25,200,25);//adds the half of the width in each side

    DrawLine(context,'10','blue','square',100,75,200,75); //default without changing the length

    DrawLine(context,'10','green','butt',100,125,200,125); //adds the half of the width in each side


    context.beginPath();
    context.lineWidth = '10';
    context.strokeStyle = 'magenta';
    context.lineJoin ='round';
    context.moveTo(0,0);
    context.lineTo(100,100);
    context.lineTo(100,120);
    context.stroke();

    context.beginPath();
    context.lineWidth = '10';
    context.strokeStyle = 'brown';
    context.lineJoin ='miter';
    context.moveTo(20,0);
    context.lineTo(120,100);
    context.lineTo(120,120);
    context.stroke();

    context.beginPath();
    context.lineWidth = '10';
    context.strokeStyle = 'gray';
    context.lineJoin ='bevel';
    context.moveTo(50,0);
    context.lineTo(150,100);
    context.lineTo(150,120);
    context.stroke();

 //interesting fact is that if you strecht out your canvas, the image will be deformed.
}

function DrawLine(context,lineWidh,lineColor,capType,x1,y1,x2,y2){
    context.beginPath();
    context.lineWidth = lineWidh;
    context.strokeStyle = lineColor;
    context.lineCap =capType;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}
