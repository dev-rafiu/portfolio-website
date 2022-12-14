const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const header = document.querySelector(".header");
const backToTop = document.querySelector(".back-to-top");

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  const navHeight = nav.getBoundingClientRect().height;
  const navListHeight = navList.getBoundingClientRect().height;

  if (navHeight == 0) {
    nav.style.height = `${navListHeight}px`;
  } else {
    nav.style.height = 0;
  }
});

window.addEventListener("scroll", () => {
  const windowHeight = window.pageYOffset;
  const navHeight = header.getBoundingClientRect().height;
  // console.log(navHeight);
  windowHeight > navHeight
    ? (backToTop.style.display = "block")
    : (backToTop.style.display = "none");
});

const links = document.querySelectorAll(".nav-list a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.style.height = 0;
  });
});
