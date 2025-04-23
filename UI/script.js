// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }
}

// Fullscreen functionality for Gradio
function setupFullscreen() {
    document.getElementById('fullscreen-btn').addEventListener('click', function () {
        document.getElementById('gradio-fullscreen').style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('close-fullscreen').addEventListener('click', function () {
        document.getElementById('gradio-fullscreen').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Modal functionality
function setupModals() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const heroPredictBtn = document.getElementById('hero-predict-btn');
    const heroLearnBtn = document.getElementById('hero-learn-btn');
    const privacyLink = document.getElementById('privacy-link');
    const termsLink = document.getElementById('terms-link');
    const tipLink = document.getElementById('tip-link');
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');

    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const privacyModal = document.getElementById('privacy-modal');
    const termsModal = document.getElementById('terms-modal');
    const tipsModal = document.getElementById('tips-modal');

    const closeButtons = document.querySelectorAll('.close-modal');

    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    loginBtn.addEventListener('click', () => openModal(loginModal));
    registerBtn.addEventListener('click', () => openModal(registerModal));
    heroPredictBtn.addEventListener('click', () => {
        document.getElementById('predict').scrollIntoView({ behavior: 'smooth' });
    });
    heroLearnBtn.addEventListener('click', () => {
        document.getElementById('technology').scrollIntoView({ behavior: 'smooth' });
    });
    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(privacyModal);
    });
    termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(termsModal);
    });
    tipLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(tipsModal);
    });
    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(registerModal);
    });
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal);
        openModal(loginModal);
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality would be implemented in a production environment');
        closeModal(loginModal);
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Registration functionality would be implemented in a production environment');
        closeModal(registerModal);
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
    });

    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks for subscribing to our newsletter!');
        e.target.reset();
    });
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('id') === 'switch-to-register' ||
                this.getAttribute('id') === 'switch-to-login') {
                return;
            }
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        featureObserver.observe(card);
    });

    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.team-card').forEach(card => {
        teamObserver.observe(card);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    setupFullscreen();
    setupModals();
    setupSmoothScrolling();
    initScrollAnimations();
});
