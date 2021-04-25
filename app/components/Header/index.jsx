import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {
  IconButton,
  Slide,
  useScrollTrigger,
  Toolbar,
  AppBar,
} from '@material-ui/core';
import { useStyles } from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Fade from 'react-reveal/Fade';
import clsx from 'clsx';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HeaderBar({ top, isMobile }) {
  const router = useRouter();
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    if (!openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
    setOpenMenu((prev) => !prev);
  }
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar
          className={clsx(top ? classes.appBar : classes.scrolledBar, {
            [classes.openMenu]: openMenu,
          })}
        >
          <Toolbar disableGutters>
            <Link href="/">
              <h1 className="header-title">
                <Fade right={!isMobile} top={isMobile} cascade>
                  AW.
                </Fade>
              </h1>
            </Link>
            {isMobile ? (
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleOpenMenu}
              >
                {openMenu ? (
                  <CloseIcon style={{ height: 35, width: 35 }} />
                ) : (
                  <MenuIcon style={{ height: 35, width: 35 }} />
                )}
              </IconButton>
            ) : (
              <Fade right={!isMobile} top={isMobile} cascade>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleOpenMenu}
                >
                  {openMenu ? (
                    <CloseIcon style={{ height: 35, width: 35 }} />
                  ) : (
                    <MenuIcon style={{ height: 35, width: 35 }} />
                  )}
                </IconButton>
              </Fade>
            )}
          </Toolbar>
          <div className={classes.menuLinks}>
            {openMenu && (
              <div>
                <Fade top delay={100}>
                  <Link href="/">
                    <h1
                      style={{
                        color: router.pathname === '/' ? 'red' : 'white',
                      }}
                      className={classes.menuText}
                    >
                      HOME
                    </h1>
                  </Link>
                </Fade>
                <Fade top delay={200}>
                  <Link href="about">
                    <h1
                      style={{
                        color: router.pathname === '/about' ? 'red' : 'white',
                      }}
                      className={classes.menuText}
                    >
                      ABOUT
                    </h1>
                  </Link>
                </Fade>
                {/* <Fade top delay={300}>
                  <Link href="timeline">
                    <h1
                      style={{
                        color: router.pathname === 'timeline' ? 'red' : 'white',
                      }}
                      className={classes.menuText}
                    >
                      TIMELINE
                    </h1>
                  </Link>
                </Fade> */}
              </div>
            )}
          </div>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
