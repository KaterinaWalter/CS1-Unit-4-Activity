// Create a boolean variable to track current mode
let darkMode = false;

/* NEW JS FUNCTION: document.querySelector()
   lets us SELECT an HTML ELEMENT and store
   a reference to it in a VARIABLE
*/

// select by tag type
const body = document.querySelector("body");
// heading is a VARIABLE that points to the h1 ELEMENT with an id="main-heading" -> just like CSS selection!
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");

// JS can now change attributes & properties 
heading.textContent = "Light & Dark Mode Website"; 
heading.style.color = "purple"; 


