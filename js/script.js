// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.documentElement.setAttribute(
        'data-theme',
        document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    );
});

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = '1';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);