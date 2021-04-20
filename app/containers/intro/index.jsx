import React from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './styles';
import AWButton from '@design/Button';

const Intro = ({ isMobile }) => {
  const classes = useStyles();

  return (
    <>
      <Container
        className={classes.introText}
        style={{ textAlign: isMobile ? 'center' : 'left' }}
      >
        <h1
          style={{
            fontSize: isMobile ? 50 : 80,
            fontWeight: isMobile ? 100 : 300,
            letterSpacing: isMobile ? -3 : -5,
            margin: isMobile ? '20px 0' : '10px 7px',
          }}
          className={classes.name}
        >
          HI I AM AMY WANG
          <br />
        </h1>
        <h1 className={classes.subName}>A JUNIOR WEB DEVELOPER</h1>
        <div
          style={{ margin: isMobile ? '0 auto' : 'left' }}
          className={classes.subLine}
        />
        <p
          style={{ padding: isMobile ? '20px 10vw' : '0' }}
          className={classes.subText}
        >
          I have a passion for coding & bringing innovative ideas to life.
          {!isMobile && <br />}I work mostly with the frontend but am working
          towards full stack!
        </p>
        <div
          style={{ marginTop: isMobile ? '10vh' : '30px' }}
          className={classes.button}
        >
          <AWButton size="large">DOWNLOAD RESUME</AWButton>
        </div>
      </Container>
      <div className={classes.introCover} />
    </>
  );
};
export default Intro;
