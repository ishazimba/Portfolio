import {
  backend,
  react,
  uxdesign,
  webicon,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  ncapi,
  ncnews,
  airpark,
  uwe,
  fp,
  smwa,
  jobit,
  tripguide,
  threejs,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    icon: webicon,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "UI/UX Designer",
    icon: uxdesign,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    idname: "airpark",
    name: "AirPark",
    description:
      "A cross platform mobile app that offers a seamless and convenient parking experience for the travelers.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },

      {
        name: "Google cloud storage",
        color: "pink-text-gradient",
      },
      {
        name: "passport.js",
        color: "pink-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
      {
        name: "react native",
        color: "pink-text-gradient",
      },
      {
        name: "typeScript",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: airpark,
  },
  {
    idname: "ncapi",
    name: "NC API",
    description:
      "A RESTful API designed to interact with a news database containing articles, topics, users, and comments.",
    tags: [
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
    ],
    image: ncapi,
  },
  {
    idname: "ncnews",
    name: "NC News",
    description:
      "A React application that provides users with a platform to view and interact with articles sourced from the NC News RESTful API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ncnews api",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: ncnews,
  },
  {
    idname: "smwa",
    name: "Student Mental Wellbeing Application",
    description:
      "Designing the user experience of a mobile application which was intended to be used by students seeking mental well-being tips, suggestions, and solutions to cope with their situation.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },

      {
        name: "user research",
        color: "blue-text-gradient",
      },
      {
        name: "empathy map",
        color: "green-text-gradient",
      },
      {
        name: "story board",
        color: "pink-text-gradient",
      },
      {
        name: "wireframing",
        color: "blue-text-gradient",
      },
    ],
    image: smwa,
  },
  {
    idname: "fp",
    name: "Freeley Palmer",

    description:
      "Designing the wireframes and the prototype of the web application using Figma.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "wireframing ",
        color: "green-text-gradient",
      },
      {
        name: "iterative improvements",
        color: "blue-text-gradient",
      },
    ],
    image: fp,
  },
  {
    idname: "uwemaps",
    name: "UWE Campus Map",
    description:
      "A cross platform mobile application to improve the current UWE campus map and help students, staff, and visitors find a specific location on campus.",
    tags: [
      {
        name: "flutter SDK",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "Google maps api",
        color: "pink-text-gradient",
      },
      {
        name: "Android studio",
        color: "pink-text-gradient",
      },
    ],
    image: uwe,
  },
];

export { services, technologies, projects };
