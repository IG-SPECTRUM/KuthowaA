/* Kuthowa Creatives Interaction Script */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Logic
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Animate hamburger to X
            const bars = menuToggle.querySelectorAll('.bar');
            if (menuToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close menu when clicking links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                const bars = menuToggle.querySelectorAll('.bar');
                bars.forEach(bar => bar.style.transform = 'none');
                bars[1].style.opacity = '1';
            });
        });
    }

    // 2. FAQ Accordion Logic
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqItem = trigger.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // 3. Scroll Reveal System (Intersection Observer)
    // Inject scroll reveal CSS dynamically to keep files clean and modular
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
        /* Delay utility classes for staggered grid animations */
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
    `;
    document.head.appendChild(style);

    // Select elements to reveal on scroll
    const elementsToReveal = [
        '.section-title',
        '.section-subtitle',
        '.gallery-item',
        '.product-card',
        '.serve-card',
        '.step-card',
        '.testimonial-card',
        '.about-story-container',
        '.founder-card-container',
        '.delivery-card',
        '.faq-item'
    ];

    // Query elements and attach reveal classes
    elementsToReveal.forEach(selector => {
        const items = document.querySelectorAll(selector);
        items.forEach((item, index) => {
            item.classList.add('reveal');
            
            // Add staggered delay for lists/grids
            const gridParent = item.parentElement;
            if (gridParent && (
                gridParent.classList.contains('products-grid') || 
                gridParent.classList.contains('gallery-grid') ||
                gridParent.classList.contains('serve-grid') ||
                gridParent.classList.contains('steps-container') ||
                gridParent.classList.contains('testimonials-grid')
            )) {
                const delayIndex = (index % 3) + 1; // 1, 2, or 3
                item.classList.add(`reveal-delay-${delayIndex}`);
            }
        });
    });

    // Intersection Observer Callback
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Reveal once
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null, // viewport
        threshold: 0.15, // 15% visibility
        rootMargin: '0px 0px -50px 0px' // trigger slightly before entering viewport
    });

    // Observe each reveal element
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Smooth header shrinkage on scroll
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 10px 30px rgba(24, 24, 27, 0.05)';
        } else {
            header.style.padding = '1.25rem 0';
            header.style.boxShadow = 'none';
        }
    });
});
