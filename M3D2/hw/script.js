let error = false;
const parent = document.querySelector("#parent");
const parents = document.querySelector("#parents");
const RowTitle = document.querySelector(".artist-title");
const inputSearch = document.querySelector("input").value;

window.onload = () => {
  console.log("page is fully loaded");
  //   getData("Pink Floyd");
  //   getData("Metallica");
  async function getData() {
    const endpoint = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
    try {
      const response = await fetch(endpoint + inputSearch, {
        headers: {
          "x-rapidapi-key":
            "f63820576cmshd99ae1c2eec0cfap1f5daajsne468be2e59ef",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      const jsonData = await response.json();

      console.log(jsonData);

      jsonData.map((data) => {
        parent.innerHTML += `
          <div class="col-3"><div class="card">
          <img class="img-card-top" src=${data.album.cover}></img>
          <div class = "card-body"><h4>${data.title}</h4></div>
          </div><
          /div>`;
      });
      console.log(newdata);
    } catch (err) {
      console.log("ERROR " + err);
    }
  }
  // getData();
};

function displayAlbums(event) {
  event.preventDefault();
  getData(inputSearch);
}
