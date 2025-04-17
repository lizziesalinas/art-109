let canvas;
let bugImg;

function preload() {
    bugImg = loadImage('images/bug.png'); // Store image in a variable
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    // Optionally: background(255); // Uncomment if you want a white canvas
}

function mouseMoved() {
    fill(255, 30, 100);
    noStroke(); // Optional, removes border around fill
    ellipse(mouseX, mouseY, 10, 10); // Show the fill color effect
    image(bugImg, mouseX, mouseY, 20, 20); // Use loaded image variable
}
