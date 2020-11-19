class Plinko{
    constructor(x,y){
      var options ={
        isStatic:true,
        restitution: 0.3,
        friction:0.5,
        density:1.2 
      }
      //  this.x=x;
      //  this.y=y;
       this.r=10;
      //  this.body= Bodies.circle(this.x,this.y,this.r,options)
      this.plinko= Bodies.circle(x,y,this.r,options);
      // console.log(x,y)
       World.add(world,this.plinko);
    }

    display(){
        var plinkopos = this.plinko.position
        var angle=this.plinko.angle;
        push()
        translate(plinkopos.x,plinkopos.y)
        rotate(angle);
        rectMode(CENTER)
        strokeWeight(3);
        // fill(255,0,255);
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}