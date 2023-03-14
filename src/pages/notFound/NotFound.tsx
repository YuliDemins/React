import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './notfound.css';

class NotFound extends Component {
  render() {
    return (
      <>
        <h1 className="main-title">404</h1>
        <p className="error-text">
          This page doesnt exist. Go <Link to="/">Home</Link>
        </p>
      </>
    );
  }
}

export { NotFound };
