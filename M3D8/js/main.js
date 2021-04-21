"use strict";
// fetch("https://striveschool-api.herokuapp.com/api/product/")
//   .then((resp) => resp.json())
//   .then((json) => console.log(json));

window.onload = async () => {
  console.log("written first, but printed when?");

  const url = "https://striveschool-api.herokuapp.com/api/product/";
  // let product = document.querySelectorAll(".card .product-card");

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
  console.log("this is written 3rd, printed 3rd?");
  console.log(json); // where is my json data :( ????????
};
