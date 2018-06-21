import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Route from 'react-router';

import '../styles/Color.css';

const Color = (props) => {
  const { color } = props;
  return (
    <div className="Color" style={{ backgroundColor: color.hex }}>
      {/* <Route path="/" component={Color} /> */}
      <p>this is {color.name}.</p>
      <p>Isnt it beautiful?</p>
      <p><Link to="/">Go back</Link></p>
    </div>
  );
};

Color.propTypes = {
  color: PropTypes.shape({
    hex: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Color;
