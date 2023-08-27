let date = document.getElementById("birthday");
let Actage = document.querySelector(".calculator h3");
let butn = document.querySelector(".calcultor button");






function ageBirth(){
   let birthDate = date.value;
 if (date == "") {
    alert("Please fill the input");
 } else {
    const age = newAge(birthDate);
    Actage.innerText = `You are  ${age} ${age > 1 ? "years" : "year" } old `
 }

};

function newAge(birthDate){
   let today = new Date();
 let orgDate = new Date(birthDate);
   let age = today.getFullYear() - orgDate.getFullYear();
   let month = today.getMonth() - orgDate.getMonth();

   
   if(month < 0 ||
      month=== 0 && today.getDate() < orgDate.getDate()){
         age--;
      }
      return age;
};

