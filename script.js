// DOM Elements
const header = document.querySelector('header');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const navLinksItems = document.querySelectorAll('.nav-links li');
const contactForm = document.getElementById('contact-form');

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
});

// Mobile Navigation
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  });
}

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('nav-active')) {
      navLinks.classList.remove('nav-active');
      hamburger.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
});

// Load animations & observers when DOM is ready
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

// Handle contact form submission
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields');
      return;
    }

    // Here you would normally send the form data to a server
    const formData = { name, email, subject, message };
    console.log('Form submitted:', formData);

    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
      <p>Thank you for your message, ${name}! I'll get back to you soon.</p>
    `;

    // Replace form with success message
    contactForm.innerHTML = '';
    contactForm.appendChild(successMessage);
  });
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return; // Skip if href is just "#"
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});

// Add typing effect to the binary in hero section
const binaryElement = document.querySelector('.binary');
if (binaryElement) {
  const originalText = binaryElement.innerText;
  binaryElement.innerText = '';
  let i = 0;
  const typeWriter = () => {
    if (i < originalText.length) {
      binaryElement.innerText += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };
  // Start typing effect when page loads
  setTimeout(typeWriter, 1000);
}
