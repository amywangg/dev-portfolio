import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import AWButton from '@components/Button';
import HeadingText from '@design/HeadingText';
import ProgressBar from '@design/ProgressBar';
import TextField from '@material-ui/core/TextField';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';

const ContactForm = ({ isMobile, closeDialog }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleTextChange = (event) => {
    const isInvalidName = state.name == '';
    const isInvalidEmail = !/\S+@\S+\.\S+/.test(state.email);
    setState({
      ...state,
      nameError: isInvalidName,
      emailError: isInvalidEmail,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isInvalidEmail = !/\S+@\S+\.\S+/.test(state.email);
    setState({
      ...state,
      emailError: isInvalidEmail,
      submitForm: !isInvalidEmail,
    });
    if (!isInvalidEmail) {
      !isMobile && closeDialog();
      let content = {
        email: state.email,
        message: state.message,
        name: state.name,
        company: state.company,
      };
      emailjs
        .send(
          'service_98n0ouc',
          'template_ko25tam',
          content,
          'user_bxH6ibvjkfv0Krn5dJhrR',
        )
        .catch((err) =>
          console.error(
            'Uh Oh. Here some thoughts on the error that occured:',
            err,
          ),
        );
      setState({ name: '', email: '', company: '', message: '' });
    }
  };

  return (
    <div
      style={{
        minHeight: isMobile ? '80vh' : 650,
        overflowY: isMobile ? 'scroll' : 'hidden',
      }}
    >
      <Container className={classes.container}>
        <Grid className={classes.skillsContainer} container spacing={3}>
          <form>
            {!isMobile && (
              <div style={{ paddingTop: 20, textAlign: 'center' }}>
                <HeadingText color="black">CONTACT</HeadingText>
                <div className={classes.subLine} />
              </div>
            )}
            <div
              style={{
                background: isMobile ? 'none' : 'white',
                padding: '0vw 3vw 3vw 3vw',
                margin: '3vh 0 0vh 0vw',
                borderRadius: 20,
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={isMobile ? 12 : 6}>
                  <Fade bottom cascade>
                    <Typography
                      variant="body1"
                      component="h2"
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        paddingBottom: 10,
                      }}
                      align="left"
                    >
                      Full Name
                    </Typography>
                    <TextField
                      id="name"
                      name="name"
                      value={state.name}
                      onChange={handleTextChange}
                      variant="outlined"
                      fullWidth
                      className={
                        isMobile ? classes.mobileFormItem : classes.formItem
                      }
                      required
                      error={state.nameError}
                      FormHelperTextProps={{
                        className: classes.helperText,
                      }}
                      helperText={
                        state.nameError ? 'Please include your name.' : ''
                      }
                    />
                  </Fade>
                </Grid>
                <Grid item xs={isMobile ? 12 : 6}>
                  <Fade bottom cascade delay={100}>
                    <Typography
                      variant="body1"
                      component="h2"
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        paddingBottom: 10,
                      }}
                      align="left"
                    >
                      Email
                    </Typography>
                    <TextField
                      id="email"
                      name="email"
                      value={state.email}
                      onChange={handleTextChange}
                      variant="outlined"
                      fullWidth
                      className={
                        isMobile ? classes.mobileFormItem : classes.formItem
                      }
                      required
                      error={state.emailError}
                      FormHelperTextProps={{
                        className: classes.helperText,
                      }}
                      helperText={
                        state.emailError ? 'Please include a valid email.' : ''
                      }
                    />
                  </Fade>
                </Grid>

                <Grid item xs={12}>
                  <Fade bottom cascade delay={300}>
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        paddingBottom: 15,
                      }}
                      align="left"
                    >
                      Company
                    </Typography>
                    <TextField
                      id="company"
                      name="company"
                      value={state.company}
                      onChange={handleTextChange}
                      variant="outlined"
                      fullWidth
                      className={
                        isMobile ? classes.mobileFormItem : classes.formItem
                      }
                    />
                  </Fade>
                </Grid>

                <Grid item xs={12}>
                  <Fade bottom cascade delay={400}>
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        paddingBottom: 15,
                      }}
                      align="left"
                    >
                      Additional Comments/Feedback on the site
                    </Typography>
                    <TextField
                      multiline
                      rows={5}
                      variant="outlined"
                      onChange={handleTextChange}
                      id="message"
                      value={state.message}
                      name="message"
                      fullWidth
                      className={
                        isMobile ? classes.mobileFormItem : classes.formItem
                      }
                      style={{
                        borderRadius: 10,
                        marginBottom: isMobile ? 70 : 50,
                      }}
                    />
                  </Fade>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Fade bottom delay={500}>
                      <AWButton
                        size="large"
                        color={isMobile ? 'white' : '#ef1e33'}
                        textColor={isMobile ? '#ef1e33' : 'white'}
                        onClick={handleSubmit}
                      >
                        Send Me a Message
                      </AWButton>
                    </Fade>
                  </div>
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </div>
          </form>
        </Grid>
      </Container>
    </div>
  );
};
export default ContactForm;
