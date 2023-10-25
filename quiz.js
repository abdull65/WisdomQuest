//////////////////////////HTML QUIZ ARRAY/////////////////////////////////
const htmlQuizArr = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
    options: [
      "HyperText Markup Language",
      "HyperTransfer Text Language",
      "Hyperlink and Text Markup Language",
      "HyperText Markup Linguistics",
    ],
  },
  {
    id: 2,
    question: "Which HTML tag is used for creating a hyperlink?",
    answer: "&lt;a&gt;",
    options: ["&lt;a&gt;", "&lt;h&gt;", "&lt;link&gt;", "&lt;p&gt;"],
  },
  {
    id: 3,
    question: "What is the purpose of the &lt;img&gt; tag in HTML?",
    answer: "To display images on a web page",
    options: [
      "To create a list",
      "To play audio files",
      "To display images on a web page",
      "To style text",
    ],
  },
  {
    id: 4,
    question: "Which HTML tag is used for creating an ordered list?",
    answer: "&lt;ol&gt;",
    options: ["&lt;ul&gt;", "&lt;li&gt;", "&lt;ol&gt;", "&lt;dl&gt;"],
  },
  {
    id: 5,
    question: "What does the &lt;br&gt; tag do in HTML?",
    answer: "It creates a line break or newline within text.",
    options: [
      "It creates a line break or newline within text.",
      "It creates a bold text",
      "It creates a hyperlink",
      "It creates a paragraph",
    ],
  },
  {
    id: 6,
    question: "What is the HTML tag used for creating a table?",
    answer: "&lt;table&gt;",
    options: ["&lt;table&gt;", "&lt;tab&gt;", "&lt;tr&gt;", "&lt;td&gt;"],
  },
  {
    id: 7,
    question:
      "Which HTML tag is used for defining the structure of an HTML document?",
    answer: "&lt;html&gt;",
    options: ["&lt;head&gt;", "&lt;meta&gt;", "&lt;html&gt;", "&lt;body&gt;"],
  },
  {
    id: 8,
    question: "What is the purpose of the &lt;head&gt; element in HTML?",
    answer: "To contain meta-information about the document",
    options: [
      "To create a header for a webpage",
      "To define the main content of a document",
      "To contain meta-information about the document",
      "To insert JavaScript code",
    ],
  },
  {
    id: 9,
    question:
      "Which HTML tag is used for creating a list item in an unordered list?",
    answer: "&lt;li&gt;",
    options: ["&lt;ul&gt;", "&lt;li&gt;", "&lt;ol&gt;", "&lt;dl&gt;"],
  },
  {
    id: 10,
    question: "What is the HTML tag used for creating a line break?",
    answer: "&lt;br&gt;",
    options: [
      "&lt;lb&gt;",
      "&lt;linebreak&gt;",
      "&lt;newline&gt;",
      "&lt;br&gt;",
    ],
  },
  {
    id: 11,
    question: "What is the purpose of the &lt;div&gt; element in HTML?",
    answer: "To group and style content",
    options: [
      "To create a division in the page",
      "To define a hyperlink",
      "To group and style content",
      "To create a table",
    ],
  },
  {
    id: 12,
    question:
      "Which HTML tag is used for defining the main content of a document?",
    answer: "&lt;main&gt;",
    options: [
      "&lt;main&gt;",
      "&lt;body&gt;",
      "&lt;content&gt;",
      "&lt;section&gt;",
    ],
  },
  {
    id: 13,
    question: "What does the &lt;p&gt; tag stand for in HTML?",
    answer: "&lt;paragraph&gt;",
    options: ["&lt;p&gt;", "&lt;para&gt;", "&lt;pg&gt;", "&lt;paragraph&gt;"],
  },
  {
    id: 14,
    question: "Which HTML tag is used for creating a form?",
    answer: "&lt;form&gt;",
    options: [
      "&lt;form&gt;",
      "&lt;input&gt;",
      "&lt;submit&gt;",
      "&lt;button&gt;",
    ],
  },
  {
    id: 15,
    question: "What is the purpose of the &lt;input&gt; element in HTML forms?",
    answer: "To collect user input",
    options: [
      "To display images",
      "To create a hyperlink",
      "To collect user input",
      "To style text",
    ],
  },
];

