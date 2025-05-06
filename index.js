const button = document.querySelector(".roll-button");
const cardContainer = document.querySelector(".card-container");
const rarity = document.querySelector(".card-container h2");
const probability = document.querySelector(".card-container h3");
const description = document.querySelector(".card-container p");

function resetStyles() {
  rarity.style.textShadow = "";
  probability.style.textShadow = "";
  probability.style.color = "#888";
  description.style.textShadow = "";
  description.style.color = "#000";
  cardContainer.style.background = "";
  cardContainer.style.backgroundSize = "";
  cardContainer.style.animation = "";
  cardContainer.style.borderColor = "#000";
  cardContainer.style.borderWidth = "5px";
}

button.addEventListener("click", roll);

function roll() {
  let randomNumber = Math.floor(Math.random() * 10000) + 1;

  resetStyles();

  if (randomNumber <= 5000) {
    rarity.textContent = "Common";
    rarity.style.color = "#000";
    probability.textContent = "1 in 2";
    description.textContent = '"Common, not this again."';
  }
  else if (randomNumber <= 7500) {
    rarity.textContent = "Uncommon";
    rarity.style.color = "#E8C999";
    probability.textContent = "1 in 4";
    description.textContent = "Slightly rarer, but you'll get tired of these too.";
  }
  else if (randomNumber <= 8750) {
    rarity.textContent = "Rare";
    rarity.style.color = "#A0C878";
    probability.textContent = "1 in 8";
    description.textContent = "A bit more special, but not what you're looking for.";
  }
  else if (randomNumber <= 9375) {
    rarity.textContent = "Epic";
    rarity.style.color = "#3D90D7";
    probability.textContent = "1 in 16";
    description.textContent = "Rare, but could be better.";
  }
  else if (randomNumber <= 9688) {
    rarity.textContent = "Legendary";
    rarity.style.color = "#FFD63A";
    probability.textContent = "1 in 32";
    description.textContent = "Nice.";
    description.style.color = "#FFD63A";
  }
  else if (randomNumber <= 9844) {
    rarity.textContent = "Mythic";
    rarity.style.color = "#FF0B55";
    probability.textContent = "1 in 64";
    description.textContent = "Finally, we're getting somewhere.";
    description.style.color = "#FF0B55";
  }
  else if (randomNumber <= 9922) {
    rarity.textContent = "Exotic";
    rarity.style.color = "#f0f";
    probability.textContent = "1 in 128";
    description.textContent = "Keep rolling. There's more.";
    description.style.color = "#f0f";
    cardContainer.style.borderColor = "#f0f";
  }
  else if (randomNumber <= 9961) {
    rarity.textContent = "Arcane";
    rarity.style.color = "darkblue";
    probability.textContent = "1 in 256";
    description.textContent = "Enigmatic and mysterious";
    description.style.color = "#3A59D1";
    cardContainer.style.borderColor = "#3A59D1";
  }
  else if (randomNumber <= 9981) {
    rarity.textContent = "Celestial";
    rarity.style.color = "#fff";
    probability.textContent = "1 in 500";
    probability.style.color = "#fff";
    description.textContent = "Blessed with otherworldly radiance";
    description.style.color = "#fff";
    cardContainer.style.background = "linear-gradient(45deg, cyan, blue)";
    cardContainer.style.borderColor = "#00f";
  }
  else if (randomNumber <= 9991) {
    rarity.textContent = "Godlike";
    rarity.style.color = "#fff";
    probability.textContent = "1 in 1000";
    probability.style.color = "#fff";
    description.textContent = "Holds the essence of divinity, a true marvel of creation";
    description.style.color = "#fff";
    cardContainer.style.background = "linear-gradient(45deg, #FFF8DC, #FFD700, #C084FC, #00FFFF, #FFFFFF)";
    cardContainer.style.borderColor = "#FFD700";
  }
  else {
    rarity.textContent = "Divine";
    rarity.style.color = "#FFFFFF";
    rarity.style.textShadow = "0 0 8px #FFE14C";
    probability.textContent = "1 in 1111";
    probability.style.color = "#FFFFFF";
    probability.style.textShadow = "0 0 6px #FFE14C";
    description.textContent = "The highest rarity, unmatched in perfection and glory";
    description.style.color = "#FFFFFF";
    description.style.textShadow = "0 0 5px #C6FEFF";
    cardContainer.style.background = "linear-gradient(45deg, #FFFFFF, #FFE14C, #C6FEFF, #E2C6FF, #F8F8FF)";
    cardContainer.style.backgroundSize = "400% 400%";
    cardContainer.style.animation = "divineGlow 8s ease infinite";
    cardContainer.style.borderColor = "#FFD700";
    cardContainer.style.borderWidth = "3px";
  }
}
