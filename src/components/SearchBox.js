import React, { Component, PropTypes }  from 'react';

import styles from './SearchBox.css';

class SearchBox extends Component {
  goToUser (e) {
    e.preventDefault();
    const userName = this.inputValue.value;
    this.context.router.transitionTo(`/user/${userName}`);
  }

  render () {
    return (
      <div className={styles.container}>
        <form onSubmit={this.goToUser.bind(this)}>
          <span className={styles.inputWrapper}>
            <input
              required
              type="text"
              className={styles.input}
              placeholder="Type a GitHub username"
              ref={input => this.inputValue = input}
            />
          </span>
          <button type="submit" className={styles.btn}>Submit</button>
        </form>
      </div>
    )
  }
}

SearchBox.contextTypes = {
  router: PropTypes.object
}

export default SearchBox;
