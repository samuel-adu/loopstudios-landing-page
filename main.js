const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);

  // Toggle the navigation open class
  nav.classList.toggle('nav--open');

  // Toggle icons
  const menuIcon = menuToggle.querySelector('.menu-icon');
  const closeIcon = menuToggle.querySelector('.close-icon');

  if (isExpanded) {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Close the menu when a link is clicked
    nav.classList.remove('nav--open');
    menuToggle.setAttribute('aria-expanded', false);

    // Swap icons back to the hamburger
    const menuIcon = menuToggle.querySelector('.menu-icon');
    const closeIcon = menuToggle.querySelector('.close-icon');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
});
