// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const btnBurger = document.getElementById('btn-burger');
  const navLinks = document.querySelector('.nav-links');

  btnBurger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});