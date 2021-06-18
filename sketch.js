const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var drops = [];
var maxDrops = 100;
var umbrella1;
var cover,person,personIMG,umbrellaIMG,umbrella3;
var thunder1,thunder2,thunder3,thunder4;

function preload(){
    personIMG=loadImage("person.png");
    thunder1 = loadImage("thunder/1.png");
    thunder2 = loadImage("thunder/2.png");
    thunder3 = loadImage("thunder/3.png");
    thunder4 = loadImage("thunder/4.png");
}

function setup(){
    engine = Engine.create();
	world = engine.world;
    createCanvas(500,700);
    background(0);

    cover = createSprite(250,540,200,140)
    cover.shapeColor = "black"

    person = createSprite(250,600);
    person.addImage(personIMG)

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,500),random(0,500)));
    }

    umbrella1 = new Umbrella(250,500)
    
}

function draw(){
    rectMode(CENTER);
    background(0);
    Engine.update(engine);
    
    num = Math.round(random(1,4));
    if(frameCount%80===0){
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        if(num === 1){
            thunder.addImage(thunder1);
        } else if(num === 2){
            thunder.addImage(thunder2);
        } else if(num === 3){ 
            thunder.addImage(thunder3);
        } else if(num === 4){  
            thunder.addImage(thunder4);
        }
        thunder.scale = random(0.3,0.6)
    }

    if(frameCount%140===0){
        thunder.destroy();
    }

    for(var i=0; i<maxDrops; i++){
        drops[i].display()
        drops[i].update()
    }

    umbrella1.display();

    drawSprites();
}

