// Smooth Scrolling Navigation Function
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;

    // Highlight active nav button based on scroll position
    const sections = document.querySelectorAll('.page-section');
    const navButtons = document.querySelectorAll('.nav-tab');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('onclick')?.includes(current)) {
                btn.classList.add('active');
            }
        });
    });

    // Theme Switcher (Dark / Light Mode)
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            const icon = themeToggleBtn.querySelector('i');
            if (body.classList.contains('light-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }
});