//if you have a problem loading the page, this function should prevent it.
window.onload = function(){
    var canvas = document.getElementById("canvas"); //canvas is a peace of paper where you will draw your stuff.
    const context = canvas.getContext('2d'); // there is the 2d and the 3d (webgl), so you must set to the browser which context you are working with.

   var centerX = 300;
   var centerY = 250;

   var numberOfSides = 5;
   var side = 100;
   var radius = returnRadius(numberOfSides,side);

   var coordinates = getPoligonCoodinatesBySide(centerX,centerY,numberOfSides,side);

   context.strokeStyle = 'red';
   context.lineWidth = 1;
   context.fillStyle = 'red';
   context.lineJoin = 'round';
   context.beginPath();
   context.shadowOffsetX=10;
   context.shadowOffsetY=10;
   context.shadowBlur = 5;
   context.shadowColor = 'black';
   var initialCoordinates = coordinates[0];
   context.moveTo(initialCoordinates[0],initialCoordinates[1]);

   for(let i=0; i<coordinates.length;i++){
       var coordinate = coordinates[i];
       if(i>0){
        context.lineTo(coordinate[0],coordinate[1]);
       
       }
      else continue;
       
   }
   context.lineTo(initialCoordinates[0],initialCoordinates[1]);
   context.stroke();
   context.fill();

   context.beginPath();
   context.strokeStyle = 'blue';
   context.lineWidth = 1;
   context.arc(centerX,centerY,radius,0,radiansPasser(360),false);
   context.stroke();
}
function getSingleCoordinate(centerX, centerY,angle, radius){

    var radians = radiansPasser(angle);
    var py = centerY+ radius*Math.sin(radians);
    var px = centerX+ radius*Math.cos(radians);

    
    return [px,py];
}
function getInitialAngle(numberOfSides){

    if(numberOfSides>3){

        var angle = (360/numberOfSides);
        return 90-angle;
    }
    else{
        return 0;
    }
}
function notClockWiseAngle(index,numberOfSides){

    var initialAngle = getInitialAngle(numberOfSides);
    
    var angle = initialAngle+(index-1)*(360/numberOfSides);
    return angle;
}
function getPoligonCoodinatesByRadius(centerX, centerY, numberOfSides,radius){


    var coordinates = [];
    for(let i=0; i<numberOfSides;i++){
        var angle = notClockWiseAngle(i,numberOfSides);
        var coordinate = getSingleCoordinate(centerX,centerY,angle,radius);

        coordinates.push(coordinate);
    }
    return coordinates;
}
function radiansPasser(angle){
   var radians = Math.PI/180;
    return radians*angle;
}
function getPoligonCoodinatesBySide(centerX, centerY, numberOfSides,side){

    var radius = returnRadius(numberOfSides,side);

    return getPoligonCoodinatesByRadius(centerX,centerY,numberOfSides,radius);
}
function returnRadius(numberOfSides,side){
    var SingleAngle = ((numberOfSides-2)*180)/numberOfSides;
    var angle = radiansPasser(SingleAngle/2);


    radius = Math.sin(angle)*side/Math.sin(radiansPasser(360/numberOfSides));    

    return radius;
}
