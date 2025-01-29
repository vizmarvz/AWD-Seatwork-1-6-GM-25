function calculateGWA() {
    let name = document.getElementById("name").value;
    let grades = [
        parseFloat(document.getElementById("grade1").value),
        parseFloat(document.getElementById("grade2").value),
        parseFloat(document.getElementById("grade3").value),
        parseFloat(document.getElementById("grade4").value),
        parseFloat(document.getElementById("grade5").value)
    ];

    if (!name || grades.some(isNaN)) {
        alert("Please enter your name and all 5 grades.");
        return;
    }

    let gwa = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    gwa = gwa.toFixed(2); // Round to 2 decimal places

    let historyList = document.getElementById("history-list");

    let entry = document.createElement("div");
    entry.classList.add("history-item");
    entry.innerHTML = `<span><strong>${name}</strong> - Grades: ${grades.join(", ")} - <strong>GWA:</strong> ${gwa}</span> 
                       <button class="remove-btn" onclick="removeEntry(this)">Remove</button>`;

    historyList.appendChild(entry);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("grade1").value = "";
    document.getElementById("grade2").value = "";
    document.getElementById("grade3").value = "";
    document.getElementById("grade4").value = "";
    document.getElementById("grade5").value = "";
}

function removeEntry(button) {
    button.parentElement.remove();
}
