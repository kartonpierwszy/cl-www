const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const subMenu = document.querySelector('.sub-menu');

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
  // console.log('ok');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
