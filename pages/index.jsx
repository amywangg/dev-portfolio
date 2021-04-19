import Head from 'next/head';
import styles from '@styles/Home.module.css';
import HeaderBar from '@components/Header';
import { withUserAgent } from 'next-useragent';
import IntroSection from '@containers/intro';
import SkillSection from '@containers/skills';
import MobileSkillSection from '@containers/skills/mobile';

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeaderBar />
        <IntroSection isMobile={isMobile} />
        {isMobile ? (
          <MobileSkillSection />
        ) : (
          <SkillSection isMobile={isMobile} />
        )}
      </main>
    </div>
  );
}

export default withUserAgent(Home);
