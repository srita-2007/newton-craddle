const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ball1, ball2, ball3, ball4;
var constraintRope;

function setup() {
	var canvas = createCanvas(400, 400);
  engine = Engine.create();
	world = engine.world;
	Engine.run(engine); 
    ball1= new Ball(200,300,25);
    ball2= new Ball(300,300,25);
    //ball3= new Ball(400,300,25);
    //ball4= new Ball(600,100,25);
    ground = new Ground(250, 50, 300, 20);
    //constraintLog = new Log(230,180,80,80,PI/2);
    var A = ground.body.position.x;
    var B = ground.body.position.y;
    rope1 = new Rope(ball1.body, {x: A-25, y: B});
    rope2 = new Rope(ball2.body, {x: A+25, y: B});
    //rope3 = new Rope(ball3.body, ground.body);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  Engine.update(engine);
  fill("red");
  text (World.mouseX, 50, 50);
  ball1.display();
  ball2.display();
  //ball3.display();
 // ball4.display();
  ground.display();
 //constraintLog.display();
  rope1.display();
  rope2.display();
  
  drawSprites();
}
