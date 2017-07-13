function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);

}

function draw() {
    //createCanvas(windowWidth, windowHeight);
    // background(255);
    window.lastHeight = windowHeight / 2;
    colorMode(HSB,255);
    var c = color(random(0,255), 255, 0, 50);
    stroke(c);
    for (var i = 0; i < windowWidth; i++) {
        var point1x = window.lastHeight;
        var point1y = i;
        window.lastHeight+=random(-10,10);
        var point2x = window.lastHeight;
        var point2y = i;
        line(point1y, point1x, point2y,point2x);
    }
}
