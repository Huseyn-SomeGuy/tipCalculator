let bill = document.getElementById("bill");
let peopleNum = document.getElementById("plpNum");
let customPercentage = document.getElementById("custom");
let billPercentages = document.getElementsByClassName("bill__percentages");
let tipAmount = document.querySelector(".tip--amount");
let totalAmount = document.querySelector(".total--amount");
let resetButton = document.querySelector(".reset");
let billError = document.querySelector(".bill-error");
let numError = document.querySelector(".num-error");

for (let i = 0; i < billPercentages.length; i++) {
   const percentage = billPercentages[i];
   customPercentage.addEventListener('input', () =>{
      percentage.classList.remove("active");
      errorMessageReset();
      let customPrice = (bill.value * customPercentage.value / 100) / peopleNum.value;
      tipAmount.innerHTML = `$${customPrice.toFixed(2)}`;
      totalAmount.innerHTML = `$${((bill.value / 5) + customPrice).toFixed(2)}`
   })
   resetButton.addEventListener("click", () => {
      percentage.classList.remove("active");
      errorMessageReset();
      bill.value = "";
      peopleNum.value = "";
      customPercentage.value = "";
      totalAmount.innerHTML = "$0.00";
      tipAmount.innerHTML = "$0.00";
   })
   percentage.addEventListener("click", () => {
      let currentActive = document.getElementsByClassName("active");
      if (currentActive.length > 0) {
         currentActive[0].classList.remove("active");
      };
      percentage.classList.add("active");
      if (bill.value === "") {
         errorMessage(bill, "Can't be zero", billError);
      }
      if (peopleNum.value === "") {
         errorMessage(peopleNum, "Can't be zero", numError);
      } else {
         errorMessageReset();
      }
      let percentageValue = parseInt(percentage.innerHTML);
      let price = (bill.value * percentageValue / 100) / peopleNum.value;
      tipAmount.innerHTML = `$${price.toFixed(2)}`;
      totalAmount.innerHTML = `$${((bill.value / 5) + price).toFixed(2)}`
   })

}


function errorMessage(input, message, error) {
   input.style.border = "2px solid red";
   error.innerHTML = message;
}

function errorMessageReset() {
   bill.style.border = "";
   billError.innerHTML = "";
   peopleNum.style.border = "";
   numError.innerHTML = "";
}





