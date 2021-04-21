import React from 'react';
import PropTypes from 'prop-types';

export default function SvgBackground({ image, h, children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: false,
        height: h,
        width: '100%',
        marginTop: '-5px',
        marginBottom: '-5px',
      }}
    >
      {children}
    </div>
  );
}

SvgBackground.propTypes = {
  image: PropTypes.any,
  h: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
