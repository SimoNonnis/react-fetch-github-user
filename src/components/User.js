import React, { Component, PropTypes } from 'react';

import Bio from './Bio';
import Repo from './Repo';

import styles from './user.css';

class User extends Component {
  constructor () {
    super();
    this.state = {
      user: {},
      repos: []
    }
  }

  componentWillMount () {
    const gitHubUser = (this.props.params.userName);

    this.getUser(gitHubUser);
    this.getRepos(gitHubUser);
  }

  getUser (user) {
    fetch(`https://api.github.com/users/${user}`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          user: data
        })
      })
  }

  getRepos (user) {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          repos: data
        })
      })
  }

  render () {
    const { avatar_url, name, bio, location } = this.state.user;

    return (
      <div className={styles.container}>
        <Bio
          avatar={avatar_url}
          name={name}
          bio={bio}
          location={location}
        />
        <div className={styles.reposContainer}>
          {this.state.repos.map((repo) => {
            return (
              <Repo
                key={repo.id}
                name={repo.name}
                desc={repo.description}
              />
            )
          })}
        </div>

      </div>
    )
  }
}

User.propTypes = {
  params: PropTypes.object,
  userName: PropTypes.string
}

export default User;
