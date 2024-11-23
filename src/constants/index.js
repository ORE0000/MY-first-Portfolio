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
  NewsHub,
  YHILLS,
  INTERNSHALA,
  MyPortfolio,
  SkyScope,
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "GITHUB",
    icon: github,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
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
    title: "SkyScope (Weather Application)",
    company_name: "Academic",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2024 - Dec 2024",
    points: [
      "Developed a dynamic weather application using ReactJS, TypeScript, and TanStack Query, showcasing advanced front-end development capabilities. ",
      "Integrated the OpenWeather API to deliver real-time weather updates, allowing users to view current weather conditions and hourly forecasts for any location globally.",
      "Implemented a responsive city search feature with caching mechanisms, enabling quick access to previous searches and minimizing API calls.",
      "Designed and optimized a visually appealing UI with light and dark mode toggles, enhancing accessibility and user experience across devices.",
      "Deployed the project on Netlify, securing API keys with environment variables for enhanced application security.",
      "Utilized state management and asynchronous data fetching to handle complex interactions, ensuring seamless performance.",
      "Achieved a highly responsive and engaging app, increasing usability for both mobile and desktop platforms..",
    ],
  },
  {
    title: "My Portfolio Website",
    company_name: "Academic",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
      "Built a professional portfolio website using Next.js, Three.js, Framer Motion, and Tailwind CSS to showcase technical expertise and project highlights.",
      "Integrated interactive 3D elements and animations, such as a GitHub-style globe and card hover effects, creating a captivating user experience.",
      "Featured detailed sections on projects, work experience, and testimonials, effectively presenting skills and accomplishments.",
      "Optimized the website for responsive design, ensuring seamless functionality across mobile, tablet, and desktop devices.",
      "Demonstrated proficiency in cutting-edge technologies and delivered a visually engaging and professional digital presence.",
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
  {
    title: "NEWSHUB API USING   HTML ,CSS, JAVASCRIPT",
    company_name: "Academic",
    icon: NewsHub,
    iconBg: "#383E56",
    date: "Jan 2024 ",
    points: [
      "Built a real-time news aggregation app using HTML, CSS, and JavaScript integrated with the NewsAPI.",
      "Designed a clean, responsive interface for news categories and detailed article displays, including images and publication dates.",
      "Added a search functionality for custom queries, enhancing user engagement.",
      "Ensured mobile-first design principles for seamless usability across all devices.",
      "Leveraged API integration to deliver up-to-date news dynamically.",
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
      image: SkyScope,
      source_code_link: "https://github.com/ORE0000",
    },
  ];


const projects = [
  {
    name: "SkyScope",
    description:
    "Developed a dynamic weather application using ReactJS, TypeScript, and TanStack Query, showcasing advanced front-end development capabilities.🚀",
    tags: [
      {
        "name": "ReactJS",
        "color": "blue-text-gradient"
      },
      {
        "name": "TypeScript",
        "color": "yellow-text-gradient"
      },
      {
        "name": "API Integration",
        "color": "green-text-gradient"
      },
      {
        "name": "TanStack Query",
        "color": "purple-text-gradient"
      },
    ],
    image: SkyScope,
    source_code_link: "https://github.com/ORE0000/SkyScope",
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
    source_code_link: "https://github.com/ORE0000/MY-first-Portfolio",
  },
  {
    name: "NEWSHUB API",
    description:
      "Built a real-time news aggregation app using HTML, CSS, and JavaScript integrated with the NewsAPI..",
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
];

export { services, technologies, experiences, projects2, projects };
