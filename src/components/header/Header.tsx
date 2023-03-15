import React, { Component } from 'react';
import { Nav } from '../nav/nav';
import './header.css';
// import { Title } from './Title';

type HeaderProps = {
  headerTitle: JSX.Element;
};
class Header extends Component<HeaderProps> {
  render() {
    const { headerTitle } = this.props;
    return (
      <header className="header">
        {headerTitle}
        <Nav />
      </header>
    );
  }
}

export { Header };

// class HeaderTitle extends Component {
//   render (){

//   }
// }
