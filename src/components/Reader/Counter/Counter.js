import React from 'react';
import T from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ currentPublication, numberOfPublications }) => (
  <p className={styles.counter}>
    {currentPublication}/ {numberOfPublications}
  </p>
);

Counter.propTypes = {
  currentPublication: T.number.isRequired,
  numberOfPublications: T.number.isRequired,
};

export default Counter;
