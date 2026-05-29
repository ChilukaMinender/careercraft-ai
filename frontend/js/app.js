const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';
    }
    else{
        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }

});