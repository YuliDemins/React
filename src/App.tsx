import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notFound/NotFound';

import { Layout } from './components/layout/Layout';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route index element={<Layout title="Home" content={<Home />} />} />
        <Route key="1" path="/" element={<Layout title="Home" content={<Home />} />} />
        <Route key="2" path="about" element={<Layout title="About" content={<About />} />} />
        <Route key="3" path="*" element={<Layout title="404" content={<NotFound />} />} />
      </Routes>
    );
  }
}

export default App;
