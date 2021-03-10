 var hours,minutes,seconds; 

function setup() {
  createCanvas(800,400);
  hours=hour();
  minutes=minute();
  seconds=second();
  clock=new Clock();
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  clock.display();  
  drawSprites();
}
function hour(){
  let h = hour();
  text('Current hour:\n' + h, 5, 50);
}
function minute(){
  let m = minute();
  text('Current minute: \n' + m, 5, 50);
}
function second(){
  let s = second();
  text('Current second: \n' + s, 5, 50);
}

