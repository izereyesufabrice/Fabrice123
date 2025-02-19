document.addEventListener("DOMContentLoaded", () => {
    const filterSelect = document.getElementById("eventType");
    const eventCards = document.querySelectorAll(".event-card");

    filterSelect.addEventListener("change", () => {
        const selectedCategory = filterSelect.value;

        eventCards.forEach(card => {
            const category = card.getAttribute("data-category");

            if (selectedCategory === "all" || category === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});