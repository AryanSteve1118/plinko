const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisions = [];
var plinkos = []
var particles = [];
var divisionHeight = 300
var ground;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
// here also


engine=Engine.create();
world=engine.world;
ground = new Ground(240,750,480,10)

for(var k = 0; k<=width;k = k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}
for(var j = 40; j<=width; j=j+50){
  plinkos.push(new Plinko(j,75))
}
for(var j = 15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,175))
}
for(var j = 40; j<=width; j=j+50){
  plinkos.push(new Plinko(j,275))
}
for(var j = 15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,375))

}

}
function draw() {
  background(0); 
  Engine.update(engine);
  //plinkos.display();
 
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  ground.display();
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
 
}
