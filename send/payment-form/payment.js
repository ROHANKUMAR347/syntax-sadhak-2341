// sameer
// form validation start
function validateDeliveryForm(event) {
    
    event.preventDefault();
    var NameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var cardNumber= document.getElementById("cardNumber").value;
    var cardValue = document.getElementById("cardex").value;
    var yearValue = document.getElementById("year").value;
    var cvcValue = document.getElementById("CVC").value;
    
    // Checking if any of the required fields are empty
    if (
      NameValue === "" ||
      emailValue === "" ||
      cardNumber === "" ||
      cardValue === "" ||
      yearValue === "" ||
      cvcValue === "" 
      
    ) {
      alert("Please fill in all required fields.");
    } else {
      openPopup();
    }
  }
//   form validation end

// redirecting to the first payment page from the close button
  var btn = document.querySelector(".btn-close");
  btn.addEventListener("click", ()=> {
        window.location.href = "/rohan/index.html";
});

// open popup
let popup=document.getElementById("popup")
function openPopup(){
    popup.classList.add("open-popup")
}

// function for reidrecting to the main page
function redirectToIndex() {

  window.location.href = "/rohan/index.html"; 
}

// close popup
function closePopup(){
  popup.classList.remove("open-popup")
    redirectToIndex()

}

