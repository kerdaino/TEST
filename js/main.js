document.addEventListener('DOMContentLoaded', function() {
  const navL = document.querySelector('.navbar');
  const logo1 = document.getElementById('logo1');
  const logo2 = document.getElementById('logo2');
  const navbarNav = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 90) {
      navL.classList.add('navbar-scrolled');
      logo1.style.display = 'none';
      logo2.style.display = 'block';
      navbarNav.classList.add('navbar-color-change');
    } else if (window.scrollY < 90) {
      navL.classList.remove('navbar-scrolled');
      logo1.style.display = 'block';
      logo2.style.display = 'none';
      navbarNav.classList.remove('navbar-color-change');
    }
  });
});
