import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrew Pascual | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Andrew.',
  subtitle: "I'm a Software Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne:
    "I am a recent graduate from California State University, Sacramento with a Bachelor's in Computer Science. With every new challenge, I am always eager to learn something new and continue strengthening my current skillset.",
  paragraphTwo:
    'Technology has always been a large interest in my life and I am excited to showcase my knowledge through new and creative applications. Currently, I specialize in front-end web development where I want to combine modern web technologies with creative visuals and a strong attention to detail to guarantee positive user experiences.  ',
  paragraphThree:
    'When I am not coding, I am usually listening to music, lifting weights, or hanging out with my friends and playing games.',
  resume: '', // if no resume, the button will not show up
};

// SKILLS DATA
export const skillsData = {
  img: '', //This is all mock data
  paragraphOne: '', //Nothing here will affect skills section
  paragraphTwo: '',
  paragraphThree: '',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
