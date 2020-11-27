
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
	bin1=new Bin(750,370,100,10);
	bin2=new Bin(700,350,10,50);
	bin3=new Bin(800,350,10,50);
	paper=new Paper(50,360,20);
    var groundOpt={
		isStatic:true
	}
   	ground=Bodies.rectangle(400,380,800,10,groundOpt);
    World.add(world,ground);
	Engine.run(engine);
}
function draw() {
  background("black");
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  keyPressed();
  rectMode(CENTER);
  fill ("yellow");
  rect(ground.position.x,ground.position.y,800,10);
}
function keyPressed(){
   if (keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10});
   }
}