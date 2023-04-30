import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css';

export const NotFound = () => {
  return (
    <>
      <h1 className="main-title">404</h1>
      <p className="error-text">
        This page doesn&lsquo;t exist. Go <Link to="/">Home</Link>
      </p>
    </>
  );
};
