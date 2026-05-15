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
const image = document.querySelector("#image");
const emoji = document.querySelector("#emoji");

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
      image.src = "dark.png";
      emoji.classList.remove("animated");
   }
   else {
      console.log("apply light styles");
      body.style.background = "white";
      heading.style.color = "rgb(50, 50, 50)";
      description.style.color = "black";
      description.textContent = "Welcome to the bright side 🌈☀️";
      toggleBtn.textContent = "Switch to Dark";
      image.src = "light.png";
      emoji.classList.remove("animated");
   }
}

// Attach function to the actual button
toggleBtn.addEventListener("click", toggleMode);





// REVIEW
// 1. Select an HTML element for JS to target
const hackerBtn = document.querySelector("#hacker");
// 2. Attach click event listener to trigger a function
hackerBtn.addEventListener("click", setHackerMode);
// 3. Define what happens when event triggers function
function setHackerMode() {
   body.style.background = "linear-gradient(black, grey)";
   body.style.fontFamily = "monospace";
   description.style.color = "rgb(64, 255, 0)";
   description.textContent = "YOU HAVE BEEN HACKED ☹️";
   image.src = "hackerman.webp";
   heading.textContent = "UH OH!";
   // MORE CSS IDEAS:
   heading.style.background = "url(neonlights.jpg)";
   heading.style.backgroundSize = "cover";
   heading.style.margin = "20px";
   heading.style.textShadow = "0px 0px 5px white";
   heading.style.boxShadow = "0px 0px 10px hotpink";
   heading.style.border = "2px solid white";
   heading.style.borderRadius = "5px";
   emoji.classList.add("animated");
}










