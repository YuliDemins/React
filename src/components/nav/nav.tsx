import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';

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

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-list-link active-link' : 'nav-list-link';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-list">
          {links.map(({ route, text, id }) => {
            return (
              <li key={id} className="nav-list-item">
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
