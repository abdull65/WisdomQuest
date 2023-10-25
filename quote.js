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
