export const projectAboutModal = (...projectsData) => {
  const projectsDataData = projectsData[0];
  return `<div class="modal-content">
      <div class="modal-close-btn--wrapper" data-close-project-about>
        <button class="my-btn"><i class="fa-solid fa-x"></i></button>
      </div>
      <img src="${projectsDataData.img.src}" alt="${projectsDataData.img.alt}" class="modal-project-image" />
      <div class="modal-main-data">
        <h1 class="modal-project-title">${projectsDataData.name.name1} ${projectsDataData.name.name2}</h1>
        <ul
          class="modal-ul projects-card__tech-stack--wrapper"
          data-modal-tech-stack-holder
        >
          <!-- tech-stack will be auto injected -->
        </ul>
        <p class="modal-projects-description">${projectsDataData.description}</p>
        <nav>
          <ul class="modal-links--wrapper">
            <li>
              <a
                href="${projectsDataData.liveVersionHref}"
                target="_blank"
                rel="noopener noreferrer"
                class="my-custom-button modal-link"
              >
                See live
                <img
                  src="src/assets/media/sections-illustrations/social-icons/see-live-icon.png"
                  alt="circle and arrow icon"
                />
              </a>
            </li>
            <li>
              <a
                href="${projectsDataData.sourceCodeHref}"
                target="_blank"
                rel="noopener noreferrer"
                class="my-custom-button modal-link"
              >
                See source
                <img
                  src="src/assets/media/sections-illustrations/social-icons/github-white.png"
                  alt="github white icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>`;
};

export const modalTechStackMarkupTemplate = (stackName) => `<li class="projects-card__tech-stack">${stackName}</li>`;
