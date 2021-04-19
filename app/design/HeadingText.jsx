import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  subName: {
    fontFamily: 'FjallaOne',
    fontSize: 30,
  },
}));

const HeadingText = ({ children, color = 'white' }) => {
  const classes = useStyles();

  return (
    <h1 style={{ color }} className={classes.subName}>
      {children}
    </h1>
  );
};

export default HeadingText;
