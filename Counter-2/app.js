const plus = document.querySelector(".Plus");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");
const count = document.querySelector(".Count");

plus.addEventListener("click", () => {
    
  let Increment = parseFloat(count.innerText);
  let Increment2 = Increment + 1;
  count.innerText = Increment2;
  count.style.color = "green";
})
minus.addEventListener("click",() =>{
    let decrement = parseFloat(count.innerText);
    let decrement2 = decrement - 1;
    count.innerText = decrement2;
    count.style.color = "red";
})
reset.addEventListener("click",() =>{
    count.innerText = "0";
    count.style.color = "black";
})

