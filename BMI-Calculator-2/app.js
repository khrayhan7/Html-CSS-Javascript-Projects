const buttonEl = document.querySelector(".ButBmi");
const NumInput = document.getElementById("NumIn");
const NumInput2 = document.getElementById("NumIn2");
const weightCond = document.getElementById("WeightCon");
 const textInput = document.getElementById("textIn");

buttonEl.addEventListener("click",() => {
     let StrToNum = parseFloat(NumInput2.value);
     let StrToNum2 = parseFloat((Math.pow(NumInput.value,2)) / 10000);
  let result = (StrToNum / StrToNum2);
//   let StrToNum3 = parseFloat(textInput.value) ;
    textInput.value = result;

    if(textInput.value <= 18.4){
        weightCond.innerText = "Underweight";
    }else if(textInput.value > 18.4 && textInput.value <= 24.9){
        weightCond.innerText = "Normal";
    }
    else if(textInput.value > 24.9 && textInput.value <= 39.9){
        weightCond.innerText = "Overweight";
    }
    else {
        weightCond.innerText = "Obesity";
    }
})
