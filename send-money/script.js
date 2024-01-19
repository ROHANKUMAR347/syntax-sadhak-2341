var btns = document.querySelectorAll(".btn");
var inputs = document.querySelectorAll(".input-text1");

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
