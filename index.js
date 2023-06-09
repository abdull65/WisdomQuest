let count = 0;
async function generateQuote() {
  const QuoteBoxEl = document.querySelector(".quoteBox");
  const QuoteLink = await fetch("https://api.quotable.io/random");
  const quoteData = await QuoteLink.json();
  const quoteCountEl = document.querySelector(".countBox");
  const quoteCount = document.querySelector(".count");
  QuoteBoxEl.innerHTML = quoteData.content;
  count++;
  quoteCount.innerHTML = count;
}
function setInitQuote() {
  generateQuote();
}
document.addEventListener("DOMContentLoaded", () => {
  const quoteBtnEl = document
    .querySelector("#quoteBtn")
    .addEventListener("click", generateQuote);
});
setInitQuote();
