console.log("AI Generated Content Checker loaded");

document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle active class on clicked item
            const isActive = item.classList.contains('active');
            
            // Close all items first
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // If it wasn't active, make it active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Scroll Fade-in Animation Logic
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Responsive Scaling Logic
    function scaleContent() {
        const appContainer = document.querySelector('.app-container');
        const mainContainer = document.querySelector('.main-container');
        
        if (!appContainer || !mainContainer) return;

        const windowWidth = window.innerWidth;
        const designWidth = 1920;
        const designHeight = 3785;

        // Calculate scale to fit width
        // We use Math.min(1, ...) if we don't want to scale up, 
        // but "any size" implies filling the screen.
        const scale = windowWidth / designWidth;
        
        appContainer.style.transform = `scale(${scale})`;
        
        // Adjust container height to match scaled content and hide the whitespace
        mainContainer.style.height = `${designHeight * scale}px`;
        mainContainer.style.overflow = 'hidden';
    }

    // Run on load and resize
    window.addEventListener('resize', scaleContent);
    scaleContent();
});