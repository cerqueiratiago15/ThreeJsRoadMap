

function Barchart(targetId, width, height, data){

    let chart = this;// as complex types the variable holds the reference, We can do this. 
    //console.log(arguments);

    chart.configureChart(targetId, width, height, data);

    chart.performPreOperation();

  // console.log(chart);

}
//arrow functions cannot be used in prototype or constructors.
Barchart.prototype.configureChart = function(targetId, width, height, data){

   
    let chart = this;
    
    chart.setCanvasSpecifications(targetId, width, height, data);
    
    chart.setBarChartSpecifications();
}
Barchart.prototype.setCanvasSpecifications = function(targetId, width, height, data){

    let chart = this;// as complex types the variable holds the reference, We can do this. 
   
    chart.targetId = targetId;
    chart.width= width;
    chart.height = height;
    chart.data = data;
    
}
Barchart.prototype.setBarChartSpecifications = function(){
//Axis settings
    let chart = this;// as complex types the variable holds the reference, We can do this. 

    chart.AxisRatio = 10;
    chart.verticalMargin = (chart.height*chart.AxisRatio)/100;
    chart.horizontalMargin = (chart.width*chart.AxisRatio)/100;
    chart.AxisColor = 'black';
    chart.AxisWidth = 0.75;

    //labels settings
    chart.fontRatio = 3;
    chart.fontFamily = 'times';
    chart.fontStyle = 'normal';
    chart.fontWeight = '300';
    chart.fontColor = 'black';
    chart.verticalFontSize = (chart.height*chart.fontRatio)/100;
    chart.horizontalFontSize = (chart.width*chart.fontRatio)/100;

    //guideLine settings
    chart.guideLineColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    chart.guideLineWidth = 0.5;
}
Barchart.prototype.performPreOperation = function(){
    let chart = this;
    chart.createCanvas();
    chart.handleData();
    chart.prepareData();

    chart.drawChart();
}
Barchart.prototype.createCanvas = function(){
    let chart = this;
    let canvas = document.createElement('canvas');
    canvas.id = chart.targetId+'-'+Math.random();
    canvas.width = chart.width;
    canvas.height = chart.height;

    document.getElementById(chart.targetId).innerHTML = ''; //cleaning data;
    document.getElementById(chart.targetId).appendChild(canvas);

    chart.canvas = canvas;
    chart.context = canvas.getContext('2d');
}
Barchart.prototype.handleData = function(){
    let chart = this;
    chart.labels = [];
    chart.values = [];

    chart.data.forEach(item =>{
        chart.labels.push(item.label);
        chart.values.push(item.value);
    });
}
Barchart.prototype.prepareData = function(){
    let chart = this;


    chart.itemsNum = chart.data.length;
    chart.maxValue = Math.max.apply(null,chart.values); // Here We should have a second validation in the chart.values to check if they are numebrs
    chart.minValue = Math.min.apply(null, chart.values);

    chart.verticalAxisLength = chart.height-2*chart.verticalMargin;
    chart.horizontalAxisLength = chart.width-2*chart.horizontalMargin;

    chart.vericalUpperBound = Math.ceil(chart.maxValue/10)*10;
    chart.verticalLabelFreq = chart.vericalUpperBound/chart.itemsNum;
    chart.horizontalLabelFreq = chart.horizontalAxisLength/chart.itemsNum;

}
Barchart.prototype.drawChart = function(){
    let chart = this;

    chart.drawVerticalAxis();
    chart.drawHorizontalAxis();

    chart.drawVerticalLabels();
    chart.drawHorizontalLabels();
    chart.drawHorizontalGuideLines();
    //chart.drawBars();
    chart.drawPoints(2.5);
    chart.drawGraphic();
}
Barchart.prototype.drawVerticalAxis = function(){
    let chart = this;
    
    chart.context.beginPath();
    chart.context.strokeStyle = chart.AxisColor;
    chart.context.lineWidth = chart.AxisWidth;
    //console.log(`coordinates:\n${chart.horizontalMargin},${chart.verticalMargin}\n${chart.horizontalMargin},${chart.height-chart.verticalMargin}`)
    chart.context.moveTo(chart.horizontalMargin,chart.verticalMargin);
    chart.context.lineTo(chart.horizontalMargin,chart.height-chart.verticalMargin);
    chart.context.stroke();

}
Barchart.prototype.drawHorizontalAxis = function(){
    let chart = this;
    
    chart.context.beginPath();
    chart.context.strokeStyle = chart.AxisColor;
    chart.context.lineWidth = chart.AxisWidth;
    //console.log(`coordinates:\n${chart.horizontalMargin},${chart.verticalMargin}\n${chart.horizontalMargin},${chart.height-chart.verticalMargin}`)
    chart.context.moveTo(chart.horizontalMargin,chart.height-chart.verticalMargin);
    chart.context.lineTo(chart.width-chart.horizontalMargin,chart.height-chart.verticalMargin);
    chart.context.stroke();

}
Barchart.prototype.drawVerticalLabels = function(){
    let chart = this
    let labelFont = chart.fontStyle+' '+chart.fontWeight+' '+chart.verticalFontSize+'px '+chart.fontFamily;
    chart.context.font = labelFont;
    chart.context.fillStyle = chart.fontColor;
    chart.context.textAlign = 'right';

    let scaledVericalLabelFreq = (chart.verticalAxisLength/chart.vericalUpperBound)*chart.verticalLabelFreq;
    for(let i=0;i<=chart.itemsNum;i++){
        let labelText = Math.ceil(chart.vericalUpperBound - i*chart.verticalLabelFreq);
        let verticalLabelX = chart.horizontalMargin - chart.horizontalMargin/chart.AxisRatio;
        let verticalLabelY = chart.verticalMargin+i*scaledVericalLabelFreq;
       // console.log(chart.verticalLabelFreq);
        chart.context.fillText(labelText,verticalLabelX,verticalLabelY);
    }
}
Barchart.prototype.drawHorizontalLabels = function(){
    let chart = this
    let labelFont = chart.fontStyle+' '+chart.fontWeight+' '+chart.verticalFontSize+'px '+chart.fontFamily;
    chart.context.font = labelFont;
    chart.context.fillStyle = chart.fontColor;
    chart.context.textAlign = 'left';
    chart.context.textBaseline ='top';

    for (let i = 0; i < chart.itemsNum; i++) {
           let hx = chart.horizontalMargin + i*chart.horizontalLabelFreq;
           let hy = chart.height - chart.verticalMargin+chart.verticalMargin/chart.AxisRatio;

           chart.context.fillText(chart.labels[i],hx,hy);
    }
}

