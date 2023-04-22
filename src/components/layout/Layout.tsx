import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';

import './layout.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={"layout-container"}>
        <Outlet />
      </main>
      <footer>2023</footer>
    </>
  );
};
