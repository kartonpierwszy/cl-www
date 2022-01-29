// const hamburger = document.querySelector('.hamburger');
// const Menu = document.querySelector('.menu');
// const subMenu = document.querySelector('.sub-menu');

// hamburger.addEventListener('click', function () {
//   Menu.classList.toggle('active');
//   hamburger.classList.toggle('active');
// });

// document.querySelectorAll('.nav-link').forEach((n) =>
//   n.addEventListener('click', () => {
//     hamburger.classList.remove('active');
//     Menu.classList.remove('active');
//   })
// );
//finish first v

// OK
const openCloseNavMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const subSzkolenia = document.querySelector('.sub-szkolenia');
const subMenuSzkolenia = document.querySelector('.sub-menu-szkolenia');
const subZabiegi = document.querySelector('.sub-zabiegi');
const subMenuZabiegi = document.querySelector('.sub-menu-zabiegi');
// const screenSize = 769;

// Open/close mobile menu on click hamburger icon
openCloseNavMenu.addEventListener('click', toggleNav);

function toggleNav() {
  navMenu.classList.toggle('open');
  openCloseNavMenu.classList.toggle('active');
}

// Collapse submenu for szkolenia & zabiegi link
subSzkolenia.addEventListener('click', subMenuSzkoleniaCollapse);
subZabiegi.addEventListener('click', subMenuZabiegiCollapse);

function subMenuSzkoleniaCollapse() {
  subMenuSzkolenia.classList.toggle('active');
}
function subMenuZabiegiCollapse() {
  subMenuZabiegi.classList.toggle('active');
}
