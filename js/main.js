// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // Get elements by their classes or IDs
  const navL = document.querySelector('.navbar');  // Navbar element
  const logo1 = document.getElementById('logo1');  // Logo 1 element
  const logo2 = document.getElementById('logo2');  // Logo 2 element
  const navbarNav = document.querySelector('.navbar');  // Navbar element (again)

  // Function to update navbar color on scroll
  function updateNavbarColor() {
    if (window.scrollY >= 90) {
      // When scrolled, add classes and styles
      navL.classList.add('navbar-scrolled');  // Add scrolled class to navbar
      logo1.style.display = 'none';  // Hide logo 1
      logo2.style.display = 'block';  // Show logo 2
      navbarNav.classList.add('navbar-color-change');  // Add color change class to navbar
      document.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '#414f6b';  // Change color of navigation links
      });
    } else {
      // When not scrolled, remove classes and styles
      navL.classList.remove('navbar-scrolled');  // Remove scrolled class from navbar
      logo1.style.display = 'block';  // Show logo 1
      logo2.style.display = 'none';  // Hide logo 2
      navbarNav.classList.remove('navbar-color-change');  // Remove color change class from navbar
      document.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '#ffffff';  // Reset color of navigation links
      });
    }
  }

  // Listen for scroll event and call updateNavbarColor function
  window.addEventListener('scroll', updateNavbarColor);

  // Function to remove accordion toggle based on window width
  function removeAccordionToggle() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    if (window.innerWidth >= 576) {
      // If window width is greater than or equal to 576px
      accordionItems.forEach(item => {
        item.querySelector('.accordion-header').style.display = 'none';  // Hide accordion header
        item.querySelector('.accordion-button').style.display = 'none';  // Hide accordion button

        const collapseElement = item.querySelector('.accordion-collapse');
        collapseElement.classList.add('show');  // Add show class to accordion collapse element
        collapseElement.style.height = 'auto';  // Set height to auto for accordion collapse
      });
    } else {
      // If window width is less than 576px
      accordionItems.forEach(item => {
        item.querySelector('.accordion-header').style.display = 'block';  // Show accordion header
        item.querySelector('.accordion-button').style.display = 'block';  // Show accordion button

        const collapseElement = item.querySelector('.accordion-collapse');
        collapseElement.classList.remove('show');  // Remove show class from accordion collapse element
        collapseElement.style.height = '0';  // Set height to 0 for accordion collapse
      });
    }
  }

  // Initial call to removeAccordionToggle function
  removeAccordionToggle();

  // Listen for resize event and call removeAccordionToggle function
  window.addEventListener('resize', removeAccordionToggle);
});
