

// Auto-incrementing counter from 1 to 72
function startCounter() {
    const counterElement = document.querySelector("#discount p strong");
    let counter = 1;

    setInterval(() => {
        counterElement.textContent = counter;
        counter = counter < 100 ? counter + 1 : 1; // Reset to 1 after 72
    }, 100); // Adjust speed (100ms for faster animation)
}

// Start the counter animation once the page loads
document.addEventListener("DOMContentLoaded", () => {
    startCounter();
});
