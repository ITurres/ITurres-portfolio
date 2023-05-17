export const projectCardMarkupTemplate = (...projectsData) => {
  const projectsDataData = projectsData[0];
  return `<div class="projects-card">
    <img src=${projectsDataData.src} alt=${projectsDataData.alt} class='projects-card__img' />
    <div class='projects-card__title--wrapper'>
      <h1 class="projects-card__title">${projectsDataData.name1}</h1>
      <h2 class="projects-card__title">${projectsDataData.name2}</h2>
    </div>
    <ul class="projects-card__tech-stack--wrapper" data-tech-stack-holder>
      <!-- tech-stack will be auto injected -->
    </ul>
    <button
      id="${projectsDataData.id}"
      class="my-custom-button my-btn"
      >See project</
    button>
  </div>`;
};

export const techStackMarkupTemplate = (techStack) => {
  let currentTechStack = '';
  techStack.forEach((stackName) => {
    currentTechStack += `<li class="projects-card__tech-stack">${stackName}</li>`;
  });
  return currentTechStack;
};
