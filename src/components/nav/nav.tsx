import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './nav.module.css';

type Links = {
  id: number;
  route: '/' | '/about';
  text: 'Home' | 'About';
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
];

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? styles.active : styles.link);

class Nav extends Component {
  render() {
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
  }
}

export { Nav };
