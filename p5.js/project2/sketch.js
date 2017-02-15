var buttScroll = 177;
function setup () {
    createCanvas(windowWidth,windowHeight);
}
function draw () {
    if (buttScroll > 100) {
        buttScroll = 100;
    }
    if (buttScroll < 0) {
        buttScroll = 0;
    }
    var d = int(dist(mouseX,mouseY,windowWidth/2,windowHeight/2));
    colorMode(HSB)
    fill(d,255,buttScroll);
    noStroke(0);
    ellipseMode(RADIUS);
    ellipse(windowWidth/2,windowHeight/2,d,d);

}
function mouseWheel (event) {
    print(buttScroll);
    buttScroll += (event.delta / 10);
    return false;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
