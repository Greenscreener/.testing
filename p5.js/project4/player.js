function Player () {
    this.pos = createVector();
    this.vel = createVector();
    this.pos.x = 100;
    this.pos.y = 100;
    this.color =  color(150,255,0);
    this.move = function () {
        if (this.pos.x < -100 || this.pos.x > (windowWidth + 100) || this.pos.y < -100 || this.pos.y > (windowHeight + 100)) {

        } else {
            this.vel.y++;
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
            //this.vel.y = this.vel.y * 0.80;
            this.vel.x = this.vel.x * 0.80;

            if (keyIsDown(LEFT_ARROW)) {
                if (this.vel.x < 20) {this.vel.x--;}
            }
            if (keyIsDown(RIGHT_ARROW)) {
                if (this.vel.x > -20) {this.vel.x++;}
            }
            if (keyIsDown(UP_ARROW)) {
                if (this.pos.y >= (windowHeight - (theGround.height + 10))) {
                    this.vel.y = -20;
                }
            }
            if (this.pos.y >= (windowHeight - (theGround.height + 31))) {
                this.vel.y = -1;
            }
        }
    }

    this.draw = function () {
        if (this.pos.x < -100 || this.pos.x > (windowWidth + 100) || this.pos.y < -100 || this.pos.y > (windowHeight + 100)) {

        } else {
            fill(this.color);
            ellipse(this.pos.x,this.pos.y,30,30);
        }
    }
}
