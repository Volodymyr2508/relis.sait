
const fonts = [
  "'Roboto', sans-serif",
  "'Lobster', cursive",
  "'Montserrat', sans-serif",
  "'Arial', sans-serif"
];

let currentFont = 0;

document.getElementById('fontChangeBtn').addEventListener('click', () => {
  currentFont = (currentFont + 1) % fonts.length;
  document.body.style.fontFamily = fonts[currentFont];
});

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

const modal = document.getElementById("ticketModal");
const openBtn = document.getElementById("openTickets"); 
const closeBtn = document.getElementById("closeModal");

const ticketType = document.getElementById("ticketType");
const ticketQty = document.getElementById("ticketQty");
const totalPrice = document.getElementById("totalPrice");
const buyBtn = document.getElementById("buyTickets");
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  updatePrice();
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

function updatePrice() {
  const price = parseInt(ticketType.value);
  const qty = parseInt(ticketQty.value);
  totalPrice.textContent = `$${price * qty}`;
}

ticketType.addEventListener("change", updatePrice);
ticketQty.addEventListener("input", updatePrice);

buyBtn.addEventListener("click", () => {
  const price = parseInt(ticketType.value);
  const qty = parseInt(ticketQty.value);
  const sum = price * qty;
  alert(`Ви купили ${qty} квиток(и) на суму $${sum}`);
  modal.style.display = "none";
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

