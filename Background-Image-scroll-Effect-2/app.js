const bgImageEl = document.querySelector(".one");
window.addEventListener("scroll", () =>  {
  updateImage();
});

function updateImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset /700;
    // bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}