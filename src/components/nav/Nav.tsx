import { NavLink } from 'react-router-dom';

import styles from './nav.module.css';

type Links = {
  id: number;
  route: string;
  text: string;
};

const links: Links[] = [
  {
    id: 0,
    route: '/',
    text: 'Home',
  },
  {
    id: 1,
    route: '/about',
    text: 'About',
  },
  {
    id: 2,
    route: '/form',
    text: 'Form',
  },
  {
    id: 3,
    route: '/api',
    text: 'API',
  },
];

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? styles.active : styles.link);

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map(({ route, text, id }) => {
          return (
            <li key={id}>
              <NavLink to={route} className={setActive}>
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
