let fromCurrency = document.getElementById("Currency-1");
let toCurrency = document.getElementById("Currency-2");
let inputEl = document.getElementById("number");
let resultText = document.querySelector(".textRes");
let convert = document.querySelector(".convert")
let convert2 = document.querySelector(".textRes");
let textToCurr = document.querySelector(".toCurr");
let textfromCurr = document.querySelector(".fromCurr");

var amount = 0;
convert.addEventListener("click",() =>{
   
dataget();
    
      
        //     const res = await fetch(API_Url)
        //     const data = await res.json();
            
        //    const 
            
           
        // } catch (err) {
        //     console.error(err);
        // }
        
        
       
    
   
})

function dataget(){
    // let fromCurrOpt = fromCurrency.value;
    // let toCurrOpt = toCurrency.value;
    // let inputVal = inputEl.value;
    // let result2 = textToCurr.innerText;
    // let result3 = textfromCurr.innerText;
    
    // try {
     
        fetch(`https:v6.exchangerate-api.com/v6/72a9c01f151123f10b394399/latest/${fromCurrency.value}`)
        .then((res) => res.json())
        .then((res) => {
            const rate = res.conversion_rates[toCurrency.value];
            result2 = `${rate}`
            amount = (inputEl.value * rate).toFixed(3);
            textfromCurr.innerText = `${inputEl.value} ${fromCurrency.value} = `;
            textToCurr.innerText = ` ${amount} ${toCurrency.value}`;
        })
      convert2.style.display = "block";
}
