const projectDataImgSrcPath = 'src/assets/media/projects-src/';

const projectsdb = {
  project_1: {
    id: 1,
    data: {
      img: {
        src: `${projectDataImgSrcPath}youtube-clone-preview.JPG`,
        alt: 'youtube clone preview'
      },
      name: {
        name1: 'Youtube Clone',
        name2: 'Layout and Styles only'
      },
      description: `The youtube clone webpage was a project to consolidate HTML
      layouts as well as CSS styles, in order to fully
      copy 2023's youtube video player webpage.`,
      stack: ['JavaScript', 'HTML', 'CSS'],
      liveVersionHref: 'https://iturres.github.io/project_media_TOP/',
      sourceCodeHref: 'https://github.com/ITurres/project_media_TOP'
    }
  },
  project_2: {
    id: 2,
    data: {
      img: {
        src: `${projectDataImgSrcPath}text-encrypter-preview.JPG`,
        alt: 'text encryptor preview'
      },
      name: {
        name1: 'Text Encryptor',
        name2: 'Webpage'
      },
      description: `This project was a learning project for the Programming Course
      provided by Oracle + Alura Latam.
      The project consisted of creating a text encryption program 
      with JavaScript. In turn, once the logic of the program is finished,
       structure the page with HTML and give it life with CSS.`,
      stack: ['JavaScript', 'HTML', 'CSS'],
      liveVersionHref: 'https://iturres.github.io/Project_Encryptor/',
      sourceCodeHref: 'https://github.com/ITurres/Project_Encryptor'
    }
  },
  project_3: {
    id: 3,
    data: {
      img: {
        src: `${projectDataImgSrcPath}theDungeonsGame-preview.JPG`,
        alt: 'the dungeons game preview'
      },
      name: {
        name1: 'The Dungeons',
        name2: 'Game'
      },
      description: `The game is based on the Hang-Man game!.
      You have 7 lives and you must guess the correct characters
      that form the Winner word, for every life you lose,
      there goes your extremities, if you get to form
      the word before they hang you, you get King Arthur's Sword.`,
      stack: ['JavaScript', 'HTML', 'CSS'],
      liveVersionHref: 'https://iturres.github.io/The-Dungeons-Game/',
      sourceCodeHref: 'https://github.com/ITurres/The-Dungeons-Game'
    }
  },
  project_4: {
    id: 4,
    data: {
      img: {
        src: `${projectDataImgSrcPath}portfolio1-preview.JPG`,
        alt: 'emanuel portfolio preview'
      },
      name: {
        name1: 'Emanuel Portfolio',
        name2: 'Webpage'
      },
      description: `My first Portfolio!, was a project that helped me to
      understand and learn more about JavaScript, as well as
      CSS animations and transitions and much more.`,
      stack: ['JavaScript', 'HTML', 'CSS'],
      liveVersionHref: 'https://iturres.github.io/Emanuel-Portfolio/',
      sourceCodeHref: 'https://github.com/ITurres/Emanuel-Portfolio'
    }
  },
  project_5: {
    id: 5,
    data: {
      img: {
        src: `${projectDataImgSrcPath}theTimeMeister-website-preview.JPG`,
        alt: 'the time meister website preview'
      },
      name: {
        name1: 'The Time Meister',
        name2: 'E-commerce'
      },
      description: `The Time Meister e-commerce is a website that resembles
      the rolex.com site, was a project to continue learning
      and practicing the technologies listed above as well
      as to follow an established design.`,
      stack: ['JavaScript', 'Node.js', 'HTML', 'CSS'],
      liveVersionHref: 'https://iturres.github.io/ttm-e-commerce/',
      sourceCodeHref: 'https://github.com/ITurres/ttm-e-commerce'
    }
  },
  project_6: {
    id: 6,
    data: {
      img: {
        src: `${projectDataImgSrcPath}notes-web-app-preview.JPG`,
        alt: 'notes webb app preview'
      },
      name: {
        name1: 'Notes',
        name2: 'Web App'
      },
      description: `“Notes” is my cs50x final project Web Application. 
      It is a basic web app that resembles a bit like 'Notes' from iCloud,
      and where you can create an account, sign in and start creating,
      updating, and deleting your notes, plus search for specific ones given their content.`,
      stack: ['Python', 'Flask', 'JavaScript', 'SQLite', 'HTML', 'CSS'],
      liveVersionHref: 'https://www.youtube.com/watch?v=UJucGYwoDCA',
      sourceCodeHref: 'https://github.com/ITurres/Notes-Web-App'
    }
  }
};

export default projectsdb;
