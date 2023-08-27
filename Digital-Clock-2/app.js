let hour = document.querySelector("#HourTim");
let minute = document.querySelector("#MinTim");
let second = document.querySelector("#SecTim");
let nameHour = document.querySelector(".nameHour");
let nameMin = document.querySelector(".nameMin");
let nameSec = document.querySelector(".nameSec");
let AmPm = document.querySelector(".Am");



const timeUpdate = ()=>{
    let time = new Date();
    let timeHr = time.getHours();
     hour.innerText = timeHr;
     let timeMin = time.getMinutes();
     minute.innerText = timeMin;
     let timeSec = time.getSeconds();
     second.innerText = timeSec;
 
     if (timeHr >= 12) {
         AmPm.innerText = "PM";
     } else {
         AmPm.innerText = "AM";
     }
}

setInterval(timeUpdate,1000);
// setInterval((timeUpdate()) => {
//     window.addEventListener("load",timeUpdate);
// }, 1000);
timeUpdate();