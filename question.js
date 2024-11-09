document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("exampleInputEmail1");
    const questionInput = document.getElementById("exampleInputTextArea1");
    const checkbox = document.getElementById("exampleCheck1");
    const questionsToggle = document.getElementById("showing");
    const questionsList = document.querySelector(".list-of-questions");
    
    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        // Basic validation
        if (!emailInput.value || !questionInput.value || !checkbox.checked) {
            alert("Please fill out all fields and agree to the terms.");
            return;
        }

        // Success message
        alert("Your question has been submitted successfully!");
        form.reset(); // Clear the form
    });

    // Toggle the display of the most asked questions
    questionsToggle.addEventListener("change", () => {
        if (questionsToggle.checked) {
            questionsList.style.display = "block";
        } else {
            questionsList.style.display = "none";
        }
    });

    // Initialize the questions section to be hidden
    questionsList.style.display = "none";
});
