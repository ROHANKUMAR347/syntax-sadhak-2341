var btns = document.querySelectorAll(".btn");
var inputs = document.querySelectorAll(".input-text1");

var btn = document.querySelector(".continue");

btn.addEventListener("click", ()=> {
    
        window.location.href = "/send/reciever-form/reciever.html";
    
});

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        inputs.forEach(input => {
            input.value += btn.innerText;
        });
    });
});

var backspaceBtn = document.querySelector(".material-symbols-outlined");
backspaceBtn.addEventListener("click", () => {
    inputs.forEach(input => {
        input.value = input.value.slice(0, -1); 
    });
});
