function Ground (height) {
    this.height = height;

    this.draw = function () {
        fill(70,40,0);
        rect(0, windowHeight - this.height, windowWidth, this.height);
    }
}
