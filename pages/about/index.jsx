import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import HeadingText from '@design/HeadingText';
import AmyIntro from './AmyIntro';
import Head from 'next/head';
import styles from '@styles/Home.module.css';
import HeaderBar from '@components/Header';
import favicon from '@public/favicon.ico';
import { createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    padding: '5vh 5vw',
    marginTop: '5vh',
    color: 'white',
  },
  subLine: {
    width: 40,
    background: '#ef1e33',
    height: 3,
    margin: '-10px auto',
  },
  skillLabel: {
    height: 40,
    display: 'flex',
    justifyContent: 'space-between',
  },
  skillType: {
    flexWrap: 1,
  },
  percent: {
    color: '#ef1e33',
    fontFamily: 'FjallaOne',
  },
}));

const About = () => {
  const defaultTheme = createMuiTheme();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(
      typeof window !== 'undefined' &&
        window.innerWidth < defaultTheme.breakpoints.values.md,
    );
    document.body.style.overflow = 'scroll';
  });

  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>Amy | About</title>
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderBar top isMobile={isMobile} />
        <div className={classes.section}>
          <Container className={classes.container}>
            <HeadingText color="white">A BIT MORE ABOUT ME</HeadingText>
            <div className={classes.subLine} />
            <p style={{ marginTop: 25, marginBottom: '5vh' }}>
              Not really work related but...
            </p>
            <AmyIntro isMobile={isMobile} />
          </Container>
        </div>
      </main>
    </div>
  );
};

export default About;
