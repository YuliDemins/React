import React, { Component } from 'react';
import './header.css';

import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-list-link active-link' : 'nav-list-link';

type HeaderProp = {
  title: string;
};

class Header extends Component<HeaderProp> {
  constructor(props: HeaderProp) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="header-title">{this.props.title}</div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <NavLink className={setActive} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink className={setActive} to="about">
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export { Header };
