import React from 'react';
import T from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ currentPublicationNum, publication }) => (
  <article className={styles.publication}>
    <h2>
      {currentPublicationNum}. {publication.title}
    </h2>
    <p>{publication.text}</p>
  </article>
);

Publication.propTypes = {
  currentPublicationNum: T.number.isRequired,
  publication: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired,
    text: T.string.isRequired,
  }).isRequired,
};
export default Publication;
