const toggleProjectsSection = () => {
  const projectsContainer = document.querySelector(
    '[data-projects-cards-holder]'
  );
  projectsContainer.classList.toggle('recent-works--expand');
};

const toggleExpandCollapse = () => {
  const toggleProjectsSpan = document.querySelector('#toggle-projects-span');
  const toggleProjectsButtonFA = document.querySelector(
    '#toggle-projects-button-i'
  );
  const toggleProjectsSpanText = toggleProjectsSpan.innerHTML;
  const isExpanded = toggleProjectsSpanText === 'See less';

  toggleProjectsSpan.innerHTML = isExpanded ? 'See more' : 'See less';

  if (isExpanded) {
    toggleProjectsButtonFA.classList.remove('fa-chevron-up');
    toggleProjectsButtonFA.classList.add('fa-chevron-down');
  } else {
    toggleProjectsButtonFA.classList.remove('fa-chevron-down');
    toggleProjectsButtonFA.classList.add('fa-chevron-up');
  }
};

document.querySelector('#toggle-projects').addEventListener('click', () => {
  toggleProjectsSection();
  toggleExpandCollapse();
});
