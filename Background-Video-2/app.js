var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var play = document.querySelector(".fa-play");
var pause = document.querySelector(".fa-pause");
var preloader = document.querySelector(".preloader");

function myFunction() {
  if (video.paused) {
    video.play();
    pause.style.display = "block";
    play.style.display = "none";
    
  } else {
    video.pause();
    pause.style.display = "none";
    play.style.display = "block";
    
  }
}
window.addEventListener("load", () => {
  preloader.style.zIndex = "-999";
})