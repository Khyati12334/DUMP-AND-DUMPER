
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject = new Paper(200,450,70);

	groundObject = new Ground(600,height,1200,20);

	dustBox1 = new Dustbin(870, 615, 150, 70);

	dustBox2 = new Dustbin(800, 610, 10, 200);

	dustBox3 = new Dustbin(950, 610, 10, 200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
 
  
  paperObject.display();
  groundObject.display();

  dustBox1.display();
  dustBox2.display();
  dustBox3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-125});

  }
}
