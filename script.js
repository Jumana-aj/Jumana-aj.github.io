// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Smooth scroll to the targeted section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// // 2. AOS Initialization (Animate On Scroll)
// AOS.init({
//     duration: 1000, // Duration of animation
//     once: true, // Animation triggers only once
//     mirror: false // Don't animate on scroll back up
// });

// 3. Form Validation for Contact Form
document.querySelector("form").addEventListener("submit", function(e) {
    let name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    let message = document.querySelector("textarea[name='message']").value;

    // Validation check
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        e.preventDefault(); // Prevent form submission if validation fails
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault(); // Prevent form submission if email is invalid
    }
});

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}






