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
    "I am a recent graduate from California State University, Sacramento with a Bachelor's in Computer Science. With every new challenge, I am always eager to learn something new and keep a positive mindset.",
  paragraphTwo:
    'Technology has always been a large interest in my life and I am excited to showcase my knowledge through new and creative applications. Currently, I specialize in front-end web development where I want to combine modern web technologies with creative visuals and a strong attention to detail to guarantee positive user experiences. Nevertheless, I enjoy working and learning with back-end technologies occasionally. ',
  paragraphThree:
    'When I am not coding, I am usually listening to music, lifting weights, or hanging out with my friends and playing games.',
  resume: 'https://drive.google.com/file/d/1w3XSHSB8Ssi_TI0yE19r3Zn0Nghse_rE/view?usp=sharing', // if no resume, the button will not show up
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
    img: 'TheOpenedBox.jpg',
    title: 'The Opened Box',
    info: 'An interactive inventory database mangement system where the client would be able to import shipment manifests, cross check inventory that actually arrived within the manifest, and have the ability to visualize, search, sort, and export a confirmed inventory. ',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
    stack: ['NodeJS', 'Express', 'PostgreSQL', 'HTML', 'CSS', 'Heroku', 'Authpack'],
    note: 'This project is under an NDA and being used privately by a client. Source code examples and demos can be shown upon request. ',
  },
  {
    id: nanoid(),
    img: 'tracker.jpg',
    title: 'Expense Tracker',
    info: 'My MERN stack expense tracker that supports CRUD functionalities. Allows the user to keep track of transactions and visualize where the allocations go. ',
    info2: '',
    url: 'https://apexpenses.herokuapp.com/',
    repo: 'https://github.com/andrewjpascual/expense-tracker', // if no repo, the button will not show up
    stack: ['MongoDB', 'Express', 'React', 'NodeJS', 'ChartJS', 'Heroku', 'HTML', 'CSS'],
    note: 'The site is hosted through a free Heroku account, so please give it a moment to load.',
  },
  {
    id: nanoid(),
    img: 'Techshop.jpg',
    title: 'Tech Shop',
    info: 'A mock e-commerce website where the user can find a landing page with high-end computer parts and accessories. Currently includes a products page with imported products from CommerceJS API and a shopping cart. ',
    info2: '',
    url: 'https://techshop-ap.netlify.app',
    repo: 'https://github.com/andrewjpascual/techshop', // if no repo, the button will not show up
    stack: ['React', 'HTML', 'CSS', 'Material UI', 'CommerceJS'],
    note: 'Site is still a work in progress, but it will be carried out in the future.',
  },
  {
    id: nanoid(),
    img: 'Pokedex.jpg',
    title: 'Pokédex React',
    info: 'A simple and modern pokédex to look up pokémons. Users can search, sort, and look up individual pokémon details. This was my first project to consume REST APIs.',
    info2: '',
    url: 'https://pokedex-ap.netlify.app',
    repo: 'https://github.com/andrewjpascual/Pokedex', // if no repo, the button will not show up
    stack: ['React', 'HTML', 'CSS', 'Bootstrap', 'PokéAPI'],
    note: 'Data was fetched from the amazing PokéAPI, an open-source public API that serves all pokemon data. ',
  },
  {
    id: nanoid(),
    img: 'website.jpg',
    title: 'Portfolio',
    info: 'This website was made through GatsbyJS, where I wanted to utilize the speed that comes from this static site generator. Consequently, I am able to focus on delivering some of my best works and related information easily. ',
    info2: '',
    url: '',
    repo: 'https://github.com/andrewjpascual/gatsby_portfolio', // if no repo, the button will not show up
    stack: ['Gatsby', 'React', 'Bootstrap', 'SCSS', 'Netlify', 'GraphQL'],
    note: '',
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
      url: 'http://www.linkedin.com/in/andrewjpascual',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'http://github.com/andrewjpascual',
    },
    {
      id: nanoid(),
      name: 'file',
      url: 'https://drive.google.com/file/d/1w3XSHSB8Ssi_TI0yE19r3Zn0Nghse_rE/view?usp=sharing',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
