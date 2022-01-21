const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.menu');
const subMenu = document.querySelector('.sub-menu');

hamburger.addEventListener('click', function () {
  Menu.classList.toggle('active');
  hamburger.classList.toggle('active');
  // console.log('ok');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    Menu.classList.remove('active');
  })
);
