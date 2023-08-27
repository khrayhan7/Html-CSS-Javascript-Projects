const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");

//   if (localStorage.getItem("mode") === "Dark Mode") {
//     // add "dark" class to body and set modeSwitch text to "Light Mode"
//     body.classList.add("dark");
//     modeSwitch.textContent = "Light Mode";
//   }
//   // add a click event listener to modeSwitch
//   modeSwitch.addEventListener("click", () => {
//     // toggle the "dark" class on the body element
//     body.classList.toggle("dark");
//     // check if the "dark" class is currently present on the body element
//     const isDarkMode = body.classList.contains("dark");
//     // set modeSwitch text based on "dark" class presence
//     modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
//     // set localStorage "mode" item based on "dark" class presence
//     localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
//   });

  
  const updateTime = () =>{
  let date = new Date(),
  secToDeg = (date.getSeconds() / 60) * 360,
  minToDeg = (date.getMinutes() / 60) * 360,
  hrToDeg = (date.getHours() / 12) * 360;

  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
  }
 setInterval(updateTime,1000);
  updateTime();

  