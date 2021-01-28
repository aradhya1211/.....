
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var boll, boll2, boll3;


var engine;
var world;
var hammar;
var grou;
var boll, boll2 , boll3;
var ball;
var metal1;
var paper1;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
 hammar = new hammer(400,400,20,50);

 
 boll = new lol(200,650,2,2);
 boll2 = new lol(200,650,2,2);
 boll3 = new lol(200,650,2,2);
 paper1 = new paper(300,650,50,50);
 metal1 = new metal(600,650,50,50);
 ball = new rubbers(200,650,50,50);





 grou = new plane(600,690,1200,20);
  


	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammar.display();
  paper1.display();
  grou.display();
  ball.display();
 metal1.display();
 boll.display();
 boll2.display();
 boll3.display();
 
  
  drawSprites();
 
}

