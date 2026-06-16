// DOM Elements
const header = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');

// Add subtle box-shadow to header on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Handle contact form submission placeholder
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    
    // Replace form with professional success message
    contactForm.innerHTML = `
      <div style="text-align: center; padding: 2rem 0;">
        <i class="fas fa-check-circle" style="font-size: 3rem; color: #10b981; margin-bottom: 1rem;"></i>
        <h3 style="margin-bottom: 0.5rem;">Message Sent</h3>
        <p style="color: var(--text-secondary);">Thank you, ${name}. I will review your message and reply to you shortly.</p>
      </div>
    `;
  });
}
