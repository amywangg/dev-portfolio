import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import intropic from '@public/images/intro-pic.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 700,
    height: 'inherit',
    'pointer-events': 'none',
  },
  myAppCardContent: {
    flexGrow: 1,
    background: '#222c34',
    color: 'white',
    height: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    background: '#222c34',
    color: 'white',
  },
  media: {
    flexGrow: 1,
    height: '65%',
    paddingTop: '50%',
    paddingBottom: '15%',
  },
}));

const ProfileCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card style={{ height: '100%' }}>
        <Paper square elevation={0} className={classes.header}>
          <Typography style={{ fontFamily: 'FjallaOne' }}>
            Outside of work I am...
          </Typography>
        </Paper>
        <CardActionArea className={classes.myAppCardContent}>
          <CardMedia className={classes.media} image={intropic} />
          <CardContent className={classes.myAppCardContent}>
            <Typography
              style={{ fontFamily: 'Fjallaone', color: 'white' }}
              variant="body1"
              color="textSecondary"
              component="p"
            >
              I generally like to spend money on experiences and new memories
              like concerts, festivals, and travel
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProfileCard;
