let countQuote = 0;

async function generateQuote() {
  try {
    const quoteLink = await fetch("https://api.quotable.io/random");
    const quoteData = await quoteLink.json();
    countQuote++;
    console.log(quoteData);
    updateQuote(quoteData.content);
    updateCount(countQuote);
  } catch (error) {
    displayError(`Unable to fetch data: ${error}`);
  }
}

function updateQuote(content) {
  const quoteBoxEl = document.querySelector(".quoteBox");
  quoteBoxEl.innerHTML = content;
  quoteBoxEl.style.color = "#333";
}

function updateCount(count) {
  const quoteCount = document.querySelector(".countQuote");
  const countBox = document.querySelector(".countBox");
  quoteCount.innerHTML = count;
}

function displayError(errorMessage) {
  const quoteBoxEl = document.querySelector(".quoteBox");
  quoteBoxEl.style.color = "#f00";
  quoteBoxEl.innerHTML = errorMessage;
}

function setInitQuote() {
  generateQuote();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#quoteBtn").addEventListener("click", generateQuote);
});

setInitQuote();

/////////// generate advice function /////////////////
let countAdvice = 0;
async function generateAdvice() {
  const adviceBoxEl = document.querySelector(".adviceBox");
  const adviceCount = document.querySelector(".countAdvice");
  try {
    const adviceLink = await fetch("https://api.adviceslip.com/advice");
    const adviceData = await adviceLink.json();
    adviceBoxEl.innerHTML = adviceData.slip.advice;
    countAdvice++;
    adviceBoxEl.style.color = "#333";
    adviceCount.innerHTML = countAdvice;
  } catch (error) {
    adviceBoxEl.style.color = "#f00";
    adviceBoxEl.innerHTML = `Unable to fetch data: ${error}`;
  }
}
function setInitAdvice() {
  generateAdvice();
}
document.addEventListener("DOMContentLoaded", () => {
  const adviceBtnEl = document
    .querySelector("#adviceBtn")
    .addEventListener("click", generateAdvice);
});
setInitAdvice();

// Navigation Menu
const navContentEl = document.querySelector(".navBar");
const menuBtnEl = document.querySelector("#menuBtn");
const closeBtnEl = document.querySelector("#closeBtn");
const contentEl = document.querySelector(".content");

const navBtnEl = document
  .querySelector("#navBtnBox")
  .addEventListener("click", (event) => {
    // Prevent the click event from propagating to the body element
    event.stopPropagation();
    navContentEl.classList.toggle("openNav");
    menuBtnEl.classList.toggle("openNav");
    closeBtnEl.classList.toggle("openNav");
    contentEl.classList.toggle("openNav");
  });
document.querySelector("body").addEventListener("click", () => {
  if (navContentEl.classList.contains("openNav")) {
    console.log(true);
    navContentEl.classList.remove("openNav");
    menuBtnEl.classList.remove("openNav");
    closeBtnEl.classList.remove("openNav");
    contentEl.classList.remove("openNav");
  }
});
