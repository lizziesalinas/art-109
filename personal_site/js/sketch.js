let canvas;
let bugImg;

// function preload() {
//     bugImg = loadImage('images/bug.png');
// }

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");

    bugImg = loadImage('../images/bug.png');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    if (bugImg) {
        image(bugImg, mouseX, mouseY, 20, 20);
    }
}

// function mouseMoved() {
//     image(bugImg, mouseX, mouseY, 40, 40);
// }