Barchart.prototype.drawHorizontalGuideLines = function(){
    let chart = this
    chart.context.strokeStyle = 'rgba(192,192,192,0.1)';
    chart.context.lineWidth = chart.AxisWidth;

    let scaledVericalLabelFreq = (chart.verticalAxisLength/chart.vericalUpperBound)*chart.verticalLabelFreq;
    
    for(let i=0;i<=chart.itemsNum;i++){
        let hy = chart.verticalMargin+i*scaledVericalLabelFreq;

        chart.context.moveTo(chart.horizontalMargin,hy);
        chart.context.lineTo(chart.width-chart.horizontalMargin,hy);
        chart.context.stroke();
    }
}
Barchart.prototype.drawBars= function()
{
    let chart = this
    let barWidth = chart.horizontalAxisLength/chart.horizontalLabelFreq;
  
    chart.context.lineWidth = chart.AxisWidth;
    let scaledVericalLabelFreq = (chart.verticalAxisLength/chart.vericalUpperBound)*chart.verticalLabelFreq;

    for (let i = 0; i < chart.itemsNum; i++) {
           let hx = chart.horizontalMargin + i*chart.horizontalLabelFreq+barWidth/2;
           let hy = chart.height-chart.verticalMargin;
           console.log(`${chart.values[i]},${chart.labels[i]}`);

           //console.log(getRGBColor());
           chart.context.fillStyle = getRGBColor();
           chart.context.fillRect(hx,hy,barWidth, -chart.values[i]*chart.verticalAxisLength/chart.maxValue);
    }
}
Barchart.prototype.drawPoints = function(radius){
    let chart = this;

    chart.context.strokeStyle ='black';
    chart.context.fillStyle ='black'
    let barWidth = chart.horizontalAxisLength/chart.horizontalLabelFreq;

    for (let i = 0; i < chart.itemsNum; i++) {

        let height = -chart.values[i]*chart.verticalAxisLength/chart.maxValue;
        let hx = chart.horizontalMargin + i*chart.horizontalLabelFreq+barWidth;
        let hy = chart.height-chart.verticalMargin+height;
        console.log(`${chart.values[i]},${chart.labels[i]}`);

        //console.log(getRGBColor());
        chart.context.beginPath();
        chart.context.arc(hx,hy,radius,0,Math.PI*2,false);
        chart.context.stroke();
        chart.context.fill();
        chart.context.closePath();
    }

}

Barchart.prototype.drawGraphic = function(){
    let chart = this;

    chart.context.strokeStyle ='black';
    chart.context.fillStyle ='black'
    chart.context.lineWidth=1;
    let barWidth = chart.horizontalAxisLength/chart.horizontalLabelFreq;

    chart.context.beginPath();
    for (let i = 0; i < chart.itemsNum; i++) {

        let height = -chart.values[i]*chart.verticalAxisLength/chart.maxValue;
        let hx = chart.horizontalMargin + i*chart.horizontalLabelFreq+barWidth;
        let hy = chart.height-chart.verticalMargin+height;
        console.log(`${chart.values[i]},${chart.labels[i]}`);
       
        if (i==0) {
            chart.context.moveTo(hx,hy);
        }
        else{
            chart.context.lineTo(hx,hy);
        }
        //console.log(getRGBColor());
        
        
        

       
    }
    chart.context.stroke();
    
    chart.context.closePath();
}
function getRGBColor(){

    var red = Math.floor(Math.random() * (257 - 47) + 47);
    var green = Math.floor(Math.random() * (257 - 47) + 47);
    var blue = Math.floor(Math.random() * (257 -47) + 47);
    return `rgb(${red},${green},${blue})`;
}
