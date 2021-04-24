import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  section: {
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    padding: '0 5vw',
    height: '10vh',
  },
  socialIcon: {
    background: 'white',
    color: '#ef1e33',
    margin: '25px 20px',
    height: 40,
    width: 40,
    padding: 6,
    borderRadius: 5,
    '&:hover': {
      border: '2px solid red',
    },
  },
}));
