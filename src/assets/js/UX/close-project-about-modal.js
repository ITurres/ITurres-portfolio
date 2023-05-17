const closeModal = (projectAboutModalHolder) => {
  const closeProjectAboutModalButton = document.querySelector(
    '[data-close-project-about]'
  );
  closeProjectAboutModalButton.addEventListener('click', () => {
    projectAboutModalHolder.style.display = 'none';
  });
};

export default closeModal;
