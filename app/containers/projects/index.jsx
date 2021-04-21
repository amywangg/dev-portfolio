import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import HeadingText from '@design/HeadingText';
import { flipState, projects } from './projects';
import ReactCardFlip from 'react-card-flip';

const Projects = () => {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(flipState);
  function handleHover(name) {
    setIsFlipped({ ...isFlipped, [name]: !isFlipped[name] });
  }

  return (
    <div className={classes.section}>
      <Container className={classes.container}>
        <HeadingText color="#0e1215">RECENT WORKS</HeadingText>
        <div className={classes.subLine} />
        <Grid className={classes.skillsContainer} container spacing={3}>
          {projects.map((project) => (
            <Grid
              item
              xs={4}
              onMouseOver={() => {
                handleHover(project.name);
              }}
              onMouseOut={() => {
                handleHover(project.name);
              }}
              key={project.name}
            >
              <ReactCardFlip
                isFlipped={isFlipped[project.name]}
                flipDirection="horizontal"
              >
                <Paper
                  style={{ background: project.color }}
                  className={classes.paper}
                >
                  <img
                    style={{ width: project.width, marginTop: '12vw' }}
                    alt={project.name}
                    src={project.img}
                  />
                </Paper>
                <Paper className={classes.paper}></Paper>
              </ReactCardFlip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default Projects;
