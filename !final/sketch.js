
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
   scene1YesBtn = createButton("Yes", 200, 20, 120, 40);
    scene1YesBtn.strokeWeight   = 4;                          
    scene1YesBtn.fillBg         = color(255, 204, 0);         
    scene1YesBtn.fillBgHover    = color(255, 229, 102);       
    scene1YesBtn.fillBgActive   = color(255, 170, 0);          
    scene1YesBtn.strokeBg       = color(200, 100, 0);         
    scene1YesBtn.fillLabel      = color(60, 30, 0);           
    scene1YesBtn.font           = "Comic Sans MS";             
    scene1YesBtn.textSize       = 24;                                     
}

function esScene1NoBtn() {
  scene1NoBtn = createButton("No", 400, 20, 120, 40);
    scene1NoBtn.rounding       = 12;                         
    scene1NoBtn.strokeWeight   = 4;                          
    scene1NoBtn.fillBg         = color(255, 204, 0);         
    scene1NoBtn.fillBgHover    = color(255, 229, 102);       
    scene1NoBtn.fillBgActive   = color(255, 170, 0);          
    scene1NoBtn.strokeBg       = color(200, 100, 0);         
    scene1NoBtn.fillLabel      = color(60, 30, 0);           
    scene1NoBtn.font           = "Comic Sans MS";             
    scene1NoBtn.textSize       = 24; 
}

function esScene2RightBtn() {
   scene2RightBtn = createButton("Right", 200, 120, 120, 40);
    scene2RightBtn.strokeWeight   = 4;                          
    scene2RightBtn.fillBg         = color(255, 204, 0);         
    scene2RightBtn.fillBgHover    = color(255, 229, 102);       
    scene2RightBtn.fillBgActive   = color(255, 170, 0);          
    scene2RightBtn.strokeBg       = color(200, 100, 0);         
    scene2RightBtn.fillLabel      = color(60, 30, 0);           
    scene2RightBtn.font           = "Comic Sans MS";             
    scene2RightBtn.textSize       = 24;                                   
}

function esScene2WrongBtn() {
  scene2WrongBtn = createButton("Wrong", 400, 120, 120, 40);
    scene2WrongBtn.rounding       = 12;                         
    scene2WrongBtn.strokeWeight   = 4;                          
    scene2WrongBtn.fillBg         = color(255, 204, 0);         
    scene2WrongBtn.fillBgHover    = color(255, 229, 102);       
    scene2WrongBtn.fillBgActive   = color(255, 170, 0);          
    scene2WrongBtn.strokeBg       = color(200, 100, 0);         
    scene2WrongBtn.fillLabel      = color(60, 30, 0);           
    scene2WrongBtn.font           = "Comic Sans MS";             
    scene2WrongBtn.textSize       = 24; 
}

function esScene3YeaBtn() {
   scene3YeaBtn = createButton("Yea", 200, 220, 120, 40);
    scene3YeaBtn.strokeWeight   = 4;
    scene3YeaBtn.fillBg         = color(255, 204, 0);
    scene3YeaBtn.fillBgHover    = color(255, 229, 102);
    scene3YeaBtn.fillBgActive   = color(255, 170, 0);
    scene3YeaBtn.strokeBg       = color(200, 100, 0);
    scene3YeaBtn.fillLabel      = color(60, 30, 0);
    scene3YeaBtn.font           = "Comic Sans MS";
    scene3YeaBtn.textSize       = 24;
}

function esScene3NahBtn() {
  scene3NahBtn = createButton("Nah", 400, 220, 120, 40);
    scene3NahBtn.rounding       = 12;
    scene3NahBtn.strokeWeight   = 4;
    scene3NahBtn.fillBg         = color(255, 204, 0);
    scene3NahBtn.fillBgHover    = color(255, 229, 102);
    scene3NahBtn.fillBgActive   = color(255, 170, 0);
    scene3NahBtn.strokeBg       = color(200, 100, 0);
    scene3NahBtn.fillLabel      = color(60, 30, 0);
    scene3NahBtn.font           = "Comic Sans MS";
    scene3NahBtn.textSize       = 24;
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