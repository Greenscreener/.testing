function Ball(x,y,r,red,green,blue) {
    if (r == undefined) {this.r = 50;} else {this.r = r;}
    this.pos = createVector(0,0);
    if (x == undefined) {this.pos.x = 100;} else {this.pos.x = x;}
    if (y == undefined) {this.pos.y = 100;} else {this.pos.y = y;}
    if (red == undefined) {this.red = 50;} else {this.red = red;}
    if (green == undefined) {this.green = 255;} else {this.green = green;}
    if (blue == undefined) {this.blue = 0;} else {this.blue = blue;}
    this.color = color(this.red,this.green,this.blue);
    this.vel = createVector(0,0);


    this.draw = function () {
        if (this.pos.x < -100 || this.pos.x > (windowWidth + 100) || this.pos.y < -100 || this.pos.y > (windowHeight + 100)) {

        } else {
            fill(this.color);
            ellipse(this.pos.x,this.pos.y,this.r/2,this.r/2);
        }
    }

    this.move = function () {
        if (this.pos.x < -100 || this.pos.x > (windowWidth + 100) || this.pos.y < -100 || this.pos.y > (windowHeight + 100)) {

        } else {
            this.vel.y++;
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;

            if (this.pos.y > windowHeight && this.vel.y > 0) {
                this.vel.y = (this.vel.y) * -1;
                this.vel.x += (this.vel.x * 1.5) + random(-2,2);
                //console.log("boink");
            }

            this.vel.y = this.vel.y * 0.99;
            this.vel.x = this.vel.x * 0.99;
        }
    }

    this.jamesmove = function () {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.vel.x = (this.pos.x - mouseX) / -7;
        this.vel.y = (this.pos.y - mouseY) / -7;
        line(this.pos.x,this.pos.y,mouseX,mouseY);
    }
}
