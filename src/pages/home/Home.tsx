import React, { Component } from 'react';
import { Cards } from '../../components/Cards/Cards';
import { Search } from '../../components/search/Search';
import './home.css';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <>
        <h1 className="main-title">Home page</h1>
        <Search />

        <Cards />
      </>
    );
  }
}

export { Home };
