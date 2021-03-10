class Clock{
    constructor(){
    }
    scAngle=map(sc,0,20,0,360);
    display(){
        push();
        rotate(scAngle);
        stroke(255,0,0);
        strokeWeight(7);
        line(0,0,100,0);
        angleMode(DEGREES);
        pop();
    }
}