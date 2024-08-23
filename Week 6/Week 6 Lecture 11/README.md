### Action Plan for Week 6, Lecture 11: JavaScript Mini-Projects and Practice

**Objective:** Reinforce students' understanding of JavaScript by focusing on arrays, objects, and applying their knowledge through simple mini-projects. By the end of this lecture, students should feel more confident in using JavaScript to solve problems and create interactive web features.

#### Preparation and Lecture Content

**Title:** JavaScript Mini-Projects and Practice

**1. Arrays and Objects Recap (15 minutes)**
   - **Arrays:**
     - Definition and use cases.
     - Example of creating and manipulating arrays:
       ```javascript
       let colors = ["red", "blue", "green"];
       colors.push("yellow"); // Adds "yellow" to the end of the array
       ```
     - Basic array methods: `push()`, `pop()`, `shift()`, `unshift()`, `length`.
    - **Arrays Usage:**
        - How querySelectorAll returns a list and how to modify all list items.
   - **Objects:**
     - Definition and use cases.
     - Example of creating and manipulating objects:
       ```javascript
       let person = {
         name: "Alice",
         age: 25,
         greet: function() {
           alert("Hello, " + this.name);
         }
       };
       ```
     - Accessing and modifying object properties.
    - **Objects Usage:**
        - How to use DOM objects to store and access data.

**2. Form Submission with FormSubmit (20 minutes)**
   - **Form Basics:**
     - Brief overview of creating HTML forms.
     - Example form structure:
       ```html
       <form action="https://formsubmit.co/example" method="POST">
         <input type="text" name="name" placeholder="Your Name" required>
         <input type="email" name="email" placeholder="Your Email" required>
         <button type="submit">Submit</button>
       </form>
       ```
   - **Using FormSubmit:**
     - Explanation of how FormSubmit works to send form data via email.
     - Customizing the form action URL and adding hidden inputs for enhanced functionality.

**3. Mini-Project 1: Image Carousel (20 minutes)**
   - **Objective:** Create an image carousel that users can navigate through using next and previous buttons.
   - **Project Outline:**
     - HTML structure for image elements and navigation buttons.
     - JavaScript for cycling through images.
   - **Key Concepts:**
     - Array manipulation for handling images.
     - DOM manipulation to update the displayed image.

**4. Mini-Project 2: Interactive Quiz (20 minutes)**
   - **Project Description::** 
     -Create a simple quiz application that asks users multiple-choice questions and provides feedback.
   - **Requirements:**
     - Display a question with multiple answers as radio buttons.
     - When the user selects an answer and clicks "Submit," display whether the answer is correct.
     - Keep track of the score and display the total score at the end of the quiz.