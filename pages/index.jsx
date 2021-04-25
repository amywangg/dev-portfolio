import React, { useEffect, useState } from 'react';
import { createMuiTheme } from '@material-ui/core';
import Head from 'next/head';
import styles from '@styles/Home.module.css';
import HeaderBar from '@components/Header';
import Intro from '@containers/intro';
import Skills from '@containers/skills';
import MobileSkills from '@containers/skills/mobile';
import Projects from '@containers/projects';
import QuickContact from '@containers/quickContact';
import About from '../app/containers/about';
import favicon from '@public/favicon.ico';
import MobileProjects from '../app/containers/projects/mobile';
import Footer from '@containers/footer';

function Home() {
  const defaultTheme = createMuiTheme();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(
      typeof window !== 'undefined' &&
        window.innerWidth < defaultTheme.breakpoints.values.md,
    );
    document.body.style.overflow = 'scroll';
  });

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
        <HeaderBar top={scroll === 'top'} isMobile={isMobile} />
        <Intro isMobile={isMobile} />
        <About isMobile={isMobile} />
        {isMobile ? <MobileSkills /> : <Skills />}
        {isMobile ? <MobileProjects /> : <Projects />}
        <QuickContact isMobile={isMobile} />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
