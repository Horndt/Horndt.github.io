const cardImages = [
  {
    name: 'bild1.jpg',
    title: 'Bild 1',
    description: 'Das ist das erste Bild',
  },
  {
    name: 'bild2.jpg',
    title: 'Bild 2',
    description: 'Das ist das zweite Bild',
  },
  {
    name: 'bild3.jpg',
    title: 'Bild 3',
    description: 'Das ist das zweite Bild',
  },
  {
    name: 'bild4.jpg',
    title: 'Bild 4',
    description: 'Das ist das zweite Bild',
  },
  {
    name: 'bild5.jpg',
    title: 'Bild 5',
    description: 'Das ist das zweite Bild',
  },
  {
    name: 'bild6.jpg',
    title: 'Bild 6',
    description: 'Das ist das zweite Bild',
  },
];
const gameboard = document.getElementById('gameboard');

for (const imageName of cardImages) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  img.src = imageName;
  card.appendChild(img);
  gameboard.appendChild(card);
}
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    const img = card.querySelector('img');
    img.style.display = 'block';
  });
});
let revealedCards = [];

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    const img = card.querySelector('img');
    img.style.display = 'block';

    revealedCards.push(card);

    if (revealedCards.length === 2) {
      const card1 = revealedCards[0];
      const card2 = revealedCards[1];

      const img1 = card1.querySelector('img');
      const img2 = card2.querySelector('img');

      if (img1.src === img2.src) {
        // Karten übereinstimmend, nichts tun
      } else {
        // Karten nicht übereinstimmend, wieder umdrehen
        setTimeout(() => {
          img1.style.display = 'none';
          img2.style.display = 'none';
        }, 1000);
      }

      revealedCards = [];
    }
  });
});
let revealedCardCount = 0;

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    // ...
    revealedCardCount++;

    if (revealedCardCount === cards.length) {
      alert('Du hast das Spiel gewonnen!');
    }
  });
});
