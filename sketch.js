var chiro,chiroImg ;
function preload(){
//variable name =loadAnimation("name of the image");
chiroImg=loadImage("chiro.png");
}



function setup() {
  createCanvas(1200,400);
//sprite=createSprite(x,y,w,h);
chiro =createSprite(20,300,50,50);
// sprite.addAnimation("lable",variable name);
chiro.addImage("chiro_walking",chiroImg);


}


function draw() {
  background(255,255,255);  
  drawSprites();
} 