import React, { PropTypes } from 'react';

import styles from './bio.css';

const Bio = ({avatar, name, bio, location}) => {
    return (
      <div className={styles.container} >
        <div className={styles.imgWrapper}>
          <img src={avatar} alt={name} />
        </div>
        <h1>{name}</h1>
        <p>{bio}</p>
        <p>{location}</p>
      </div>
    )
};

Bio.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string
}

export default Bio;
