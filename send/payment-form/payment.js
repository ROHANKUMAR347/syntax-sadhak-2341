function validateDeliveryForm() {
    // Get the values of the input fields
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
      alert("Payment  successful!");
    }
  }

  var btn = document.querySelector(".btn-close");

btn.addEventListener("click", ()=> {

        window.location.href = "/send/send-money/send-money.html";
});
var isWhiteBackground = false;
function toggleBackgroundColor() {
  // Toggle between white and the default background color
  var body = document.body;
  var form = document.getElementById("paymentForm");
  if (isWhiteBackground) {
      body.style.backgroundColor = ''; 
      form.style.backgroundColor = '';// Set to default background color
  } else {
      body.style.backgroundColor = 'white';
      form.style.backgroundColor = 'rgb(39,39,39)';
  }
  isWhiteBackground = !isWhiteBackground; // Toggle the state
}