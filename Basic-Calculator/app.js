const buttonEl = document.querySelectorAll("button");
const inputEl = document.getElementById("inputId");

for (let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click",() =>{
        const buttonVal = buttonEl[i].textContent;

        if(buttonVal === "C"){
            clearRes();
        }else if(buttonVal === "="){
            calculateRes();
        }else{
            appendValue(buttonVal);
        }
    });

    
    
}

function clearRes(){
    inputEl.value = "";
}

function calculateRes(){
   inputEl.value = eval(inputEl.value);
}

function appendValue(buttonVal){
    inputEl.value += buttonVal;
}