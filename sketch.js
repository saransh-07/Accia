var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bottom,right,left;
var bottoms,rights,lefts;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4 , isStatic:true});
	World.add(world, packageBody);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //Create the bottom  side
	var bottom_options = {
		isStatic:true,
		restitution:0.2

	} 
	bottom =Bodies.rectangle(300,650,200,20,bottom_options);
	bottom.shapeColor="red";
	World.add(world,bottom);
	
  
	var right_options={
		isStatic:true
	} 
	right = Bodies.rectangle(200,600,20,120,right_options);
	right.shapeColor="red";
	World.add(world,right);
 
	var left_options={
		isStatic:true
	} 
	left = Bodies.rectangle(400,600,20,120,left_options);
	left.shapeColor="red";
	World.add(world,left);
 
	bottoms = createSprite(bottom.position.x,bottom.position.y,200,20);
	rights=createSprite(right.position.x,right.position.y,20,120);
	lefts=createSprite(left.position.x,left.position.y,20,120);

	bottoms.shapeColor="red";
	rights.shapeColor="red";
	lefts.shapeColor="red";

}


function draw() {
 
Engine.update(engine);
background(0);
packageSprite.x= packageBody.position.x;
packageSprite.y= packageBody.position.y;
rectMode(CENTER);
 fill("red");
 rect(bottom.position.x,bottom.position.y,200,20);
 rectMode(CENTER);
 rect(right.position.x,right.position.y,20,120);
 rectMode(CENTER);
 rect(left.position.x,left.position.y,20,120);
 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



