


// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// Intro
function intro() {
  let mailSize = 240;
  let mailSizeChange = 1;

  this.enter = () => {
    currentScene = "intro";
  };

  this.draw = () => {
    image(introImg, 0, 0, width, height);
   console.log("Intro");

   mailSize += mailSizeChange;
    if (mailSize >= 265 || mailSize <= 215) {
      mailSizeChange *= -1;
    }
    image(envelopeImg, 1580, 780, mailSize, mailSize);
  };
}

// Help
function help() {
  let bossX;
  const bossTargetX = 0;
  const bossSpeed = 10;

  this.enter = () => {
    currentScene = "help";
    bossX = -width;
  };

  this.draw = () => {
    image(helpImg, 0, 0, width, height);
    if (bossX < bossTargetX) {
      bossX += bossSpeed;
    }
    image(bossImg, bossX, 0, width, height);
    console.log("Help");
  };
}

// Space
function space() {
  let trashSize = 225;
  let trashSizeChange = 1;

  this.enter = () => {
    currentScene = "space";
  };

  this.draw = () => {
    image(spaceImg, 0, 0, width, height);

    trashSize += trashSizeChange;
    if (trashSize >= 250 || trashSize <= 200) {
      trashSizeChange *= -1;
    }
    image(trash1Img, 100, 480, trashSize, trashSize);
    image(trash2Img, 180, 100, trashSize, trashSize);
    image(trash3Img, 1120, 400, trashSize, trashSize);
    image(trash4Img, 530, 300, trashSize, trashSize);
    image(trash5Img, 780, 90, trashSize, trashSize);
    console.log("Space");
  };
}

//-----------
// Fact 1
function fact1() {
  this.enter = () => {
    currentScene = "fact1";
  };

  this.draw = () => {
    image(fact1Img, 0, 0, width, height);
   console.log("Fact 1");
  };
}

// Fact 2
function fact2() {
  this.enter = () => {
    currentScene = "fact2";
  };

  this.draw = () => {
    image(fact2Img, 0, 0, width, height);
   console.log("Fact 2");
  };
}

// Fact 3 
function fact3() {
  this.enter = () => {
    currentScene = "fact3";
  };

  this.draw = () => {
    image(fact3Img, 0, 0, width, height);
   console.log("Fact 3");
  };
}

// Fact 4
function fact4() {
  this.enter = () => {
    currentScene = "fact4";
  };

  this.draw = () => {
    image(fact4Img, 0, 0, width, height);
   console.log("Fact 4");
  };
}

// Fact 5
function factFive() {
  this.enter = () => {
    currentScene = "factFive";
  };

  this.draw = () => {
    image(factFiveImg, 0, 0, width, height);
   console.log("Fact 5");
  };
}
//-----------
// Correct
function correct() {
  this.enter = () => {
    currentScene = "correct";
  };

  this.draw = () => {
    image(correctImg, 0, 0, width, height);
   console.log("Correct");
  };
}

// Wrong
function wrong() {
  this.enter = () => {
    currentScene = "wrong";
  };

  this.draw = () => {
    image(wrongImg, 0, 0, width, height);
   console.log("Wrong");
  };
}

// =============================================================


// =============================================================
    this.keyPressed = function()  {
    
          switch(key)
          {
              case '1':
                  mgr.showScene( fact1 );
              break;
              case '2':
                  mgr.showScene( fact2 );
              break;
              case '3':
                  mgr.showScene( fact3 );
              case '4':
                    mgr.showScene( fact4 );
              break;
              case '5':
                    mgr.showScene( fact4 );
              break;

              case 'i':
                    mgr.showScene( intro );
              break;
              case 'h':
                    mgr.showScene( help );
              break;
              case 's':
                    mgr.showScene( space );
              break;

              case 'c':
                    mgr.showScene( correct );
              break;
              case 'w':
                    mgr.showScene( wrong );
              break;

              default:
              mgr.showScene( intro );
          }
    
          // ... then dispatch via the SceneManager.
    
      }

// =============================================================