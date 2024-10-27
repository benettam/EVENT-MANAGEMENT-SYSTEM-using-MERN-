document.addEventListener("DOMContentLoaded", () => {
    const servicesToggle = document.getElementById("services-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Toggle dropdown visibility on click
    servicesToggle.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        dropdownMenu.classList.toggle("visible");
    });

    // Hide dropdown if clicked outside
    document.addEventListener("click", (event) => {
        if (!servicesToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("visible");
        }
    });
});
