import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
  IconButton,
  Slide,
  useScrollTrigger,
  Toolbar,
  AppBar,
} from '@material-ui/core';
import { useStyles } from './styles';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HeaderBar({ top }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar className={top ? classes.appBar : classes.scrolledBar}>
          <Toolbar disableGutters>
            <Link href="/">
              <h1 className="header-title">
                <Fade right cascade>
                  AW.
                </Fade>
              </h1>
            </Link>
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
    </React.Fragment>
  );
}
