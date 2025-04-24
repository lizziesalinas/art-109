let song = document.querySelector("#song");
let playBtn = document.querySelector("#play-button");
let pauseBtn = document.querySelector("#pause-button");

playBtn.addEventListener("click", function() {
    song.play();
    console.log("playing sound");
});


song.onloadeddata = function() {
    console.log("Song is loaded and ready to play!");
    song.volume = 0.5;
    playBtn.style.visibility = "visible"; // Corrected line
}

pauseBtn.addEventListener("click", function() {
    song.pause();
    console.log("paused sound");
});