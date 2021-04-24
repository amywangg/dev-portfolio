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
            <Grid item xs={4} key={project.name}>
              <ReactCardFlip
                isFlipped={isFlipped[project.name]}
                flipDirection="horizontal"
              >
                <Fade delay={index >= 3 ? (150 * index) / 2 : 150 * index}>
                  <Paper
                    style={{ background: project.color }}
                    className={classes.paper}
                    onMouseEnter={() => {
                      handleHover(project.name);
                    }}
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
                  onMouseLeave={() => {
                    handleHover(project.name);
                  }}
                >
                  <h3>{project.name.toUpperCase()}</h3>
                  <div style={{ display: 'flex', padding: 0 }}>
                    <p>
                      DESCRIPTION:
                      <p
                        style={{
                          fontSize: 16,
                          fontFamily: 'Roboto, sans-serif',
                        }}
                      >
                        {project.description}
                      </p>
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'block',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                      }}
                    >
                      <p>
                        ADDITIONAL:
                        {project.links.map((link, index) => (
                          <a target="_blank" href={link.link}>
                            <span
                              style={{
                                marginLeft: index === 0 ? 10 : 2,
                                fontSize: 16,
                                fontFamily: 'Roboto, sans-serif',
                                textDecoration: 'underline',
                              }}
                            >
                              {link.name}
                              {index !== project.links.length - 1 && ','}
                            </span>
                          </a>
                        ))}
                      </p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                      }}
                    >
                      <p>
                        SKILLS:
                        <span
                          style={{
                            marginLeft: 10,
                            fontSize: 16,
                            fontFamily: 'Roboto, sans-serif',
                          }}
                        >
                          {project.skills}
                        </span>
                      </p>
                    </div>
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
