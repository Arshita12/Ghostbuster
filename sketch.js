var towerImage, tower;
var ghostImage, ghost;
var doorImage, door;
var climberImage,climber, invisibleGroup,invisisble;
var doorGroup, climberGroup;
var PLAY;
var END;
var gamestate="PLAY";

 
function preload(){
  towerImage= loadImage("tower.png");
  ghostImage= loadImage("ghost-standing.png");
  doorImage= loadImage("door.png");
  climberImage= loadImage("climber.png");
  
}

function setup(){
  createCanvas(600,600);
  tower= createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY=3;
  
  
  ghost=createSprite(300,300);
  ghost.addImage(ghostImage);
  ghost.scale=0.3;
  
  
  doorGroup= new Group();
  climberGroup= new Group();
  invisibleGroup= new Group();
  
  
}


function draw(){
  background("black")
  
  if(gamestate==="PLAY"){
    
  
  
  
  if(tower.y>600){
    tower.y=300;
  }
  
  spawndoor();
  
  
  if(keyDown("space")){
    ghost.velocityY=-8;
  }
  
  ghost.velocityY=ghost.velocityY+0.5;
  
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  
  }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  
  }
  if(climberGroup.isTouching(ghost)){
  ghost.velocityY=0;
  }

  if(invisibleGroup.isTouching(ghost)|| ghost.y>600){
    ghost.destroy();
    gamestate="END";
  }
  
  
  drawSprites();
  
  }
  
  if(gamestate==="END"){
    text("GAME OVER",300,300);
    
  }
}
 
function spawndoor(){
if(frameCount%150===0){
  door = createSprite(200,0);
  door.addImage(doorImage);
  door.velocityY=2;
  door.scale=0.7;
  door.x=Math.round(random(200,500));
  door.lifetime=300;
  doorGroup.add(door);
  door.depth=ghost.depth;
  door.depth=door.depth+1;
  
  climber=createSprite(200,50);
   climber.addImage(climberImage);
  climber.velocityY=2;
  climber.scale=0.7;
  door.x=climber.x;
  climber.lifetime=300;
  climberGroup.add(climber);
  
  
   invisible=createSprite(200,55);
  invisible.velocityY=2;
  invisible.x=door.x;
  invisible.lifetime=300;
  invisibleGroup.add(invisible);
  invisible.width=climber.width;
  invisible.height=5;
  invisible.visible=false;
}
  
  
}

