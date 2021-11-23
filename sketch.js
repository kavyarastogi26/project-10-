var ship, ship_floating ;
var sea , sea_floating;

function preload(){
ship_floating = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_floating= loadImage("sea.png");

}

function setup(){
  createCanvas(600,200);

  //sea
 sea=createSprite(300,100,400,20);
 sea.addImage(sea_floating);
 
 sea.scale=0.5;
 
 
  //ship
  ship = createSprite(100,125,20,50);
  ship.addAnimation("floating",ship_floating);
  ship.scale = 0.2;

 console.log(sea.width);

  

}

function draw() {
  background("blue");
  sea.velocityX=-2;
  if(sea.x<0){
    sea.x=sea.width/8

  }
  console.log(ship.x)
 
  


 
 drawSprites();
} 