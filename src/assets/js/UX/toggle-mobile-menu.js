const navbar = document.querySelector('[data-my-navbar]');
const toggleNavbarMenuButtons = document.querySelectorAll(
  '[data-button-toggle-navbar-menu]'
);
const toggleNavbarMenuLinks = document.querySelectorAll(
  '[data-links-toggle-navbar-menu]'
);

const toggleMobileMenu = () => {
  navbar.classList.toggle('toggle-mobile-menu');
};

const toggleMobileMenuLinksVisibility = () => {
  navbar.children[0].classList.toggle('hidden'); // ? toggles the ul classlist
};

const toggleCloseOpenButtons = () => {
  toggleNavbarMenuButtons.forEach((button) => {
    button.classList.toggle('hidden');
  });
};

toggleNavbarMenuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleMobileMenu();
    toggleMobileMenuLinksVisibility();
    toggleCloseOpenButtons();
  });
});

toggleNavbarMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      toggleMobileMenu();
      toggleMobileMenuLinksVisibility();
      toggleCloseOpenButtons();
    }
  });
});
