let amountElement = document.querySelector("js-amount");
let currencyElement = document.querySelector("js-currency");
let submitElement = document.querySelector("js-submit");
let resultElement = document.querySelector("js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let amount = amountElement.value;
    let currency = amountElement.value;

    let result = (amount / currency);
    resultElement.innerText = result;
});