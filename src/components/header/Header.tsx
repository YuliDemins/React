import { useLocation } from 'react-router-dom';
import { Nav } from '../nav/Nav';
import styles from './header.module.css';

type pathType = {
  [key: string]: string;
};

const pathName: pathType = {
  '/': 'Home',
  '/about': 'About',
  '/form': 'Form',
  '/*': '404',
};

export const Header = () => {
  const { pathname } = useLocation();
  let title = '';
  pathname in pathName ? (title = pathName[pathname]) : (title = '404');

  return (
    <header className={styles.header}>
      <div className={styles.title}>{title}</div>
      <Nav />
    </header>
  );
};
