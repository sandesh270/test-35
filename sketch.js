const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos = []
var particles = []
var divisions = []

var divisionHeight = 200;

function setup(){
   createCanvas(480,700)
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(240,height-10,480,20)
    ground1 = new EGround(0,350,20,700);
    ground2 = new EGround(480,350,20,700);
    ground3 = new EGround(240,height,480,20);
    ball = new Particle(220,-20,5)
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    //strokeWeight(4);
    //fill(255,255,255);
    
    for(var k = 0;k<=480;k=k+60){
        divisions.push(new Division(k,height-divisionHeight/2,5,divisionHeight))
    }
   
    for(var k = 0;k<divisions.length;k++){
        
        divisions[k].display();
        
    }
    for(var j = 40;j<=480;j+=50){
        plinkos.push(new Plinko(j,75))
    }
    for(var j = 0;j<plinkos.length;j++){
        
        plinkos[j].display();
        
    }
    for(var j = 15;j<=480-10;j+=50){
        plinkos.push(new Plinko(j,175))
    }
    for(var j = 0;j<plinkos.length;j++){
        
        plinkos[j].display();
        
    }
    for(var j = 40;j<=480;j+=50){
        plinkos.push(new Plinko(j,275))
    }
    for(var j = 0;j<plinkos.length;j++){
        
        plinkos[j].display();
        
    }
    for(var j = 15;j<=480-10;j+=50){
        plinkos.push(new Plinko(j,375))
    }
    for(var j = 0;j<plinkos.length;j++){
        
        plinkos[j].display();
        
    }
    if(frameCount%60===0){
        particles.push(new Particle(random(width-20),-10,5))
    }
    for(var j = 0;j<particles.length;j++){
        
        particles[j].display();
    }
    ground.display();
    ground1.display();
    ground2.display();
    ground3.display();
    ball.display();
    
}


// async function getBackgroundImg(){

//     var respond = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//     var respondJson = await respond.json();
//     // console.log(respondJson.datetime)
//     var datetime = respondJson.datetime;
//     var hour = datetime.slice(11,13)
//     // console.log(hour)
//     if(hour<=18&&hour>=6){
//         bg = "sprites/bg.png"
//     }else{
//         bg = "sprites/bg2.jpg"
//     }
//     backgroundImg = loadImage(bg);
// }
