const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

const Constraint = Matter.Constraint;
var engine,world;

var d1,d1img,d2,d2img,d3,d3img,d4,d4img;
var t,t1,t2,t3,t4,t5;
//wall in which ball is attached with constraint;
var holder,holder1,holder2,holder3,holder4,holder5;
var backimg;
var c1,c2,c3;
var test1,test2,test3,test4;
function preload(){
d1img=loadAnimation("word-image-305.png")
backimg=loadImage("cimg.jpg")
d2img=loadImage("e.png")
d3img=loadImage("ato.png");
d4img=loadImage("q.png")
}
function setup(){
    var canvas=createCanvas(1000,600);
engine=Engine.create();
world=engine.world;


d1=createSprite(800,150,100,20)
d1.addAnimation("d1img",d1img)
d1.scale=0.3;
d2=createSprite(120,550,100,20)
d2.addAnimation("d2img",d2img)
d2.scale=0.3;

d3=createSprite(820,300,100,20)
d3.addAnimation("d3img",d3img)
d3.scale=0.3;

d4=createSprite(820,500,100,20)
d4.addAnimation("d4img",d4img)
d4.scale=0.2;

var one={
    friction:0,
    restitution:2.4,
    density:0.003,
    inertia:Infinity,
    frictionAir:0.0 
}
var two={
    friction:0,
    restitution:0.1,
    density:0.005,
    inertia:Infinity,
    frictionAir:0.0 
}
var sdk={
    isStatic:true
}
var three={
    friction:0,
   // Mass:10,
    restitution:0.3,
    density:0.004
}
test1=Bodies.rectangle(300,500,1000,20,sdk)  
World.add(world,test1)

t1=Bodies.circle(100,100,50,two)
World.add(world,t1)
holder1=new sling(t1,{x:100,y:100})

t2=Bodies.circle(200,200,50,three)
World.add(world,t2)
holder2=new sling(t2,{x:200,y:100})

t3=Bodies.circle(300,200,50,three)
World.add(world,t3)
holder3=new sling(t3,{x:300,y:100})

t4=Bodies.circle(400,200,50,three)
World.add(world,t4)
holder4=new sling(t4,{x:400,y:100})

t5=Bodies.circle(500,200,50,one)
World.add(world,t5)
holder5=new sling(t5,{x:500,y:100})


}
function draw(){
    background(255)
    Engine.update(engine)
   
    drawSprites();

    rectMode(CENTER)
    rect(test1.position.x,test1.position.y,900,20)

   ellipseMode(RADIUS)
   ellipse(t1.position.x,t1.position.y,50,50)
   holder1.display();

   ellipseMode(RADIUS)
   ellipse(t2.position.x,t2.position.y,50,50)
   holder2.display();

   ellipseMode(RADIUS)
   ellipse(t3.position.x,t3.position.y,50,50)
   holder3.display();

   ellipseMode(RADIUS)
   ellipse(t4.position.x,t4.position.y,50,50)
   holder4.display();

   ellipseMode(RADIUS)
   ellipse(t5.position.x,t5.position.y,50,50)
   holder5.display();
   
    Key();

}
function Key(){
    if(keyWentDown("up")){
       Matter.Body.applyForce(t1,{x:t1.position.x,y:t1.position.y},{x:-1.9,y:2})
    }
}


