var ship, shipImg
var ship_floating
var seaImg;
var sea;
var i;
var invisibleGround

function preload(){
ship_floating = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImg = loadImage("sea.png");
}


function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage("sea",seaImg);
  sea.scale=0.3;
  sea.velocityX=-5;
  ship = createSprite(130,250,30,30);
  ship.addAnimation("floating",ship_floating);
  ship.scale=0.3;
}

function draw() {
  background("blue");
    sea.velocityX=-3;
   if (sea.x < 0){
      sea.x = sea.width/8;}
  
  
  
  drawSprites();

 
}
