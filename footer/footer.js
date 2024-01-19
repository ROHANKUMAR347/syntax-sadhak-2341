
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



