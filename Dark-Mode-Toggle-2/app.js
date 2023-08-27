let box = document.querySelector(".box");

let body = document.body;
box.addEventListener('input',(e)=>{
  let isChecked = e.target.checked;
  if (isChecked) {
     body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});