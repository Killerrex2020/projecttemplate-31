const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var drops;
var boyObj;
var umbrella;
var thunderbolt1,thunderbolt2,thunderbolt3,thunderbolt4;

function preload(){
thunderbolt1 = loadImage("sprites/thunderbolt1.png");
thunderbolt2 = loadImage("sprites/thunderbolt2.png");
thunderbolt3 = loadImage("sprites/thunderbolt3.png");
thunderbolt4 = loadImage("sprites//thunderbolt4.png");

}

function setup(){
    createCanvas(1200, 800);
    
    engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 800, 1200, 20);
  drops = new Drops(120,600);
  boyObj = new Boy(120,600,20);
  umbrella = new Umbrella(600,800,1200,20);
}

function draw(){
   background(0);

   drawSprites();
   
   drops.display();
   ground.display();
   boyObj.display();
   umbrella.display();
}   

