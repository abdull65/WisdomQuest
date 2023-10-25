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
