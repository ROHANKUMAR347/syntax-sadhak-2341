let mainSection = document.getElementById("data-list-wrapper");
let pagination = document.getElementById("pagination-wrapper");
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

let countryURL = "http://localhost:8080/countryData";
async function fetchData(limit = 6, page = 1, querry = "") {
  try {
    let res = await fetch(
      `${countryURL}?_limit=${limit}&_page=${page}${querry}`
    );
    let data = await res.json();
    let totalBtn = res.headers.get("X-Total-Count");
    let numOfBtn = Math.ceil(totalBtn / 5);
    createPagButton(numOfBtn);
    // mainSection.innerHTML = "";
    renderCard(data);
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

function createCard(item) {
  const card = document.createElement("div");
  card.className = "r-card";

  const imgDiv = document.createElement("div");
  imgDiv.className = "card-img";
  //   console.log(imgDiv);

  const image = document.createElement("img");
  image.src = item.image_url;
  image.alt = `Flag of ${item.name}`; // Set meaningful alt text
  imgDiv.append(image);

  const cardbody = document.createElement("div");
  cardbody.className = "card-body";

  const title = document.createElement("h3");
  title.className = "r-title";
  title.textContent = `Country Name: ${item.name}`;
  cardbody.append(title);

  const countryCode = document.createElement("h6");
  countryCode.className = "r-countryCode";
  countryCode.textContent = `Country Code: ${item.code}`;
  cardbody.append(countryCode);

  const valueinr = document.createElement("p");
  valueinr.className = "r-value";
  valueinr.textContent = `Value in INR: ${item.value}`;
  cardbody.append(valueinr);

  card.append(imgDiv, cardbody);

  return card;
}

function renderCard(data) {
  const cardList = document.createElement("div");
  cardList.className = "r-cardlist";
  data.forEach((item) => {
    let card = createCard(item);
    cardList.append(card);
  });
  mainSection.innerHTML = "";
  mainSection.append(cardList);
}

function createBtn(index, querry) {
  let pBtn = document.createElement("button");
  pBtn.innerText = index;
  pBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fetchData(6, index, querry);
  });

  return pBtn;
}

// create buttons-for pagination

function createPagButton(btns, querry) {
  pagination.innerHTML = "";
  for (let i = 1; i <= btns; i++) {
    pagination.append(createBtn(i, querry));
  }
}

sortAtoZBtn.addEventListener("click", () => {
  fetchData(6, 1, `&_sort=value&_order=asc`);
});
sortZtoABtn.addEventListener("click", () => {
  fetchData(6, 1, `&_sort=value&_order=desc`);
});

searchByButton.addEventListener("click", () => {
  fetchData(6, 1, `&${searchBySelect.value}_like=${searchByInput.value}`);
});

// debouncing feature on search
let debounceTimeout;

searchByInput.addEventListener("input", function () {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(function () {
    const query = searchByInput.value;
    fetchData(6, 1, `&q=${query}`);
  }, 1000); // Adjust the debounce delay (in milliseconds) as needed
});
