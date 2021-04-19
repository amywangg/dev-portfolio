import React from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './styles';
import AWButton from '@components/Button';

const IntroSection = ({ isMobile }) => {
  const classes = useStyles(isMobile);

  return (
    <>
      <Container className={classes.introText}>
        <h1 className={classes.name}>
          HI I AM AMY WANG
          <br />
        </h1>
        <h1 className={classes.subName}>A JUNIOR WEB DEVELOPER</h1>
        <div className={classes.subLine} />
        <p className={classes.subText}>
          I have a passion for coding & bringing innovative ideas to life.
          {!isMobile && <br />}I work mostly with the frontend but am working
          towards full stack!
        </p>
        <div className={classes.button}>
          <AWButton size="large">DOWNLOAD RESUME</AWButton>
        </div>
      </Container>
      <div className={classes.introCover} />
    </>
  );
};
export default IntroSection;
