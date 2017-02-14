var cell;
var cellnum = 1;
function setup() {
    createCanvas(500,500);
    background(100);
    cell = new Cell();

}
function draw() {
    cell.foreach(function(element) {
        
    });
}
function mousePressed() {

    cell[cellnum] = new Cell();
    cell[cellnum].show();
    cellnum++;
}
function Cell() {
    this.pos = createVector(random(width), random(height));
    this.r = 50;
    this.c = color(random(100,255), random(200,255), 0, 200);
    this.move = function() {

    }
    this.show = function() {
        fill(this.c);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
}
