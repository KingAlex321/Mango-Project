
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy,stone;

function preload(){
	boy=loadImage("images/boy.png");
stone=loadImage("images/stone.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
mango2=new mango(1200,90,50);
mango3=new mango(1000,90,30);
mango4=new mango(1000,80,70);
mango5=new mango(900,170,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);


	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
image(stone,170,350,100,100);

  treeObj.display();
  mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();


  groundObject.display();
}
function detectCollision(lmango,lstone){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.y,mongoBodyPosition.x,mangoBodyposition.y)
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body,false);
}
}

function keypressed (){
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}
}