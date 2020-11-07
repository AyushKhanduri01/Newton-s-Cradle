const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1;
var g1;

function setup() {
	createCanvas(1350, 650);

	engine = Engine.create();
	world = engine.world;

  bobDiameter = 40;
  bobPositionX = width/2;
  bobPositionY = height/5+300;

	Engine.run(engine);
  bob1 = new Bob(bobPositionX-bobDiameter*2,bobPositionY,bobDiameter);
	bob2 = new Bob(bobPositionX-bobDiameter,bobPositionY,bobDiameter);
  bob3 = new Bob(bobPositionX,bobPositionY,bobDiameter);
  bob4 = new Bob(bobPositionX+bobDiameter,bobPositionY,bobDiameter);
  bob5 = new Bob(bobPositionX+bobDiameter*2,bobPositionY,bobDiameter);

  g1 = new Ground(width/2,height/4,width/7,20);

  var render = Render.create({
    element : document.body,
    engine: engine,
    options:{
      width: 1200,
      height: 700,
      wireframes: false
    }
  })
  
  rope1 = new Rope(bob1.body,g1.body,-bobDiameter*2,0);
  rope2 = new Rope(bob2.body,g1.body,-bobDiameter*1,0);
  rope3 = new Rope(bob3.body,g1.body,0,0);
  rope4 = new Rope(bob4.body,g1.body,+bobDiameter*1,0);
  rope5 = new Rope(bob5.body,g1.body,+bobDiameter*2,0);

  Engine.run(engine);
}  


function draw() {
  rectMode(CENTER);
  background(220);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  g1.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  }
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}

