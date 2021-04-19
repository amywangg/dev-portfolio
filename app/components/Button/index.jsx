import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

const AWButton = ({
  variant = 'contained',
  size = 'medium',
  onClick = null,
  color = '#ef1e33',
  textColor = null,
  borderRadius = 0,
  capitalize = false,
  iconLeft = null,
  iconRight = null,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        key={children}
        variant={variant}
        startIcon={iconLeft}
        endIcon={iconRight}
        className={classes.button}
        size={size}
        onClick={onClick}
        style={{
          fontFamily: 'FjallaOne',
          padding: '10px 30px',
          backgroundColor: variant === 'contained' ? color : null,
          border: variant === 'outlined' ? `1px solid ${color}` : null,
          color: textColor || (variant === 'contained' ? 'white' : color),
          borderRadius,
          textTransform: capitalize ? 'uppercase' : 'none',
        }}
      >
        {children}
      </Button>
    </div>
  );
};
AWButton.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  iconLeft: PropTypes.any,
  iconRight: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  capitalize: PropTypes.bool,
  textColor: PropTypes.string,
};
export default AWButton;
