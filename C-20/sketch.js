var frect, mrect;

function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);
  mrect=createSprite(200,200,50,50);
}

function draw() {
  background("black");  
  mrect.x = mouseX
  mrect.y = mouseY

  frect.shapeColor = "blue"
  mrect.shapeColor = "red"
  console.log(mrect.x - frect.x)
  if(mrect.x - frect.x < mrect.width/2 + frect.width/2 && 
    frect.x - mrect.x < mrect.width/2 + frect.width/2 && 
    mrect.y - frect.y < mrect.height/2 + frect.height/2 &&
    frect.y - mrect.y < mrect.height/2 + frect.height/2 ){

    frect.shapeColor = "yellow"
    mrect.shapeColor = "teal"
  }
  else{
    frect.shapeColor = "blue"
    mrect.shapeColor = "red"
  }
  drawSprites();
}