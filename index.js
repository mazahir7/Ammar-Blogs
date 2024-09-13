"use strict";

const heading = document.querySelector(".heading-secondary");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    heading.style.backgroundColor = "rgba(79, 71, 78, 1)";
    heading.style.position = "fixed";
  } else {
    heading.style.backgroundColor = "transparent";
  }
});
