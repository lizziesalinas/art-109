
let mgr;
let currentScene = "";
//-----------
let song1,song2,song3,song4;
let scene1Img,scene2Img,scene3Img, scene4Img;
let sign1Img,sign2Img,sign3Img,sign4Img;
//-----------
let scene1YesBtn, scene1NoBtn,
scene2RightBtn, scene2WrongBtn,
scene3YeaBtn, scene3NahBtn;

// =============================================================
function esScene1YesBtn() {
   scene1YesBtn = createButton("Of course", 1500, 250, 120, 40);                                 
}

function esScene1NoBtn() {
  scene1NoBtn = createButton("Not really", 1680, 250, 120, 40);
}

function esScene2RightBtn() {
   scene2RightBtn = createButton("You're right", 175, 880, 120, 40);                              
}

function esScene2WrongBtn() {
  scene2WrongBtn = createButton("I'm not", 345, 880, 120, 40);
}

function esScene3YeaBtn() {
   scene3YeaBtn = createButton("Yes", 1500, 900, 120, 40);
}

function esScene3NahBtn() {
  scene3NahBtn = createButton("No", 1680, 900, 120, 40);
}

// =============================================================
function preload() {
    song1 = loadSound("assets/song1.mp3", () => {
    console.log("song1 is loaded!");});
    
    song2 = loadSound("assets/song2.wav", () => {
    console.log("song2 is loaded!");});

    song3 = loadSound("assets/song3.wav", () => {
    console.log("song3 is loaded!");});

    song4 = loadSound("assets/song4.wav", () => {
    console.log("song4 is loaded!");});
//-----------
  scene1Img = loadImage("assets/scene1.png");
  scene2Img = loadImage("assets/scene2.png");
  scene3Img = loadImage("assets/scene3.png");
  scene4Img = loadImage("assets/scene4.png");

  sign1Img = loadImage("assets/sign1.png");
  sign2Img = loadImage("assets/sign2.png");
  sign3Img = loadImage("assets/sign3.png");
  sign4Img = loadImage("assets/sign4.png");
}

// =============================================================
function setup() {
    createCanvas(1920, 1080);

    createGui();

    mgr = new SceneManager();

    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);

    mgr.showNextScene();
//-----------
    song1.setVolume(0.15);
    song2.setVolume(0.15);
    song3.setVolume(0.15);
    song4.setVolume(0.15);

    userStartAudio();
//-----------
    esScene1YesBtn();
    esScene1NoBtn();
    esScene2RightBtn();
    esScene2WrongBtn();
    esScene3YeaBtn();
    esScene3NahBtn();
}

// =============================================================
function draw() {
    mgr.draw();
//-----------
if (currentScene === "scene1") {
  if (!song1.isPlaying()) {
    song1.play();
    console.log("Playing song1");
  }
} else {
  song1.stop();
}

if (currentScene === "scene2") {
  if (!song2.isPlaying()) {
    song2.play();
    console.log("Playing song2");
  }
} else {
  song2.stop();
}

if (currentScene === "scene3") { 
    if (!song3.isPlaying()) {
        song3.play();
        console.log("Playing song3");
    }
    } else {
        song3.stop();
    }

if (currentScene === "scene4") {
    if (!song4.isPlaying()) {
        song4.play();
        console.log("Playing song4");
    }
} else {
    song4.stop();
}

//-----------
 if (currentScene === "scene1") {
    drawGui();
    scene1YesBtn.visible = true;
    if (scene1YesBtn.isPressed) {
        console.log("Yes Btn pressed");
        mgr.showScene(scene2);
        currentScene = "scene2"; 
        scene1YesBtn.visible = false;
    }
    } else {
    scene1YesBtn.visible = false; 
    }

if (currentScene !== "scene2" && currentScene !== "scene3" && currentScene !== "scene4") {
    drawGui();
    scene1NoBtn.visible = true;
    if (scene1NoBtn.isPressed) {
        console.log("No Btn pressed");
        mgr.showScene(scene2);
        currentScene = "scene2"; 
        scene1NoBtn.visible = false;
    }
    } else {
    scene1NoBtn.visible = false; 
    }

if (currentScene === "scene2") {
    drawGui();
    scene2RightBtn.visible = true;
    if (scene2RightBtn.isPressed) {
        console.log("Right Btn pressed");
        mgr.showScene(scene3);
        currentScene = "scene3"; 
        scene2RightBtn.visible = false;
    }
    } else {
    scene2RightBtn.visible = false; 
    }

if (currentScene !== "scene1" && currentScene !== "scene3" && currentScene !== "scene4") {
    drawGui();
    scene2WrongBtn.visible = true;
    if (scene2WrongBtn.isPressed) {
        console.log("Wrong Btn pressed");
        mgr.showScene(scene3);
        currentScene = "scene3"; 
        scene2WrongBtn.visible = false;
    }
    } else {
    scene2WrongBtn.visible = false; 
    }

if (currentScene === "scene3") {
    drawGui();
    scene3YeaBtn.visible = true;
    if (scene3YeaBtn.isPressed) {
        console.log("Yea Btn pressed");
        mgr.showScene(scene4);
        currentScene = "scene4"; 
        scene3YeaBtn.visible = false;
    }
    } else {
    scene3YeaBtn.visible = false; 
    }

if (currentScene !== "scene1" && currentScene !== "scene2" && currentScene !== "scene4") {
    drawGui();
    scene3NahBtn.visible = true;
    if (scene3NahBtn.isPressed) {
        console.log("Nah Btn pressed");
        mgr.showScene(scene4);
        currentScene = "scene4"; 
        scene3NahBtn.visible = false;
    }
    } else {
    scene3NahBtn.visible = false; 
    }
}
// ============================================================