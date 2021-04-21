import morningstar from '@public/images/projects/morningstar.png';
import intelex from '@public/images/projects/intelex.png';
import oink from '@public/images/projects/oink.png';
import resumate from '@public/images/projects/resumate.png';
import codegem from '@public/images/projects/codegem.png';
import fidelity from '@public/images/projects/fidelity.png';

export const projects = [
  {
    name: 'oink',
    img: oink,
    width: '40%',
    background: 'linear-gradient(180deg, #FDAEC8 0%, #FDF6F8 100%)',
    color: '#FDAEC8',
    isFlipped: false,
  },
  {
    name: 'codegem',
    img: codegem,
    color: '#3F6FF0',
    width: '25%',
    isFlipped: false,
  },
  {
    name: 'resumate',
    img: resumate,
    width: '45%',
    color: '#7386D7',
    isFlipped: false,
  },
  {
    name: 'morningstar',
    img: morningstar,
    width: '80%',
    color: '#FA2000',
    isFlipped: false,
  },
  {
    name: 'intelex',
    img: intelex,
    width: '80%',
    color: '#2374BF',
    isFlipped: false,
  },
  {
    name: 'fidelity',
    img: fidelity,
    width: '80%',
    color: '#6D933E',
    isFlipped: false,
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
