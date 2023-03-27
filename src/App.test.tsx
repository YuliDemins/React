import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Card } from './components/card/Card';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Search } from './components/search/Search';
import { NotFound } from './pages/notFound/NotFound';
import { Title } from './components/title/Title';
import { Form } from './pages/form/Form';
import { FormData } from './components/formData/FormData';
import { FormValue } from './components/formValue/FormValue';
import { Modal } from './components/modal/Modal';
import { Layout } from './components/layout/Layout';

describe('App', () => {
  it('renders title, author in cards', () => {
    const id = 0;
    const src = 'Test url';
    const title = 'Test Title';
    const author = 'Test Author';
    const likes = 0;
    const show = 0;
    render(
      <Card key={id} id={id} src={src} title={title} author={author} likes={likes} show={show} />
    );
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/author/i)).toBeInTheDocument();
  });
  it('Header test', () => {
    render(
      <MemoryRouter>
        <Header headerTitle={<Title title="" />} />
      </MemoryRouter>
    );
    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    userEvent.click(homeLink);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    userEvent.click(aboutLink);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
  it('renders Home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it('renders About route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
  it('renders Error route', () => {
    render(
      <MemoryRouter initialEntries={['/yyuv']}>
        <Routes>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  it('renders Search', () => {
    render(<Search />);
    const input = screen.getByRole('textbox');
    const button = screen.getByLabelText('search');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it('renders Form', () => {
    render(<Form />);
    expect(screen.getByText(/form/i)).toBeInTheDocument();
  });
  it('check FormData', () => {
    render(<FormData />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/country/i), { target: { value: 'Spain' } });
    fireEvent.change(screen.getByLabelText(/birthday/i), { target: { value: '12.03.2022' } });
    userEvent.click(screen.getByText('Submit'));
  });
  it('render FormValue', () => {
    const id = 12;
    const imageValue = 'test.png';
    const nameValue = 'Test';
    const countryValue = 'Spain';
    const birthdayValue = '12.03.2022';
    const genderValue = 'male';
    const agree = true;

    render(
      <FormValue
        key={1}
        values={{
          id,
          imageValue,
          nameValue,
          countryValue,
          birthdayValue,
          genderValue,
          agree,
        }}
      />
    );
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/country/i)).toBeInTheDocument();
    expect(screen.getByText(/birthday/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/agree/i)).toBeInTheDocument();
  });
  it('renders modal', () => {
    render(<Modal />);
    expect(screen.getByText(/данные отправлены/i)).toBeInTheDocument();
  });
  it('renders main', () => {
    render(
      <MemoryRouter>
        <Layout title="Home" content={'Home'} />
      </MemoryRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
