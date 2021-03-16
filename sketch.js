 var hours,minutes,seconds; 

function setup() {
  createCanvas(800,400);
  hours=hour();
  minutes=minute();
  seconds=second();

  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES); 
}

function draw() {
  background(0);
    translate(200,200)
    rotate(-90)
    scAngle = map(seconds, 0, 60, 0, 360);
    mnAngle = map(minutes,0,60,0,360)
    hrAngle = map(hours % 12,0,12,0,360)
      /*clock=new Clock(scAngle,100);
  clock=new Clock(mnAngle,75);
  clock=new Clock(hrAngle,50);
  clock.display(); 
  clock.display();
  clock.display(); */

   push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //drawing mins hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

  stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
  //drawSprites();
}
/*function hour(){
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
}*/

