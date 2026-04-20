const menu = document.querySelector('.page-nav');
const menuToggle = document.querySelector('.page-nav__toggle');

menuToggle.onclick = function() {
  menu.classList.toggle('page-nav--opened');
  menu.classList.toggle('page-nav--closed');
};
