import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import AWButton from '@components/Button';
import HeadingText from '@design/HeadingText';
import ProgressBar from '@design/ProgressBar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Link from 'next/link';
import Zoom from 'react-reveal/Zoom';

const Footer = ({ isMobile }) => {
  const classes = useStyles();
  var d = new Date();
  var currentYear = d.getFullYear();

  return (
    <div style={{ height: '15vh' }} className={classes.section}>
      <Container className={classes.container}>
        <Zoom down cascade>
          <a target="_blank" href="https://www.linkedin.com/in/amywangg">
            <LinkedInIcon className={classes.socialIcon} />
          </a>
        </Zoom>
        <Zoom down cascade delay={200}>
          <a target="_blank" href="https://www.github.com/amywangg">
            <GitHubIcon className={classes.socialIcon} />
          </a>
        </Zoom>
        <Zoom down cascade delay={300}>
          <a href="mailto:a84wang@gmail.com" rel="noopener noreferrer">
            <EmailIcon className={classes.socialIcon} />
          </a>
        </Zoom>
      </Container>
      <small>&copy; Copyright {currentYear}, Amy Wang</small>
    </div>
  );
};
export default Footer;
