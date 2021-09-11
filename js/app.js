/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */




/**
 * End Global Variables
 * Start Helper Functions
 *
 */
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav, creating "li" insinde the "ul" and assign a text for each li then creat link ("a")
const sections = document.querySelectorAll("section");
for (let i = 0; i < sections.length; i++) {
  let newLi = sections[i].getAttribute("data-nav");
  let list = document.createElement("LI");
  list.innerText = newLi;
  list.classList.add("menu__link"); // add class to the links when mouse-hover
  document.getElementById("navbar__list").appendChild(list);
  let a = document.createElement("a");
  a.appendChild(list);
  a.title = newLi;
  a.href = "#newLi";
  document.getElementById("navbar__list").appendChild(a);
  // Scroll to section on link click
  function myFunction(i) {
    list.addEventListener("click", () => {
      event.preventDefault()
      sections[i].scrollIntoView({
        behavior: "smooth"
      });
    });
  }
  myFunction(i);
}
// Add class 'active' to section when near top of viewport
function addActiveClass() {
  for (let i = 0; i < sections.length; i++) {
    //define the boundries of the current section that will be highlighted when scroll event occurs.(Applied on every section)
    const sectionTop = sections[i].getBoundingClientRect().top; //Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    sections[i].classList.remove("active");
    if (sectionTop >= 0 && sectionTop <= 250) {
      sections[i].classList.add("active");
    };
  };
}
window.addEventListener("scroll", addActiveClass);
//window.addEventListener("click", addActiveClass);
addActiveClass(); //calling the function
//END of JS code.





// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
