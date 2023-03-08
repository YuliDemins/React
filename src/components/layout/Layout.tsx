import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="container">
          <Outlet />
        </main>
        <footer>2023</footer>
      </>
    );
  }
}

export { Layout };
