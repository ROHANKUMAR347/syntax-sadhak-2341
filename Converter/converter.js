let rate1 = document.querySelector(".currency-rate1");
let rate2 = document.querySelector(".currency-rate2");
let resultButton = document.querySelector(".currency-result");

let selection = document.querySelectorAll(".currency-options select");
let selection1 = selection[0];
let selection2 = selection[1];

let inputs = document.querySelectorAll(".currency-input");
let inputs1 = inputs[0];
let inputs2 = inputs[0];

let rates = {};

let requestURL = "https://v6.exchangerate-api.com/v6/393a7fb62bc4812e942da5a9/latest/USD";

fetchRates();

async function fetchRates(){
    let res = await fetch(requestURL);
    res = await res.json();
    rates = res.rates;
    Options();
}

function Options(){
    let val = "";
    Object.keys(rates).forEach((element) => {
        let str = `<option value = "${element}">${element}</option>`;
        val += str;
    });
    selection.forEach((element) => {
        element.innerHTML = val;
    })
}

function convert(value, fromCurrency, toCurrency){
    let v = (value/rates[fromCurrency]) * rates[toCurrency];
    let v1 = v.toFixed(3);
    return v1 == 0.0 ? v.toFixed(5) : v1;
}

function display(){
    let value1 = selection1.value;
    let value2 = selection2.value;

    let val = convert(1, value1, value2);

    rate1.innerHTML = `1 ${value1} equals`;
    rate2.innerHTML = `${val} ${value2}`;
}

resultButton.addEventListener("click", ()=> {
    let fromCurr = selection1.value;
    let fromVal = parseFloat(inputs1.value);
    let toCurr = selection2.value;

    if(isNaN(fromVal)){
        alert("Enter a valid number");
    }else{
        let conVal = convert(fromVal, fromCurr, toCurr);
        inputs2.value = conVal;
    }
});

selection.forEach(a => a.addEventListener("change", display));

document.querySelector(".swap").addEventListener("click", () => {
    let inp1 = inputs1.value;
    let inp2 = inputs2.value;
    let opt1 = selection1.value;
    let opt2 = selection2.value;

    inputs2.value = inp1;
    inputs1.value = inp2;

    selection2.value = opt1;
    selection1.value = opt2;

    display();
})
