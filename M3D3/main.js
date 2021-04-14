const main = document.querySelector("main");
let arrURL = []

function loadImg() {

    fetch("http://www.splashbase.co/api/v1/images/search?query=black")
    .then((response) => response.json())
    .then((data) => {
        //Select
        let row = document.querySelector(".album div.row");
        let container = document.querySelector("div.album div.container");
        var body = document.querySelector(body);
        
        //Create
        let newRow = document.createElement("div");
      
        arrURL = data.images.map((urls) => urls.url);
        console.log(data);

        body.innerHTML= `Total: ${data.images.length}`;
        main.classList.add("d-block")
        row.remove();
        newRow.classList.add("row");
        container.appendChild(newRow);
        
        for (let i = 0; i < body.images.length; i++) {
            let card

            card = document.createElement("div");
            card.classList.add("col-md-4");
            card.classList.add("bg-dark");
            card.setAttribute("id", `img${i}`);
            card.innerHTML = `<div class="card mb-4 shadow-sm">
                <img src="${body.images[i].url}"/>
                <div class="card-body">
                <p class="card-text">
                    Some Text is here to fill gab
                </p>
                <div
                    class="d-flex justify-content-between align-items-center"
                >
                    <div class="btn-group">
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        data-toggle="modal" data-target="#exampleModal"
                    >
                        View
                    </button>
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onclick="hideImage(this)"
                    >
                        Hide
                    </button>
                    </div>
                    <small class="text-muted">${body.images[i].id}</small>
                </div>
                </div>
            </div>
            
       `;
        newRow.appendChild(card);
        }
    });
};

window.onload = ()=> loadImg();
