import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <>
      <header>
      <NavLink to="/">                Home
              </NavLink>
              <NavLink to="about">
                About as
              </NavLink>
      </header>
        <main>
          <Outlet />
        </main>
        <footer>2023</footer>
      </>
    );
  }
}

export { Layout };