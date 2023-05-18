import projectsdb from '../../db/projects-db.js';
import {
  projectCardMarkupTemplate,
  techStackMarkupTemplate
} from '../markup-templates/project-card-markup-template.js';

const projectsCardHolder = document.querySelector(
  '[data-projects-cards-holder]'
);

const techStackElements = [];

Object.values(projectsdb).forEach((project) => {
  projectsCardHolder.innerHTML += projectCardMarkupTemplate({
    src: project.data.img.src,
    alt: project.data.img.alt,
    name1: project.data.name.name1,
    name2: project.data.name.name2,
    id: project.id
  });
  techStackElements.push(techStackMarkupTemplate(project.data.stack));
});

const techStackHolder = document.querySelectorAll('[data-tech-stack-holder]');

techStackHolder.forEach((holder) => {
  holder.innerHTML = techStackElements.shift();
});
