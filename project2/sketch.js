let wordInput;
let button;
let word='';
let f;
let counter;

function preload() {
  f = loadFont('assets/thin_font.ttf'); 
}

function setup() {
  createCanvas(1920, 1080);
  background(0);

  //input
  wordInput = createInput();
  wordInput.position(0,100);
  wordInput.size(120, 30);
  wordInput.style('background-color', '#909090');


  //button
  button = createButton('submit');
  button.position(130,100);
  button.size(55, 25);
  button.style('background-color', '#606060');
  button.mousePressed(reply);

  counter= height;
}

//draw text
function draw() {
  background(0)
  fill(255);

  textSize((counter)/5);
  textAlign(CENTER, CENTER);
  textFont(f);

  text(word, width/2, counter); 

  if (counter > 0) {
    counter -= 2;
  }
// else {
//   counter = height; //repeat
// }
}

//restart
function reply() {
  word = wordInput.value();
  counter = height;
  wordInput.value("");
}