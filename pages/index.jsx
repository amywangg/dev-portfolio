import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '@styles/Home.module.css';
import HeaderBar from '@components/Header';
import { withUserAgent } from 'next-useragent';
import Intro from '@containers/intro';
import Skills from '@containers/skills';
import MobileSkills from '@containers/skills/mobile';
import Projects from '@containers/projects';
import QuickContact from '@containers/quickContact';
import About from '../app/containers/about';
import favicon from '@public/favicon.ico';
import MobileProjects from '../app/containers/projects/mobile';

Home.getInitialProps = async (ctx) => {
  let isMobile = Boolean(
    ctx.ua.source.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ),
  );
  return { isMobile };
};

function Home({ isMobile }) {
  const [scroll, setScroll] = useState('top');
  const handleScroll = (e) => {
    if (e.path[1].window.scrollY >= 5) {
      setScroll('moved');
    } else {
      setScroll('top');
    }
  };
  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [scroll]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Amy | Dev</title>
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderBar top={isMobile ? false : scroll === 'top'} />
        <Intro isMobile={isMobile} />
        <About isMobile={isMobile} />
        {isMobile ? <MobileSkills /> : <Skills />}
        {isMobile ? <MobileProjects /> : <Projects />}
        <QuickContact isMobile={isMobile} />
      </main>
    </div>
  );
}

export default withUserAgent(Home);
