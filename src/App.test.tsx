import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/home/Home';
import store from './store/store';

describe('App', () => {
  it('renders Home page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/cat/i)).toBeInTheDocument();
  });
});

it('renders About page', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
  const aboutLink = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutLink);
  expect(screen.getByText('About')).toBeInTheDocument();
});
