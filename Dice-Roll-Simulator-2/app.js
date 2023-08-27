let rollEl = document.querySelector(".Dice-Roll");
let diceEl = document.querySelector(".dice");
let rollHisEl = document.querySelector(".diceHis");
let historyList = [];
rollEl.addEventListener("click",function(){
    // function AnimRollDice(){
        diceEl.classList.add("roll-Animation");
        setTimeout(()=>{
            diceEl.classList.remove("roll-Animation");
            diceRolled();
        },1000);
    
});



function diceRolled(){
  let resultroll = Math.floor(Math.random() * 6) + 1;

  let diceFace = getDiceFace(resultroll);
  diceEl.innerHTML = diceFace;
  historyList.push(resultroll);
  updateRollHist();
}
function updateRollHist(){
   rollHisEl.innerHTML = "";
   for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll-1${i + 1} <span class="face-Dice2">${getDiceFace(historyList[i])}</span>`;
    rollHisEl.appendChild(listItem);
    
   }
}

function getDiceFace(resultroll){
    switch (resultroll){
        case 1:
        return "&#9856;"
        break;

        case 2:
            return "&#9857;"
            break;

            case 3:
                return "&#9858;"
                break;

                case 4:
                    return "&#9859;"
                    break;

                    case 5:
                        return "&#9860;"
                        break;

                        case 6:
                            return "&#9861;"
                            break;

                            default:
                                return ""
                                break;
    }
}