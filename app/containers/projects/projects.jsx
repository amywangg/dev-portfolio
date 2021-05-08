import morningstar from '@public/images/projects/morningstar.png';
import intelex from '@public/images/projects/intelex.png';
import oink from '@public/images/projects/oink.png';
import resumate from '@public/images/projects/resumate.png';
import codegem from '@public/images/projects/codegem.png';
import fidelity from '@public/images/projects/fidelity.png';

export const projects = [
  {
    name: 'codegem',
    img: codegem,
    color: '#3F6FF0',
    width: '25%',
    flippedColor: '#001B62',
    description:
      'Worked to create the landing page, dashboard, and Chrome extension. My favourite was the Chrome Extension where we collect mood surveys on Github from developers. I got to build the REST api endpoints, migrations, and the user interface.',
    links: [{ link: 'https://www.codegem.app', name: 'CodeGem' }],
    skills: 'React, Redux, NodeJS, CubeJS, KnexJS, PostgreSQL',
  },
  {
    name: 'resumate',
    img: resumate,
    width: '45%',
    color: '#7386D7',
    flippedColor: '#4836B8',
    description:
      'One of my favourite projects outside of work. Created a portal for both the applicants and hiring manager to match and rank them based on their skills parsed from their resume and skills parsed from a job description. Got to use NLP and create a cool UI.',
    links: [
      {
        link: 'https://www.youtube.com/watch?v=9P_0iDiAV3A&feature=youtu.be',
        name: 'Demo',
      },
      { link: 'https://github.com/amywangg/resumate', name: 'GitHub' },
    ],
    skills: 'Flask, Python, NLP',
  },
  {
    name: 'oink',
    img: oink,
    width: '40%',
    color: '#FDAEC8',
    flippedColor: '#B61248',
    description:
      'Built out a budgeting web application paired with a Chrome extension with a group of classmates. The app tracks your Amazon purchases by using web scraping to compare your cart to your budget.',
    links: [
      { link: 'https://oink-dashboard.herokuapp.com/', name: 'Heroku' },
      { link: 'https://github.com/amywangg/oink-extension', name: 'Github' },
    ],
    skills: 'React, Redux, Flask',
  },
  {
    name: 'morningstar',
    img: morningstar,
    width: '80%',
    color: '#FA2000',
    flippedColor: '#9E1400',
    description:
      'Worked with various people building support tools or implementing processes. Built a QA tool to test api speeds and graphically show the results, created a Splunk dashboard for client success, and a POC UI.',
    links: [{ link: 'https://www.morningstar.ca/ca/', name: 'Morningstar' }],
    skills: 'Electron, NodeJS, VBA, Splunk, MSSQL',
  },
  {
    name: 'intelex',
    img: intelex,
    width: '80%',
    color: '#2374BF',
    flippedColor: '#0B2135',
    description:
      'Started off fixing bugs and adjusting to the development life cycle, worked on creating unit tests, increased performance of the UI by 30%, and worked on logging for a message queue',
    links: [{ link: 'https://www.intelex.com', name: 'Intelex' }],
    skills: 'C#, NewRelic',
  },
  {
    name: 'fidelity',
    img: fidelity,
    width: '80%',
    color: '#6D933E',
    flippedColor: '#172209',
    description:
      'Worked on an independent project to create a tool which takes messy logs and organizes them in a table on a dashboard. Created the project requirements and showcased them in a technical documents as well as a presentation.',
    links: [{ link: 'https://www.fidelity.ca', name: 'Fidelity' }],
    skills: 'AngularJS, REGEX',
  },
];

export const flipState = {
  oink: false,
  codegem: false,
  resumate: false,
  morningstar: false,
  intelex: false,
  fidelity: false,
};
