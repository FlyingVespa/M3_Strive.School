// CREATES PLAYABLE AUDIO
const rick = new Audio();
rick.src = "rick.mp3";

// FAVOURITE HEART ICON TOGGLE
const icon = document.getElementById("toggle");
icon.addEventListener("click", (event) => {
  icon.querySelector(":last-child").classList.toggle("fa-heart");
});

fetch("../Navbar/navbar.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("navbar").innerHTML = data;
  });
