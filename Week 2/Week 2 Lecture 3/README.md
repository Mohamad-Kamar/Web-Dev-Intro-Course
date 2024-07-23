### Action Plan for Week 2, Lecture 3: Advanced HTML

**Objective:**
Dive deeper into HTML, covering forms, input elements, and semantic HTML. Introduce students to more complex HTML elements and their practical applications.

#### Preparation and Lecture Content

**Title: Advanced HTML**

1. **Recap of HTML Basics (10 minutes)**
   - Quick review of basic HTML tags and structure.
   - Short quiz or discussion to reinforce previous content.
     - Example Questions:
       1. What is the purpose of the `<head>` section in an HTML document?
       2. How do you create an unordered list?
       3. What attribute is used to add a URL to an anchor tag?

2. **HTML Forms and Input Elements (30 minutes)**
   - **Introduction to Forms:**
     - Purpose of forms in web development.
     - Basic structure:
       ```html
       <form action="/submit" method="POST">
         <!-- form elements go here -->
       </form>
       ```
   - **Common Form Elements:**
     - Text input:
       ```html
       <input type="text" name="username" placeholder="Enter your name">
       ```
     - Password input:
       ```html
       <input type="password" name="password" placeholder="Enter your password">
       ```
     - Radio buttons and checkboxes:
       ```html
       <input type="radio" name="gender" value="male"> Male
       <input type="radio" name="gender" value="female"> Female
       <input type="checkbox" name="subscribe" value="newsletter"> Subscribe to newsletter
       ```
     - Submit button:
       ```html
       <input type="submit" value="Submit">
       ```
     - Textarea:
       ```html
       <textarea name="comments" rows="4" cols="50"></textarea>
       ```
   - **Exercise:**
     - Task: Create a form that includes text inputs, radio buttons, checkboxes, and a submit button.
     - Students will create a form for a mock user registration page.

3. **Semantic HTML (30 minutes)**
   - **What is Semantic HTML?**
     - Definition and importance of semantic HTML.
     - Enhancing accessibility and SEO.
   - **Common Semantic Elements:**
     - `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`
       ```html
       <header>
         <h1>Welcome to My Website</h1>
       </header>
       <nav>
         <ul>
           <li><a href="#home">Home</a></li>
           <li><a href="#about">About</a></li>
         </ul>
       </nav>
       <section>
         <article>
           <h2>Article Title</h2>
           <p>Article content goes here.</p>
         </article>
       </section>
       <aside>
         <p>Related links or ads go here.</p>
       </aside>
       <footer>
         <p>© 2024 My Website</p>
       </footer>
       ```
   - **Exercise:**
     - Task: Convert a non-semantic HTML document to use semantic elements.
     - Example document:
       ```html
       <div>
         <div>
           <h1>Welcome</h1>
         </div>
         <div>
           <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
           </ul>
         </div>
         <div>
           <h2>Title</h2>
           <p>Content</p>
         </div>
         <div>
           <p>© 2024</p>
         </div>
       </div>
       ```
     - Students will refactor it using semantic elements.

4. **Mini Project: Personal Profile Page (40 minutes)**
   - **Project Description:**
     - Create a personal profile page that includes a form for users to submit their contact information.
     - The page should also use semantic HTML to organize content.
   - **Requirements:**
     - A header with the student's name and a navigation menu.
     - A section with an article about the student (hobbies, interests, etc.).
     - An aside with additional links or information.
     - A form for visitors to submit their contact information.
     - A footer with copyright information.
   - **Live Coding Session:**
     - Walk through the creation of the profile page, step by step.
     - Encourage students to follow along and create their own version.

5. **Q&A and Summary (10 minutes)**
   - Recap of key points from the lecture.
   - Open floor for questions.
   - Provide additional resources for further learning:
     - [MDN Web Docs on Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
     - [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

#### Interactive Elements

- **Live Coding Sessions:**
  - Demonstrate creating form elements and semantic HTML.
  - Encourage students to code along and ask questions in real-time.

- **Hands-On Exercises:**
  - Creating a form with various input elements.
  - Refactoring non-semantic HTML to use semantic elements.

- **Mini Project:**
  - Personal profile page incorporating form elements and semantic HTML.
  - Provide guidance and support throughout the project.

#### Feedback Mechanism

- **Survey:**
  - Collect feedback on the lecture content, pacing, and overall experience.
  - Use this feedback to adjust future lectures.

- **Project Guidance:**
  - Offer support and guidance for the mini project.
  - Encourage students to personalize their profile pages and be creative.

#### Continuous Improvement

- **Review Feedback:**
  - Analyze student feedback and performance on quizzes and exercises.
  - Adjust future lectures based on this feedback.

By following this action plan, the third lecture will provide students with a deeper understanding of HTML, ensuring they are engaged, supported, and ready to build more complex web pages.