const navL = document.querySelector('.navbar')
const logo = document.querySelector('.nav-change')

window.addEventListener('scroll' , () => {
    if(window.scrollY >= 90) {
        navL.classList.add('navbar-scrolled');
        navL.classList.remove('nav-change');
    } else if(window.scrollY < 80) {
        navL.classList.remove('navbar-scrolled');
    }
});