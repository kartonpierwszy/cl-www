const openCloseNavMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const menuLink = document.querySelector('.menu-link');
const subMenu = document.querySelector('.sub-menu');
// const screenSize = 769;

// openCloseNavMenu.addEventListener('click', function () {
//   navMenu.classList.toggle('active');
//   openCloseNavMenu.classList.toggle('active');
// });
openCloseNavMenu.addEventListener('click', toggleNav);

function toggleNav() {
  navMenu.classList.toggle('open');
  openCloseNavMenu.classList.toggle('active');
}
// document.querySelectorAll('.menuLink').forEach((n) =>
//   n.addEventListener('click', () => {
//     navMenu.classList.remove('active');
//   })
// );

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
