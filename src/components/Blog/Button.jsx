import React from 'react';
import PropTypes from 'prop-types';
import styles from './Blog.module.css';

const Button = ({ handleNavigation }) => (
  <>
    <div className={styles.btnContainer}>
      <button type="button" className={styles.btn} onClick={() => handleNavigation()}>Load more</button>
    </div>

  </>
);

Button.propTypes = {
  handleNavigation: PropTypes.func.isRequired,
};

export default Button;
