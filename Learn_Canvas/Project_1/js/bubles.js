
const canvas = document.getElementById("canva1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d"); // this method is especific to canvas elements.
var particlesArray = [];

var hue = 0;
// adding this event to hold the rectangle in the proper size instead of stretch or shorten everytime that the window is resized.
window.addEventListener('resize',function(){


    
    //scalling properly the page
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //drawing the rectangle
    context.fillStyle = "white";
    context.fillRect(10,10,150,100); 
});
function getRandomArbitrary(min, max) {
    var random = Math.random() * (max - min) + min;
    //console.log(random);
    return random;
  }
var mouse = {
    x: null,
    y: null
}
class Particle{
    constructor(){
        // this.x = getRandomArbitrary(0,canvas.width);
        // this.y = getRandomArbitrary(0,canvas.height);
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = getRandomArbitrary(0,10);
        this.speedX = getRandomArbitrary(-1.5,5);
        this.speedY = getRandomArbitrary(-1.5,5);
        this.color = "hsl("+hue+", 100%, 50%)";
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size>0.1){
            this.size -=0.1;
        }
        this.color = "hsl("+hue+", 100%, 50%)";

    }
    draw(){
        drawCircles(this.x,this.y,this.size,this.color);
    }
}

function init(ballsNumber){
    for(let i = 0;i<ballsNumber;i++){
        particlesArray.push(new Particle());
        //console.log(particlesArray.length);

    }
}

function handleParticles(){
    for(let i = 0;i<particlesArray.length;i++){
        var p1 = particlesArray[i];
    
        particlesArray[i].draw();
        particlesArray[i].update();
        if(particlesArray[i].size<0.1){
            particlesArray.splice(i,1);
            i--;
            console.log('test1');
       }
        for(let j = 0;j<particlesArray.length;j++){
           if(p1){
            var p2 = particlesArray[j];
            var distance = distanceBetweenTwoPoints(p1.x,p1.y,p2.x,p2.y);
            if(distance<50 & distance>10){
                drawLine(p1,p2);
            }
           }
           else console.log('test2');
        }
      
      
    } 
}

canvas.addEventListener('click',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    
    //console.log(event); //investigate what is the event object.
   // drawMultipleCircles();
});
canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;

    init(5);
    //console.log(event);// investigate what is the event object.
    //init(10);
   
})
function drawCircles(x,y,size,color){
    //console.log('x:'+x+',y'+y);
    context.fillStyle = color;
    context.strokeStyle = color;
    context.beginPath();// as the javascript doesn't know where ends a line and where begins other, you need to set the start.
    context.arc(x,y,size,0,Math.PI*2);
    context.fill();
    context.stroke();
    //  console.log(context);
}


function distanceBetweenTwoPoints(x1,y1,x2,y2){
    var dx = (x2-x1);
    var dy = (y2-y1);
    return Math.sqrt((dx*dx)+(dy*dy));
}
function drawLine(particle1, particle2){

    context.beginPath();
    context.strokeStyle = particle1.color;
    context.lineWidth = 0.5;
    context.moveTo(particle1.x,particle1.y);
    context.lineTo(particle2.x,particle2.y);
    context.stroke();
}
function animate(){
    


    context.clearRect(0,0,canvas.width,canvas.height);//eliminate the rectangle
    // context.fillStyle = 'rgba(0,0,0,0.05)'; paint a rectangle as black when it goes for each particle
    // context.fillRect(0,0,canvas.width,canvas.height);
    handleParticles();
    hue++;
    requestAnimationFrame(animate);
}

animate();
//console.log(context);
