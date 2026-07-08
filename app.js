// Navigation Scroll Handling
const header = document.getElementById('header');

document.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY;
	if (scrollPosition > 50) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

// Hamburger Mobile Navigation Menu Toggle
const hamburger = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu li a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

// Close mobile menu when nav link is clicked
navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	});
});

// Typing Animation Effect
const roleText = document.getElementById('role-text');
const roles = ["Software Engineer", "Android App Developer", "Web Developer", "IT Consultant"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
	if (!roleText) return;
	const currentRole = roles[roleIndex];
	
	if (isDeleting) {
		roleText.textContent = currentRole.substring(0, charIndex - 1);
		charIndex--;
		typingSpeed = 40; // Speed up deletion for better UX
	} else {
		roleText.textContent = currentRole.substring(0, charIndex + 1);
		charIndex++;
		typingSpeed = 80;
	}

	if (!isDeleting && charIndex === currentRole.length) {
		typingSpeed = 1800; // Pause at end of word
		isDeleting = true;
	} else if (isDeleting && charIndex === 0) {
		isDeleting = false;
		roleIndex = (roleIndex + 1) % roles.length;
		typingSpeed = 400; // Small delay before next word starts typing
	}

	setTimeout(typeEffect, typingSpeed);
}

// Start typing animation once DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
	typeEffect();
});

// About Section Tab Switch Handler
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		const targetTabId = e.target.getAttribute('aria-controls');
		
		// Remove active status from all tab selectors
		tabLinks.forEach((item) => {
			item.classList.remove('active-link');
			item.setAttribute('aria-selected', 'false');
		});
		
		// Hide all contents
		tabContents.forEach((content) => {
			content.classList.remove('active-tab');
		});
		
		// Set active styling to current selector and corresponding panel
		e.target.classList.add('active-link');
		e.target.setAttribute('aria-selected', 'true');
		
		const targetPanel = document.getElementById(targetTabId);
		if (targetPanel) {
			targetPanel.classList.add('active-tab');
		}
	});
});

// Scroll Reveal Effect (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			observer.unobserve(entry.target); // Trigger only once
		}
	});
}, {
	threshold: 0.1,
	rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach((el) => {
	revealObserver.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
	contactForm.addEventListener('submit', (e) => {
		e.preventDefault();
		
		const submitBtn = document.getElementById('form-submit-btn');
		const nameInput = document.getElementById('form-name');
		
		if (!nameInput) return;
		const nameVal = nameInput.value;
		
		// Visual feedback: Disable button and show sending state
		submitBtn.disabled = true;
		submitBtn.textContent = 'Sending Message...';
		
		setTimeout(() => {
			submitBtn.disabled = false;
			submitBtn.textContent = 'Send Message';
			
			// Show success confirmation
			if (formStatus) {
				formStatus.textContent = `Thank you, ${nameVal}! Your message has been sent successfully.`;
				formStatus.className = 'form-feedback success';
				formStatus.style.display = 'block';
			}
			
			// Reset inputs
			contactForm.reset();
			
			// Auto fade-out status message
			setTimeout(() => {
				if (formStatus) {
					formStatus.style.display = 'none';
				}
			}, 6000);
		}, 1200);
	});
}
