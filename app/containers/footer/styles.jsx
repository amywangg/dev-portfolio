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
  tooltip: {
    backgroundColor: ' #393a5b',
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
    borderRadius: 6,
    padding: '5px 5px',
    position: 'absolute',
    width: 100,
    zIndex: 1,
    top: 45,
    right: 100,
    '&::after': {
      content: '',
      position: 'absolute',
      top: '50%',
      right: '100%',
      marginTop: -5,
      borderWidth: 5,
      borderStyle: 'solid',
      borderColor: 'transparent #393a5b transparent transparent',
    },
  },
}));
