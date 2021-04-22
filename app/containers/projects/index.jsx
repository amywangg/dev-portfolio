import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import HeadingText from '@design/HeadingText';
import { flipState, projects } from './projects';
import ReactCardFlip from 'react-card-flip';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(flipState);
  function handleHover(name) {
    setIsFlipped({ ...isFlipped, [name]: !isFlipped[name] });
  }

  return (
    <div className={classes.section}>
      <Container className={classes.container}>
        <Fade top>
          <HeadingText color="#0e1215">RECENT WORKS</HeadingText>
        </Fade>
        <div className={classes.subLine} />
        <Grid className={classes.skillsContainer} container spacing={3}>
          {projects.map((project, index) => (
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
                <Fade delay={150 * index}>
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
                </Fade>
                <Paper
                  style={{ background: project.flippedColor }}
                  className={classes.flipPaper}
                >
                  <h3>{project.name.toUpperCase()}</h3>
                  <div>
                    <p>SKILLS: {project.skills}</p>
                  </div>
                </Paper>
              </ReactCardFlip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default Projects;
