### Action Plan for Week 3, Lecture 4: CSS Basics

**Objective:**
Introduce students to the fundamentals of CSS, including its syntax, how it styles web pages, and the different methods of incorporating CSS into HTML. Students will learn about selectors, properties, values, and basic styling techniques.

#### Preparation and Lecture Content

**Title: CSS Basics**

1. **Introduction to CSS (15 minutes)**
   - **What is CSS?**
     - CSS (Cascading Style Sheets) is a language used to style HTML documents.
     - Importance of CSS in web design for enhancing visual presentation.
   - **Basic Syntax:**
     - Example structure:
       ```css
       selector {
         property: value;
       }
       ```
     - Example:
       ```css
       body {
         background-color: lightblue;
       }
       ```

2. **Selectors, Properties, and Values (25 minutes)**
   - **CSS Selectors:**
     - **Element Selectors:**
       ```css
       p {
         color: red;
       }
       ```
     - **Class Selectors:**
       ```css
       .classname {
         font-size: 20px;
       }
       ```
     - **ID Selectors:**
       ```css
       #idname {
         margin-top: 10px;
       }
       ```
     - **Universal Selector:**
       ```css
       * {
         box-sizing: border-box;
       }
       ```
     - **Grouping Selectors:**
       ```css
       h1, h2, h3 {
         font-family: Arial, sans-serif;
       }
       ```
   - **Properties and Values:**
     - Common properties: `color`, `background-color`, `font-size`, `margin`, `padding`, `border`, `width`, `height`
     - Value types: keywords (e.g., `red`), lengths (e.g., `px`, `em`), percentages (e.g., `50%`), colors (e.g., `#ff0000`, `rgb(255, 0, 0)`)

3. **Inline, Internal, and External CSS (20 minutes)**
   - **Inline CSS:**
     - Example:
       ```html
       <p style="color: blue;">This is a blue paragraph.</p>
       ```
     - Pros and cons of inline CSS.
   - **Internal CSS:**
     - Example:
       ```html
       <style>
         p {
           color: green;
         }
       </style>
       ```
     - Use cases and limitations.
   - **External CSS:**
     - Linking an external stylesheet:
       ```html
       <link rel="stylesheet" href="styles.css">
       ```
     - Benefits of using external CSS for larger projects and maintainability.

4. **CSS Box Model (30 minutes)**
   - **Understanding the Box Model:**
     - Components: content, padding, border, margin
     - Example:
       ```css
       div {
         width: 100px;
         padding: 10px;
         border: 5px solid black;
         margin: 20px;
       }
       ```
   - **Visual Representation:**
     - How the box model affects layout and spacing.
   - **Exercise:**
     - Task: Create a simple layout using the box model.
     - Students will style a set of `<div>` elements with different padding, border, and margin values.

5. **Text Styling (20 minutes)**
   - **Text Properties:**
     - `font-family`, `font-size`, `font-weight`, `font-style`, `text-align`, `text-decoration`, `line-height`
   - **Example:**
     ```css
     h1 {
       font-family: 'Arial', sans-serif;
       font-size: 24px;
       font-weight: bold;
       text-align: center;
       text-decoration: underline;
     }
     ```
   - **Exercise:**
     - Task: Style a block of text with various font and text properties.
     - Students will practice applying different styles to headings and paragraphs.

6. **Mini Project: Personal Blog Page (30 minutes)**
   - **Project Description:**
     - Create a simple personal blog page using HTML and CSS.
     - Focus on styling text, layout, and basic page design.
   - **Requirements:**
     - A header with the blog title.
     - A navigation bar styled using CSS.
     - A main content area with styled paragraphs and images.
     - A footer with contact information.
   - **Live Coding Session:**
     - Demonstrate building the blog page step-by-step, focusing on applying CSS.
     - Encourage students to experiment with different styles and layouts.

7. **Q&A and Summary (10 minutes)**
   - Recap of key concepts covered in the lecture.
   - Open floor for questions and clarifications.
   - Provide additional resources for further study:
     - [MDN Web Docs on CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
     - [CSS Tricks](https://css-tricks.com/)

#### Interactive Elements

- **Live Coding Sessions:**
  - Demonstrate key concepts, such as using selectors and properties.
  - Show the effects of different styling choices in real-time.

- **Hands-On Exercises:**
  - Applying CSS to style forms, tables, and text elements.
  - Exploring different types of selectors and their specificity.

- **Mini Project:**
  - Personal blog page design, allowing students to apply their knowledge creatively.
  - Offer support and suggestions for layout and styling.

#### Feedback Mechanism

- **Survey:**
  - Collect feedback on the lecture's clarity, pace, and content.
  - Adjust future lectures based on student responses.

- **Project Guidance:**
  - Provide ongoing support for the mini-project.
  - Encourage students to explore CSS properties and be creative.

#### Continuous Improvement

- **Review Feedback:**
  - Analyze student feedback and performance on exercises and the mini-project.
  - Make necessary adjustments to the course content and teaching approach.

This action plan aims to provide students with a solid foundation in CSS, emphasizing practical application and creative exploration. By the end of this lecture, students will be able to style web pages using various CSS techniques.