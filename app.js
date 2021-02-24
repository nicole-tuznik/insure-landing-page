const navList = document.querySelector(".nav__ul");
const hamburger = document.querySelector(".nav__hamburger");

hamburger.addEventListener("click", function () {
  navList.classList.toggle("show-menu");

  if (navList.classList.contains("show-menu")) {
    hamburger.src = "/images/icon-close.svg";
  } else {
    hamburger.src = "/images/icon-hamburger.svg";
  }

  document.body.classList.toggle("no-scroll");
});
