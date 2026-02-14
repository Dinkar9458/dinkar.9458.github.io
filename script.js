window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if(position < screenPosition){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Trigger animation on load for first section
window.addEventListener('load', function() {
    const firstSection = document.querySelector('.section');
    if(firstSection){
        firstSection.style.opacity = "1";
        firstSection.style.transform = "translateY(0)";
    }
});
