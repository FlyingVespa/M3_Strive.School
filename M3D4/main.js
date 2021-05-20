// Add border?
// Append Row to container
// Not removing
// Page keeps scrolling top
// object assign or push?
let cartList = [];
let bookList = [];

const myBook = document.querySelector(".card");
const myRow = document.querySelector(".myRow");
const searchInput = document.querySelector("input");

window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => res.json())
    .then((books) => {
      bookList = books;
      console.log(bookList);
      createBookList(bookList);
    })
    .then(() => removeContent())
    .then(() => addToCart());
};
const createBookList = (books) => {
  books.forEach((book, i) => {
    myRow.innerHTML += `
      <div class="col-md-3 my-2 ">
      <div class="card h-100" >
      <span class="badge">${book.category}</span>
          <img src="${book.img}" class="card-img-top" alt="...">
          <div class="card-body">
            214577 <h5 class="card-title">${book.title}</h5>
            <h5 class="card-title">${book.price}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button class="btn btn-primary cartBtn">ADD TO CART</button>
            <button class="btn btn-danger skipBtn" id=${book.asin}>SKIP</button>
          </div>
        </div>
      </div>
      `;
  });
};
// const addToList = () => {
//   const cartBtn = document.querySelector(".cartBtn");
//   cartBtn.addEventListener("click", () => {
//     myBook.assign(cartList);
//     myBook.toggle("#test");
//   });
// };

// const removeBook = (e) => {
//   // const skipBtn = document.querySelectorAll("#skipBtn")[i];
//   // skipBtn.addEventListener("click", (e) => {

//   console.log(e.target.parentNode);
//   // });
// };

const addToCart = () => {
  const myCartRow = document.querySelector(".cartRow");

  const cartBtn = document.querySelectorAll(".cartBtn");
  cartBtn.forEach((c) => {
    c.addEventListener("click", (e) => {
      console.log("hello");
      cartList.push(bookList[0]);
      // cartList.push(e.target.closest(".card"));
      console.log(cartList);
      // element.classList.toggle("selectedCard");
      myCartRow.innerHTML += `
          <div class="col-md-3 my-2 ">
          <div class="card h-100" onclick="selectBook()" >
          <span class="badge">${cartList.category}</span>
              <img src="${cartList.img}" class="card-img-top" alt="...">
              <div class="card-body">
                214577 <h5 class="card-title">${cartList.title}</h5>
                <h5 class="card-title">${cartList.price}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button class="btn btn-primary cartBtn">ADD TO CART</button>
                <button class="btn btn-danger skipBtn" id=${cartList.asin}>SKIP</button>
              </div>
            </div>
          </div>
          `;

      // cartList.push(e.target.parentNode);
    });
  });
  console.log(cartBtn);
};

const removeContent = () => {
  const skipBtn = document.querySelectorAll(".skipBtn");
  skipBtn.forEach((b) => {
    b.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
    });
  });

  // document.body.appendChild(row);
};
const searchBooks = (e) => {
  e.preventDefault();

  const search = searchInput.value;
  if (search.length >= 3) {
    cartList = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    myRow.innerHTML = "";
    createList(cartList);
    cartList = [];
  } else if (search.length === 0) {
    myRow.innerHTML = "";
    createList(books);
  }
};

const emptyCart = () => {
  cartList.innerHTML = "";
};

function selectBook(e) {
  const element = e.currentTarget;
  element.classList.toggle("selectedCard");
}

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
