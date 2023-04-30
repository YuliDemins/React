import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';

interface ILink {
  id: number;
  route: string;
  text: string;
}

const links: ILink[] = [
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
];

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : 'link');

export const Nav = () => {
  return (
    <nav className={'nav'}>
      <ul className={'list'}>
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
