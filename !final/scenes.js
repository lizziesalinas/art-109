// scene1
function scene1() {

  let signY = -250;
  const targetY = 75;
  const signX = 1450;
  const signW = 400;
  const signH = 250;
  const dropSpeed = 10;

  this.enter = () => {
    currentScene = "scene1";
    signY = -250
  };

  this.draw = () => {
    image(scene1Img, 0, 0, width, height);

if (signY < targetY) {
      signY += dropSpeed;
      if (signY > targetY) signY = targetY;
    }
    image(sign1Img, signX, signY, signW, signH);
  };
}

// scene2
function scene2() {

  let signY = -250;
  const targetY = 725;
  const signX = 125;
  const signW = 400;
  const signH = 250;
  const dropSpeed = 10;

  this.enter = () => {
    currentScene = "scene2";
        signY = -250
  };

  this.draw = () => {
    image(scene2Img, 0, 0, width, height);
   
    if (signY < targetY) {
      signY += dropSpeed;
      if (signY > targetY) signY = targetY;
    }
    image(sign2Img, signX, signY, signW, signH);
  };
}

// scene3
function scene3() {

  let signY = -250;
  const targetY = 750;
  const signX = 1450;
  const signW = 400;
  const signH = 250;
  const dropSpeed = 10;

  this.enter = () => {
    currentScene = "scene3";
        signY = -250
  };

  this.draw = () => {
    image(scene3Img, 0, 0, width, height);
   if (signY < targetY) {
      signY += dropSpeed;
      if (signY > targetY) signY = targetY;
    }
    image(sign3Img, signX, signY, signW, signH);
  };
}

// scene4
function scene4() {

  let signY = -250;
  const targetY = 300;
  const signX = 550;
  const signW = 800;
  const signH = 500;
  const dropSpeed = 5;

  this.enter = () => {
    currentScene = "scene4";
        signY = -250
  };

  this.draw = () => {
    image(scene4Img, 0, 0, width, height);
   if (signY < targetY) {
      signY += dropSpeed;
      if (signY > targetY) signY = targetY;
    }
    image(sign4Img, signX, signY, signW, signH);
  };
}
// =============================================================
