const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var engine,world;
var string1,ball,land;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  
  land = new Ground(200,50,100,10);
  ball = new Ball(200,300,50);
  string1 = new Rope(land.body,ball.body);
  //console.log(ball.body);
}

function draw() {
  background(0,0,255);
  Engine.update(engine);

 
  land.display();
  ball.display();
  string1.display();

  if(keyCode === 32){
    ball.body.position.x = mouseX;
    ball.body.position.y = mouseY;
  }
  else if(keyCode === ENTER){
    ball.body.position.x = 200;
    
  }

  //drawSprites();
}