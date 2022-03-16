const openCloseNavMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const Menu = document.querySelector('.menu');
const subSzkolenia = document.querySelector('.sub-szkolenia');
const subMenuSzkolenia = document.querySelector('.sub-menu-szkolenia');
const subZabiegi = document.querySelector('.sub-zabiegi');
const subMenuZabiegi = document.querySelector('.sub-menu-zabiegi');
const arrowSzkolenia = document.querySelector('.arrow-szkolenia');
const arrowZabiegi = document.querySelector('.arrow-zabiegi');
// const arrow = document.querySelector('.arrow');
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
  arrowSzkolenia.classList.toggle('active');
}
function subMenuZabiegiCollapse() {
  subMenuZabiegi.classList.toggle('active');
  arrowZabiegi.classList.toggle('active');
}

// Closing menu, when click on any links from menu
// document.querySelectorAll('.menu').forEach((n) =>
//   n.addEventListener('click', () => {
//     navMenu.classList.remove('open');
//     subMenuSzkolenia.remove('active');
//     subMenuZabiegi.remove('active');
//   })
// );

function closeMenu() {
  document.querySelectorAll('.hamburger', '.menu').forEach((n) =>
    n.addEventListener('click', () => {
      navMenu.classList.remove('open');
      subMenuSzkolenia.remove('active');
      subMenuZabiegi.remove('active');
    })
  );
}

// function collapseNavMenu() {
//   navMenu.querySelector('.navMenu.open').classList.remove('.open');
// }

// function resizeFix() {
//   if (navMenu.classList.contains('open')) {
//     collapseNavMenu();
//   }
//   if (navMenu.querySelector('.navMenu.open')) {
//     collapseNavMenu();
//   }
// }

// window.addEventListener('resize', function () {
//   if (this.innerWidth > screenSize) {
//     resizeFix();
//     // navMenu.classList.remove('open');
//   }
// });
