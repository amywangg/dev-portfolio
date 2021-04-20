import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import AWButton from '@components/Button';
import HeadingText from '@design/HeadingText';
import ProgressBar from '@design/ProgressBar';

const QuickContact = ({ isMobile }) => {
  const classes = useStyles();

  return (
    <div
      style={{ height: isMobile ? '100vh' : '40vh' }}
      className={classes.section}
    >
      <Container className={classes.container}>
        <HeadingText>CONTACT</HeadingText>
        <div className={classes.subLine} />
        <p style={{ marginTop: 25 }}>
          A rough estimate of my skill level with 0% being no knowledge at all ,
          50% used in practice, 100% being production ready
        </p>
        <Grid className={classes.skillsContainer} container spacing={3}></Grid>
      </Container>
    </div>
  );
};
export default QuickContact;
