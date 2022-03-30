
 class inputData {
    constructor(label, value){
        this.label = label;
        this.value = value;
    }
}
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var random = Math.random() * (max - min) + min;
    //console.log(random);
    return random;
  }

window.onload = ()=>{
    
    
   
      const min = 10;
      const max = 100;
    
     
    
    
      let data = [new inputData('Jan',getRandomArbitrary(min,max)),
      new inputData('Feb',getRandomArbitrary(min,max)),
      new inputData('Mar',getRandomArbitrary(min,max)),
      new inputData('Apr',getRandomArbitrary(min,max)),
      new inputData('May',getRandomArbitrary(min,max)),
      new inputData('Jun',getRandomArbitrary(min,max)),
      new inputData('Jul',getRandomArbitrary(min,max)),
      new inputData('Aug',getRandomArbitrary(min,max)),
      new inputData('Sept',getRandomArbitrary(min,max)),
      new inputData('Oct',getRandomArbitrary(min,max)),
      new inputData('Nov',getRandomArbitrary(min,max)),
      new inputData('Dec',getRandomArbitrary(min,max))];
    
      let targetId = 'chart';
      let chartContainer = document.getElementById(targetId);
      let canvasWidth = 600;
      let canvasHeight =450;
    //   let da = `width = ${canvasWidth} \n height = ${canvasHeight}`;
    //   console.log(da);
    
      let chart = new Barchart(targetId,canvasWidth,canvasHeight,data);
    
      
    
}
