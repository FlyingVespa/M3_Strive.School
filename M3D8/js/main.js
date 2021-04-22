"use strict";

const productName = document.getElementById("product-name").value;
const productPrice = document.getElementById("product-price").value;
const productImg = document.getElementById("product-img").value;
const productBrand = document.getElementById("product-brand").value;
const productDesc = document.getElementById("product-desc").value;
const products = document.getElementById("products");
const product = document.getElementById("product");

window.onload = async () => {
  console.log("written first, but printed when?");

  const url = "https://striveschool-api.herokuapp.com/api/product/";
  //   const products = document.getElementById("products");
  try {
    // prevents from total crashing - try
    // async & await method
    let resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWI3NmIxZjBmYjAwMTVkOTE3OGQiLCJpYXQiOjE2MTkwMDgzNzQsImV4cCI6MTYyMDIxNzk3NH0.r1vvnZlH1xQehALnzQFe9IdtecDk_2GoyQKGc9tiYgA",
      },
    });
    console.log("this is written second, printed 2nd?");
    console.log(resp);
    let json = await resp.json();
    console.log(json); // where is my json data :( ????????

    if (json.length > 0) {
      json.forEach((item) => {
        product.innerHTML = `
        <div class="card" >
        <img
            src=${item.url}
            class="card-img-top"
            alt="${item.name}"
        />
        <div class="card-body">
            <div class="text-center">
            <h5 class="card-title" id="item-name">${item.name}</h5>
            <h6 id="item-brand">${item.brand}</h6>
            </div>
            <p class="card-text" id="item-desc">
            ${item.desc}
            </p>
            <h6 class="text-center" id="item-price">$${item.price}</h6>
            <a href="#" class="btn btn-primary w-100">Add To Cart</a>
        </div>
        </div>    `;
        products.appendChild(product);
      });
    } else {
      products.innerHTML = "<h1>No products were added to page</h1>";
    }
  } catch (error) {
    console.log(error);
    console.log("this is written 3rd, printed 3rd?");
  }
  
  let submitHandler= ((event) => {
      event.preventDefault();
      const item = {
        name: productName,
        brand: productBrand,
        price: productPrice,
        desc: productDesc,
        url: productImg,
      };

  try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWI3NmIxZjBmYjAwMTVkOTE3OGQiLCJpYXQiOjE2MTkwMDgzNzQsImV4cCI6MTYyMDIxNzk3NH0.r1vvnZlH1xQehALnzQFe9IdtecDk_2GoyQKGc9tiYgA",
        },
        body: JSON.stringify(item),
      });
    }    catch (error) {
        console.log(error);
        console.log("this is written 3rd, printed 3rd?");
    }
    if (response.ok) {
      alert("hunky dory");
    } else {
      console.log("somethign went wrong");
    }
})


};

// change textarea count
var textarea = document.querySelector("textarea");
const char = document.getElementById("char");

textarea.addEventListener("input", function () {
  var maxlength = this.getAttribute("maxlength");
  var currentLength = this.value.length;

  if (currentLength >= maxlength) {
    char.innerText = "Exceeded charatar lenght";
    console.log("You have reached the maximum number of characters.");
  } else {
    char.innerText = maxlength - currentLength + " chars left";
  }
});

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

//   productBrand.value = "";
//   productDesc.value = "";
//   productImg.value = "";
//   productName.value = "";
//   productPrice.value = "";
//   console.log("Form CLeared");
// function clearForm() {
//   let tags = document.getElementsByTagName("input");
//   for (let i = 0; i < tags.length; i++) {
//     switch (tags[i].type) {
//       case "password":
//       case "text":
//         tags[i].value = "";
//         break;
//       case "checkbox":
//       case "radio":
//         tags[i].checked = false;
//         break;
//     }
//   }
// }
