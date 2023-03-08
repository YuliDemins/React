import React, { Component } from 'react';

import './search.css';

class Search extends Component {
  render() {
    return (
      <div className="form">
        <label htmlFor="">
          {/* <span className="image-search"></span> */}
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="" />
        </label>
        <button>Search</button>
      </div>
    );
  }
}

export { Search };
