document.addEventListener('DOMContentLoaded', function() {
    // Filter projects
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                // Show/hide projects based on filter
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Animate project cards when they come into view
    const animateProjectCards = () => {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardPosition < windowHeight - 100) {
                // Stagger the animation with a delay based on index
                card.style.animation = `slideUp 0.6s ease ${index * 0.1}s forwards`;
            }
        });
    };
    
    // Run once on page load
    animateProjectCards();
    
    // Run on scroll
    window.addEventListener('scroll', animateProjectCards);
});