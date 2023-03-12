import React, { ChangeEvent, Component } from 'react';

import './search.css';

// type SearchProps = {};

type SearchState = {
  value: string;
};

class Search extends Component<Record<string, never>, SearchState> {
  constructor({}) {
    super({});
    const LsSearch = localStorage.getItem('search');
    this.state = {
      value: LsSearch ? JSON.parse(LsSearch) : '',
    };
  }

  componentWillUnmount() {
    localStorage.setItem('search', JSON.stringify(this.state.value));
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      this.setState({
        value: event.target.value,
      });
    }
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    this.setState({
      value: this.state.value,
    });
    localStorage.setItem('search', JSON.stringify(this.state.value));
  };

  render() {
    return (
      <div className="form">
        <label htmlFor="search">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder=""
            id="search"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </label>
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export { Search };
