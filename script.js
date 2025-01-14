
// Select the menu and button elements
const toggleMenu = document.getElementById('toggleMenu');
const menuItems = document.getElementById('menuItems');

// Add an event listener to toggle the visibility of the menu
toggleMenu.addEventListener('click', () => {
  menuItems.style.display = menuItems.style.display === 'none' ? 'block' : 'none';
});

// Initially hide the menu items
menuItems.style.display = 'none';

// Function to adjust page scaling based on screen width
function adjustScaling() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    document.body.style.transform = "scale(0.5)";
    document.body.style.transformOrigin = "0 0";
  } else if (window.matchMedia("(min-width: 600px) and (max-width: 700px)").matches) {
    document.body.style.transform = "scale(0.75)";
    document.body.style.transformOrigin = "0 0";
  } else if (window.matchMedia("(min-width: 700px) and (max-width: 767px)").matches) {
    document.body.style.transform = "scale(0.8)";
    document.body.style.transformOrigin = "0 0";
  } else if (window.matchMedia("(min-width: 992px) and (max-width: 1600px)").matches) {
    document.body.style.transform = "scale(0.9)";
    document.body.style.transformOrigin = "0 0";
  } else {
    document.body.style.transform = "scale(1)";
    document.body.style.transformOrigin = "0 0";
  }
}

// Call the function on page load and whenever the window is resized
window.addEventListener('load', adjustScaling);
window.addEventListener('resize', adjustScaling);
