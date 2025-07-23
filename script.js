// script.js - JavaScript for menu toggle and form handling
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
  // Add form submission handling if needed
});
