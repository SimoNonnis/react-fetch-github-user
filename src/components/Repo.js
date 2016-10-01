import React, { PropTypes } from 'react';

import styles from './repo.css';

const Repo = ({name, desc}) => {
    return (
      <div className={styles.repo} >
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
    )
};

Repo.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string
}

export default Repo;
