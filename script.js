let mainNav = document.querySelector('.navbar');

let navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('navbar--open');
});