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