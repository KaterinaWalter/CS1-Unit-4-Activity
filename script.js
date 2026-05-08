// Create a boolean variable to track current mode
let darkMode = false;

/* NEW JS FUNCTION: document.querySelector()
   lets us SELECT an HTML ELEMENT and store
   a reference (pointer) to it in a VARIABLE
*/
const body = document.querySelector("body");

// heading is a VARIABLE that points to the h1 ELEMENT with id="main-heading" -> just like CSS selection!
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");

// JS can now change attributes & properties 
heading.textContent = "Light & Dark Mode Website"; 
heading.style.color = "hotpink";
description.style.color = "plum"; 

// Define what happens when button is clicked
function toggleMode() {
   console.log("triggered function");
   // 1. Flip the boolean variable to track mode
   darkMode = !darkMode;
   console.log(darkMode);
   // 2. Conditionally apply styles depending on mode
   if (darkMode == true) {
      console.log("apply dark styles");
      body.style.background = "black";
      heading.style.color = "rgb(155, 155, 155)";
      description.style.color = "white";
      description.textContent = "Welcome to the dark side 🌙💫";
      toggleBtn.textContent = "Switch to Light";
   }
   else {
      console.log("apply light styles");
      body.style.background = "white";
      heading.style.color = "rgb(50, 50, 50)";
      description.style.color = "black";
      description.textContent = "Welcome to the bright side 🌈☀️";
      toggleBtn.textContent = "Switch to Dark";
   }
}

// Attach function to the actual button
toggleBtn.addEventListener("click", toggleMode);