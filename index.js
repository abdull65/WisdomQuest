// Navigation Menu
const navContentEl = document.querySelector(".navBar");
const menuBoxEl = document.querySelector("#navBtnBox");
const menuBtnEl = document.querySelector("#menuBtn");
const closeBtnEl = document.querySelector("#closeBtn");
const headerEl = document.querySelector("header");
const contentEl = document.querySelector(".content");
const indexContentEl = document.querySelector(".indexContent");

const navBtnEl = document
  .querySelector("#navBtnBox")
  .addEventListener("click", (event) => {
    // Prevent the click event from propagating to the body element
    event.stopPropagation();
    navContentEl.classList.toggle("openNav");
    menuBoxEl.classList.toggle("openNav");
    menuBtnEl.classList.toggle("openNav");
    closeBtnEl.classList.toggle("openNav");
    indexContentEl.classList.toggle("openNav");
  });
document.querySelector("body").addEventListener("click", () => {
  if (navContentEl.classList.contains("openNav")) {
    console.log(true);
    navContentEl.classList.remove("openNav");
    menuBoxEl.classList.toggle("openNav");
    menuBtnEl.classList.remove("openNav");
    closeBtnEl.classList.remove("openNav");
    indexContentEl.classList.remove("openNav");
  }
});
