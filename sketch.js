var bow, arrow, background, redballoon, greenballoon, pinkballoon, blueballoon;

var bowimage, arrowimage, backgroundimage, redballoomimage, greenballoonimage, pinkballoonimage, blueballoonimage;

var score = 0;

var redballoongroup, greenballoongroup, pinkballoongroup, blueballoongroup, arrowgroup; 

function preload(){
  backgroundimage = loadImage("background0.png");
  bowimage = loadImage("bow0.png");
  arrowimage = loadImage("arrow0.png");
  redballoonimage = loadImage("red_balloon0.png");
  greenballoonimage = loadImage("green_balloon0.png");
  pinkballoonimage = loadImage("pink_balloon0.png");
  blueballoonimage = loadImage("blue_balloon0.png");
  
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  background = createSprite(0, 0, 600, 600);
  background.addImage(backgroundimage);
  background.scale = 3;
  
  bow = createSprite(480, height - 40, 20, 50);
  bow.addImage(bowimage);
  bow.scale = 1;

  redballoongroup = new Group();
  greenballoongroup = new Group();
  pinkballoongroup = new Group();
  blueballoongroup = new Group();
  arrowgroup = new Group();
  
}

function draw(){
  background.velocityX = -3;
  
  if(background.x < 0){
    background.x = background.width/2
    
  }
  
  bow.y = mouseY
  
  if(keyDown("space")){
    var temporaryarrow = createarrow();
    temporaryarrow.addImage(arrowimage);
    temporaryarrow.y = bow.y;

    
  }
  
  var selectballoons = Math.round(random(1, 4))
  
  if(frameCount % 80 === 0){
    switch(selectballoons){
      
      case 1 :createredballoon();
      break;
        
      case 2 : creategreenballoon();
      break;
        
      case 3 : createblueballoon();
      break;
        
      case 4 : createpinkballoon();
      break;
        
      default:break;
        
    }    
}
  
  if(arrowgroup.isTouching(redballoongroup)){
    redballoongroup.destroyEach();
    arrowgroup.destroyEach();
    
    score = score + 1;
    
  }
  
  if(arrowgroup.isTouching(greenballoongroup)){
    greenballoongroup.destroyEach();
    arrowgroup.destroyEach();
    
    score = score + 1;
    
  }
  
  if(arrowgroup.isTouching(pinkballoongroup)){
    pinkballoongroup.destroyEach();
    arrowgroup.destroyEach();
    
    score = score + 1;
    
  }
  
  if(arrowgroup.isTouching(blueballoongroup)){
    blueballoongroup.destroyEach();
    arrowgroup.destroyEach();
    
    score = score + 1;
    
  }
  
  drawSprites();
  
  textSize(17);
  text("Score:" + score, 500, 50);
  
}

function createarrow(){
  arrow = createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3
  arrowgroup.add(arrow);
  return arrow;
  
}

function createredballoon(){
  redballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  redballoon.addImage(redballoonimage);
  redballoon.velocityX = 3;
  redballoon.scale = 0.1;
  redballoon.lifetime = 150;
  redballoongroup.add(redballoon);
  
}

function creategreenballoon(){
  greenballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  greenballoon.addImage(greenballoonimage);
  greenballoon.velocityX = 3;
  greenballoon.scale = 0.1;
  greenballoon.lifetime = 150;
  greenballoongroup.add(greenballoon);
  
}

function createblueballoon(){
  blueballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blueballoon.addImage(blueballoonimage);
  blueballoon.velocityX = 3;
  blueballoon.scale = 0.1;
  blueballoon.lifetime = 150;
  blueballoongroup.add(blueballoon);
  
}

function createpinkballoon(){
  pinkballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pinkballoon.addImage(pinkballoonimage);
  pinkballoon.velocityX = 3;
  pinkballoon.scale = 1;
  pinkballoon.lifetime = 150;
  pinkballoongroup.add(pinkballoon);
  
}