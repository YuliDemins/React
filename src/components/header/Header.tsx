import { FC } from 'react';
import { Nav } from '../nav/Nav';
import styles from './header.module.css';

type HeaderProps = {
  headerTitle: JSX.Element;
};

export const Header: FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <header className={styles.header}>
      {headerTitle}
      <Nav />
    </header>
  );
};
