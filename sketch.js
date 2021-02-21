
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var score = 0;
var robot;
var alien1;
function preload() {
    backgroundImg = loadImage("images/b3.jpg");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    robot = new Robot(800,280,100);
 alien = new Aliens(200,280,120);
}

function draw(){
    background(backgroundImg);
     
    Engine.update(engine);
   
    ground.display();
   robot.display();
   alien.display();
}
/*
function mouseDragged(){
if(gameState==="onsling"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

}

function mouseReleased(){
chain1.fly();

gameState ="launched";
}

function keyPressed(){
if(keyCode===32){
    bird.path =[];
    Matter.Body.setPosition(bird.body,{x:180,y:100});
   chain1.attach(bird.body);
}
}
*/
