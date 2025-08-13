// script.js
// Handles navigation toggle for mobile view. When the burger icon is clicked
// the navigation links slide in from the right. This script is shared across
// all pages of the AMRvisuals portfolio site.

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});