let canvas;
let bugImg;

function preload() {
  // Make sure this matches the path exactly
  bugImg = loadImage('images/bug.png');
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
  // Optional: leave blank to preserve drawn images
}

function mouseMoved() {
  image(bugImg, mouseX, mouseY, 20, 20);
}
