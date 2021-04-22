"use strict";
const params = new URLSearchParams(location.search);
const id = params.get("id");

const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productImg = document.getElementById("product-img");
const productBrand = document.getElementById("product-brand");
const productDesc = document.getElementById("product-desc");
const products = document.getElementById("products");
const product = document.getElementById("product");

const endpoint = id
  ? "https://striveschool-api.herokuapp.com/api/product/" + id
  : "https://striveschool-api.herokuapp.com/api/product/";

const url = "https://striveschool-api.herokuapp.com/api/product/";
window.onload = () => {
  displayProducts();
};

async function displayProducts() {
  console.log("written first, but printed when?");

  product.innerHTML = "";
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
        product.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6" id="product">
        <div class="card" >
        <img
            src=${item.imageUrl}
            class="card-img-top"
            alt="${item.name}"
            height="200px"
            background="fill"
        />
        <div class="card-body">
            <div class="text-center">
            <h5 class="card-title" id="item-name">${item.name}</h5>
            <h6 id="item-brand">${item.brand}</h6>
            </div>
            <p class="card-text" id="item-desc">
            ${item.description}
            </p>
            <h6 class="text-center" id="item-price">$${item.price}</h6>
            <a href="#" class="btn btn-primary w-100" onclick="deleteProduct();">Delete</a>
            <a href="detail.html?id=${item._id}" class="btn btn-secondary w-100">Details</a>
            </div>
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
}

async function postData(event) {
  event.preventDefault();
  const item = {
    name: productName.value,
    brand: productBrand.value,
    price: productPrice.value,
    description: productDesc.value,
    imageUrl: productImg.value,
  };
  console.log(item);
  // emptyFormAfterSubmit();

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

    if (response.ok) {
      alert("hunky dory");
    } else {
      console.log("somethign went wrong");
    }
  } catch (error) {
    console.log(error);
    console.log("this is written 3rd, printed 3rd?");
  }

  alert(`${item.name} Has been successfully submitted`);
  displayProducts();

  // function emptyFormAfterSubmit() {
  //   Object.keys(item).forEach(function (key) {
  //     delete object[key];
  //   });
  // }
}

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

function handleLoad(e) {
  console.log("Loaded import: " + e.target.href);
}
function handleError(e) {
  console.log("Error loading import: " + e.target.href);
}

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
/// -------------------------------------New stuff m3d9
// const params =new URLSearchParams(location.search)
// const id = params.get("id")
// const endpoint = "url"

// window.onload = async => {

//   document.querySelector("id").innerHTML += "" + id
//   const response = await fetch(endpoint +id)
//   const event = await response.json()
//   console.log(event);

// }

// load dynamicly html element with template and link , not iframe as iframe is heavy
// let link = document.createElement('link');
//     link.rel = 'import';
//     link.href = 'modal.html';
//     link.setAttribute('async', '');
//     link.onload = function(e) {...};
//     link.onerror = function(e) {...};
//     document.body.appendChild(link);

async function deleteProduct() {
  // setLoading(true);

  try {
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWI3NmIxZjBmYjAwMTVkOTE3OGQiLCJpYXQiOjE2MTkwMDgzNzQsImV4cCI6MTYyMDIxNzk3NH0.r1vvnZlH1xQehALnzQFe9IdtecDk_2GoyQKGc9tiYgA",
      },
    });

    if (!response.ok) throw new Error("Something went wrong");

    alert("Event deleted successfully");
    location.assign("index.html");
  } catch (error) {
    console.log(error);
    alert(error.message);
  }

  // setLoading(false);
}

// function setLoading(loading) {
//   if (loading) {
//     document.querySelector("#spinner").classList.remove("d-none");
//   } else {
//     document.querySelector("#spinner").classList.add("d-none");
//   }
// }
