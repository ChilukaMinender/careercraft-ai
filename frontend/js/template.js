const templateSelect = document.getElementById("templateSelect");
const previewSection = document.getElementById("resume-preview");

templateSelect.addEventListener("change", () => {

    if(templateSelect.value === "minimal"){
        previewSection.classList.add("minimal");
    }
    else{
        previewSection.classList.remove("minimal");
    }

});