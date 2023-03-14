import React, { Component } from 'react';
import { Nav } from '../nav/nav';
import './header.css';

type HeaderProp = {
  title: string;
};
class Header extends Component<HeaderProp> {
  render() {
    const { title } = this.props;
    return (
      <header className="header">
        <div className="header-title">{title}</div>
        <Nav />
      </header>
    );
  }
}

export { Header };
