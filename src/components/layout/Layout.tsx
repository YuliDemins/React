import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';

import styles from './layout.module.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <footer>2023</footer>
    </>
  );
};
