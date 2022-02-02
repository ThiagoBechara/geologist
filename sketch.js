const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, rubber, pedra, ferro;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70);
    pedra = new Pedra(700,320);
    ferro = new Ferro(300,350);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    pedra.display();
    ferro.display();

    
 
}