import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import AWButton from '@components/Button';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import softSkills from '@public/images/soft-skills.png';

const About = ({ isMobile }) => {
  const classes = useStyles();

  return (
    <div style={{ height: '40vh' }} className={classes.section}>
      <Container className={classes.container}>
        <div
          style={{
            display: 'flex',
            textAlign: 'left',
            justifyContent: 'space-between',
            padding: isMobile ? '20px 5px' : '5vh 10vw',
          }}
        >
          <div>
            <Fade right cacscade>
              <h1
                style={{
                  fontFamily: 'FjallaOne',
                  fontSize: isMobile ? 20 : 'default',
                }}
              >
                I'm a Curious Developer
              </h1>
            </Fade>
            <Fade right cacscade delay={500}>
              <h1
                style={{ fontWeight: 500, fontSize: isMobile ? 20 : 'default' }}
              >
                Looking for opportunities to <br /> learn and refine soft &
                technical skills
              </h1>
            </Fade>
          </div>

          <Fade right cacscade delay={1200}>
            <Image
              src={softSkills}
              width={isMobile ? '300%' : '200%'}
              height={isMobile ? '300%' : '200%'}
            />
          </Fade>
        </div>
      </Container>
    </div>
  );
};
export default About;
