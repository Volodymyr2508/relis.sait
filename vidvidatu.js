
const fonts = [
  "'Roboto', sans-serif",
  "'Lobster', cursive",
  "'Montserrat', sans-serif",
  "'Arial', sans-serif"
];

let currentFont = 0;
const fontBtn = document.getElementById('fontChangeBtn');

if (fontBtn) {
  fontBtn.addEventListener('click', () => {
    currentFont = (currentFont + 1) % fonts.length;
    document.body.style.fontFamily = fonts[currentFont];
  });
}

const cards = document.querySelectorAll('.animal-card');

function checkCards() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

