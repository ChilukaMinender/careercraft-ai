const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const collegeInput = document.getElementById("college");
const degreeInput = document.getElementById("degree");
const cgpaInput = document.getElementById("cgpa");
const skillsInput = document.getElementById("skills");
const projectsInput = document.getElementById("projects");
const summaryInput = document.getElementById("summary");

nameInput.addEventListener("input", () => {
    document.getElementById("preview-name").textContent =
        nameInput.value || "Your Name";
});

emailInput.addEventListener("input", () => {
    document.getElementById("preview-email").textContent =
        emailInput.value || "example@email.com";
});

phoneInput.addEventListener("input", () => {
    document.getElementById("preview-phone").textContent =
        phoneInput.value || "+91 9876543210";
});

collegeInput.addEventListener("input", () => {
    document.getElementById("preview-college").textContent =
        collegeInput.value || "College Name";
});

degreeInput.addEventListener("input", () => {
    document.getElementById("preview-degree").textContent =
        degreeInput.value || "Degree";
});

cgpaInput.addEventListener("input", () => {
    document.getElementById("preview-cgpa").textContent =
        cgpaInput.value || "CGPA";
});

skillsInput.addEventListener("input", () => {
    document.getElementById("preview-skills").textContent =
        skillsInput.value || "Skills appear here";
});

projectsInput.addEventListener("input", () => {
    document.getElementById("preview-projects").textContent =
        projectsInput.value || "Projects appear here";
});

summaryInput.addEventListener("input", () => {
    document.getElementById("preview-summary").textContent =
        summaryInput.value || "Your AI generated summary will appear here.";
});