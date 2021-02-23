const navList = document.querySelector(".nav__ul");
const hamburger = document.querySelector(".nav__hamburger");

hamburger.addEventListener("click", function () {
  navList.classList.toggle("show-menu");

  document.body.classList.toggle("no-scroll");
});
