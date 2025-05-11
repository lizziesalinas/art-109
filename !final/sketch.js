let helpBtn, spaceBtn, 
fact1Btn, fact2Btn, fact3Btn, fact4Btn, factFiveBtn, 
correctTrashBtn, wrongTrashBtn, correctRecBtn, wrongRecBtn, startBtn;
let mgr;
let currentScene = "";
//-----------
let song,beep,good,bad;
let introImg,helpImg,spaceImg,fact1Img,fact2Img,fact3Img,fact4Img,factFiveImg,correctImg,wrongImg, bossImg;

let trash1Img, trash2Img, trash3Img, trash4Img, trash5Img, emailImg;
let recycleImg, trashyImg, envelopeImg, helpsignImg, startImg, tospaceImg;

// =============================================================
function preload() {
    song = loadSound("assets/song.mp3", () => {
    console.log("Song is loaded!");});
    
    beep = loadSound("assets/beep.mp3", () => {
    console.log("Beep is loaded!");});

    good = loadSound("assets/good.mp3", () => {
    console.log("Good is loaded!");});

    bad = loadSound("assets/bad.mp3", () => {
    console.log("Bad is loaded!");});
//-----------
  introImg = loadImage("assets/intro.png");
  helpImg = loadImage("assets/help.png");
  spaceImg = loadImage("assets/space.png");
  bossImg = loadImage("assets/boss.png");
  emailImg = loadImage("assets/email.png");
  envelopeImg = loadImage("assets/envelope.png");
  helpsignImg = loadImage("assets/helpsign.png");
  tospaceImg = loadImage("assets/tospace.png");

  fact1Img = loadImage("assets/fact1.png");
  fact2Img = loadImage("assets/fact2.png");
  fact3Img = loadImage("assets/fact3.png");
  fact4Img = loadImage("assets/fact4.png");
  factFiveImg = loadImage("assets/factFive.png");
  startImg = loadImage("assets/start.png");

  correctImg = loadImage("assets/correct.png");
  wrongImg = loadImage("assets/wrong.png");
//-----------
  trash1Img = loadImage("assets/trash1.png");
  trash2Img = loadImage("assets/trash2.png");
  trash3Img = loadImage("assets/trash3.png");
  trash4Img = loadImage("assets/trash4.png");
  trash5Img = loadImage("assets/trash5.png");

  recycleImg = loadImage("assets/recycle.png");
  trashyImg = loadImage("assets/trashy.png");
}
// =============================================================
function esHelpBtn() {
    helpBtn = createButton("", 20, 20, 175, 75);
    helpBtn.draw = function() {
        image(helpsignImg, this.x, this.y, this.w, this.h);
    }                    
}

function esStartBtn() {
    startBtn = createButton("", 1610, 900, 200, 100);
    startBtn.draw = function() {
        image(startImg, this.x, this.y, this.w, this.h);
    }                    
}

function esSpaceBtn() {
    spaceBtn = createButton("", 20, 900, 230, 130);
    spaceBtn.draw = function() {
        image(tospaceImg, this.x, this.y, this.w, this.h);
    }                         
}
//-----------
function esFact1Btn() {
    fact1Btn = createButton("", 100, 620, 150, 50);
    fact1Btn.draw = function() {
        image(emailImg, this.x, this.y, this.w, this.h);
    }                            
}

function esFact2Btn() {
    fact2Btn = createButton("", 160, 200, 150, 50);
    fact2Btn.draw = function() {
        image(emailImg, this.x, this.y, this.w, this.h);
    }                              
}

function esFact3Btn() {
    fact3Btn = createButton("", 1130, 500, 150, 50);
    fact3Btn.draw = function() {
        image(emailImg, this.x, this.y, this.w, this.h);
    }                          
}

function esFact4Btn() {
    fact4Btn = createButton("", 640, 400, 150, 50);
    fact4Btn.draw = function() {
        image(emailImg, this.x, this.y, this.w, this.h);
    }        
}

