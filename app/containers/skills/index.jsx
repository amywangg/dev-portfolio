import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import AWButton from '@components/Button';
import HeadingText from '@design/HeadingText';
import { skills } from './skills';
import ProgressBar from '@design/ProgressBar';

const Skills = ({ isMobile }) => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Container className={classes.container}>
        <HeadingText>SKILLS</HeadingText>
        <div className={classes.subLine} />
        <p style={{ marginTop: 25 }}>
          A rough estimate of my skill level with 0% being no knowledge at all,
          100% being production ready, still looking to learn more!
        </p>
        <Grid className={classes.skillsContainer} container spacing={3}>
          {skills.map((skill) => (
            <Grid key={`skill-${skill.type}`} item xs={isMobile ? 12 : 4}>
              <Paper className={classes.paper}>
                <h4 className={classes.skillType}>{skill.type}</h4>
                {skill.skills.map((item) => (
                  <div
                    key={`paper-${item.name}`}
                    style={{ display: 'block', marginBottom: 15 }}
                  >
                    <div className={classes.skillLabel}>
                      <p>{item.name.toUpperCase()}</p>
                      <p className={classes.percent}>{item.percent}%</p>
                    </div>
                    <ProgressBar key={item.name} completed={item.percent} />
                  </div>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default Skills;
