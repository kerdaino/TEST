document.addEventListener('DOMContentLoaded', function() {
  const navL = document.querySelector('.navbar');
  const logo1 = document.getElementById('logo1');
  const logo2 = document.getElementById('logo2');
  const navbarNav = document.querySelector('.navbar');

  function updateNavbarColor() {
    if (window.scrollY >= 90) {
      navL.classList.add('navbar-scrolled');
      logo1.style.display = 'none';
      logo2.style.display = 'block';
      navbarNav.classList.add('navbar-color-change');
      document.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '#414f6b';
      });
    } else {
      navL.classList.remove('navbar-scrolled');
      logo1.style.display = 'block';
      logo2.style.display = 'none';
      navbarNav.classList.remove('navbar-color-change');
      document.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '#ffffff';
      });
    }
  }

  window.addEventListener('scroll', updateNavbarColor);

  function removeAccordionToggle() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    if (window.innerWidth >= 576) {
      accordionItems.forEach(item => {
        item.querySelector('.accordion-header').style.display = 'none';
        item.querySelector('.accordion-button').style.display = 'none';

        const collapseElement = item.querySelector('.accordion-collapse');
        collapseElement.classList.add('show');
        collapseElement.style.height = 'auto';
      });
    } else {
      accordionItems.forEach(item => {
        item.querySelector('.accordion-header').style.display = 'block';
        item.querySelector('.accordion-button').style.display = 'block';

        const collapseElement = item.querySelector('.accordion-collapse');
        collapseElement.classList.remove('show');
        collapseElement.style.height = '0';
      });
    }
  }

  removeAccordionToggle();

  window.addEventListener('resize', removeAccordionToggle);
});
