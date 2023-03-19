import { Component } from 'react';
import { Nav } from '../nav/nav';
import styles from './header.module.css';

type HeaderProps = {
  headerTitle: JSX.Element;
};
class Header extends Component<HeaderProps> {
  render() {
    const { headerTitle } = this.props;
    return (
      <header className={styles.header}>
        {headerTitle}
        <Nav />
      </header>
    );
  }
}

export { Header };
