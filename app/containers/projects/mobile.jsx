import React, { useState } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import HeadingText from '@design/HeadingText';
import { projects, flipState } from './projects';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ReactCardFlip from 'react-card-flip';
import SwipeableViews from 'react-swipeable-views';
import AWButton from '@design/Button';
import Fade from 'react-reveal/Fade';

const MobileProjects = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isFlipped, setIsFlipped] = useState(flipState);
  const maxSteps = projects.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  function handleHover(name) {
    setIsFlipped({ ...isFlipped, [name]: !isFlipped[name] });
  }
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div
      style={{ height: '100vh', padding: '5vh 2vw' }}
      className={classes.section}
    >
      <Container className={classes.container}>
        <Fade top>
          <HeadingText color="#0e1215">RECENT WORKS</HeadingText>
        </Fade>
        <div className={classes.subLine} />

        <Grid className={classes.skillsContainer} container spacing={3}>
          <Grid
            item
            xs={12}
            onClick={() => {
              handleHover(projects[activeStep].name);
            }}
            key={projects[activeStep].name}
          >
            <SwipeableViews
              axis="x"
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {projects.map((project, index) => (
                <div key={`flip-${project.name}`}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <ReactCardFlip
                      isFlipped={isFlipped[project.name]}
                      flipDirection="horizontal"
                    >
                      <Paper
                        style={{
                          height: '65vh',
                          background: project.color,
                        }}
                        className={classes.paper}
                      >
                        <p style={{ marginTop: 25, marginBottom: 25 }}>
                          Tap to learn more
                        </p>
                        <img
                          style={{
                            width: project.width,
                            marginTop: 300,
                          }}
                          alt={project.name}
                          src={project.img}
                        />
                      </Paper>
                      <Paper
                        style={{
                          background: project.flippedColor,
                          height: '65vh',
                        }}
                        className={classes.flipPaper}
                      >
                        <h3>{project.name.toUpperCase()}</h3>
                        <div style={{ display: 'block', padding: 0 }}>
                          <p>DESCRIPTION:</p>
                          <p
                            style={{
                              fontSize: 16,
                              fontFamily: 'Roboto, sans-serif',
                            }}
                          >
                            {project.description}
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
                            <p>ADDITIONAL:</p>
                            {project.links.map((link, index) => (
                              <a
                                key={link.link}
                                target="_blank"
                                href={link.link}
                              >
                                <p
                                  style={{
                                    marginLeft: index === 0 ? 10 : 2,
                                    fontSize: 16,
                                    fontFamily: 'Roboto, sans-serif',
                                    textDecoration: 'underline',
                                  }}
                                >
                                  {link.name}
                                  {index !== project.links.length - 1 && ','}
                                </p>
                              </a>
                            ))}
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
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
          </Grid>
        </Grid>

        <MobileStepper
          style={{ background: 'none', color: '#0e1215' }}
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <AWButton
              size="small"
              borderRadius={2}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </AWButton>
          }
          backButton={
            <AWButton
              size="small"
              borderRadius={2}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </AWButton>
          }
        />
      </Container>
    </div>
  );
};
export default MobileProjects;
