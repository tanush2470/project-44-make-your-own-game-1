var b1,b2;
var b3,b4,b5,b6;
function setup() {
  createCanvas(1200,600);

  b1 = createSprite(600,120,1000,5);
  b2 = createSprite(600,460,1000,5);

  b3 = createSprite(100,168,5,100);
  b4 = createSprite(100,410,5,100);
  b5 = createSprite(1100,168,5,100);
  b6 = createSprite(1100,410,5,100);
}
function draw() {
  background(0);
  
  drawSprites()

}