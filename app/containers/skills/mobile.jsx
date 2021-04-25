import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import HeadingText from '@design/HeadingText';
import { skills } from './skills';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ProgressBar from '@design/ProgressBar';
import AWButton from '@design/Button';
import SwipeableViews from 'react-swipeable-views';
import Fade from 'react-reveal/Fade';

const MobileSkills = ({ isMobile }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = skills.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.section}>
      <Container className={classes.container}>
        <Fade top>
          <HeadingText>SKILLS</HeadingText>
        </Fade>
        <div className={classes.subLine} />
        <Fade top delay={100}>
          <p style={{ marginTop: 25, marginBottom: 25 }}>
            A rough estimate of my skill level with 0% being no knowledge at
            all, 100% being production ready, still looking to learn more!
          </p>
        </Fade>
        <Paper
          style={{ height: '70vh', overflowY: 'scroll' }}
          className={classes.paper}
        >
          <Fade>
            <SwipeableViews
              axis="x"
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {skills.map((skill, index) => (
                <div key={`flip-${skill.type}`}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Grid item xs={12}>
                      <h4
                        style={{ fontSize: 20 }}
                        className={classes.skillType}
                      >
                        {skill.type}
                      </h4>
                      {skill.skills.map((item) => (
                        <div
                          key={`paper-${item.name}`}
                          style={{ display: 'block', marginBottom: 15 }}
                        >
                          <div className={classes.skillLabel}>
                            <p>{item.name.toUpperCase()}</p>
                            <p className={classes.percent}>{item.percent}%</p>
                          </div>
                          <ProgressBar
                            key={item.name}
                            completed={item.percent}
                          />
                        </div>
                      ))}
                    </Grid>
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
          </Fade>
        </Paper>
        <MobileStepper
          style={{
            background: 'none',
            color: 'white',
          }}
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
export default MobileSkills;
