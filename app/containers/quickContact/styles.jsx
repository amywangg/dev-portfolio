import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  section: {
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    padding: '5vh 5vw',
    color: 'white',
    background: '#ef1e33',
  },
  subLine: {
    width: 40,
    background: '#0e1215',
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
