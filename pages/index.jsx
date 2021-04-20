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

Home.getInitialProps = async (ctx) => {
  let isMobile = Boolean(
    ctx.ua.source.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ),
  );
  return { isMobile };
};

function Home({ isMobile }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amy | Dev</title>
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderBar />
        <Intro isMobile={isMobile} />
        <About isMobile={isMobile} />
        {isMobile ? <MobileSkills /> : <Skills />}
        <Projects isMobile={isMobile} />
        <QuickContact isMobile={isMobile} />
      </main>
    </div>
  );
}

export default withUserAgent(Home);
