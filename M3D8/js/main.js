"use strict";

const productName = document.getElementById("product-name").value;
const productPrice = document.getElementById("product-price").value;
const productImg = document.getElementById("product-img").value;
const productBrand = document.getElementById("product-brand").value;
const productDesc = document.getElementById("product-desc").value;

window.onload = async () => {
  console.log("written first, but printed when?");

  const url = "https://striveschool-api.herokuapp.com/api/product/";

  try {
    let resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWI3NmIxZjBmYjAwMTVkOTE3OGQiLCJpYXQiOjE2MTkwMDgzNzQsImV4cCI6MTYyMDIxNzk3NH0.r1vvnZlH1xQehALnzQFe9IdtecDk_2GoyQKGc9tiYgA",
      },
    });
    console.log("this is written second, printed 2nd?");
    console.log(resp);
  } catch (error) {
    console.log(error);
    let json = await resp.json();
    console.log("this is written 3rd, printed 3rd?");
    console.log(json); // where is my json data :( ????????
  }
};

// change textarea count8
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
