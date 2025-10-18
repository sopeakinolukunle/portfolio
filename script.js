// Simple scroll animation
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
// scripts.js — minor interactivity

document.addEventListener('DOMContentLoaded', function () {
    // animate skill bars based on data-level
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        if (level) {
            setTimeout(() => {
                bar.style.setProperty('--level', level + '%');
                bar.querySelector(':scope::after'); // noop to hint
                bar.style.position = 'relative';
                const fill = bar.querySelector('.fill');
                // set width via pseudo-element; we animate by adding style to ::after
                bar.style.setProperty('--fill-width', level + '%');
                // fallback: set inline background via a created inner div
                const inner = document.createElement('div');
                inner.style.height = '100%';
                inner.style.width = '0%';
                inner.style.background = 'linear-gradient(90deg,#0055aa,#0077ff)';
                inner.style.borderRadius = '8px';
                inner.style.transition = 'width 1.1s ease';
                inner.classList.add('skill-fill');
                bar.appendChild(inner);
                requestAnimationFrame(() => { inner.style.width = level + '%'; });
            }, 250);
        }
    });

    // small header scroll effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

});








document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show"); // slide menu in/out
    });
});


document.querySelectorAll('.bar').forEach(bar => {
    const level = bar.dataset.level;
    bar.style.width = level + '%';
});


