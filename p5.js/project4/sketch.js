var thePlayer;
var theGround;

function setup() {
    createCanvas(windowWidth,windowHeight);
    thePlayer = new Player();
    theGround = new Ground(30);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background(255);
    thePlayer.draw();
    thePlayer.move();
    theGround.draw();
}
