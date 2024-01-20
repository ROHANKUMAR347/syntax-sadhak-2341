function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// currency converter

let currency_one = document.getElementById("rcurrency-one");

let currency_two = document.getElementById("rcurrency-two");
console.log(currency_two.value);
let amount_one = document.getElementById("amount-one");
let amount_two = document.getElementById("amount-two");

let rateElm = document.getElementById("rate");
let convertBtn = document.getElementById("swap");
//fetch currency rate and update
async function calculateCurrency() {
  try {
    const selectOne = currency_one.value;
    const selectTwo = currency_two.value;
    const url = ` https://v6.exchangerate-api.com/v6/0f00b397741c3037799fa5a4/latest/${selectOne}`;
    const res = await fetch(url);
    const data = await res.json();
    const c_rate = data.conversion_rates[selectTwo];
    console.log(c_rate);
    rateElm.innerText = `1 ${selectOne}=${c_rate} ${selectTwo}`;

    amount_two.value = (amount_one.value * c_rate).toFixed(2);
  } catch (error) {
    console.log(error);
  }
}
calculateCurrency();

currency_one.addEventListener("change", calculateCurrency);
currency_two.addEventListener("change", calculateCurrency);
amount_one.addEventListener("input", calculateCurrency);
amount_two.addEventListener("input", calculateCurrency);

convertBtn.addEventListener("click", () => {
  const temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;
  calculateCurrency();
});

function openfolder() {
  window.location.href = "../sameer/payment-form.html";
}
