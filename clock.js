class Clock{
    constructor(angle,lineLength){
        this.ang=angle;
        this.length=lineLength;
        this.color=random(0,255)
    }
   // scAngle=map(sc,0,20,0,360);
    display(){
        push();
        rotate(this.ang);
        stroke(this.color,this.color,this.color);
        strokeWeight(7);
        line(0,0,this.length,0);
        
        pop();
    }
}