document.addEventListener("DOMContentLoaded", function () {
    // IntersectionObserver options
    const options = {
        threshold: 0.6 // Trigger when 50% of the target is visible
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Handle left content animation (both home and services)
                const content = entry.target.querySelector('.home-section3-content, .services-content-left');
                
                if (content) {
                    content.classList.add('animated-right');
                } else {
                    console.warn('.home-section3-content or .services-content-left not found in', entry.target);
                }

                // Handle right image animation (both home and services)
                const img = entry.target.querySelector('.home-section3-img, .services-content-right');
                
                if (img) {
                    img.classList.add('animated-left');
                } else {
                    console.warn('.home-section3-img or .services-content-right not found in', entry.target);
                }

                // Stop observing this element after it has been animated
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Query for all the sections to be observed (.home-section3 and .services)
    const sections = document.querySelectorAll('.home-section3, .services');
    
    if (sections.length > 0) {
        sections.forEach(section => observer.observe(section)); // Observe each section
    } else {
        console.warn('.home-section3 or .services not found in the DOM');
    }
});
