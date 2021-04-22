import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import AWButton from '@components/Button';
import HeadingText from '@design/HeadingText';
import ProgressBar from '@design/ProgressBar';
import AmyIntro from './AmyIntro';
import Head from 'next/head';
import styles from '@styles/Home.module.css';
import HeaderBar from '@components/Header';
import { withUserAgent } from 'next-useragent';
import favicon from '@public/favicon.ico';

const About = ({ isMobile }) => {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>Amy | About</title>
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderBar top />
        <div className={classes.section}>
          <Container className={classes.container}>
            <HeadingText color="white">A BIT MORE ABOUT ME</HeadingText>
            <div className={classes.subLine} />
            <p style={{ marginTop: 25, marginBottom: '5vh' }}>
              A rough estimate of my skill level with 0% being no knowledge at
              all , 50% used in practice, 100% being production ready
            </p>
            <AmyIntro isMobile={isMobile} />
          </Container>
        </div>
      </main>
    </div>
  );
};

About.getInitialProps = async (ctx) => {
  let isMobile = Boolean(
    ctx.ua.source.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ),
  );
  return { isMobile };
};

export default withUserAgent(About);
