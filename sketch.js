const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gr,canvas,Paper;

function setup() {
	canvas =  createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	 
	 
	 gr = Bodies.rectangle(600, 1200, 1200, 20 );
	 gr.shapeColor=color("blue")
	 World.add(world, gr);
	 
      Paper = new Paperball(100,100);
	  Engine.run(engine);
	}


function draw() {
	background("black");
	rectMode(CENTER);
	
	Paper.display();
	  
	gr.display();
  
 
}



function keyPressed(){ 
	if(keyCode === UP_ARROW){ 
	 Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85}); 
 } 
   
   }  




