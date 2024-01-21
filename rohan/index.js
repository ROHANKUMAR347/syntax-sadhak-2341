function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// currency converter

const dropList = document.querySelectorAll("form select"),
  fromCurrency = document.querySelector(".from select"),
  toCurrency = document.querySelector(".to select"),
  getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
  for (let currency_code in country_list) {
    let selected =
      i == 0
        ? currency_code == "INR"
          ? "selected"
          : ""
        : currency_code == "USD"
        ? "selected"
        : "";
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropList[i].addEventListener("change", (e) => {
    loadFlag(e.target);
  });
}

function loadFlag(element) {
  for (let code in country_list) {
    if (code == element.value) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${country_list[
        code
      ].toLowerCase()}.png`;
    }
  }
}

window.addEventListener("load", () => {
  getExchangeRate();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
  let tempCode = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempCode;
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
  getExchangeRate();
});

function getExchangeRate() {
  const amount = document.querySelector("form input");
  const exchangeRateTxt = document.querySelector("form .exchange-rate");
  let amountVal = amount.value;
  if (amountVal == "" || amountVal == "0") {
    amount.value = "1";
    amountVal = 1;
  }
  exchangeRateTxt.innerText = "Value After Conversion";
  let url = `https://v6.exchangerate-api.com/v6/393a7fb62bc4812e942da5a9/latest/${fromCurrency.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let exchangeRate = result.conversion_rates[toCurrency.value];
      let totalExRate = (amountVal * exchangeRate).toFixed(2);
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    })
    .catch(() => {
      exchangeRateTxt.innerText = "Enter a valid number";
    });
}

// code for creating country cards

// footerStart

function toggleLanguageDropdown() {
  var languageDropdown = document.getElementById("languageDropdown");
  languageDropdown.classList.toggle("show");
}


window.onclick = function (event) {
  var languageDropdown = document.getElementById("languageDropdown");
  if (event.target !== languageDropdown && !event.target.closest(".language-section")) {
      languageDropdown.classList.remove("show");
  }
};

function selectLanguage(language) {
  
  alert("Selected language: " + language);

  document.getElementById("selectedLanguage").innerText = language;
}

// footerEnd