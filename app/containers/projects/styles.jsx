import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  section: {
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    padding: '5vh 15vw',
    background: 'white',
    color: '#0e1215',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    borderRadius: 0,
    boxShadow: 'none',
    background: '#0e1215',
    color: 'white',
    height: '30vw',
  },
  flipPaper: {
    padding: '2% 10%',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
    borderRadius: 0,
    boxShadow: 'none',
    background: '#0e1215',
    color: 'white',
    height: '30vw',
    overflowY: 'scroll',
    fontFamily: 'FjallaOne',
  },
  skillsContainer: {
    marginTop: '3vh',
    marginBottom: '3vh',
  },
  typeContainer: {
    padding: '10px',
    height: '40vh',
    background: '#100C08',
  },
  subLine: {
    width: 40,
    background: '#ef1e33',
    height: 3,
    margin: '-10px auto',
  },
  skillLabel: {
    height: 40,
    display: 'flex',
    justifyContent: 'space-between',
  },
  skillType: {
    flexWrap: 1,
  },
  percent: {
    color: '#ef1e33',
    fontFamily: 'FjallaOne',
  },
}));
