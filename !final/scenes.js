  let signX;
  const signTargetX = 0;
  const signSpeed = 10;

// scene1
function scene1() {

  this.enter = () => {
    currentScene = "scene1";
    signX = -width;
  };

  this.draw = () => {
    image(scene1Img, 0, 0, width, height);
    if (signX < signTargetX) {
      signX += signSpeed;
    }
    image(sign1Img, signX, 0, width, height);
    console.log("scene1");
  };
}

// scene2
function scene2() {
  this.enter = () => {
    currentScene = "scene2";
    signX = -width;
  };

  this.draw = () => {
    image(scene2Img, 0, 0, width, height);
    if (signX < signTargetX) {
      signX += signSpeed;
    }
    image(sign2Img, signX, 0, width, height);
    console.log("scene2");
  };
}

// scene3
function scene3() {
  this.enter = () => {
    currentScene = "scene3";
    signX = -width;
  };

  this.draw = () => {
    image(scene3Img, 0, 0, width, height);
    if (signX < signTargetX) {
      signX += signSpeed;
    }
    image(sign3Img, signX, 0, width, height);
    console.log("scene3");
  };
}

// scene4
function scene4() {
  this.enter = () => {
    currentScene = "scene4";
    signX = -width;
  };

  this.draw = () => {
    image(scene4Img, 0, 0, width, height);
    if (signX < signTargetX) {
      signX += signSpeed;
    }
    image(sign4Img, signX, 0, width, height);
    console.log("scene4");
  };
}
// =============================================================
