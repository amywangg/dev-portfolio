import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import AWButton from '@components/Button';
import HeadingText from '@design/HeadingText';
import ProgressBar from '@design/ProgressBar';

const About = ({ isMobile }) => {
  const classes = useStyles();

  return (
    <div style={{ height: '40vh' }} className={classes.section}>
      <Container className={classes.container}>
        <HeadingText color="#0e1215">CONTACT</HeadingText>
        <div className={classes.subLine} />
        <Grid className={classes.skillsContainer} container spacing={3}></Grid>
      </Container>
    </div>
  );
};
export default About;
