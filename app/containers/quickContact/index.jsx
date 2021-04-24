import React, { useState } from 'react';
import { Container, Grid, Dialog } from '@material-ui/core';
import { useStyles } from './styles';
import AWButton from '@components/Button';
import HeadingText from '@design/HeadingText';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import ContactForm from '../contact';

const QuickContact = ({ isMobile }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{ height: isMobile ? '90vh' : '35vh' }}
      className={classes.section}
    >
      <Container className={classes.container}>
        {isMobile ? (
          <div>
            <HeadingText>CONTACT</HeadingText>
            <h4 style={{ marginTop: 25 }}>
              I'm Available for a Fall 2021 internship!
            </h4>
            <Grid className={classes.skillsContainer} container spacing={3}>
              <ContactForm isMobile={true} />
            </Grid>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              textAlign: 'left',
              justifyContent: 'space-between',
              padding: '5vh 10vw',
            }}
          >
            <div>
              <Fade right cacscade>
                <h1 style={{ fontWeight: 500 }}>I'm Available</h1>
              </Fade>
              <Fade right cacscade delay={500}>
                <h1 style={{ fontFamily: 'FjallaOne' }}>
                  for a Fall 2021 internship
                </h1>
              </Fade>
            </div>
            <div style={{ marginTop: '5vh' }}>
              <Fade right cacscade delay={1200}>
                <AWButton
                  size="large"
                  textColor="#ef1e33"
                  color="white"
                  onClick={handleClickOpen}
                >
                  <Zoom bottom cacscade delay={1200}>
                    Contact Me
                  </Zoom>
                </AWButton>
              </Fade>
            </div>
            <Dialog open={open} onClose={handleClose}>
              <ContactForm isMobile={false} closeDialog={handleClose} />
            </Dialog>
          </div>
        )}
      </Container>
    </div>
  );
};
export default QuickContact;
