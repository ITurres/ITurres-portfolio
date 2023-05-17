import projectsdb from '../../db/projects-db.js';
import {
  projectAboutModal,
  modalTechStackMarkupTemplate
} from '../markup-templates/project-about-modal-markup-template.js';
import closeModal from '../UX/close-project-about-modal.js';

const seeProjectButtons = document.querySelectorAll('[data-see-project-btn]');
const projectAboutModalHolder = document.querySelector('[data-modal-holder]');

const injectProjectAboutModalTemplate = (projectsData) => {
  projectAboutModalHolder.innerHTML = projectAboutModal(projectsData);
  projectAboutModalHolder.style.display = 'block';
  const modalTechStackHolder = document.querySelector(
    '[data-modal-tech-stack-holder]'
  );
  projectsData.stack.forEach((stackName) => {
    modalTechStackHolder.innerHTML += modalTechStackMarkupTemplate(stackName);
  });

  closeModal(projectAboutModalHolder);
  /* ? ^^^^ when the project about modal has been 
  ? created, only then it can listen for its close button click */
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