function esFact5Btn() {
    factFiveBtn = createButton("", 770, 100, 150, 50);
    factFiveBtn.draw = function() {
        image(emailImg, this.x, this.y, this.w, this.h);
    }        
}
//-----------
function esCorrectTBtn() {
    correctTrashBtn = createButton("", 950, 880, 250, 150);
    correctTrashBtn.draw = function() {
        image(trashyImg, this.x, this.y, this.w, this.h);
    }  
}

function esWrongRBtn() {
    wrongRecBtn = createButton("", 550, 880, 250, 150);
    wrongRecBtn.draw = function() {
        image(recycleImg, this.x, this.y, this.w, this.h);
    }   
}
//-----------
function esCorrectRBtn() {
    correctRecBtn = createButton("", 400, 880, 250, 150);
    correctRecBtn.draw = function() {
        image(recycleImg, this.x, this.y, this.w, this.h);
    }  
}

function esWrongTBtn() {
    wrongTrashBtn = createButton("", 1100, 880, 250, 150);
    wrongTrashBtn.draw = function() {
        image(trashyImg, this.x, this.y, this.w, this.h);
    }  
}

// =============================================================
function setup() {
    createCanvas(1920, 1080);

    createGui();

    mgr = new SceneManager();

    mgr.addScene (intro);
    mgr.addScene (help);
    mgr.addScene (space);

    mgr.addScene (fact1);
    mgr.addScene (fact2);
    mgr.addScene (fact3);
    mgr.addScene (fact4);
    mgr.addScene (factFive);

    mgr.addScene (correct);
    mgr.addScene (wrong);

    mgr.showNextScene();
//-----------
    esHelpBtn(); 
    esSpaceBtn();
    esFact1Btn();
    esFact2Btn();
    esFact3Btn();
    esFact4Btn();
    esFact5Btn();
    esCorrectTBtn();
    esWrongTBtn();
    esCorrectRBtn();
    esWrongRBtn();
    esStartBtn();

    song.setVolume(0.15);
    beep.setVolume(0.15);
    good.setVolume(0.15);
    bad.setVolume(0.15);

    userStartAudio();
}

