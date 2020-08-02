var thickness, wall;

var bullet, speed,weight;

var deformation;

function setup() {
  createCanvas(1600,400);
  speed = random(221,353);
  weight = random(30,52);

  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = 80,80,80;
  bullet = createSprite(50,200,10,10);
  bullet.velocityX = speed;
  
}

function draw() {
  background(255,255,255); 
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
    deformation =(0.5*weight*speed*speed) /thickness*thickness*thickness;
    bullet.velocityX = 0;
    bullet.depth = wall.depth+2;
    if(deformation>10){
      wall.shapeColor = "red";

    }
    else if(deformation<10){
      wall.shapeColor = "green";
    }
   
  }


  drawSprites();
}