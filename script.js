// Create a boolean variable to track mode
let darkMode = false;

/* NEW FUNCTION: document.querySelector()
   lets you select any HTML element
   using its tag, class, or id
*/

// const (not let) to store references to HTML elements (like pointers that don't change)
const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");

// Change HTML & CSS properties of these elements
heading.textContent = "Light Mode & Dark Mode Website";
heading.style.color = "purple"; // JS wrote CSS code!