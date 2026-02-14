// Scroll animation
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

// Fade in hero name on load
window.addEventListener('load', function() {
    const hero = document.querySelector('.fade-in');
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
});

// Typing effect
const texts = [
    "Architecting Ideas in Strategy",
    "Consumer Behaviour Research",
    "Digital Management Thought Leadership"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
        }, 1500);
    }
    setTimeout(type, 80);
}

type();
