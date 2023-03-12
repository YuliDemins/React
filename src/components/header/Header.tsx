import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'nav-list-link active-link' : 'nav-list-link');

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <NavLink className={setActive} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink className={setActive} to="about">
                About as
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export { Header };
