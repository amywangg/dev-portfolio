import React, { useState } from 'react';
import { Container, Tooltip } from '@material-ui/core';
import { useStyles } from './styles';
import { withStyles } from '@material-ui/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Zoom from 'react-reveal/Zoom';

const CustomTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#222c34',
    color: 'white',
    fontSize: 11,
  },
  arrow: {
    color: '#222c34',
  },
}))(Tooltip);

const Footer = () => {
  const classes = useStyles();
  var d = new Date();
  var currentYear = d.getFullYear();
  const [tooltip, setTooltip] = useState(false);
  const onEmailClick = () => {
    navigator.clipboard.writeText('a84wang@gmail.com');
    setTooltip(true);
    setTimeout(() => {
      setTooltip(false);
    }, 1000);
  };

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
          <a onClick={onEmailClick}>
            <CustomTooltip
              title="Copied to Clipboard!"
              placement="right"
              open={tooltip}
              arrow
              delay={200}
            >
              <EmailIcon className={classes.socialIcon} />
            </CustomTooltip>
          </a>
        </Zoom>
      </Container>
      <small>&copy; Copyright {currentYear}, Amy Wang</small>
    </div>
  );
};
export default Footer;
