import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notFound/NotFound';

import { Layout } from './components/layout/Layout';
import { Form } from './pages/form/Form';

type RoutesType = {
  id: number;
  path: '/' | 'about' | 'form' | '*';
  title: 'Home' | 'About' | 'Form' | '404';
  content: JSX.Element;
};

const routes: RoutesType[] = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    content: <Home />,
  },
  {
    id: 2,
    path: 'about',
    title: 'About',
    content: <About />,
  },
  {
    id: 3,
    path: 'form',
    title: 'Form',
    content: <Form />,
  },
  {
    id: 4,
    path: '*',
    title: '404',
    content: <NotFound />,
  },
];
class App extends Component {
  render() {
    return (
      <Routes>
        <Route index element={<Layout title="Home" content={<Home />} />} />
        {routes.map(({ id, path, title, content }) => {
          return (
            <Route key={id} path={path} element={<Layout title={title} content={content} />} />
          );
        })}
      </Routes>
    );
  }
}

export default App;
