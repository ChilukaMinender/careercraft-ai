async function generateSummary() {

    const skills = document.getElementById("skills").value;
    const projects = document.getElementById("projects").value;

    const summaryBox = document.getElementById("summary");

    if (skills.trim() === "") {
        alert("Please enter skills first!");
        return;
    }

    summaryBox.value = "Generating AI summary...";

    try {

        const response = await fetch(
            "https://careercraft-ai-2.onrender.com/generate-summary",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    skills: skills,
                    projects: projects
                })
            }
        );

        // check if response is OK
        if (!response.ok) {
            throw new Error("Server responded with error: " + response.status);
        }

        const data = await response.json();

        if (data && data.summary) {
            summaryBox.value = data.summary;

            const preview = document.getElementById("preview-summary");
            if (preview) {
                preview.textContent = data.summary;
            }
        } else {
            summaryBox.value = "Failed to generate summary.";
        }

    } catch (error) {
        console.error("Error:", error);

        summaryBox.value =
            "Server error. Please check backend or try again later.";
    }
}