//////////////////////////CSS QUIZ ARRAY/////////////////////////////////
const cssQuizArr = [
  {
    id: 1,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
  },
  {
    id: 2,
    question:
      "Which CSS property is used for changing the text color of an element?",
    answer: "color",
    options: ["text-color", "font-color", "text-style", "color"],
  },
  {
    id: 3,
    question: "What is the purpose of the 'margin' property in CSS?",
    answer: "To control the space outside an element",
    options: [
      "To control the space inside an element",
      "To define the width of an element",
      "To control the space outside an element",
      "To set the background color",
    ],
  },
  {
    id: 4,
    question:
      "Which CSS property is used for changing the background color of an element?",
    answer: "background-color",
    options: ["color", "background-color", "text-color", "background"],
  },
  {
    id: 5,
    question: "What does CSS specificity determine?",
    answer: "Which CSS rule takes precedence when there are conflicting styles",
    options: [
      "The order in which CSS rules are applied",
      "The color of text in an element",
      "Which CSS rule takes precedence when there are conflicting styles",
      "The size of an element",
    ],
  },
  {
    id: 6,
    question: "Which CSS property is used for changing the font size of text?",
    answer: "font-size",
    options: ["text-size", "font-style", "font-size", "text-font"],
  },
  {
    id: 7,
    question: "What is the purpose of the 'padding' property in CSS?",
    answer: "To control the space inside an element",
    options: [
      "To control the space outside an element",
      "To define the width of an element",
      "To control the space inside an element",
      "To set the border color",
    ],
  },
  {
    id: 8,
    question: "Which CSS selector is used to select elements by their class?",
    answer: ".classname",
    options: ["#idname", ".classname", "elementname", "@classname"],
  },
  {
    id: 9,
    question: "What does the 'display' property in CSS control?",
    answer: "How an element is rendered on the page",
    options: [
      "The background color of an element",
      "The text color of an element",
      "The font size of an element",
      "How an element is rendered on the page",
    ],
  },
  {
    id: 10,
    question:
      "Which CSS property is used for changing the border color of an element?",
    answer: "border-color",
    options: ["border-style", "border-color", "border-width", "border"],
  },
  {
    id: 11,
    question: "What is the CSS property used to make text bold?",
    answer: "font-weight",
    options: ["font-style", "text-bold", "text-weight", "font-weight"],
  },
  {
    id: 12,
    question:
      "Which CSS property is used to control the spacing between lines of text?",
    answer: "line-height",
    options: ["font-spacing", "line-spacing", "text-spacing", "line-height"],
  },
  {
    id: 13,
    question: "What does the CSS property 'position: relative;' do?",
    answer: "It positions an element relative to its normal position",
    options: [
      "It positions an element at the top of the page",
      "It makes an element invisible",
      "It positions an element relative to its normal position",
      "It rotates an element",
    ],
  },
  {
    id: 14,
    question:
      "Which CSS property is used to add rounded corners to an element?",
    answer: "border-radius",
    options: ["corner-style", "border-style", "border-round", "border-radius"],
  },
  {
    id: 15,
    question: "What is the purpose of the 'z-index' property in CSS?",
    answer: "It controls the stacking order of elements",
    options: [
      "It sets the width of an element",
      "It controls the spacing between elements",
      "It controls the stacking order of elements",
      "It changes the font of an element",
    ],
  },
];

