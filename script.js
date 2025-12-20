// DOM Elements
const header = document.querySelector('header');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const navLinksItems = document.querySelectorAll('.nav-links li');
const contactForm = document.getElementById('contact-form');

// Header scroll effect - glass background intensification
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
    header.style.boxShadow = 'none';
  }
});

// Mobile Navigation
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    
    // Hamburger animation
    hamburger.classList.toggle('active');
    
    if (hamburger.classList.contains('active')) {
        // Transform lines for X shape via CSS if needed, 
        // or just rely on the toggle logic
    }
  });

  // Close mobile menu when clicking on a link
  navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('active');
      }
    });
  });
}

// Load animations & observers (Scroll Fade-In)
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('section-animate');
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(section);
    });
  };
  animateElements();
});

// Handle contact form submission (Mockup)
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields');
      return;
    }

    const formData = { name, email, subject, message };
    console.log('Form submitted:', formData);

    // Create a cleaner success message
    const formContainer = contactForm.parentElement;
    formContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem; background: rgba(59, 130, 246, 0.1); border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.3);">
        <h3 style="color: #fff; margin-bottom: 1rem;">Message Sent</h3>
        <p style="color: #cbd5e1;">Thank you, ${name}. I will review your message and get back to you shortly.</p>
      </div>
    `;
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for fixed header
        behavior: 'smooth'
      });
    }
  });
});
