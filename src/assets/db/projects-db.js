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
      description: `&#127909; The youtube clone webpage was a project to consolidate HTML
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
      description: `&#128274; This project was a learning project for the Programming Course
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
      description: `&#x2694; The game is based on the Hang-Man game!.
      You have 7 lives and you must guess the correct characters
      that form the Winner word, for every life you lose,
      there goes your extremities, if you get to form
      the word before they hang you, you get King Arthur's Sword. &#x2694;`,
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
      description: `&#8986; The Time Meister e-commerce is a website that resembles
      the rolex.com site, was a project to continue learning
      and practicing the technologies listed above as well
      as to follow an established design. &#128722;`,
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
      description: `&#128221; “Notes” is my cs50x final project Web Application. 
      It is a basic web app that resembles a bit like 'Notes' from iCloud,
      and where you can create an account, sign in and start creating,
      updating, and deleting your notes, plus search for specific ones given their content.`,
      stack: ['Python', 'Flask', 'JavaScript', 'SQLite', 'HTML', 'CSS'],
      liveVersionHref: 'https://www.youtube.com/watch?v=UJucGYwoDCA',
      sourceCodeHref: 'https://github.com/ITurres/Notes-Web-App'
    }
  },
  project_7: {
    id: 7,
    data: {
      img: {
        src: `${projectDataImgSrcPath}ferrari-racing-website-preview.JPG`,
        alt: 'ferrari racing website preview'
      },
      name: {
        name1: 'Ferrari',
        name2: 'Racing Website'
      },
      description: `&#127937; Ferrari Racing Website is a mockup website to practice
      markup, styles and dynamic markup injection,
      Understanding Medium-fidelity wireframes,
      follow written requirements (e.g. user stories), and much more.`,
      stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      liveVersionHref: 'https://iturres.github.io/Ferrari-Racing-Website/',
      sourceCodeHref: 'https://github.com/ITurres/Ferrari-Racing-Website'
    }
  },
  project_8: {
    id: 8,
    data: {
      img: {
        src: `${projectDataImgSrcPath}awesome-books-preview.JPG`,
        alt: 'awesome books preview'
      },
      name: {
        name1: 'Awesome Books',
        name2: ''
      },
      description: `&#128218; A basic website that allows users to add/remove books from a list.
        The learning objectives were to understand different ways to create objects, intro
        to CRUD and more.`,
      stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      liveVersionHref: 'https://iturres.github.io/Awesome-Books/',
      sourceCodeHref: 'https://github.com/ITurres/Awesome-Books'
    }
  },
  project_9: {
    id: 9,
    data: {
      img: {
        src: `${projectDataImgSrcPath}task-manager-preview.JPG`,
        alt: 'task manager preview'
      },
      name: {
        name1: 'Task Manager',
        name2: ''
      },
      description: `&#9997; Task Manager is a tool that helps to organize your day.
      It simply lists the things that you need to do and allows you to mark
      them as complete. &#x1F9EA; Tested with Jest &#x1F9EA;.`,
      stack: ['JavaScript', 'Jest', 'HTML', 'SASS', 'Bootstrap'],
      liveVersionHref: 'https://iturres.github.io/Task-Manager/dist/',
      sourceCodeHref: 'https://github.com/ITurres/Task-Manager'
    }
  },
  project_10: {
    id: 10,
    data: {
      img: {
        src: `${projectDataImgSrcPath}leaderboard-preview.JPG`,
        alt: 'leaderboard preview'
      },
      name: {
        name1: 'Leaderboard',
        name2: ''
      },
      description: `&#127942; The leaderboard website displays scores
      submitted by different players. It also allows you to submit
      your score. All data is preserved thanks to the external
      &#128279; Leaderboard <strong>API</strong>.`,
      stack: ['JavaScript', 'HTML', 'SASS', 'Bootstrap', 'API consumer'],
      liveVersionHref: 'https://iturres.github.io/Leaderboard/dist/',
      sourceCodeHref: 'https://github.com/ITurres/Leaderboard'
    }
  },
  project_11: {
    id: 11,
    data: {
      img: {
        src: `${projectDataImgSrcPath}tvmaze-preview.JPG`,
        alt: 'tvmaze shows website preview'
      },
      name: {
        name1: 'TVMaze',
        name2: 'Shows'
      },
      description: `&#127909; TVMaze was a Team project. An SPA website where you can see top
       shows related info taken from <strong><i>TVmaze<i/> API</strong>. You can also like
      them,
      and add comments thanks to the <strong><i>Involvement</i> API</strong>.`,
      stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'API consumer'],
      liveVersionHref: 'https://iturres.github.io/TVmaze-shows-website/dist/',
      sourceCodeHref: 'https://github.com/ITurres/TVmaze-movies-website'
    }
  },
  project_12: {
    id: 12,
    data: {
      img: {
        src: `${projectDataImgSrcPath}math-magicians-preview.JPG`,
        alt: 'math magicians preview'
      },
      name: {
        name1: 'Math Magicians',
        name2: 'Calculator & Quotes'
      },
      description: `"Math magicians &#129497;" is a webapp for all fans
      of mathematics. It is a Single Page App (SPA) that allows users to:
        Make simple calculations and read a random learning-related quote thanks to the
      <strong><i>Ninja</i> API</strong>.`,
      stack: [
        'React.js',
        'JavaScript',
        'SASS',
        'Bootstrap',
        'HTML',
        'API consumer'
      ],
      liveVersionHref: 'https://iturres.github.io/math-magicians/',
      sourceCodeHref: 'https://github.com/ITurres/math-magicians'
    }
  },
  project_13: {
    id: 13,
    data: {
      img: {
        src: `${projectDataImgSrcPath}bookstore-preview.JPG`,
        alt: 'bookstore cms preview'
      },
      name: {
        name1: 'Bookstore CMS',
        name2: ''
      },
      description: `"Bookstore CMS &#128218;" An SPA that allows users to 
      display/add/remove books from a list using React + Redux and the 
      <strong>Bookstore API</strong>.
      Working on this project has helped me to understand and learn more about
      React Router, Redux as a whole, Redux toolkit, and much more.`,
      stack: [
        'React.js',
        'Redux',
        'JavaScript',
        'SASS',
        'Bootstrap',
        'HTML',
        'API consumer'
      ],
      liveVersionHref: 'https://iturres.github.io/bookstore-react-app/',
      sourceCodeHref: 'https://github.com/ITurres/bookstore-react-app'
    }
  },
  project_14: {
    id: 14,
    data: {
      img: {
        src: `${projectDataImgSrcPath}spacex-travelers-preview.JPG`,
        alt: 'spacex travelers hub preview'
      },
      name: {
        name1: 'SpaceX',
        name2: 'Travelers Hub'
      },
      description: `SpaceX Travelers Hub &#128640; - A web application for a 
      company that provides commercial and scientific space travel services.
      The application will allow users to book Rockets and join selected
      Space Missions. Powered By the <strong>SpaceX Web API</strong>.`,
      stack: [
        'React.js',
        'Redux',
        'JavaScript',
        'Jest',
        'CSS',
        'Bootstrap',
        'HTML',
        'API consumer'
      ],
      liveVersionHref: 'https://iturres.github.io/spacex-travelers-hub/',
      sourceCodeHref: 'https://github.com/ITurres/spacex-travelers-hub'
    }
  },
  project_15: {
    id: 15,
    data: {
      img: {
        src: `${projectDataImgSrcPath}finance-preview.jpg`,
        alt: 'finance web app preview'
      },
      name: {
        name1: 'Finance',
        name2: 'Financial Metrics'
      },
      description: `Finance &#128176; - A web app providing comprehensive company
      data, including financial metrics such as Price, Beta, Volume Average, Market
      Capitalization, Last Dividend, 52 week range, stock price change, stock price
      change in percentage, Company Name, Sector, website. Features include personalized
      watchlists, Mobile-friendly, easy to use, and modern design.
      Powered By the <Strong>FMP Web API</strong>.`,
      stack: [
        'React.js',
        'Redux',
        'JavaScript',
        'Jest',
        'SASS',
        'React-Bootstrap',
        'API consumer'
      ],
      liveVersionHref: 'https://iturres.github.io/finance-metrics-web-app/',
      sourceCodeHref: 'https://github.com/ITurres/finance-metrics-web-app'
    }
  }
};

export default projectsdb;