// =============================================================
function draw() {
    mgr.draw();
//-----------
const scenesWithMusic = ["intro", "help", "space", "fact1", "fact2", "fact3", "fact4", "factFive"];
if (scenesWithMusic.includes(currentScene)) {
  if (!song.isPlaying()) {
    song.play();
    console.log("Playing song");
  }
} else {
  song.pause();
}

if (currentScene === "correct") {
  if (!good.isPlaying()) {
    good.play();
    console.log("Playing good");
  }
} else {
  good.stop();
}

if (currentScene === "wrong") {
    if (!bad.isPlaying()) {
      bad.play();
      console.log("Playing bad");
    }
  } else {
    bad.stop();
  }
//-----------
    // help btn
    if (currentScene !== "help" && currentScene !== "intro") {
        drawGui();
        helpBtn.visible = true; // Ensure the button is visible in other scenes
        if (helpBtn.isPressed) {
            beep.play();
            console.log("Beep");            // Play the beep sound when the button is pressed
            mgr.showScene(help);
            currentScene = "help"; // Update the current scene
            helpBtn.visible = false; // Hide the button when switching to the help scene
            return;
        }
    } else {
        helpBtn.visible = false; // Hide the button in the help scene
    }

  // start btn
  if (currentScene === "intro") {
    drawGui();
    startBtn.visible = true;
    if (startBtn.isPressed) {
        beep.play(); 
        mgr.showScene(help);
        currentScene = "help"; 
        startBtn.visible = false;
        return;
    }
    } else {
    startBtn.visible = false; 
    }

     // space btn
    if (currentScene !== "intro" && currentScene !== "space" && currentScene !== "fact1" && currentScene !== "fact2" && currentScene !== "fact3" && currentScene !== "fact4" && currentScene !== "factFive") {
        drawGui();
        spaceBtn.visible = true; 
        if (spaceBtn.isPressed) {
            beep.play();
            mgr.showScene(space);
            currentScene = "space"; 
            spaceBtn.visible = false; 
            return;
        }
    } else {
        spaceBtn.visible = false;
    }
//-----------
    // fact1 btn
if (currentScene === "space") {
    drawGui();
    fact1Btn.visible = true;
    if (fact1Btn.isPressed) {
        beep.play();
        mgr.showScene(fact1);
        currentScene = "fact1";
        fact1Btn.visible = false;
        return;
    }
} else {
    fact1Btn.visible = false;
}

// fact2 btn
if (currentScene === "space") {
    drawGui();
    fact2Btn.visible = true;
    if (fact2Btn.isPressed) {
        beep.play();
        mgr.showScene(fact2);
        currentScene = "fact2";
        fact2Btn.visible = false;
        return;
    }
} else {
    fact2Btn.visible = false;
}

// fact3 btn
if (currentScene === "space") {
    drawGui();
    fact3Btn.visible = true;
    if (fact3Btn.isPressed) {
        beep.play();
        mgr.showScene(fact3);
        currentScene = "fact3";
        fact3Btn.visible = false;
        return;
    }
} else {
    fact3Btn.visible = false;
}

// fact4 btn
if (currentScene === "space") {
    drawGui();
    fact4Btn.visible = true;
    if (fact4Btn.isPressed) {
        beep.play();
        mgr.showScene(fact4);
        currentScene = "fact4";
        fact4Btn.visible = false;
        return;
    }
} else {
    fact4Btn.visible = false;
}

// factFive btn
if (currentScene === "space") {
    drawGui();
    factFiveBtn.visible = true;
    if (factFiveBtn.isPressed) {
        beep.play();
        mgr.showScene(factFive);
        currentScene = "factFive";
        factFiveBtn.visible = false;
        return;
    }
} else {
    factFiveBtn.visible = false;
}

// correct T btn
if (currentScene !== "intro" && currentScene !== "space" && currentScene != "help" && currentScene !== "fact1" && currentScene !== "fact2" && currentScene !== "factFive" && currentScene !== "wrong" && currentScene !== "correct") {
    drawGui();
    correctTrashBtn.visible = true;
    if (correctTrashBtn.isPressed) {
        beep.play();
        mgr.showScene(correct);
        currentScene = "correct";
        correctTrashBtn.visible = false;
        return;
    }
} else {
    correctTrashBtn.visible = false;
}

// wrong T btn
if (currentScene !== "intro" && currentScene !== "space" && currentScene != "help" && currentScene !== "fact3" && currentScene !== "fact4" && currentScene !== "wrong" && currentScene !== "correct") {
    drawGui();
    wrongTrashBtn.visible = true;
    if (wrongTrashBtn.isPressed) {
        beep.play();
        mgr.showScene(wrong);
        currentScene = "wrong";
        wrongTrashBtn.visible = false;
        return;
    }
} else {
    wrongTrashBtn.visible = false;
}

// correct R btn
if (currentScene === "fact1" || currentScene === "fact2" || currentScene === "factFive") {
    drawGui();
    correctRecBtn.visible = true;
    if (correctRecBtn.isPressed) {
        beep.play();
        mgr.showScene(correct);
        currentScene = "correct";
        correctRecBtn.visible = false;
        return;
    }
} else {
    correctRecBtn.visible = false;
}

// wrong R btn
if (currentScene === "fact3" || currentScene === "fact4") {
    drawGui();
    wrongRecBtn.visible = true;
    if (wrongRecBtn.isPressed) {
        beep.play();
        mgr.showScene(wrong);
        currentScene = "wrong";
        wrongRecBtn.visible = false;
        return;
    }
} else {
    wrongRecBtn.visible = false;
}

}

// =============================================================
// function mousePressed()
// {
//    // pass the mousePressed message into the SceneManager
//   mgr.mousePressed();
// }

//  function mouseMoved()
//  {
//    // pass the mouseMoved message into the SceneManager
//    mgr.handleEvent("mouseDragged");
// }

// function mouseDragged()
// {
//    // pass the mouseMoved message into the SceneManager
//     mgr.handleEvent("mouseDragged");
// }

// =============================================================
function keyPressed()
{
    // You can optionaly handle the key press at global level...
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
            break;
        case '4':
            mgr.showScene( fact4 );
            break;
        case '5':
            mgr.showScene( factFive );
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
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}

// =============================================================
