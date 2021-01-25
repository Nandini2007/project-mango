
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var chances = 0;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
	catapult=loadImage("catapult.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,150,30);
	mango3=new mango(1050,70,30);
	mango4=new mango(1220,220,30);
	mango5=new mango(1070,200,30);
	mango6=new mango(1000,150,30);
	mango7=new mango(900,220,30);
	mango8=new mango(1000,250,30);
	mango9=new mango(1120,230,30);
	mango10=new mango(980,100,30);
	mango11=new mango(930,250,30);
  	stone= new Stone(30);
	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);
	chain = new Chain(stone.body,{x:217 , y : 364 });
	Engine.run(engine);

}

function draw() {

  background(225);
  textSize(30);
  fill("purple") 
  text("turns = "+chances,50,100);
text("Press space to get another chance",50,50);

  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  image(catapult,210,380,55,60);
 
  treeObj.display();
  mango1.display();
 mango2.display();

  mango3.display();
   mango4.display();
 mango5.display();
 mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();
   mango11.display();
   stone.display();
   groundObject.display();
chain.display();

detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);
detectollision(stone,mango6);
detectollision(stone,mango7);
detectollision(stone,mango8);
detectollision(stone,mango9);
detectollision(stone,mango10);
detectollision(stone,mango11);




}

function mouseDragged(){
	stone.body.position.x = mouseX;
	stone.body.position.y = mouseY;	
}
function mouseReleased(){
	chain.fly();
	chances = chances +1;
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:217 , y : 364}) 
	  chain.attach(stone.body);
	 
	  }
	
  }

function detectollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;
var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance <= lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false)

}

}
/*if(stone.body.x-mango1.body.x < stone.body.width/2+mango.body.width/2){
	Matter.body.setStatic(mango1,false);
}*/
