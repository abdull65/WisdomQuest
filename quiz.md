# Create Quiz Questions Array and User Answers Array:

# Define an array called quizQuestions containing question-answer pairs.

# Initialize an empty array called userAnswers to store the user's responses.

# Get User's Answers:

# Use a loop to prompt the user for answers to each question and push them into the userAnswers array.

# Check User Answers with some() Method:

# Use the some() method to compare each user answer with the corresponding correct answer in the quizQuestions array.

# If at least one answer matches, consider it correct.

# Display Results:

# Provide feedback to the user based on whether any of their answers were correct.

///////////////////////////////////////////////////////////
// Add event listener for 'nextBtn'
nextBtn.addEventListener("click", () => {
if (nextBtn.textContent === "SUBMIT") {
scoreBox.innerHTML = `You Scored: ${score} / ${quizCategory.length}`;
controlBtnBox.style.display = "none";
showScoreBox.style.display = "flex";
console.log(`${score} / ${quizCategory.length}`);
} else if (currentIndex < quizCategory.length) {
nextQuestion();
}
});

// Add event listener for 'prevBtn'
prevBtn.addEventListener("click", () => {
if (currentIndex < quizCategory.length) {
// Create an SVG element
const svgElement = document.createElementNS(
"http://www.w3.org/2000/svg",
"svg"
);
svgElement.setAttribute("width", "36");
svgElement.setAttribute("height", "36");
svgElement.setAttribute("viewBox", "0 0 24 24");
svgElement.setAttribute("fill", "none");
svgElement.setAttribute("stroke", "#040845");
svgElement.setAttribute("stroke-width", "2");
svgElement.setAttribute("stroke-linecap", "round");
svgElement.setAttribute("stroke-linejoin", "round");
svgElement.classList.add("feather", "feather-chevron-right");

      // Create a polyline element
      const polyline = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "polyline"
      );
      polyline.setAttribute("points", "9 18 15 12 9 6");

      // Append the polyline to the SVG element
      svgElement.appendChild(polyline);

}
});

uncheckOption();
