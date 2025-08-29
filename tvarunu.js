
const fonts = ["'Roboto', sans-serif","'Lobster', cursive","'Montserrat', sans-serif","'Arial', sans-serif"];
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
    if (cardTop < triggerBottom) card.classList.add('show');
  });
}
window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);

const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

const modal = document.getElementById("ticketModal");
const openBtn = document.querySelector("header .btn"); 
const closeBtn = document.getElementById("closeModal");

const ticketType = document.getElementById("ticketType");
const ticketQty = document.getElementById("ticketQty");
const totalPrice = document.getElementById("totalPrice");
const buyBtn = document.getElementById("buyTickets");

const confirmationMessage = document.getElementById("confirmationMessage");
const purchaseDetails = document.getElementById("purchaseDetails");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  updatePrice();
});

closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

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

  modal.style.display = "none";
  purchaseDetails.textContent = `Ви придбали ${qty} квиток(и) на суму $${sum}. Гарної подорожі у ZooPark!`;
  confirmationMessage.classList.remove("hidden");

  setTimeout(() => confirmationMessage.classList.add("hidden"), 10000);
});
