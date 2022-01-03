const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
});

// BUTTONS ANIMATION
const btn = document.getElementById('btn');
const borderTopLeft = getElementById('border-top-left:hover');

btn.addEventListener('mouseover', () => {
  borderTopLeft.classList.toggle('show');
});
