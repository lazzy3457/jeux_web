const cardsContainer = document.getElementById("cards");
const zonesContainer = document.getElementById("zones");
const timerDisplay = document.getElementById("timer");

let draggedCard = null;

/* ⏱️ CHRONOMÈTRE */
let startTime = null;
let timerInterval = null;
let timerStarted = false;

/* 🔀 Mélange aléatoire */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/* ⏱️ Démarrer le chrono */
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const seconds = (elapsed / 1000).toFixed(1);
    timerDisplay.textContent = `Temps : ${seconds} s`;
  }, 100);
}

/* ⏹️ Arrêter le chrono */
function stopTimer() {
  clearInterval(timerInterval);
}

/* 🧱 Création des zones */
categories.forEach(cat => {
  const zone = document.createElement("div");
  zone.className = "zone";
  zone.dataset.zone = cat.id;

  const title = document.createElement("h2");
  title.textContent = cat.label;

  zone.appendChild(title);

  zone.addEventListener("dragover", e => e.preventDefault());
  zone.addEventListener("drop", () => dropCard(zone));

  zonesContainer.appendChild(zone);
});

/* 🔀 Mélange et création des cartes */
shuffle(cardsData);

cardsData.forEach(cardData => {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = cardData.name;
  card.draggable = true;
  card.dataset.category = cardData.category;

  card.addEventListener("dragstart", () => {
    draggedCard = card;

    // ⏱️ Démarrage du chrono AU PREMIER DRAG
    if (!timerStarted) {
      timerStarted = true;
      startTimer();
    }
  });

  cardsContainer.appendChild(card);
});

/* 🎯 Dépôt d'une carte */
function dropCard(zone) {
  if (!draggedCard) return;

  const cardCategory = draggedCard.dataset.category;

  if (zone.dataset.zone === cardCategory) {
    zone.classList.add("correct");

    draggedCard.draggable = false;
    zone.appendChild(draggedCard);
  } else {
    zone.classList.add("wrong");
    setTimeout(() => zone.classList.remove("wrong"), 300);
  }

  draggedCard = null;
  checkEnd();
}

/* 🏁 Fin du jeu */
function checkEnd() {
  if (document.querySelectorAll(".cards .card").length === 0) {
    stopTimer();

    const finalTime = timerDisplay.textContent.replace("Temps : ", "");

    setTimeout(() => {
      alert(`🎉 Bravo ! Projet MMI terminé en ${finalTime}`);
    }, 300);
  }
}
