const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var box1, box2, box3;

function preload()
{
	helicopterIMG = loadImage("helicopter1.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(1500, 700);
	
    engine = Engine.create();
	world = engine.world;  

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.25

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
    //Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	box1 = new RedBox(750, 650, 295, 20);
	box2 = new RedBox(600, 605, 20, 100, PI/2);
	box3 = new RedBox(900, 605, 20, 100, PI/2);
	
    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(94, 170, 255);
  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}

function keyPressed() {
 if (keyCode === 40) {
    Matter.Body.setStatic(packageBody, false);
  }
}



