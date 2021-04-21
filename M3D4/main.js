window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => res.json())
    .then((books) => {
      console.log(books);

      const row = document.createElement("div");
      row.classList.add("row");
      row.classList.add("no-gutter");

      books.forEach((book) => {
        let div = document.createElement("div");
        div.classList.add("col-md-4");
        div.innerHTML = `
          <div class="card" style="width: 18rem;">
          <img src="${book.img}" class="card-img-top" alt="...">
          <div class="card-body">
          214577 <h5 class="card-title">${book.title}</h5>
          <h5 class="card-title">${book.price}</h5>
          <h5 class="card-title">${book.catagory}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-success" id="cartBtn">ADD TO CART</a>
          <a href="#" class="btn btn-primary" id= "skipBtn">Skip</a>
          </div>
          </div>
         
          `;
        row.appendChild(div);
        // row.innerHTML = div.outerHTML + " " + div.innerHTML;
      });

      document.body.appendChild(row);
    });
};

// const searchBar = `
// <input class = "form-control type="text" width=400 required >
// <input type="button" value="Search">
// `;

// function skipItem() {
//   const skipBtn = document.querySelectorAll("#skipBtn");

//   for (let i = 0; i < skipBtn.length; i++) {
//     const element = array[i];
//     element.classList.toggle("hidden");
//   }
// }
// function changeStyle() {
//   const cartBtn = document.querySelectorAll("#cartBtn");

//   for (let i = 0; i < cartBtn.length; i++) {
//     const element = array[i];
//     element.classList.toggle("hidden");
//   }
// };

// let shoppingCartList = [];

// function emptyShoppingCart() {
//   shoppingCartList.innerHTML = "";
// }

// // SEARACH FUNCTION
// function searchBook(e) {
//   const text = e.target.value.toLowerCase();
//   const books = document.querySelectorAll(".book");
//   for (let book of books) {
//     const item = book.textContent;
//     if (item.toLowerCase().indexOf(text) != -1) {
//       task.style.display = "flex";
//     } else {
//       task.style.display = "none";
//     }
//   }
//
