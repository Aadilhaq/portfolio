// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import jnctlogo from './assets/education_logo/jnctlogo.png';
import kvlogo from './assets/education_logo/kvlogo.png';

// Project Section Logo's
import rgplogo from './assets/work_logo/rgplogo.png';
import amazonlogo from './assets/work_logo/amazonlogo.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      //{ name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
     // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     // { name: 'GSAP', logo: gsapLogo },
     // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      //{ name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      //{ name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     // { name: 'Firebase', logo: firebaseLogo },
     // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
     // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
     // { name: 'Python', logo: pythonLogo },
     // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    //  { name: 'Postman', logo: postmanLogo },
    //  { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
     // { name: 'Netlify', logo: netlifyLogo },
     // { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: jnctlogo,
      school: "Jai Narain College of Technology (JNCT), Bhopal",
      date: "Aug 2019 - July 2023",
      grade: "8.35 CGPA",
      desc: "I have completed my Bachelor of Technology in Computer Science and Engineering(Btech) from JNCT, Bhopal. During my time at JNCT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at JNCT University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - BTECH",
    },
 
    {
      id: 1,
      img: kvlogo,
      school: "Kendriya Vidyalaya Danapur Cantt",
      date: "Apr 2017 - March 2018",
      grade: "61%",
      desc: "I completed my class 12 education from Kendriya Vidyalaya Danapur Cantt, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: kvlogo,
      school: "Kendriya Vidyalaya Danapur Cantt",
      date: "Apr 2015 - March 2016",
      grade: "87.4%",
      desc: "I completed my class 10 education from Kendriya Vidyalaya Danapur Cantt, under the CBSE board, where I studied Science with All Subject.",
      degree: "CBSE(X), Science with All Subject",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "RGB Color Game",
      description:
        "An Exciting RGB color game.Were we will learn name of the color in RGB format while playing and enjoying the game.",
      image: rgplogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Aadilhaq/RGB-COLOR-GAME.git",
     // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Amazon Clone",
      description:
        " The Amazon Clone project aims to replicate the core features and functionalities of the popular e-commerce platform, Amazon. This comprehensive e-commerce website will provide users with a familiar shopping experience. ",
      image: amazonlogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Aadilhaq/Amazon-Clone.git",
     // webapp: "https://csprep.netlify.app/",
    },
    
  ];  