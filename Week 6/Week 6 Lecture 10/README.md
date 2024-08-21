**Action Plan for Week 6, Lecture 10: Advanced JavaScript**  
**Objective:** Expand students' understanding of JavaScript by introducing functions, loops, events, and deeper DOM manipulation. By the end of this lecture, students should be able to write more complex JavaScript programs, handle events, and further manipulate the DOM.

### Preparation and Lecture Content  
**Title:** Advanced JavaScript

**1. Recap of JavaScript Basics (10 minutes)**  
- Quick review of variables, data types, operators, conditionals, and DOM manipulation.  
- Brief Q&A or discussion to reinforce the previous lecture's concepts.

**2. Introduction to Functions (20 minutes)**  
- **What is a Function?**
  - Definition and purpose of functions in programming.
  - Example of a simple function:
    ```javascript
    function greet() {
      alert("Hello, World!");
    }
    ```
- **Function Syntax and Structure**
  - Function declaration vs. function expression.
  - Parameters and arguments.
  - Return values.
  - Example:
    ```javascript
    function add(a, b) {
      return a + b;
    }
    let sum = add(5, 10);
    ```
- **Exercise:**  
  - Create a function that takes two numbers as input and returns their product.
  - Call the function and display the result using `alert`.

**3. Loops (20 minutes)**  
- **Introduction to Loops**
  - Purpose of loops in programming for repetitive tasks.
- **Types of Loops:**
  - **For Loop**
    - Syntax and use case:
      ```javascript
      for (let i = 0; i < 5; i++) {
        console.log(i);
      }
      ```
  - **While Loop**
    - Syntax and use case:
      ```javascript
      let i = 0;
      while (i < 5) {
        console.log(i);
        i++;
      }
      ```
  - **Do-While Loop**
    - Syntax and use case:
      ```javascript
      let i = 0;
      do {
        console.log(i);
        i++;
      } while (i < 5);
      ```
- **Exercise:**  
  - Create a loop that prints numbers from 1 to 10 in the console.
  - Modify it to print even numbers only.

**4. Handling Events (20 minutes)**  
- **What are Events?**
  - Explanation of events in JavaScript and their importance in making web pages interactive.
- **Common Event Types:**
  - Click, mouseover, keydown, etc.
- **Event Listeners**
  - Syntax and usage of `addEventListener`:
    ```javascript
    document.getElementById("myButton").addEventListener("click", function() {
      alert("Button clicked!");
    });
    ```
- **Exercise:**  
  - Create an HTML button.
  - Write JavaScript to display an alert when the button is clicked.

**5. Advanced DOM Manipulation (30 minutes)**  
- **Adding and Removing Elements:**
  - Creating new elements with `createElement`.
  - Appending elements with `appendChild`.
  - Removing elements with `removeChild`.
  - Example:
    ```javascript
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "Hello!";
    document.body.appendChild(newDiv);
    document.body.removeChild(newDiv);
    ```
- **Modifying Attributes:**
  - Changing element attributes using `setAttribute`.
  - Example:
    ```javascript
    let link = document.querySelector("a");
    link.setAttribute("href", "https://example.com");
    ```
- **Exercise:**  
  - Write a script to create a new list item and add it to an existing unordered list.

**6. Mini Project: Interactive Quiz (30 minutes)**  
- **Project Description:**  
  - Create a simple quiz application that asks users multiple-choice questions and provides feedback.
- **Requirements:**
  - Display a question with multiple answers as radio buttons.
  - When the user selects an answer and clicks "Submit," display whether the answer is correct.
  - Keep track of the score and display the total score at the end of the quiz.
- **Live Coding Session:**  
  - Walk through the creation of the quiz, step by step.
  - Encourage students to follow along and customize their quizzes.

**7. Additional Resources for Further Learning**  
- **MDN Web Docs on Functions, Loops, and Events**  
- **JavaScript.info tutorials on Events and DOM Manipulation**
