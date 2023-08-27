let jokePlace = document.querySelector(".jokePlace");
let jokeBox = document.querySelector(".Jokes-Box");
let Butn = document.querySelector(".Butn");

Butn.addEventListener("click",function(){

    try{
        Butn.innerText = "Loading...";
        jokePlace.innerText = "Updatng";
        Butn.disabled = true;
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((res)=> res.json())
    .then((data) => {
        jokePlace.innerHTML = `${data.setup} <br> ${data.punchline}.`;
        Butn.disabled = false;
        Butn.innerText = "TELL ME A JOKE";
    })
  }
   catch(err){
    jokePlace.innerText="An error happened try again!";
   console.log(err);
   }
})