import React, { ChangeEvent, Component } from 'react';

import './search.css';

type SearchProps = Record<string, never>;

type SearchState = {
  value: string;
};

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
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
      <div className="form-search">
        <label htmlFor="search" className="label-search">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            className="input-search"
            id="search"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </label>
        <button className="button-search" onClick={this.handleClick}>
          Search
        </button>
      </div>
    );
  }
}

export { Search };
