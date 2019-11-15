import React from 'react';
import T from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  showNext,
  showPrevious,
  isNextDisabled,
  isPrevDisabled,
}) => (
  <section className={styles.controls}>
    <button
      disabled={isPrevDisabled}
      type="button"
      className={styles.button}
      onClick={showPrevious}
    >
      Previous
    </button>
    <button
      type="button"
      disabled={isNextDisabled}
      className={styles.button}
      onClick={showNext}
    >
      Next
    </button>
  </section>
);

Controls.propTypes = {
  showNext: T.func.isRequired,
  showPrevious: T.func.isRequired,
  isNextDisabled: T.bool.isRequired,
  isPrevDisabled: T.bool.isRequired,
};

export default Controls;
