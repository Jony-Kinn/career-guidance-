// Search Function for Institutions or Courses
function searchFunction() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const institutionCards = document.querySelectorAll(".institution-card");

    // Loop through all institution cards
    institutionCards.forEach((card) => {
        const cardTitle = card.querySelector("h3").innerText.toLowerCase();
        const cardDescription = card.querySelector("h4").innerText.toLowerCase();

        // Check if the search term is present in the title or description
        if (cardTitle.includes(searchInput) || cardDescription.includes(searchInput)) {
            card.style.display = "block"; // Show the card
        } else {
            card.style.display = "none"; // Hide the card
        }
    });
}

// Optional: Add a simple event listener for the 'Enter' key to trigger the search when pressed
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        searchFunction();
    }
});