//////////////////////////JAVASCRIPT QUIZ ARRAY/////////////////////////////////
const javascriptQuizArr = [
  {
    id: 1,
    question: "What does JavaScript stand for?",
    answer: "JavaScript",
    options: ["JavaSource", "JavaScript", "JavaCode", "JavaMarkup"],
  },
  {
    id: 2,
    question: "Which keyword is used to declare a variable in JavaScript?",
    answer: "var",
    options: ["let", "const", "variable", "var"],
  },
  {
    id: 3,
    question: "What is the result of '5 + 3' in JavaScript?",
    answer: 8,
    options: [53, 35, 15, 8],
  },
  {
    id: 4,
    question:
      "Which data type is used to represent whole numbers in JavaScript?",
    answer: "number",
    options: ["string", "boolean", "integer", "number"],
  },
  {
    id: 5,
    question: "What does the '=== ' operator in JavaScript compare?",
    answer: "Both value and data type",
    options: [
      "Values only",
      "Data types only",
      "Both value and data type",
      "Neither value nor data type",
    ],
  },
  {
    id: 6,
    question: "What is the purpose of the 'if' statement in JavaScript?",
    answer: "To execute code conditionally",
    options: [
      "To define a function",
      "To create a loop",
      "To execute code unconditionally",
      "To execute code conditionally",
    ],
  },
  {
    id: 7,
    question:
      "Which function is used to output data to the console in JavaScript?",
    answer: "console.log()",
    options: ["print()", "write()", "display()", "console.log()"],
  },
  {
    id: 8,
    question: "What is the result of 'typeof undefined' in JavaScript?",
    answer: "undefined",
    options: ["null", "NaN", "undefined", "object"],
  },
  {
    id: 9,
    question: "What is the purpose of the 'for' loop in JavaScript?",
    answer: "To iterate over a block of code multiple times",
    options: [
      "To make a decision",
      "To define a function",
      "To display an alert",
      "To iterate over a block of code multiple times",
    ],
  },
  {
    id: 10,
    question:
      "Which built-in object is used to store and manipulate text data in JavaScript?",
    answer: "String",
    options: ["Text", "Char", "String", "Word"],
  },
  {
    id: 11,
    question: "What does the 'return' statement do in a JavaScript function?",
    answer: "Specifies the value to be returned from the function",
    options: [
      "Ends the function and returns nothing",
      "Displays an alert",
      "Specifies the value to be returned from the function",
      "Creates a new variable",
    ],
  },
  {
    id: 12,
    question: "Which operator is used to concatenate strings in JavaScript?",
    answer: "+",
    options: ["*", "&", "#", "+"],
  },
  {
    id: 13,
    question: "What is the purpose of the 'Array' object in JavaScript?",
    answer: "To store and manipulate collections of data",
    options: [
      "To define a function",
      "To create a loop",
      "To display an alert",
      "To store and manipulate collections of data",
    ],
  },
  {
    id: 14,
    question:
      "Which event is triggered when a button is clicked in a web page?",
    answer: "click",
    options: ["hover", "press", "click", "submit"],
  },
  {
    id: 15,
    question: "What is the purpose of 'JSON' in JavaScript?",
    answer: "To store and exchange data",
    options: [
      "To define functions",
      "To create loops",
      "To display alerts",
      "To store and exchange data",
    ],
  },
];
let currentIndex = 0;
let score = 0;

const quizOptions = document.querySelectorAll(".option");
const questionEl = document.querySelector(".question");
const quizBox = document.querySelector(".quizBox");
const quizSelectionBox = document.querySelector(".quizSelection");
const controlBtnBox = document.querySelector(".controlBtnBox");
const showScoreBox = document.querySelector(".showScoreBox");
const scoreBox = document.querySelector(".scoreBox");
const a_label = document.querySelector("#a_text");
const b_label = document.querySelector("#b_text");
const c_label = document.querySelector("#c_text");
const d_label = document.querySelector("#d_text");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const nextIconEl = document.querySelector(".nextBtn");
const submitBtn = document.querySelector(".submitText");

