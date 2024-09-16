import {
  mobile,
  backend,
  creator,
  web,
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
  YHILLS,
  INTERNSHALA,
  MyPortfolio,
  GYMPHASE,
  threejs,
  github,
  NewsHubApi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Programmers",
    icon: creator,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "GITHUB",
    icon: github,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "TRAVEL PACKAGE USING JAVA",
    company_name: "Academic",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2022 - Dec 2022",
    points: [
      "Developed a java  application that provides traveling plans to registered users. ",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "GYM PHASE USING PYTHON,HTML,CSS",
    company_name: "Academic",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July 2023",
    points: [
      "Developed a website to give training  plans & chatbot to answer gym & health related queries..",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "NEWSHUB API USING   HTML ,CSS, JAVASCRIPT",
    company_name: "Academic",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 ",
    points: [
      "Developed a dynamic news website using HTML,CSS,JavaScript, integrating APIs to deliver real-time news updates .",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participate actively in code reviews.",
    ],
  },
  {
    title: "Full-Stack Web Development Internship",
    company_name: "INTERNSHIP | YHILLS -Learning Beyond Expectation  ",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Jun 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects2 = [
    {
      name: "INTERNSHIP | YHILLS -Learning Beyond Expectation  ",
      description:
        "Celebrating the completion of my 4-month Full-stack Web Development internship at YHills! 🌟",
      tags: [
        {
          name: "MONGODB",
          color: "green-text-gradient",
        },
        {
          name: "EXPRESS JS",
          color: "green-text-gradient",
        },
        {
          name: "REACT",
          color: "blue-text-gradient",
        },
        {
          name: "NODE JS",
          color: "green-text-gradient",
        },
      ],
      image: YHILLS,
      source_code_link: "https://drive.google.com/file/d/1dKnTCqLziDOGTRoZyuuSvmiFt5YExVin/view?usp=drivesdk",
    },
    {
      name: "INTERNSHALA",
      description:
      "I’ve successfully completed the Core Java Certification with an A grade. 🌟 🚀",
      tags: [
        {
          name: "Java",
          color: "orange-text-gradient",
        },
        {
          name: "OOPS",
          color: "blue-text-gradient",
        },
        {
          name: "Java AppDevelopment Modules",
          color: "pink-text-gradient",
        },
      ],
      image: INTERNSHALA,
      source_code_link: "https://drive.google.com/file/d/1d-45nhu_XGCNXegdPdIScu2l_lycwwa5/view?usp=drivesdk",
    },
    {
      name: "REACT",
      description:
        "An Ongoing Certification",
      tags: [
        {
          name: "",
          color: "blue-text-gradient",
        },
        {
          name: "",
          color: "green-text-gradient",
        },
        {
          name: "",
          color: "pink-text-gradient",
        },
      ],
      image: GYMPHASE,
      source_code_link: "https://github.com/ORE0000",
    },
  ];


const projects = [
  {
    name: "NEWSHUB API",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: NewsHubApi,
    source_code_link: "https://github.com/ORE0000/NEWSHUB-API",
  },
  {
    name: "My Portfolio",
    description:
    "My personal portfolio showcases my work, built with React.js and other cutting-edge technologies.” 🚀",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: MyPortfolio,
    source_code_link: "https://github.com/ORE0000",
  },
  {
    name: "GYM PHASE",
    description:
      "Developed a website to give training  plans &  to answer gym & health related queries..",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: GYMPHASE,
    source_code_link: "https://github.com/ORE0000",
  },
];

export { services, technologies, experiences, projects2, projects };
