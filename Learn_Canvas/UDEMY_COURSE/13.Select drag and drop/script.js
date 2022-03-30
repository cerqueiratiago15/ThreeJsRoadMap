//if you have a problem loading the page, this function should prevent it.
import * as Shapes from './shapes.js'

window.onload = function(){
    let canvas = document.getElementById("canvas"); //canvas is a peace of paper where you will draw your stuff.
    const context = canvas.getContext('2d'); // there is the 2d and the 3d (webgl), so you must set to the browser which context you are working with.


    let setOfCircles = [];
    setOfCircles.push(new Circle(100,100,10,'red','red','canvas'));
    setOfCircles.push(new Circle(200,100,10,'red','red','canvas'));
    setOfCircles.push(new Circle(300,100,10,'red','red','canvas'));
    setOfCircles.push(new Circle(400,100,10,'red','red','canvas'));
    setOfCircles.push(new Circle(500,100,10,'red','red','canvas'));

    let isClicked = false;
    let mouseHandled = false;
    window.onmousedown = event=>{
    
    }
    window.onmouseup = event =>{
       // console.log(event);

    }
    window.onclick = event=>{
        // isInPathEventCatcher(event);
        // isClicked=!isClicked;
        console.log(event.ctrlKey);
        console.log(event);
    }
    window.onmousemove = event=>{
        //isInPathEventCatcher(event);
       
    }
    
    let isInPathEventCatcher = (event)=>{
        for (let i = 0; i < setOfCircles.length; i++) {
            const circle = setOfCircles[i];
            let isInCircle = false;
          
            isInCircle = context.isPointInPath(circle.path2d,event.offsetX,event.offsetY);
            if (isInCircle) {
            
                circle.updateCircle(circle.centerX,circle.centerY,circle.radius,'magenta','magenta');
               
            }
            else{
              
                circle.updateCircle(circle.centerX,circle.centerY,circle.radius,'red','red');
               
                
            }
        }
    }
}
