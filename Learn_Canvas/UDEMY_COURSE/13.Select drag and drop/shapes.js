class Circle{
    constructor(centerx, centery, radius, fillStyle, strokeStyle,targetId){
        
         let circle = this; //as in the js We have references and not value's copy, We can do this.
         
         circle.radius = radius;
         circle.centerX = centerx;
         circle.centerY = centery;
         circle.fillStyle = fillStyle;
         circle.strokeStyle = strokeStyle;
         circle.targetId = targetId;
         circle.context = this.#getContext(targetId);
         circle.drawCircle();
    }
    #getContext(targetId){
        var canvas= document.getElementById(targetId);
        return canvas.getContext('2d');
    }
    get2dPath(){
        let circle = this;

        circle.path2d = new Path2D();
    
        circle.path2d.arc(circle.centerX,circle.centerY,circle.radius,0,Math.PI*2);

        
    }
    drawCircle(){
        let circle = this;
        circle.get2dPath();
        circle.context.strokeStyle = circle.strokeStyle;
        circle.context.fillStyle = circle.fillStyle;
        circle.context.beginPath();
        circle.context.stroke(circle.path2d);
        circle.context.fill(circle.path2d);
        circle.context.closePath();
    }
    updateCircle(centerx, centery, radius, fillStyle, strokeStyle){
        let circle = this; //as in the js We have references and not value's copy, We can do this.
         
        circle.radius = radius;
        circle.centerX = centerx;
        circle.centerY = centery;
        circle.fillStyle = fillStyle;
        circle.strokeStyle = strokeStyle;
        
        circle.drawCircle();

    }

}