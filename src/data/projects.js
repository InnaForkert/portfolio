import { GrClose } from "react-icons/gr";
import {
  CardIcon,
  CrossIcon,
  Recording,
} from "../components/utils/icons.styled";

export const categories = [
  {
    Games: [
      {
        name: "Tennis",
        description: "Fun tetris-liketennis game",
        tech: "JavaScript, HTML, CSS",
        link: "https://innaforkert.github.io/tetris-game/",
        git: "https://github.com/InnaForkert/tetris-game",
        ready: false,
        icon: "",
      },
      {
        name: "Tic-Tac-Toe",
        description:
          "Fun game to play with a friend or a bot. Has music inside.",
        tech: "TypeScript, HTML, SASS",
        link: "https://innaforkert.github.io/tic-tac-toe/",
        git: "https://github.com/InnaForkert/tic-tac-toe",
        ready: true,
        icon: <CrossIcon />,
      },
      {
        name: "Memory Game",
        description: "Card-flipping memory game with React",
        tech: "React, Styled Components",
        link: "https://innaforkert.github.io/memory-game/",
        git: "https://github.com/InnaForkert/memory-game",
        ready: true,
        icon: <CardIcon />,
      },
      {
        name: "",
        description: "",
        tech: "",
        link: "",
        git: "",
        ready: false,
        icon: "",
      },
    ],
  },
  {
    "Single Page Applications": [
      {
        name: "Screen Recorder",
        description:
          "App that allows screen video and audio recording. Uses MediaStream Recording API.",
        tech: "HTML, CSS, JavaScript, MediaStream Recording API",
        link: "https://innaforkert.github.io/screen_recorder/",
        git: "https://github.com/InnaForkert/screen_recorder",
        ready: true,
        icon: <Recording />,
      },
      {
        name: "Shopping List",
        description: "Simple shopping list app using Vue.js",
        tech: "Vue.js, HTML, CSS",
        link: "https://innaforkert.github.io/vue-shopping-list/",
        git: "https://github.com/InnaForkert/vue-shopping-list",
        ready: true,
      },
      {
        name: "Weather App",
        description:
          "Weather app that has geolocation, city search and unit conversion",
        tech: "HTML, CSS, JavaScript, API",
        link: "https://myweather16.netlify.app/",
        git: "https://github.com/InnaForkert/Weather-App",
        ready: true,
      },
      {
        name: "Random Quote Machine",
        description: "Random quotes on random backgrounds, ready to be tweeted",
        tech: "React, Styled Components",
        link: "https://innaforkert.github.io/random-quote-machine",
        git: "https://github.com/InnaForkert/random-quote-machine",
        ready: true,
      },
      {
        name: "Task List",
        description: "Simple task list app using React Native",
        tech: "React Native",
        link: "",
        git: "https://github.com/InnaForkert/task-list-react-native",
        ready: false,
      },
      {
        name: "",
        description: "",
        tech: "",
        link: "",
        git: "",
        ready: false,
      },
    ],
  },
  {
    Landings: [
      {
        name: "Tulktranslate",
        description:
          "A website for Ukrainian translation of 'Heaven Official's Blessing' manga",
        tech: "React, HTML, Styled Components",
        link: "https://innaforkert.github.io/agrotulka",
        git: "https://github.com/InnaForkert/agrotulka",
        ready: false,
      },
      {
        name: "Lasyi Kus",
        description: "Culinary website for small business",
        tech: "HTML, SCSS, JavaScript, Parcel",
        link: "https://innaforkert.github.io/kus_prod/",
        git: "https://github.com/InnaForkert/kus_prod",
        ready: true,
      },
      {
        name: "Film Library",
        description: "Team project at GoIT",
        tech: "HTML, SASS, JavaScript, API, Parcel",
        link: "https://veronikanos.github.io/FilmotekaTeamProject",
        git: "https://github.com/Veronikanos/FilmotekaTeamProject",
        ready: true,
      },
      {
        name: "Ice Cream Shop",
        description: "Team project at GoIT. I was a team lead",
        tech: "HTML, SASS, JavaScript, Parcel",
        link: "https://innaforkert.github.io/team-project-1/",
        git: "https://github.com/InnaForkert/team-project-1",
        ready: true,
      },
      {
        name: "JavaScript Documentation Page",
        description:
          "Created as part of freeCodeCamp JavaScript Certification.",
        tech: "HTML, CSS, JavaScript",
        link: "https://innaforkert.github.io/fcc-project-3/",
        git: "https://github.com/InnaForkert/fcc-project-3/tree/main",
        ready: true,
      },
      {
        name: "Music Shop Landing",
        description:
          "Created as a part of freeCodeCamp Responsive Web Design Certiifcation",
        tech: "HTML, CSS",
        link: "https://innaforkert.github.io/FCC-project-4/",
        git: "https://github.com/InnaForkert/FCC-project-4/tree/main",
        ready: true,
      },
      {
        name: "",
        description: "",
        tech: "",
        link: "",
        git: "",
        ready: false,
      },
    ],
  },
];
