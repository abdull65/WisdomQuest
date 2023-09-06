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
    answer: "<a>",
    options: ["<a>", "<h>", "<link>", "<p>"],
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
    answer: "<ol>",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
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
    answer: "<table>",
    options: ["<table>", "<tab>", "<tr>", "<td>"],
  },
  {
    id: 7,
    question:
      "Which HTML tag is used for defining the structure of an HTML document?",
    answer: "<html>",
    options: ["<head>", "<meta>", "<html>", "<body>"],
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
    answer: "<li>",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
  },
  {
    id: 10,
    question: "What is the HTML tag used for creating a line break?",
    answer: "<br>",
    options: ["<lb>", "<linebreak>", "<newline>", "<br>"],
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
    answer: "<main>",
    options: ["<main>", "<body>", "<content>", "<section>"],
  },
  {
    id: 13,
    question: "What does the &lt;p&gt; tag stand for in HTML?",
    answer: "<paragraph>",
    options: ["<p>", "<para>", "<pg>", "<paragraph>"],
  },
  {
    id: 14,
    question: "Which HTML tag is used for creating a form?",
    answer: "<form>",
    options: ["<form>", "<input>", "<submit>", "<button>"],
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
    answer: "8",
    options: ["53", "35", "15", "8"],
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

// Initialize an empty array to store user answers
let userAnswerArr = [];

// Define a function called quizQuestion that takes a 'topic' as an argument
const quizQuestion = function (topic, containerClass) {
  const quizBox = document.querySelector(`.${containerClass}`);

  topic.forEach((quiz, index) => {
    const questionTag = document.createElement("li");

    // Calculate the question number starting from 1
    const questionNumber = index + 1;

    // Set the innerHTML of the list item to the quiz question with the question number
    questionTag.innerHTML = `${questionNumber}. ${quiz.question}`;

    const separateOptions = quiz.options;

    separateOptions.forEach((option) => {
      const optionLabel = document.createElement("label");
      const radioTag = document.createElement("input");
      radioTag.type = "radio";
      radioTag.id = quiz.id;
      radioTag.name = `quiz_${quiz.id + 1}`;

      optionLabel.appendChild(radioTag);
      optionLabel.appendChild(document.createTextNode(option));
      questionTag.append(optionLabel);

      radioTag.addEventListener("change", () => {
        userAnswerArr[quiz.id] = option;

        // Check if the user's answer matches the correct answer
        if (userAnswerArr[quiz.id] === quiz.answer) {
          console.log(quiz.question);
          console.log(quiz.answer);
          console.log(`Question ${questionNumber}: ${option} - Correct`);
        } else {
          console.log(`Question ${questionNumber}: ${option} - Wrong`);
        }
      });
    });

    quizBox.appendChild(questionTag);
  });
};

// Call the function for each quiz array
quizQuestion(htmlQuizArr, "htmlQuizList");
quizQuestion(cssQuizArr, "cssQuizList");
quizQuestion(javascriptQuizArr, "javascriptQuizList");

const selectQuizBox = document.querySelector(".quizSelection");
const htmlQuizList = document.querySelector(".htmlQuizList");
const htmlBtn = document.getElementById("htmlBtn");
const cssBtn = document.getElementById("cssBtn");
const javascriptBtn = document.getElementById("javascriptBtn");

htmlBtn.addEventListener("click", () => {
  htmlQuizList.style.display = "block";
});
