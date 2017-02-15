
var james;
var fallingBalls = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
    james = new Ball();
}


function draw() {
    background(255);
    james.pos.x = mouseX;
    james.pos.y = mouseY;
    james.draw();
    for (var i = 0; i < fallingBalls.length; i++) {
        fallingBalls[i].draw();
        fallingBalls[i].move();
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
    var fallingBall = new Ball(mouseX,mouseY,50,random(100,255),random(100,255),random(100,255));
    fallingBalls.push(fallingBall);
}
