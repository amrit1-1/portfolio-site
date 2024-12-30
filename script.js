// Add JavaScript code here

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const modeButton = document.querySelector('.night-mode-button');
const modeIcon = document.getElementById('mode-icon');

modeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    modeIcon.src = 'day-mode-icon.png';
  } else {
    modeIcon.src = 'night-mode-icon.png';
  }
});