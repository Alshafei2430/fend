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

const handleLinkClick = (e) => {
    e.preventDefault()
    const sectionId = e.target.dataset.sectionId
    const section = document.getElementById(sectionId)
    window.scrollTo({
        top: section.offsetTop,
        left: section.offsetLeft,
        behavior: 'smooth'
    })
    section.setAttribute("class", "active")

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const sectionsList = document.querySelectorAll("main > section")
const ulNavList = document.querySelector("#navbar__list")
sectionsList.forEach(section => {
    const link  = document.createElement("a");
    link.href = `#${section.id}`;
    const sectionId = section.id;
    link.addEventListener("click", handleLinkClick)
    const newListItem = document.createElement("li");
    newListItem.textContent = section.dataset.nav;
    newListItem.dataset.sectionId = sectionId;
    newListItem.setAttribute("class", "menu__link");
    link.appendChild(newListItem);

    ulNavList.appendChild(link)    
});



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


