function loadImg({ images }) {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.firstElementChild.remove();
    let img = document.createElement("img");
    img.style = "height: 225px";
    img.className = "card-img";
    img.src = images[i].url;
    card.innerHTML = img.outerHTML + " " + card.innerHTML;
  }
}

const loadImages = () => {
  fetch("http://www.splashbase.co/api/v1/images/search?query=black")
    .then((response) => response.json())
    .then(loadImg)
    .catch((error) => console.log(error));
};

// let input = document.querySelector(input.value)

function addS() {
  const hideBtn = document.querySelector(
    "body > main > div > div > div > div > div > div > div > div > button:nth-child(2)"
  );
  for (let i = 0; i < hideBtn.length; i++) {
    hideBtn[i].setAttribute("id", "myHideBtn");
  }
}

document.getElementById("myBtn").addEventListener("click", hideCard);

// function hideCard() {
//     let card = document.querySelector(".card")
//     for (let i = 0; i < card.length; i++) {
//       card.classList.add("visually-hidden")

// }

window.onload = () => addS();

let showAll = document.querySelector(".show-all");
showAll.addEventListener("click", () => {
  game.cardsArray.forEach((card) => card.classList.add("visible"));
});
