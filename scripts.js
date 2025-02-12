const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

// Cards slider code
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const cardsContainer = document.querySelector('.cards-container');
let currentIndex = 0;

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}
  
// Function to move the cards
function moveCards() {
  const cards = document.querySelectorAll('.card');
  const visibleCardsCount = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 3;

  if (currentIndex + visibleCardsCount < cards.length) {
    currentIndex++;
    cardsContainer.style.transform = `translateX(-${currentIndex * (250 + 20)}px)`; // 250px is card width + 20px margin
  }
}

// Function to move the cards in reverse
function moveCardsBack() {
  if (currentIndex > 0) {
    currentIndex--;
    cardsContainer.style.transform = `translateX(-${currentIndex * (250 + 20)}px)`; // 250px is card width + 20px margin
  }
}

// Event listeners for the buttons
nextButton.addEventListener('click', moveCards);
prevButton.addEventListener('click', moveCardsBack);

  
  