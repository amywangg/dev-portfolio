import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  section: {
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    padding: '5vh 5vw',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    background: '#222c34',
    color: 'white',
    minHeight: '60vh',
    maxHeight: '60vh',
    boxShadow: '1em 1em 2em rgba(0,0,0,.2)',
    overflowY: 'scroll',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
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
