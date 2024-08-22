### **Action Plan for Week 5, Lecture 8 and 9: JavaScript Basics**

**Objective:** Introduce students to the fundamentals of JavaScript, covering syntax, basic programming constructs, operators, expressions, conditionals, and DOM manipulation. By the end of this lecture, students should be able to write basic JavaScript programs and manipulate HTML elements using the DOM.

---

#### **Preparation and Lecture Content**

**Title:** JavaScript Basics

---

**1. Introduction to JavaScript (10 minutes)**

- **What is JavaScript?**
  - Overview of JavaScript as a programming language for web development.
  - Importance of JavaScript in making web pages interactive.
  - Examples of popular websites and applications using JavaScript.

- **Embedding JavaScript in HTML**
  - `<script>` tag and where to place it in an HTML document.
  - Inline vs. External JavaScript.

---

**2. JavaScript Syntax and Basic Programming Constructs (20 minutes)**

- **Variables**
  - `var`, `let`, and `const`.
  - Differences and use cases for each.
  - Naming conventions and best practices.

- **Data Types**
  - Primitive data types: `String`, `Number`, `Boolean`, `Undefined`, `Null`.
  - Introduction to complex data types (Arrays, Objects) to be covered in later lectures.

- **Operators and Expressions**
  - Arithmetic operators: `+`, `-`, `*`, `/`, `%`.
  - Assignment operators: `=`, `+=`, `-=`, etc.
  - Comparison operators: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
  - Logical operators: `&&`, `||`, `!`.

---

**3. Conditionals (20 minutes)**

- **If Statements**
  - Syntax and use cases.
  - Example:
    ```javascript
    if (condition) {
      // code to be executed if condition is true
    }
    ```

- **Else and Else If**
  - Extending the logic with `else` and `else if`.
  - Example:
    ```javascript
    if (condition1) {
      // code to be executed if condition1 is true
    } else if (condition2) {
      // code to be executed if condition2 is true
    } else {
      // code to be executed if both conditions are false
    }
    ```

---

**4. Introduction to the DOM (30 minutes)**

- **What is the DOM?**
  - Explanation of the Document Object Model and its significance in web development.
  - Relationship between HTML and the DOM.

- **Selecting Elements**
  - Methods: `getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`.
  - Example:
    ```javascript
    document.getElementById("myElement").style.color = "red";
    ```

- **Modifying Elements**
  - Changing content and styles dynamically.
  - Example:
    ```javascript
    document.getElementById("myElement").innerHTML = "Hello World!";
    ```

---

**5. Interactive Exercise (20 minutes)**

- **Task: Create a Simple Web Page with Interactive Elements**
  - Students will create an HTML page with buttons that change text or style when clicked using JavaScript.
  - Encourage students to experiment with different DOM methods and conditionals.

  **Example Exercise:**
  - Create an HTML button that, when clicked, changes the background color of the page based on user input.
    ```javascript
    function changeColor() {
      let color = document.getElementById("colorInput").value;
      document.body.style.backgroundColor = color;
    }
    ```

---

**6. Q&A and Summary (10 minutes)**

- **Recap of Key Concepts**
  - Variables, data types, operators, conditionals, DOM manipulation.

- **Open Floor for Questions**
  - Address any doubts or questions students may have.

- **Additional Resources for Further Learning**
  - MDN Web Docs on JavaScript.
  - FreeCodeCamp JavaScript tutorials.
