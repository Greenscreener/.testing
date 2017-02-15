
var james;
var fallingBalls = [];
var cursorEaten = true;
function setup() {
    createCanvas(windowWidth,windowHeight);
    james = new Ball();
}


function draw() {
    background(50);
    if (cursorEaten == true) {
        james.pos.x = mouseX;
        james.pos.y = mouseY;
        james.draw();
        for (var i = 0; i < fallingBalls.length; i++) {
            fallingBalls[i].draw();
            fallingBalls[i].move();
        }
    } else {
        james.jamesmove();
        james.draw();
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
    var fallingBall = new Ball(mouseX,mouseY,50,random(100,255),random(100,255),random(100,255));
    fallingBalls.push(fallingBall);
}
