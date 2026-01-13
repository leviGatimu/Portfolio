// 1. Typewriter Effect for Hero Section
const textElement = document.getElementById('typewriter');
const phrases = ["Full Stack Apps.", "Hardware Logic.", "Aviation Tech."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

document.addEventListener('DOMContentLoaded', type);

// 2. Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
const html = document.querySelector('html');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        html.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// 3. Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.section');
hiddenElements.forEach((el) => observer.observe(el));