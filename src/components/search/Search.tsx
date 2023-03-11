import React, { ChangeEvent, Component } from 'react';

import './search.css';

type SearchProps = {};
type SearchState = {
  value: string;
};

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      value: '',
    };
  }

  componentWillUnmount() {
    localStorage.setItem('search', JSON.stringify(this.state));
  }

  componentDidMount() {
    const objValue = localStorage.getItem('search');

    if (objValue) {
      this.setState(JSON.parse(objValue));
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      this.setState({
        value: event.target.value,
      });
    }
    // localStorage.setItem('search', JSON.stringify(this.state));
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    this.setState({
      value: this.state.value,
    });
    localStorage.setItem('search', JSON.stringify(this.state));
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
