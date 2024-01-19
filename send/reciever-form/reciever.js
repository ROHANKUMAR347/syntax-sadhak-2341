
var btn = document.querySelector(".btn");

btn.addEventListener("click", (event)=> {

        event.preventDefault();
        if (validateDeliveryForm()) {
                window.location.href = "/send/payment-form/payment-form.html";
            }
});


function validateDeliveryForm() {
        // Get the values of the input fields
        var emailValue = document.getElementById("email").value;
        var NameValue =  document.getElementById("name").value;
        var swiftNumber= document.getElementById("number").value;
        var accountValue = document.getElementById("account").value;
        var countryValue = document.getElementById("country").value;
        var cityValue = document.getElementById("city").value;
        var addressValue = document.getElementById("address").value;
        var postcodeValue = document.getElementById("postcode").value;
        // Checking if any of the required fields are empty
        if (
          emailValue === "" ||
          NameValue === "" ||
          swiftNumber === "" ||
          accountValue === "" ||
          countryValue === "" ||
          cityValue === "" ||
          addressValue === "" ||
          postcodeValue === ""
        ) {
          alert("Please fill in all required fields.");
          return false;
        } else {
          return true;
        }
      }
