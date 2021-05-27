"use strict";
const getLocation = new URLSearchParams(window.location.search);
const id = getLocation.get("id");

const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productImg = document.getElementById("product-img");
const productBrand = document.getElementById("product-brand");
const productDesc = document.getElementById("product-desc");
const products = document.getElementById("products");
const product = document.getElementById("product");
const displayDetailsDiv = document.querySelector(".display-details");

const url = "https://striveschool-api.herokuapp.com/api/product/";
let endpoint = id ? url + id : url;

const bearerToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNDAyNGNlYWY0ODAwMTVjOTE4NmYiLCJpYXQiOjE2MjIwMzM3OTIsImV4cCI6MTYyMzI0MzM5Mn0.N7an5gYm4hCXi-yxpt6ZfgszaM_66fkx3Ws0xd1zucc";
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: bearerToken,
});

/*---------------GET ---------------------*/
async function displayProducts() {
  product.innerHTML = "";
  try {
    let resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: bearerToken,
      },
    });

    let json = await resp.json();

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
                <p class="card-text" id="item-desc">${item.description}</p>
                <h6 class="text-center" id="item-price">$${item.price}</h6>
                <a href="#" class="btn btn-primary w-100" id=${item._id} onclick="deleteProduct(event);">Delete</a>
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
  }
}
/*---------------POST ---------------------*/

async function postData(event) {
  event.preventDefault();
  let item = {
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
        Authorization: bearerToken,
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
  }

  alert(`${item.name} Has been successfully submitted`);
  displayProducts();
}

/*---------------Show Details ---------------------*/

async function getProductDetails() {
  try {
    const response = await fetch(url + id, {
      headers,
    });
    const product = await response.json();
    // console.log(product);
    // console.log(Object.keys(product));
    Object.keys(product).forEach((key) => {
      const field = document.querySelector(`#${key}`);
      if (field) field.value = product[key];
    });
    {
      displayDetailsDiv.innerHTML = `
      <div class ="container">
      <div class="card" >
        <img
            src=${product.imageUrl}
            class="card-img-top"
            alt="${product.name}"
            height="400px"
            background="fill"
        />
        <div class="card-body">
            <div class="text-center">
              <h5 class="card-title" id="item-name">${product.name}</h5>
              <h6 id="item-brand">${product.brand}</h6>
            </div>
            <p class="card-text" id="item-desc">${product.description}</p>
            <h6 class="text-center" id="item-price">$${product.price}</h6>
            <a href="#" class="btn btn-primary w-100" onclick="deleteProduct();">Delete</a>
        </div>

        <div
        class="modal"
        id="updateModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Add New Product
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
               onclick="displayProducts()""
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onsubmit="postData(event)">
                <!-- product-name -->
                <div class="form-group row">
                  <label for="product-name" class="col-sm-2 col-form-label"
                    >Product Name</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="product-name"
                      placeholder="required"
                      minlength="3"
                      value="Test 1"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="product-brand" class="col-sm-2 col-form-label"
                    >Product Brand</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="product-brand"
                      placeholder="required"
                      minlength="2"
                      value="Carne"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <!-- price -->
                <div class="form-group row">
                  <label for="product-price" class="col-sm-2 col-form-label"
                    >Price</label
                  >
                  <div class="col-sm-10">
                    <input
                      step="10"
                      type="number"
                      min="0"
                      class="form-control"
                      id="product-price"
                      placeholder="$"
                      value="100"
                      required
                    />
                  </div>
                </div>
                <!-- desc -->
                <div class="form-group row">
                  <label for="product-img" class="col-sm-2 col-form-label"
                    >Img Url</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="product-img"
                      placeholder="required"
                      minlength="3"
                      value="https://picsum.photos/200/300"
                      
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="product-desc" class="form-label">Description</label>
                  <textarea
                    type="textarea"
                    class="form-control"
                    id="product-desc"
                    value="Required example textarea"
                    minlength="10"
                    maxlength="150"
                    required
                  ></textarea>
                  <div id="char" class="float-right">0</div>
                  <div class="invalid-feedback">
                    Please enter a description with minimun of 10 characters.
                  </div>
                </div>
                <!-- tabs for images -->
       
                <!-- tabs desc end -->
                <!-- final checkbox -->
                <div class="form-group row">
                  <div class="col-sm-10">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label class="form-check-label" for="gridCheck1"
                        >Is everything correct?</label
                      >
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-danger" onclick="">Update</button>
                <!-- <button type="reset" class="btn btn-danger">Delete Form</button> -->
                <button type="reset" class="btn btn-danger">Clear Form</button>
                <button type="submit" class="btn btn-success" onclick="updateProduct()">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
`;
    }
  } catch (error) {
    alert(error.message);
  }
}

/*Delete Item*/

async function deleteProduct(event) {
  try {
    let url = event ? `${endpoint}/${event.currentTarget.id}` : endpoint;
    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });

    if (!response.ok) throw new Error("Something went wrong");

    alert("Event deleted successfully");
    displayProducts();
    location.assign("index.html");
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

// change textarea count
// var textarea = document.querySelector("textarea");
// const char = document.getElementById("char");

// textarea.addEventListener("input", function () {
//   var maxlength = this.getAttribute("maxlength");
//   var currentLength = this.value.length;

//   if (currentLength >= maxlength) {
//     char.innerText = "Exceeded charatar lenght";
//     console.log("You have reached the maximum number of characters.");
//   } else {
//     char.innerText = maxlength - currentLength + " chars left";
//   }
// });

// function handleLoad(e) {
//   console.log("Loaded import: " + e.target.href);
// }
// function handleError(e) {
//   console.log("Error loading import: " + e.target.href);
// }

/// -------------------------------------New stuff m3d9

function setLoading(loading) {
  if (loading) {
    document.querySelector("#spinner").classList.remove("d-none");
  } else {
    document.querySelector("#spinner").classList.add("d-none");
  }
}

async function updateProduct(event) {
  event.preventDefault();
  const response = await fetch(endpoint, {
    method: "PUT",
    headers,
    body: JSON.stringify({ olditem }),
  });
  let olditem = {
    name: productName.value,
    brand: productBrand.value,
    price: productPrice.value,
    description: productDesc.value,
    imageUrl: productImg.value,
  };
  console.log(item);
  try {
    if (response.ok) {
      alert("hunky dory");
    } else {
      console.log("something went wrong");
    }
  } catch (error) {
    console.log(error);
  }

  alert(`${olditem.name} Has been successfully updated`);
}
