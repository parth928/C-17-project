
var monkey , monkey_running;

var ground, groundImage;

var invisibleGround;

var banana ,bananaImage;

var obstacle, obstacleImage;

var bananaGroup, obstacleGroup;

var survivalTime=0;

var score;

function preload()
{
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
} 

function setup() 
{
  createCanvas(400,400);
  
   //creating monkey and ground
  monkey=createSprite(80,220,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,270,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  bananaGroup=new Group();
  obstaclesGroup = new Group();
  
  score=0;
}

function draw() 
{
  background("white");
  
  if(ground.x<0)
  {
     ground.x=ground.width/2
  }
  
  //making the monkey jump when space is pressed
    if(keyDown("space")) 
    {
        monkey.velocityY = -12;
    }
  
 monkey.velocityY = monkey.velocityY + 0.8
  
  //invisibleGround
  invisibleGround = createSprite(200,270,400,10);
  invisibleGround.visible = false;
  
  monkey.collide(invisibleGround);
  
  spawnObstacles();
  
  spawnBananas();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:  "+score, 500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
}

function spawnObstacles()
{
 if (frameCount % 300 === 0)
 {
   var obstacle = createSprite(400,247,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.1; 
   obstacle.velocityX = -6;
   
   obstacle.lifeTime=150;
   obstaclesGroup.add(obstacle)
   //generating the stones
   var rand = Math.round(random(1,6));
 }
}

function spawnBananas()
{
  if(frameCount % 80 === 0)
  {
    var banana=createSprite(400,180,10,10);
    banana.addImage(bananaImage);
    banana.y=random(120,200);
    banana.scale=0.1
    banana.velocityX= -6
    banana.lifeTime=150;
    bananaGroup.add(banana);
    monkey.depth=banana.depth+1;
    
  }
}