const htmlQuizBtn = document.getElementById("htmlBtn");
const cssQuizBtn = document.getElementById("cssBtn");
const javascriptQuizBtn = document.getElementById("javascriptBtn");
console.log(showScoreBox);
let quizCategory = htmlQuizArr;
quizBox.style.visibility = "hidden";
const selectQuiz = function () {
  quizBox.style.visibility = "visible";
  htmlQuizBtn.addEventListener("click", () => {
    quizCategory = htmlQuizArr;
    loadQuiz();
    quizSelectionBox.style.display = "none";
  });
  cssQuizBtn.addEventListener("click", () => {
    quizCategory = cssQuizArr;
    loadQuiz();
    quizSelectionBox.style.display = "none";
  });
  javascriptQuizBtn.addEventListener("click", () => {
    quizCategory = javascriptQuizArr;
    loadQuiz();
    quizSelectionBox.style.display = "none";
  });
};
selectQuiz();
const loadQuiz = function () {
  const currentQuestion = quizCategory[currentIndex];
  questionEl.innerHTML = `${currentQuestion.id}. ${currentQuestion.question}`;
  a_label.innerHTML = currentQuestion.options[0];
  b_label.innerHTML = currentQuestion.options[1];
  c_label.innerHTML = currentQuestion.options[2];
  d_label.innerHTML = currentQuestion.options[3];
  uncheckOption();
};
const uncheckOption = function () {
  quizOptions.forEach((myOption) => {
    if (nextBtn) {
      myOption.checked = false;
    }
  });
};
const getSelected = function () {
  let selectedIndex = -1; // Initialize with an invalid index

  quizOptions.forEach((selected, index) => {
    if (selected.checked) {
      selectedIndex = index;
    }
  });

  return selectedIndex;
};
loadQuiz();
const userAnswers = new Array(quizCategory.length).fill(null);

const nextQuestion = function () {
  const answerIndex = getSelected();
  if (answerIndex !== -1) {
    if (
      answerIndex ===
      quizCategory[currentIndex].options.indexOf(
        quizCategory[currentIndex].answer
      )
    ) {
      score++;
    }

    userAnswers[currentIndex] = answerIndex; // Store the user's answer
  }
  currentIndex++;
  loadQuiz();
  console.log(score);
};
const prevQuestion = function () {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuiz();
    const prevAnswerIndex = userAnswers[currentIndex];
    if (prevAnswerIndex !== null) {
      if (
        prevAnswerIndex ===
        quizCategory[currentIndex].options.indexOf(
          quizCategory[currentIndex].answer
        )
      ) {
        score--;
      }
    }
    console.log(score);
    console.log(currentIndex);
  }
};
prevBtn.addEventListener("click", () => {
  if (currentIndex < quizCategory.length) {
    prevQuestion();
  }
  // Check if the next button is currently set to submit
  if (submitBtn) {
    // Remove the current event listener
    nextBtn.removeEventListener("click", submitQuiz);
    // Assign the nextQuestion function back to the next button
    nextBtn.addEventListener("click", nextQuestion);
    // Change the text back to "NEXT"
    submitBtn.style.display = "none";
    nextIconEl.style.display = "block";
  }
});

let submitQuiz = function () {
  scoreBox.innerHTML = `You Scored: ${score} / ${quizCategory.length}`;
  controlBtnBox.style.display = "none";
  showScoreBox.style.display = "flex";
  console.log(`${score} / ${quizCategory.length}`);
};

nextBtn.addEventListener("click", () => {
  if (currentIndex < quizCategory.length) {
    nextQuestion();
    nextBtn.removeEventListener("click", submitQuiz);
    console.log("currentIndex:", currentIndex);
  }
  if (currentIndex === quizCategory.length - 1) {
    // nextBtn.textContent = "SUBMIT";
    nextIconEl.style.display = "none";
    submitBtn.style.display = "block";
    console.log("currentIndex (else if):", currentIndex);
  }

  if (submitBtn) {
    // Remove the current event listener
    nextBtn.removeEventListener("click", nextQuestion);
    // Assign the submitQuiz function to the next button
    nextBtn.addEventListener("click", submitQuiz);
  }
});

const resetBtn = document.getElementById("resetQuiz");
resetBtn.addEventListener("click", () => {
  location.reload();
});
