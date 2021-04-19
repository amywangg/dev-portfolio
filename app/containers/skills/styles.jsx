import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, isMobile) => ({
  introText: {
    position: 'relative',
    textAlign: 'left',
    zIndex: 10,
  },
  name: {
    fontFamily: 'FjallaOne',
    fontSize: 80,
    fontWeight: 200,
    letterSpacing: -5,
    margin: '10px 7px',
  },
  subName: {
    fontFamily: 'FjallaOne',
    fontSize: 30,
    color: '#ef1e33',
    margin: 10,
  },
  subLine: {
    width: 40,
    background: '#ef1e33',
    height: 3,
    margin: '20px 10px',
  },
  subText: {
    margin: 10,
  },
  button: {
    margin: isMobile ? '40vh 0' : '20px 0',
  },
}));
