var bullet;
var thickness;
var speed;
var weight;
var wall;
var damage;


function setup() {
  createCanvas(800,400);
  bullet=createSprite(0, 200, 40, 10);
   wall=createSprite(700,300,20,8000);
  wall.thickness=random(22,85)
  bullet.velocityX=random(30.56)
  bullet.weight=random(22,90)
}

function draw() {
   background(255,255,255);
   background("black") 

   bullet.shapeColor="white"
   
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
     damage=0.5*bullet.weight*bullet.velocityX*bullet.velocityX/(wall.thickness*wall.thicknes*wall.thickness);

    if(damage<20){
      wall.shapeColor="green"
    }
    else{
      wall.shapeColor="red"
    }
  }
  drawSprites();
}