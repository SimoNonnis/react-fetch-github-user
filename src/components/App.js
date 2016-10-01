import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import SearchBox from './SearchBox';
import User from './User';
import NotFound from './NotFound';

import styles from './app.css';


const App = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <Match exactly pattern="/" component={SearchBox} />
      <Match pattern="/user/:userName" component={User} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>
);

export default App;
