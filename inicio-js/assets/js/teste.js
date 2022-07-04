let currentNumber = document.getElementById("currentNumber");

function increment() {
    currentNumber.innerHTML = parseInt(currentNumber.innerText) + 1;
   
}

function decrement() {
    currentNumber.innerHTML = parseInt(currentNumber.innerText) - 1;
    
}

function zerar() {
    currentNumber.innerHTML = "0";
}

