import React from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MenuIcon from '@material-ui/icons/Menu';
import {
  IconButton,
  Zoom,
  Slide,
  useScrollTrigger,
  Toolbar,
  AppBar,
  Fab,
} from '@material-ui/core';
import { useStyles } from './styles';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop({ trigger, children }) {
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick}>{children}</div>
    </Zoom>
  );
}

export default function HeaderBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar className={classes.appBar}>
          <Toolbar disableGutters>
            <h1 className="header-title">AW.</h1>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon style={{ height: 35, width: 35 }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* <ScrollTop trigger={trigger}>
        <Fab color="primary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
    </React.Fragment>
  );
}
