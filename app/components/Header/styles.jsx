import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    overflowX: 'hidden',
    '&:hover': {
      color: '#ef1e33',
    },
  },
  menuLinks: {
    marginRight: theme.spacing(2),
    width: '20vw',
    textAlign: 'left',
    paddingTop: '15vh',
    paddingLeft: '70vw',
    height: '100vh',
  },
  menuText: {
    fontFamily: 'Gothic-East',
    margin: ' 15px 10px',
    letterSpacing: 2,
    flexGrow: 1,
    cursor: 'pointer',
    '&:hover': {
      color: '#ef1e33',
    },
  },

  appBar: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    minWidth: 0,
    transition: 'max-height 0.3s',
    paddingTop: 20,
    maxHeight: 100,
    '-webkit-transition': ' max-height 0.3s',
    '-moz-transition': 'max-height 0.3s',
    paddingLeft: 20,
    background: 'transparent',
    boxShadow: 'none',
  },
  scrolledBar: {
    minWidth: 0,
    overflowY: 'hidden',
    overflowX: 'hidden',
    paddingTop: 10,
    paddingLeft: 20,
    maxHeight: 80,
    background: 'rgba(0,0,0,0.7)',
    boxShadow: 'none',
    '-webkit-transition': ' max-height 0.3s',
    '-moz-transition': 'max-height 0.3s',
    transition: 'max-height 0.3s',
  },
  openMenu: {
    minWidth: 0,
    overflowY: 'hidden',
    overflowX: 'hidden',
    paddingTop: 20,
    maxHeight: '100vh',
    background: 'black',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
