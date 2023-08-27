const secondText = document.querySelector(".sec-text");
const textLoad = ()=>{
    setTimeout(() => {
        secondText.textContent ="A Web Developer";
    }, 0);

    setTimeout(() => {
        secondText.textContent ="A Freelancer";
    }, 4000);

    setTimeout(() => {
        secondText.textContent ="A Youtuber";
    }, 8000);

    setTimeout(() => {
        secondText.textContent ="An Instructor";
    }, 12000);
}
textLoad();
setInterval(textLoad,16000);