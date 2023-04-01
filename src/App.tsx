import { Routes, Route } from 'react-router-dom';
import './App.css';

import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notFound/NotFound';

import { Layout } from './components/layout/Layout';
import { Form } from './pages/form/Form';
import { Api } from './pages/api/Api';

export const App = () => {
  return (
    <Routes>
      <Route index element={<Layout title="Home" content={<Home />} />} />
      <Route path="/" element={<Layout title="Home" content={<Home />} />} />
      <Route path="about" element={<Layout title="About" content={<About />} />} />
      <Route path="form" element={<Layout title="Form" content={<Form />} />} />
      <Route path="api" element={<Layout title="API" content={<Api />} />} />
      <Route path="*" element={<Layout title="404" content={<NotFound />} />} />
    </Routes>
  );
};
