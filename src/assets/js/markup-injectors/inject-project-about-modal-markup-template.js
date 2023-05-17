import projectsdb from '../../db/projects-db.js';
import {
  projectAboutModal,
  modalTechStackMarkupTemplate
} from '../markup-templates/project-about-modal-markup-template.js';

const seeProjectButtons = document.querySelectorAll('[data-see-project-btn]');
const projectAboutModalHolder = document.querySelector('.modal');

const injectProjectAboutModalTemplate = (projectsData) => {
  projectAboutModalHolder.innerHTML = projectAboutModal(projectsData);
  projectAboutModalHolder.style.display = 'block';
  const modalTechStackHolder = document.querySelector(
    '[data-modal-tech-stack-holder]'
  );
  projectsData.stack.forEach((stackName) => {
    modalTechStackHolder.innerHTML += modalTechStackMarkupTemplate(stackName);
  });
};

const checkIfButtonIdMatchesProjectId = (buttonId) => {
  Object.values(projectsdb).forEach((project) => {
    if (Number(buttonId) === project.id) {
      return injectProjectAboutModalTemplate(project.data);
    }
    return false;
  });
};

seeProjectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    checkIfButtonIdMatchesProjectId(button.id);
  });
});
