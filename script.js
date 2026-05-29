// Mobile Navigation Bar Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a navigation item link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Interactive Form Validation Feature
const volunteerForm = document.getElementById('volunteerForm');
const formFeedback = document.getElementById('formFeedback');

volunteerForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop standard page reload execution
    
    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    
    if(nameInput === "" || emailInput === "") {
        formFeedback.style.color = "#ff6b6b";
        formFeedback.textContent = "Please fill in all fields correctly.";
        return;
    }
    
    // Simulate successful form submission response
    formFeedback.style.color = "#2ecc71";
    formFeedback.textContent = `Thank you, ${nameInput}! Your application was submitted successfully.`;
    
    // Reset fields
    volunteerForm.reset();
});