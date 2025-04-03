let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    //background(255);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
}

function mouseMoved() {
    fill(255, 30, 100);
    ellipse(mouseX, mouseY, 20, 20);
}
