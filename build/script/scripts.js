const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
});

//Buttons hover animation
// const buttonLink = document.getElementById('button-link');
// const borderTopLeft = getElementById('border-top-left', ':hover');

// buttonLink.addEventListener('onmouseover', () => {
//   borderTopLeft.classList.toggle('show');
// });
