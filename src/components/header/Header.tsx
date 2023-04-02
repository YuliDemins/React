import { useLocation } from 'react-router-dom';
import { Nav } from '../nav/Nav';
import styles from './header.module.css';

type pathNameType = {
  [key: string]: string;
};

const pathName: pathNameType = { '/': 'Home', '/about': 'About', '/form': 'Form', '/*': '404' };

export const Header = () => {
  const { pathname } = useLocation();
  let title = '';
  pathname in pathName ? (title = pathName[pathname]) : (title = '404');

  return (
    <header className={styles.header}>
      <div className={styles.title}>{title}</div>;
      <Nav />
    </header>
  );
};
